import { APIRequestContext } from '@playwright/test';

const API_BASE = process.env.API_BASE_URL ?? 'http://localhost:3000';

export type OrderFixtures = {
  pendingId: number;
  confirmedId: number;
  shippingId: number;
  deliveredId: number;
  canceledId: number;
  zeroAmountId: number;
  adminOwnedOrderId: number;
};

export async function fetchMyOrders(request: APIRequestContext, token?: string) {
  return request.get(`${API_BASE}/api/orders/my-orders`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
}

export async function fetchOrderDetail(request: APIRequestContext, orderId: number, token?: string) {
  return request.get(`${API_BASE}/api/orders/${orderId}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
}

export async function fetchAdminOrders(request: APIRequestContext, token?: string) {
  return request.get(`${API_BASE}/api/admin/orders`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
}

export async function putAdminOrderStatus(
  request: APIRequestContext,
  adminToken: string,
  orderId: number,
  status: string,
) {
  return request.put(`${API_BASE}/api/admin/orders/${orderId}/status`, {
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-Type': 'application/json',
    },
    data: { status },
  });
}

export async function cancelUserOrder(request: APIRequestContext, token: string, orderId: number) {
  return request.put(`${API_BASE}/api/orders/${orderId}/cancel`, {
    headers: { Authorization: `Bearer ${token}` },
    data: {},
  });
}
