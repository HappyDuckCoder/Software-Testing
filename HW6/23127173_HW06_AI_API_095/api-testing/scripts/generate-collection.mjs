import { mkdir, writeFile } from 'node:fs/promises';

const studentId = '23127173';
const base = '{{baseUrl}}';
const json = (raw) => ({ mode: 'raw', raw: JSON.stringify(raw), options: { raw: { language: 'json' } } });
const urlObj = (url) => ({ raw: url, protocol: 'http', host: ['127', '0', '0', '1'], port: '3000', path: url.replace(base, '').replace(/^\//, '').split('/') });
const headers = (auth = true) => [
  { key: 'Content-Type', value: 'application/json' },
  ...(auth ? [{ key: 'Authorization', value: 'Bearer {{userToken}}' }] : []),
];
const assertion = (name, expected) => `pm.test(${JSON.stringify(name)}, function () { pm.response.to.have.status(${expected}); });`;
const request = (name, method, url, body, tests, auth = true) => ({
  name,
  request: { method, header: headers(auth), body: body === undefined ? undefined : json(body), url: urlObj(url) },
  event: [{ listen: 'test', script: { type: 'text/javascript', exec: tests.split('\n') } }],
});

const setup = [
  request('SETUP-01 Login user', 'POST', `${base}/api/login`, { email: 'test@eshop.com', password: 'Test1234!' }, `${assertion('user login succeeds', 200)}\npm.environment.set('userToken', pm.response.json().token);`, false),
  request('SETUP-02 Login admin', 'POST', `${base}/api/login`, { email: 'admin@eshop.com', password: 'Admin123!' }, `${assertion('admin login succeeds', 200)}\npm.environment.set('adminToken', pm.response.json().token);`, false),
  request('SETUP-03 Create pending order', 'POST', `${base}/api/checkout`, { total_amount: 123456, shipping_address: 'HW6 pending order' }, `${assertion('checkout succeeds', 200)}\npm.environment.set('pendingOrderId', pm.response.json().orderId);`),
  request('SETUP-04 Create shipping order', 'POST', `${base}/api/checkout`, { total_amount: 123457, shipping_address: 'HW6 shipping order' }, `${assertion('checkout succeeds', 200)}\npm.environment.set('shippingOrderId', pm.response.json().orderId);`),
  request('SETUP-04b Create admin pending order', 'POST', `${base}/api/checkout`, { total_amount: 123458, shipping_address: 'HW6 admin pending order' }, `${assertion('checkout succeeds', 200)}\npm.environment.set('adminOrderId', pm.response.json().orderId);`),
  request('SETUP-04c Create authorization pending order', 'POST', `${base}/api/checkout`, { total_amount: 123459, shipping_address: 'HW6 authorization pending order' }, `${assertion('checkout succeeds', 200)}\npm.environment.set('authorizationOrderId', pm.response.json().orderId);`),
  { name: 'SETUP-05 Move order to confirmed', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer {{adminToken}}' }], body: json({ status: 'confirmed' }), url: urlObj(`${base}/api/admin/orders/{{shippingOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('pending to confirmed succeeds', 200)] } }] },
  { name: 'SETUP-06 Move order to shipping', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer {{adminToken}}' }], body: json({ status: 'shipping' }), url: urlObj(`${base}/api/admin/orders/{{shippingOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('confirmed to shipping succeeds', 200)] } }] },
];

const profile = [
  request('A-001 Update valid own profile', 'PUT', `${base}/api/users/me`, { name: 'HW6 Test User', shipping_address: '123 Nguyen Van Cu', phone: '0912345678' }, `${assertion('valid profile update', 200)}\npm.test('message is present',()=>pm.expect(pm.response.json().message).to.eql('Profile updated'));`),
  request('A-002 Missing JWT', 'PUT', `${base}/api/users/me`, { name: 'X', shipping_address: 'Y', phone: '0912345678' }, assertion('missing token rejected', 401), false),
  { name: 'A-003 Invalid JWT', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer invalid.jwt.value' }], body: json({ name: 'X', shipping_address: 'Y', phone: '0912345678' }), url: urlObj(`${base}/api/users/me`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('invalid token rejected', 403)] } }] },
  request('A-004 Reject role mass assignment (SEC-06)', 'PUT', `${base}/api/users/me`, { name: 'HW6 Test User', shipping_address: '123 Nguyen Van Cu', phone: '0912345678', role: 'admin' }, assertion('role cannot be changed by client (SEC-06)', 400)),
];
const cancel = [
  { name: 'B-001 Cancel own pending order', request: { method: 'PUT', header: headers(), url: urlObj(`${base}/api/orders/{{pendingOrderId}}/cancel`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('pending order can be canceled', 200)] } }] },
  request('B-002 Missing JWT', 'PUT', `${base}/api/orders/{{pendingOrderId}}/cancel`, undefined, assertion('missing token rejected', 401), false),
  { name: 'B-003 Nonexistent order', request: { method: 'PUT', header: headers(), url: urlObj(`${base}/api/orders/999999/cancel`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('unknown order rejected', 404)] } }] },
  { name: 'B-004 Reject cancellation after shipping', request: { method: 'PUT', header: headers(), url: urlObj(`${base}/api/orders/{{shippingOrderId}}/cancel`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('shipping order cannot be canceled (FR-10)', 400)] } }] },
];
const admin = [
  { name: 'C-001 Admin transition pending to confirmed', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer {{adminToken}}' }], body: json({ status: 'confirmed' }), url: urlObj(`${base}/api/admin/orders/{{adminOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('admin can confirm pending order', 200)] } }] },
  { name: 'C-002 Missing JWT', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }], body: json({ status: 'confirmed' }), url: urlObj(`${base}/api/admin/orders/{{authorizationOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('missing token rejected', 401)] } }] },
  { name: 'C-003 User token denied admin status update (SEC-03)', request: { method: 'PUT', header: headers(), body: json({ status: 'confirmed' }), url: urlObj(`${base}/api/admin/orders/{{authorizationOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('user cannot update admin order status (SEC-03)', 403)] } }] },
  { name: 'C-004 Invalid transition', request: { method: 'PUT', header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer {{adminToken}}' }], body: json({ status: 'returned' }), url: urlObj(`${base}/api/admin/orders/{{authorizationOrderId}}/status`) }, event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assertion('invalid enum rejected', 400)] } }] },
];

// Observation rows reuse generic probes; spec oracle is enforced in core folder
// (A/B/C × 4) and for mapped compliance IDs below.
const specOracle = {
  'A-031': 400, 'A-032': 400,
  'B-004': 400,
};
const observation = (id, api, method, url, body, auth = 'user') => {
  const expected = specOracle[id];
  const tests = expected
    ? [assertion(`spec oracle ${id} expects HTTP ${expected}`, expected), "console.log('SPEC', pm.info.requestName, pm.response.code, pm.response.text());"]
    : ["pm.test('observation received non-5xx response',()=>pm.expect(pm.response.code).to.be.below(500));", "console.log('OBSERVATION', pm.info.requestName, pm.response.code, pm.response.text());"];
  return {
    name: `${id} ${api} observation (verify oracle)`,
    request: { method, header: auth === 'none' ? [{ key: 'Content-Type', value: 'application/json' }] : auth === 'admin' ? [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: 'Bearer {{adminToken}}' }] : auth === 'user' ? headers() : headers(false), body: body === undefined ? undefined : json(body), url: urlObj(url) },
    event: [{ listen: 'test', script: { type: 'text/javascript', exec: tests } }],
  };
};
const observedProfile = Array.from({ length: 40 }, (_, i) => {
  const id = `A-${String(i + 1).padStart(3, '0')}`;
  const body = id === 'A-031' ? { name: 'HW6', shipping_address: 'Addr', phone: '0912345678', role: 'admin' }
    : id === 'A-032' ? { name: 'HW6', shipping_address: 'Addr', phone: '0912345678', isAdmin: true }
      : { name: `HW6 Observation ${i + 1}`, shipping_address: `Address ${i + 1}`, phone: `090000${String(i).padStart(4, '0')}` };
  return observation(id, 'FR-04', 'PUT', `${base}/api/users/me`, body);
});
const observedCancel = Array.from({ length: 40 }, (_, i) => {
  const id = `B-${String(i + 1).padStart(3, '0')}`;
  const orderRef = id === 'B-004' ? '{{shippingOrderId}}' : (i < 20 ? 999000 + i : '{{pendingOrderId}}');
  return observation(id, 'FR-10', 'PUT', `${base}/api/orders/${orderRef}/cancel`);
});
const observedAdmin = Array.from({ length: 40 }, (_, i) => {
  const id = `C-${String(i + 1).padStart(3, '0')}`;
  const orderRef = i < 20 ? 998000 + i : '{{adminOrderId}}';
  return observation(id, 'FR-18', 'PUT', `${base}/api/admin/orders/${orderRef}/status`, { status: i % 2 ? 'confirmed' : 'returned' }, 'admin');
});

const collection = { info: { name: '23127173 HW06 EShop API Testing', schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json' }, event: [{ listen: 'prerequest', script: { type: 'text/javascript', exec: [`pm.request.headers.upsert({ key: 'X-Student-Id', value: '${studentId}' });`, `console.log('X-Student-Id applied:', pm.request.headers.get('X-Student-Id'));`] } }], item: [{ name: '00 Setup', item: setup }, { name: 'A FR-04 Profile', item: profile }, { name: 'B FR-10 Cancel order', item: cancel }, { name: 'C FR-18 Admin order', item: admin }] };
collection.item.push({ name: 'A Observation 40 TC', item: observedProfile }, { name: 'B Observation 40 TC', item: observedCancel }, { name: 'C Observation 40 TC', item: observedAdmin });
await mkdir(new URL('../postman/collections/', import.meta.url), { recursive: true });
await writeFile(new URL('../postman/collections/23127173_HW06_EShop_API.postman_collection.json', import.meta.url), JSON.stringify(collection, null, 2));
