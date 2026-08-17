import { Page } from '@playwright/test';

export async function loginAsUser(page: Page) {
  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;
  if (!email || !password) {
    throw new Error('Missing USER_EMAIL or USER_PASSWORD in .env');
  }
  await page.goto('/login');
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password|mật khẩu/i).fill(password);
  await page.getByRole('button', { name: /login|đăng nhập/i }).click();
  await page.waitForURL(/\/(profile|products|home|$)/, { timeout: 15_000 });
}

export async function loginAsAdmin(page: Page, adminBaseUrl: string) {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error('Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env');
  }
  await page.goto(`${adminBaseUrl}/login`);
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password|mật khẩu/i).fill(password);
  await page.getByRole('button', { name: /login|đăng nhập/i }).click();
  await page.waitForLoadState('networkidle');
}
