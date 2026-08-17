import { test, expect } from '@playwright/test';
import { loadTestData } from '../helpers/loadTestData';
import { loginAsUser, openProfile } from '../helpers/auth';
import { acceptNextDialog } from '../helpers/dialogs';
import {
  apiLogin,
  apiGetMyOrders,
  seedOrderFixtures,
  type OrderFixtures,
} from '../helpers/api';
import { profileOrderRows } from '../helpers/orderLocators';
import { fetchMyOrders, fetchOrderDetail } from '../helpers/orderSpec';

const cases = loadTestData('feature-b-order-history.json');
let fx: OrderFixtures;

function orderIdByStatus(status: string): number {
  const map: Record<string, number> = {
    pending: fx.pendingId,
    confirmed: fx.confirmedId,
    shipping: fx.shippingId,
    delivered: fx.deliveredId,
    canceled: fx.canceledId,
  };
  return map[status];
}

test.describe('Feature B — FR-11 Order history (spec oracle) @hw04-feature-b', () => {
  test.beforeAll(async () => {
    fx = await seedOrderFixtures();
  });

  for (const row of cases) {
    test(`${row.id} [${row.hw2Ref}] ${row.description}`, async ({ page, request }) => {
      test.skip(!!row.skip, row.skipReason ?? 'skipped in data');

      const userToken = await apiLogin(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      const userId = (await apiGetMyOrders(userToken))[0]?.user_id;

      switch (row.action) {
        case 'ui_empty_message': {
          const orders = await apiGetMyOrders(userToken);
          test.skip(orders.length > 0, 'Spec empty: user đã có đơn — cần DB/user sạch');
          await loginAsUser(page);
          await openProfile(page);
          await expect(page.getByText('Bạn chưa có đơn hàng nào.')).toBeVisible();
          break;
        }
        case 'ui_guest': {
          await page.goto('/profile');
          await expect(page.getByText('Vui lòng đăng nhập')).toBeVisible();
          break;
        }
        case 'ui_orders_visible': {
          await loginAsUser(page);
          await openProfile(page);
          await expect(profileOrderRows(page).first()).toBeVisible();
          break;
        }
        case 'ui_multi_orders':
        case 'api_sort_desc': {
          const apiOrders = await apiGetMyOrders(userToken);
          expect(apiOrders.length).toBeGreaterThanOrEqual(2);
          for (let i = 1; i < Math.min(apiOrders.length, 5); i++) {
            expect(apiOrders[i - 1].id).toBeGreaterThan(apiOrders[i].id);
          }
          if (row.action === 'ui_multi_orders') {
            await loginAsUser(page);
            await openProfile(page);
            expect(await profileOrderRows(page).count()).toBeGreaterThanOrEqual(2);
          }
          break;
        }
        case 'api_ownership_list': {
          const res = await fetchMyOrders(request, userToken);
          expect(res.ok()).toBeTruthy();
          const orders = await res.json();
          for (const o of orders) {
            if (userId !== undefined) expect(o.user_id).toBe(userId);
          }
          break;
        }
        case 'api_my_orders_no_auth': {
          const res = await fetchMyOrders(request);
          expect(res.status()).toBe(row.expected?.httpStatus ?? 401);
          break;
        }
        case 'api_my_orders_bad_token': {
          const res = await fetchMyOrders(request, 'invalid.token');
          expect(res.status()).toBe(row.expected?.httpStatus ?? 403);
          break;
        }
        case 'ui_status_label': {
          await loginAsUser(page);
          await openProfile(page);
          const label = row.input?.label ?? '';
          const rowEl = profileOrderRows(page).filter({ hasText: label }).first();
          await expect(rowEl).toBeVisible();
          if (row.input?.status === 'pending' || row.input?.status === 'confirmed') {
            await expect(rowEl.getByRole('button', { name: 'Hủy đơn' })).toBeVisible();
          }
          break;
        }
        case 'ui_shipping_no_cancel': {
          await loginAsUser(page);
          await openProfile(page);
          const shipRow = profileOrderRows(page).filter({ hasText: `#${fx.shippingId}` });
          await expect(shipRow.getByText('Đang giao')).toBeVisible();
          expect(
            await shipRow.getByRole('button', { name: 'Hủy đơn' }).count(),
            'Spec FR-10: shipping không được hủy',
          ).toBe(0);
          break;
        }
        case 'ui_status_no_cancel': {
          await loginAsUser(page);
          await openProfile(page);
          const id = orderIdByStatus(row.input?.status ?? 'delivered');
          const rowEl = profileOrderRows(page).filter({ hasText: `#${id}` });
          await expect(rowEl.getByText(row.input?.label ?? '')).toBeVisible();
          expect(await rowEl.getByRole('button', { name: 'Hủy đơn' }).count()).toBe(0);
          break;
        }
        case 'ui_currency_format': {
          await loginAsUser(page);
          await openProfile(page);
          await expect(page.getByText(/₫/).first()).toBeVisible();
          break;
        }
        case 'api_order_detail_404': {
          const res = await fetchOrderDetail(request, Number(row.input?.orderId ?? 999999), userToken);
          expect(res.status()).toBe(row.expected?.httpStatus ?? 404);
          break;
        }
        case 'api_order_detail_forbidden': {
          const foreignId = fx.adminOwnedOrderId;
          const res = await fetchOrderDetail(request, foreignId, userToken);
          expect(
            res.status(),
            'Spec: GET /api/orders/:id must deny cross-user access (BUG-B-01)',
          ).not.toBe(200);
          break;
        }
        case 'ui_cancel_pending': {
          await loginAsUser(page);
          await openProfile(page);
          const rowEl = profileOrderRows(page).filter({ hasText: `#${fx.pendingId}` });
          const dialogPromise = acceptNextDialog(page);
          await rowEl.getByRole('button', { name: 'Hủy đơn' }).click();
          const msg = await dialogPromise;
          expect(msg).toMatch(/Hủy đơn thành công|thành công/i);
          break;
        }
        case 'ui_single_order_boundary': {
          const orders = await apiGetMyOrders(userToken);
          test.skip(orders.length !== 1, 'BVA: cần đúng 1 đơn trên API — skip khi DB có nhiều đơn');
          await loginAsUser(page);
          await openProfile(page);
          await expect(profileOrderRows(page)).toHaveCount(1);
          break;
        }
        case 'ui_zero_amount': {
          await loginAsUser(page);
          await openProfile(page);
          await expect(profileOrderRows(page).filter({ hasText: `#${fx.zeroAmountId}` })).toBeVisible();
          await expect(page.getByText('0 ₫').first()).toBeVisible();
          break;
        }
        case 'ui_all_status_labels': {
          await loginAsUser(page);
          await openProfile(page);
          for (const label of ['Chờ xác nhận', 'Đã xác nhận', 'Đang giao', 'Đã giao', 'Đã hủy']) {
            await expect(page.getByText(label).first()).toBeVisible();
          }
          const shipRow = profileOrderRows(page).filter({ hasText: `#${fx.shippingId}` });
          expect(await shipRow.getByRole('button', { name: 'Hủy đơn' }).count()).toBe(0);
          break;
        }
        default:
          throw new Error(`Unhandled action ${row.action} for ${row.id}`);
      }
    });
  }
});
