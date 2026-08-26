/**
 * HW04 Feature C — FR-18 Admin orders (spec oracle, 24 TC).
 * Data-driven from `automation/data/feature-c-admin-orders.json` (HW2 C-DT / C-BVA).
 * Known bugs: BUG-C-01 (user token), BUG-C-02 (canceled→delivered), BUG-C-03 (XSS).
 */
import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsAdmin, openAdminOrders } from '../helpers/auth';
import {
  apiLogin,
  apiCheckout,
  apiUpdateOrderStatus,
  apiGetOrder,
  seedOrderFixtures,
  type OrderFixtures,
} from '../helpers/api';
import { adminOrderIdsDesc, adminOrderRows } from '../helpers/orderLocators';
import { fetchAdminOrders, putAdminOrderStatus } from '../helpers/orderSpec';

const adminBase = process.env.ADMIN_BASE_URL ?? 'http://localhost:5174';
const cases = loadTestData('feature-c-admin-orders.json');
/** Valid admin status chain per FR-18 spec (pending → … → delivered). */
const DELIVERY_CHAIN = ['confirmed', 'shipping', 'delivered'] as const;
const XSS_ADDRESS = '<b>X</b><img src=x onerror=alert(1)>';
let fx: OrderFixtures;

async function freshPendingId(): Promise<number> {
  const userToken = await apiLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  return apiCheckout(userToken, 111000, 'C transition pending');
}

async function orderAtStatus(
  from: string,
): Promise<number> {
  const adminToken = await apiLogin(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
  const userToken = await apiLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
  const id = await apiCheckout(userToken, 112000, `Status ${from}`);
  if (from === 'confirmed') await apiUpdateOrderStatus(adminToken, id, 'confirmed');
  if (from === 'shipping') {
    await apiUpdateOrderStatus(adminToken, id, 'confirmed');
    await apiUpdateOrderStatus(adminToken, id, 'shipping');
  }
  if (from === 'delivered') {
    await apiUpdateOrderStatus(adminToken, id, 'confirmed');
    await apiUpdateOrderStatus(adminToken, id, 'shipping');
    await apiUpdateOrderStatus(adminToken, id, 'delivered');
  }
  if (from === 'canceled') await apiUpdateOrderStatus(adminToken, id, 'canceled');
  return id;
}

test.describe('Feature C — FR-18 Admin orders (spec oracle) @hw04-feature-c', () => {
  test.beforeAll(async () => {
    fx = await seedOrderFixtures();
  });

  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page, request }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped per feature-c-admin-orders.json');

      const adminToken = await apiLogin(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
      const userToken = await apiLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

      switch (row.action) {
        case 'api_admin_orders_list': {
          const res = await fetchAdminOrders(request, adminToken);
          expect(res.ok()).toBeTruthy();
          const orders = await res.json();
          expect(orders.length).toBeGreaterThanOrEqual(1);
          expect(orders[0]).toHaveProperty('user_name');
          if (orders.length >= 2) expect(orders[0].id).toBeGreaterThan(orders[1].id);
          break;
        }
        case 'ui_admin_table': {
          await openAdminOrders(page);
          await expect(page.getByRole('heading', { name: 'Quản lý Đơn hàng' })).toBeVisible();
          await expect(page.getByRole('columnheader', { name: 'Người đặt' })).toBeVisible();
          await expect(page.getByRole('columnheader', { name: 'Địa chỉ' })).toBeVisible();
          await expect(adminOrderRows(page).first()).toBeVisible();
          break;
        }
        case 'ui_admin_min_rows': {
          await openAdminOrders(page);
          expect(await adminOrderRows(page).count()).toBeGreaterThanOrEqual(1);
          break;
        }
        case 'ui_admin_sort_desc': {
          await openAdminOrders(page);
          const ids = await adminOrderIdsDesc(page);
          expect(ids.length).toBeGreaterThanOrEqual(2);
          expect(ids[0]).toBeGreaterThan(ids[1]);
          break;
        }
        case 'api_admin_orders_no_auth': {
          const res = await fetchAdminOrders(request);
          expect(res.status()).toBe(row.expected?.httpStatus ?? 401);
          break;
        }
        case 'api_admin_orders_user_token': {
          const res = await fetchAdminOrders(request, userToken);
          expect(
            res.status(),
            'Spec: user token must not access GET /api/admin/orders (BUG-C-01)',
          ).toBe(row.expected?.httpStatus ?? 403);
          break;
        }
        case 'api_transition': {
          const from = row.input?.from ?? 'pending';
          const to = row.input?.to ?? 'confirmed';
          const orderId = from === 'pending' ? await freshPendingId() : await orderAtStatus(from);
          const res = await putAdminOrderStatus(request, adminToken, orderId, to);
          expect(res.ok(), `Transition ${from}→${to} should succeed per spec`).toBeTruthy();
          const order = await apiGetOrder(orderId);
          expect(order.status).toBe(to);
          break;
        }
        case 'api_invalid_transition': {
          const from = row.input?.from ?? 'pending';
          const to = row.input?.to ?? 'shipping';
          const orderId = await orderAtStatus(from);
          const res = await putAdminOrderStatus(request, adminToken, orderId, to);
          expect(
            res.status(),
            `Spec: invalid transition ${from}→${to} must return 400`,
          ).toBe(row.expected?.httpStatus ?? 400);
          break;
        }
        case 'api_admin_status_404': {
          const res = await putAdminOrderStatus(
            request,
            adminToken,
            Number(row.input?.orderId ?? 999999),
            row.input?.to ?? 'confirmed',
          );
          expect(res.status()).toBe(row.expected?.httpStatus ?? 404);
          break;
        }
        case 'api_invalid_status_value': {
          const orderId = await freshPendingId();
          const res = await putAdminOrderStatus(request, adminToken, orderId, row.input?.to ?? 'returned');
          expect(res.status()).toBe(row.expected?.httpStatus ?? 400);
          break;
        }
        case 'api_full_chain': {
          const orderId = await freshPendingId();
          for (const step of DELIVERY_CHAIN) {
            const res = await putAdminOrderStatus(request, adminToken, orderId, step);
            expect(res.ok()).toBeTruthy();
          }
          const order = await apiGetOrder(orderId);
          expect(order.status).toBe('delivered');
          break;
        }
        case 'ui_xss_address': {
          const xssId = await apiCheckout(userToken, 130000, XSS_ADDRESS);
          let dialogSeen = false;
          page.on('dialog', async (dialog) => {
            dialogSeen = true;
            await dialog.dismiss();
          });
          await openAdminOrders(page);
          const rowEl = adminOrderRows(page).filter({ hasText: `#${xssId}` });
          await expect(rowEl).toBeVisible({ timeout: 10_000 });
          await page.waitForTimeout(1500);
          expect(dialogSeen, 'Spec: XSS address must not execute script (BUG-C-03)').toBe(false);
          break;
        }
        case 'ui_empty_address_fallback': {
          const emptyId = await apiCheckout(userToken, 140000, '');
          await openAdminOrders(page);
          const rowEl = adminOrderRows(page).filter({ hasText: `#${emptyId}` });
          await expect(rowEl.getByText('Chưa cập nhật')).toBeVisible();
          break;
        }
        case 'ui_terminal_no_actions': {
          await openAdminOrders(page);
          const deliveredRow = adminOrderRows(page).filter({ hasText: `#${fx.deliveredId}` });
          await expect(deliveredRow.getByText('Đã giao')).toBeVisible();
          expect(await deliveredRow.getByRole('button', { name: 'Giao hàng' }).count()).toBe(0);
          expect(await deliveredRow.getByRole('button', { name: 'Hoàn thành' }).count()).toBe(0);
          const canceledRow = adminOrderRows(page).filter({ hasText: `#${fx.canceledId}` });
          expect(
            await canceledRow.getByRole('button', { name: 'Đánh dấu Đã giao' }).count(),
            'Spec: canceled must not show deliver action (BUG-C-02)',
          ).toBe(0);
          break;
        }
        case 'ui_admin_login_required': {
          await page.goto(adminBase);
          await expect(page.getByText('Admin Login')).toBeVisible();
          break;
        }
        case 'ui_user_denied_admin': {
          await page.goto(adminBase);
          await page.getByPlaceholder('Email').fill(process.env.USER_EMAIL!);
          await page.getByPlaceholder('Password').fill(process.env.USER_PASSWORD!);
          const dialogPromise = page.waitForEvent('dialog');
          await page.getByRole('button', { name: 'Login' }).click();
          const dialog = await dialogPromise;
          expect(dialog.message()).toMatch(/không phải là admin|admin/i);
          await dialog.accept();
          break;
        }
        default:
          throw new Error(`Unhandled action ${row.action} for ${row.id}`);
      }
    });
  }
});
