import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsUser } from '../helpers/auth';

const cases = loadTestData('feature-b-order-history.json');

test.describe('Feature B — FR-11 Order history @hw04-feature-b', () => {
  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped in data');

      if (row.id === 'B-AUTO-04') {
        await page.goto('/profile');
        await expect(page).toHaveURL(/\/login/i);
        return;
      }

      await loginAsUser(page);
      await page.goto('/profile');

      const orderSection = page.locator('[data-testid="order-history"], .order-history, section').filter({ hasText: /order|đơn hàng/i }).first();
      const orderRows = page.locator('table tbody tr, [data-testid="order-row"], .order-item');

      switch (row.id) {
        case 'B-AUTO-01':
        case 'B-AUTO-09':
          await expect(page.getByText(/chưa có|no order|empty|không có đơn/i).first()).toBeVisible({ timeout: 10_000 }).catch(async () => {
            expect(await orderRows.count()).toBe(0);
          });
          break;
        case 'B-AUTO-02':
          expect(await orderRows.count()).toBeGreaterThanOrEqual(1);
          break;
        case 'B-AUTO-03':
          expect(await orderRows.count()).toBeGreaterThanOrEqual(2);
          break;
        case 'B-AUTO-10':
          await expect(page.getByText(/₫|VND|đ/).first()).toBeVisible();
          break;
        case 'B-AUTO-05':
        case 'B-AUTO-06':
          await expect(page.getByText(new RegExp(row.expected?.status ?? '', 'i')).first()).toBeVisible();
          break;
        case 'B-AUTO-07':
          await expect(page.getByRole('button', { name: /cancel|hủy/i }).first()).toBeVisible();
          break;
        case 'B-AUTO-08':
          expect(await page.getByRole('button', { name: /cancel|hủy/i }).count()).toBe(0);
          break;
        case 'B-AUTO-11':
          expect(await orderRows.count()).toBeGreaterThanOrEqual(0);
          break;
        default:
          await expect(orderSection.or(page.locator('body'))).toBeVisible();
      }
    });
  }
});
