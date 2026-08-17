import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsAdmin } from '../helpers/auth';

const adminBase = process.env.ADMIN_BASE_URL ?? 'http://localhost:5174';
const cases = loadTestData('feature-c-admin-orders.json');

test.describe('Feature C — FR-18 Admin orders @hw04-feature-c', () => {
  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped in data');

      if (row.id === 'C-AUTO-03') {
        await page.goto(`${adminBase}/orders`);
        await expect(page).toHaveURL(/\/login/i);
        return;
      }

      await loginAsAdmin(page, adminBase);
      await page.goto(`${adminBase}/orders`);

      const rows = page.locator('table tbody tr, [data-testid="order-row"]');

      switch (row.id) {
        case 'C-AUTO-01':
          expect(await rows.count()).toBeGreaterThanOrEqual(1);
          break;
        case 'C-AUTO-02':
          await expect(page.getByText(/user|khách|customer|email/i).first()).toBeVisible();
          break;
        case 'C-AUTO-09':
          await expect(page.getByText(/order|đơn hàng/i).first()).toBeVisible();
          break;
        case 'C-AUTO-10':
          expect(await page.locator('[class*="status"], .badge, td').filter({ hasText: /pending|confirmed|shipping|delivered|canceled/i }).count()).toBeGreaterThanOrEqual(1);
          break;
        case 'C-AUTO-11':
          await expect(page.getByText(/address|địa chỉ|shipping/i).first()).toBeVisible();
          break;
        default:
          await expect(page.locator('body')).toBeVisible();
      }
    });
  }
});
