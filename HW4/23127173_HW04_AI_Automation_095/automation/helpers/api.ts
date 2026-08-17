const API_BASE = process.env.API_BASE_URL ?? 'http://localhost:3000';

export async function apiLogin(email: string, password: string): Promise<string> {
  const res = await fetch(`${API_BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status}`);
  const data = (await res.json()) as { token: string };
  return data.token;
}

export async function apiCheckout(
  token: string,
  totalAmount = 150000,
  shippingAddress = '123 Nguyen Van Cu, Q5, HCM',
): Promise<number> {
  const res = await fetch(`${API_BASE}/api/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ total_amount: totalAmount, shipping_address: shippingAddress }),
  });
  if (!res.ok) throw new Error(`Checkout failed: ${res.status}`);
  const data = (await res.json()) as { orderId: number };
  return data.orderId;
}

export async function apiUpdateOrderStatus(
  adminToken: string,
  orderId: number,
  status: string,
): Promise<void> {
  const res = await fetch(`${API_BASE}/api/admin/orders/${orderId}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminToken}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Status update failed: ${res.status} ${body}`);
  }
}

export async function apiUpdateOrderStatusRaw(
  adminToken: string,
  orderId: number,
  status: string,
): Promise<Response> {
  return fetch(`${API_BASE}/api/admin/orders/${orderId}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${adminToken}`,
    },
    body: JSON.stringify({ status }),
  });
}

export async function apiGetOrderRaw(orderId: number, token?: string): Promise<Response> {
  return fetch(`${API_BASE}/api/orders/${orderId}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
}

export async function apiGetAdminOrdersRaw(token: string): Promise<Response> {
  return fetch(`${API_BASE}/api/admin/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function apiGetMyOrders(
  token: string,
): Promise<Array<{ id: number; status: string; total_amount?: number; user_id?: number }>> {
  const res = await fetch(`${API_BASE}/api/orders/my-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`my-orders failed: ${res.status}`);
  return res.json();
}

export async function apiGetOrder(orderId: number): Promise<{ id: number; status: string; user_id?: number }> {
  const res = await fetch(`${API_BASE}/api/orders/${orderId}`);
  if (!res.ok) throw new Error(`get order failed: ${res.status}`);
  return res.json();
}

export type OrderFixtures = {
  pendingId: number;
  confirmedId: number;
  shippingId: number;
  deliveredId: number;
  canceledId: number;
  zeroAmountId: number;
  adminOwnedOrderId: number;
};

export async function seedOrderFixtures(): Promise<OrderFixtures> {
  const userEmail = process.env.USER_EMAIL ?? 'test@eshop.com';
  const userPassword = process.env.USER_PASSWORD ?? 'Test1234!';
  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@eshop.com';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Admin123!';

  const userToken = await apiLogin(userEmail, userPassword);
  const adminToken = await apiLogin(adminEmail, adminPassword);

  const pendingId = await apiCheckout(userToken, 200000, 'HW04 pending fixture');
  const confirmedId = await apiCheckout(userToken, 210000, 'HW04 confirmed fixture');
  await apiUpdateOrderStatus(adminToken, confirmedId, 'confirmed');

  const shippingId = await apiCheckout(userToken, 220000, 'HW04 shipping fixture');
  await apiUpdateOrderStatus(adminToken, shippingId, 'confirmed');
  await apiUpdateOrderStatus(adminToken, shippingId, 'shipping');

  const deliveredId = await apiCheckout(userToken, 230000, 'HW04 delivered fixture');
  await apiUpdateOrderStatus(adminToken, deliveredId, 'confirmed');
  await apiUpdateOrderStatus(adminToken, deliveredId, 'shipping');
  await apiUpdateOrderStatus(adminToken, deliveredId, 'delivered');

  const canceledId = await apiCheckout(userToken, 240000, 'HW04 canceled fixture');
  await apiUpdateOrderStatus(adminToken, canceledId, 'canceled');

  const zeroAmountId = await apiCheckout(userToken, 0, 'HW04 zero amount fixture');

  const adminOwnedOrderId = await apiCheckout(adminToken, 150000, 'HW04 admin-owned order');

  return {
    pendingId,
    confirmedId,
    shippingId,
    deliveredId,
    canceledId,
    zeroAmountId,
    adminOwnedOrderId,
  };
}

/** @deprecated use seedOrderFixtures */
export async function seedUserOrders(): Promise<{ pendingId: number; deliveredId: number }> {
  const fx = await seedOrderFixtures();
  return { pendingId: fx.pendingId, deliveredId: fx.deliveredId };
}
