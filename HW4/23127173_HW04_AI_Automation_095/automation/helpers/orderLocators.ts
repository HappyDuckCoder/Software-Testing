import { Page } from '@playwright/test';

export function profileOrderRows(page: Page) {
  return page
    .locator('h2:has-text("Lịch sử đơn hàng")')
    .locator('xpath=ancestor::div[1]')
    .locator('table tbody tr');
}

export function adminOrderRows(page: Page) {
  return page
    .locator('h2:has-text("Quản lý Đơn hàng")')
    .locator('xpath=ancestor::div[1]')
    .locator('table tbody tr');
}

export async function adminOrderIdsDesc(page: Page): Promise<number[]> {
  const rows = adminOrderRows(page);
  const count = await rows.count();
  const ids: number[] = [];
  for (let i = 0; i < count; i++) {
    const text = await rows.nth(i).locator('td').first().innerText();
    ids.push(Number(text.replace('#', '').trim()));
  }
  return ids.filter((n) => !Number.isNaN(n));
}
