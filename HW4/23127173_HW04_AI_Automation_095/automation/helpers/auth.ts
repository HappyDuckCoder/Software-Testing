import { Page } from '@playwright/test';

export async function loginAsUser(page: Page) {
  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;
  if (!email || !password) {
    throw new Error('Missing USER_EMAIL or USER_PASSWORD in .env');
  }

  await page.goto('/login');
  await page.locator('label:has-text("Username")').locator('..').locator('input').fill(email);
  await page.locator('label:has-text("Mật khẩu")').locator('..').locator('input').fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/');
}

export async function loginAsAdmin(page: Page) {
  const adminBase = process.env.ADMIN_BASE_URL ?? 'http://localhost:5174';
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error('Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env');
  }

  await page.goto(adminBase);
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('EShop Admin').waitFor({ state: 'visible', timeout: 15_000 });
}

export async function openProfile(page: Page) {
  await page.goto('/profile');
  await page.getByRole('heading', { name: 'Hồ sơ của bạn' }).waitFor({ state: 'visible', timeout: 10_000 });
}

export async function openAdminOrders(page: Page) {
  const adminBase = process.env.ADMIN_BASE_URL ?? 'http://localhost:5174';
  await page.goto(adminBase);
  if (await page.getByText('Admin Login').isVisible()) {
    await loginAsAdmin(page);
  }
  await page.getByText('Đơn hàng', { exact: true }).click();
  await page.getByRole('heading', { name: 'Quản lý Đơn hàng' }).waitFor({ state: 'visible' });
}
