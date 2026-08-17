import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsUser } from '../helpers/auth';

const cases = loadTestData('feature-a-profile.json');

test.describe('Feature A — FR-04 Profile @hw04-feature-a', () => {
  test.beforeEach(async ({ page }) => {
    // B-AUTO-09 chạy không login — các case khác login trước
  });

  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped in data');

      if (row.id === 'A-AUTO-09') {
        await page.goto('/profile');
        await expect(page).toHaveURL(/\/login/i);
        return;
      }

      await loginAsUser(page);
      await page.goto('/profile');

      switch (row.id) {
        case 'A-AUTO-01':
          await expect(page).toHaveURL(/\/profile/);
          break;
        case 'A-AUTO-08': {
          const email = page.locator('input[type="email"], input[name="email"]').first();
          await expect(email).toBeVisible();
          await expect(email).toHaveAttribute('readonly', /.+/);
          break;
        }
        case 'A-AUTO-07': {
          const nameInput = page.locator('input[name="name"], #name').first();
          await nameInput.fill('');
          const saveBtn = page.getByRole('button', { name: /save|lưu|cập nhật/i });
          const invalid = await nameInput.evaluate((el: HTMLInputElement) => !el.checkValidity());
          expect(invalid).toBeTruthy();
          break;
        }
        default: {
          if (row.input?.name) {
            await page.locator('input[name="name"], #name').first().fill(row.input.name);
          }
          if (row.input?.phone) {
            await page.locator('input[name="phone"], #phone').first().fill(row.input.phone);
          }
          if (row.input?.shipping_address !== undefined) {
            const addr = page.locator('textarea[name="shipping_address"], input[name="shipping_address"]').first();
            if (await addr.count()) await addr.fill(row.input.shipping_address);
          }

          if (row.id === 'A-AUTO-05' || row.id === 'A-AUTO-06') {
            const phone = page.locator('input[name="phone"], #phone').first();
            const invalid = await phone.evaluate((el: HTMLInputElement) => !el.checkValidity());
            expect(invalid).toBeTruthy();
            break;
          }

          const saveBtn = page.getByRole('button', { name: /save|lưu|cập nhật/i });
          if (await saveBtn.count()) {
            await saveBtn.click();
          }

          if (row.id === 'A-AUTO-11') {
            const toast = page.getByText(/updated|thành công|cập nhật/i);
            await expect(toast.first()).toBeVisible({ timeout: 10_000 });
          } else if (row.expected?.saved === 'true') {
            await expect(page.getByText(/updated|thành công|cập nhật/i).first()).toBeVisible({ timeout: 10_000 });
          }
          break;
        }
      }
    });
  }
});
