/**
 * HW04 Feature A — FR-04 Profile (spec oracle, 30 TC).
 * Data-driven from `automation/data/feature-a-profile.json` (HW2 A-DT / A-BVA).
 */
import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsUser, openProfile } from '../helpers/auth';
import { profileLocators } from '../helpers/profileLocators';
import {
  assertUiOutcome,
  ensureUserRole,
  fetchMe,
  fillProfileForm,
  getAdminToken,
  getUserToken,
  putMe,
  resolveInput,
  submitProfileUi,
  verifyPersistedProfile,
} from '../helpers/profileSpec';

const cases = loadTestData('feature-a-profile.json');
const DEFAULT_USER_EMAIL = process.env.USER_EMAIL ?? 'test@eshop.com';

test.describe('Feature A — FR-04 Profile (spec oracle) @hw04-feature-a', () => {
  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page, request }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped in data');

      const input = resolveInput(row.input);
      const expected = row.expected ?? { outcome: 'success' as const };

      switch (row.action) {
        case 'ui_view_profile': {
          await loginAsUser(page);
          await openProfile(page);
          await expect(page).toHaveURL(/\/profile/);
          await expect(page.getByRole('heading', { name: 'Hồ sơ của bạn' })).toBeVisible();
          await expect(profileLocators(page).emailInput).toBeDisabled();
          break;
        }

        case 'ui_email_disabled': {
          await loginAsUser(page);
          await openProfile(page);
          const email = profileLocators(page).emailInput;
          await expect(email).toBeDisabled();
          await expect(email).toHaveValue(DEFAULT_USER_EMAIL);
          break;
        }

        case 'ui_empty_name': {
          await loginAsUser(page);
          await openProfile(page);
          const profile = profileLocators(page);
          await profile.nameInput.fill('');
          const valid = await profile.nameInput.evaluate((el: HTMLInputElement) => el.checkValidity());
          expect(valid).toBeFalsy();
          const message = await submitProfileUi(page);
          assertUiOutcome(message, { outcome: 'blocked' });
          break;
        }

        case 'ui_update_profile': {
          await loginAsUser(page);
          await openProfile(page);
          await fillProfileForm(page, input);
          const message = await submitProfileUi(page);
          assertUiOutcome(message, expected);
          if (expected.outcome === 'success' && expected.verifyPersist) {
            const token = await getUserToken();
            await verifyPersistedProfile(request, token, input);
          }
          break;
        }

        case 'api_get_me': {
          const token = await getUserToken();
          const res = await fetchMe(request, token);
          expect(res.ok()).toBeTruthy();
          const user = await res.json();
          expect(user.email).toBe(DEFAULT_USER_EMAIL);
          expect(user).toHaveProperty('id');
          break;
        }

        case 'api_get_me_no_auth': {
          const res = await fetchMe(request);
          expect(res.status()).toBe(expected.httpStatus ?? 401);
          break;
        }

        case 'api_get_me_bad_token': {
          const res = await fetchMe(request, 'invalid.token.value');
          expect(res.status()).toBe(expected.httpStatus ?? 403);
          break;
        }

        case 'api_put_profile': {
          const token = await getUserToken();
          await ensureUserRole(request, token, 'user');
          const res = await putMe(request, token, input);
          expect(res.ok(), `PUT /api/users/me should succeed per spec`).toBeTruthy();
          if (expected.verifyPersist) {
            await verifyPersistedProfile(request, token, input);
          }
          break;
        }

        case 'api_put_ignore_email': {
          const token = await getUserToken();
          const before = await (await fetchMe(request, token)).json();
          const res = await putMe(request, token, input);
          expect(res.ok()).toBeTruthy();
          const after = await (await fetchMe(request, token)).json();
          expect(after.email).toBe(before.email);
          expect(after.email).not.toBe(input.email);
          break;
        }

        case 'api_put_role_blocked': {
          const token = await getUserToken();
          await ensureUserRole(request, token, 'user');
          const res = await putMe(request, token, input);
          // Spec: role must not change — accept 200 with unchanged role OR 4xx
          const after = await (await fetchMe(request, token)).json();
          expect(
            after.role,
            'Spec FR-04: user must not escalate role via PUT /api/users/me',
          ).toBe(expected.role ?? 'user');
          if (res.ok()) {
            expect(after.role).not.toBe('admin');
          }
          break;
        }

        case 'api_user_isolation': {
          const adminToken = await getAdminToken();
          const userToken = await getUserToken();
          await ensureUserRole(request, userToken, 'user');
          const adminBefore = await (await fetchMe(request, adminToken)).json();
          const userRes = await putMe(request, userToken, input);
          expect(userRes.ok()).toBeTruthy();
          const adminAfter = await (await fetchMe(request, adminToken)).json();
          expect(adminAfter.email).toBe(adminBefore.email);
          expect(adminAfter.name).toBe(adminBefore.name);
          expect(adminAfter.role).toBe(adminBefore.role);
          break;
        }

        default:
          throw new Error(`Unhandled action ${row.action} for ${row.id}`);
      }
    });
  }
});
