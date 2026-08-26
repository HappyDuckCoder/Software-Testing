import { Page } from '@playwright/test';

export const profileLocators = (page: Page) => ({
  nameInput: page.locator('label:has-text("Họ Tên")').locator('..').locator('input'),
  phoneInput: page.locator('label:has-text("Số điện thoại")').locator('..').locator('input'),
  addressInput: page.locator('label:has-text("Địa chỉ giao hàng")').locator('..').locator('textarea'),
  emailInput: page.locator('label:has-text("Email")').locator('..').locator('input'),
  saveButton: page.getByRole('button', { name: 'Cập nhật' }),
});
