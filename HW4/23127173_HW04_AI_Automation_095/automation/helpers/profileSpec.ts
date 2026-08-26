import { APIRequestContext, Page, expect } from '@playwright/test';
import { acceptNextDialog } from './dialogs';
import { profileLocators } from './profileLocators';
import { apiLogin } from './api';

const API_BASE = process.env.API_BASE_URL ?? 'http://localhost:3000';

export type ProfileInput = {
  name?: string;
  phone?: string;
  shipping_address?: string;
  email?: string;
  role?: string;
};

export type ProfileExpected = {
  outcome?: 'success' | 'reject' | 'blocked' | 'role_unchanged';
  httpStatus?: number;
  verifyPersist?: boolean;
  emailUnchanged?: boolean;
  adminUnchanged?: boolean;
  role?: string;
};

export type ProfileTestRow = {
  id: string;
  hw2Ref: string;
  description: string;
  action: string;
  input?: ProfileInput;
  expected?: ProfileExpected;
  skip?: boolean;
  skipReason?: string;
};

export function resolveInput(input?: ProfileInput): ProfileInput {
  const long500 = 'A'.repeat(500);
  const resolved = { ...input };
  if (resolved.shipping_address === '__LONG_500__') {
    resolved.shipping_address = long500;
  }
  return resolved;
}

export async function getUserToken(): Promise<string> {
  return apiLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
}

export async function getAdminToken(): Promise<string> {
  return apiLogin(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
}

export async function fetchMe(request: APIRequestContext, token?: string) {
  return request.get(`${API_BASE}/api/users/me`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
}

export async function putMe(request: APIRequestContext, token: string, body: ProfileInput) {
  return request.put(`${API_BASE}/api/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    data: body,
  });
}

export async function ensureUserRole(
  request: APIRequestContext,
  token: string,
  role: 'user' | 'admin',
): Promise<void> {
  const me = await fetchMe(request, token);
  const user = await me.json();
  if (user.role !== role) {
    await putMe(request, token, {
      name: user.name,
      phone: user.phone ?? '0912345678',
      shipping_address: user.shipping_address ?? '',
      role,
    });
  }
}

export async function fillProfileForm(page: Page, input: ProfileInput): Promise<void> {
  const profile = profileLocators(page);
  if (input.name !== undefined) await profile.nameInput.fill(input.name);
  if (input.phone !== undefined) await profile.phoneInput.fill(input.phone);
  if (input.shipping_address !== undefined) await profile.addressInput.fill(input.shipping_address);
}

export async function submitProfileUi(page: Page): Promise<string | null> {
  const profile = profileLocators(page);
  const dialogPromise = acceptNextDialog(page);
  await profile.saveButton.click();
  const waitMs = process.env.HEADED === '1' || process.env.HEADED === 'true' ? 5000 : 2000;
  try {
    return await Promise.race([
      dialogPromise,
      page.waitForTimeout(waitMs).then(() => null),
    ]);
  } catch {
    return null;
  }
}

export function assertUiOutcome(message: string | null, expected: ProfileExpected): void {
  const outcome = expected.outcome;
  if (outcome === 'blocked') {
    expect(message).toBeNull();
    return;
  }
  expect(message, 'Expected browser dialog from profile form').not.toBeNull();
  if (outcome === 'success') {
    expect(message!).toMatch(/thành công|Cập nhật thành công/i);
    expect(message!).not.toMatch(/không hợp lệ/i);
    return;
  }
  if (outcome === 'reject') {
    const isSuccess = /thành công|Cập nhật thành công/i.test(message!);
    expect(isSuccess, `Spec expects reject but got success alert: ${message}`).toBe(false);
  }
}

export async function verifyPersistedProfile(
  request: APIRequestContext,
  token: string,
  input: ProfileInput,
): Promise<void> {
  const res = await fetchMe(request, token);
  expect(res.ok()).toBeTruthy();
  const user = await res.json();
  if (input.name !== undefined) expect(user.name).toBe(input.name);
  if (input.phone !== undefined) expect(user.phone).toBe(input.phone);
  if (input.shipping_address !== undefined) {
    expect(user.shipping_address ?? '').toBe(input.shipping_address);
  }
}
