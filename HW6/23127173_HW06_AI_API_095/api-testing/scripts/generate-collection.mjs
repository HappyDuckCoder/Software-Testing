import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { assertScript } from '../../test-cases/scripts/oracle-utils.mjs';

const studentId = '23127173';
const base = '{{baseUrl}}';
const root = path.dirname(fileURLToPath(import.meta.url));
const mapped = JSON.parse(await readFile(path.resolve(root, '../../test-cases/oracle-execution.json'), 'utf8'));

const jsonBody = (raw) => {
  if (raw === undefined) return undefined;
  return { mode: 'raw', raw: JSON.stringify(raw), options: { raw: { language: 'json' } } };
};

const urlFromPath = (pathPart) => {
  const suffix = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  const raw = `${base}${suffix}`;
  const [pathOnly, queryString] = suffix.split('?');
  const pathSegments = pathOnly.replace(/^\//, '').split('/').filter((segment) => segment.length > 0);
  const result = {
    raw,
    protocol: 'http',
    host: ['127', '0', '0', '1'],
    port: '3000',
    path: pathSegments,
  };
  if (queryString) {
    result.query = queryString.split('&').map((pair) => {
      const [key, ...rest] = pair.split('=');
      return { key, value: rest.join('=') };
    });
  }
  return result;
};

const assert = (name, code) => `pm.test(${JSON.stringify(name)}, function () { pm.response.to.have.status(${code}); });`;

const collectionMode = process.env.COLLECTION_MODE || 'oracle';

const tcAssertScript = (row) => {
  if (collectionMode === 'observation') {
    return `pm.test(${JSON.stringify(`${row.id} no 5xx`)}, function () { pm.expect(pm.response.code).to.be.below(500); });`;
  }
  return assertScript(row.id, row.statusCodes);
};

function authHeaders(auth, extra) {
  const h = [];
  if (extra !== 'no-content-type') h.push({ key: 'Content-Type', value: 'application/json' });
  if (auth === 'user') h.push({ key: 'Authorization', value: 'Bearer {{userToken}}' });
  if (auth === 'admin') h.push({ key: 'Authorization', value: 'Bearer {{adminToken}}' });
  if (auth === 'invalid') h.push({ key: 'Authorization', value: 'Bearer invalid.jwt.value' });
  if (auth === 'bearer-space') h.push({ key: 'Authorization', value: 'Bearer  {{userToken}}' });
  if (auth === 'lowercase') h.push({ key: 'authorization', value: 'Bearer {{userToken}}' });
  if (auth === 'no-bearer') h.push({ key: 'Authorization', value: '{{userToken}}' });
  if (auth === 'empty-bearer') h.push({ key: 'Authorization', value: 'Bearer ' });
  return h;
}

const login = (name, email, password, tokenVar) => ({
  name,
  request: {
    method: 'POST',
    header: [{ key: 'Content-Type', value: 'application/json' }],
    body: jsonBody({ email, password }),
    url: urlFromPath('/api/login'),
  },
  event: [{
    listen: 'test',
    script: {
      type: 'text/javascript',
      exec: [assert(name, 200), `pm.environment.set('${tokenVar}', pm.response.json().token);`],
    },
  }],
});

const checkout = (name, varName, amount, address, tokenVar = 'userToken') => ({
  name,
  request: {
    method: 'POST',
    header: [{ key: 'Content-Type', value: 'application/json' }, { key: 'Authorization', value: `Bearer {{${tokenVar}}}` }],
    body: jsonBody({ total_amount: amount, shipping_address: address }),
    url: urlFromPath('/api/checkout'),
  },
  event: [{
    listen: 'test',
    script: {
      type: 'text/javascript',
      exec: [assert(name, 200), `pm.environment.set('${varName}', pm.response.json().orderId);`],
    },
  }],
});

const adminStatus = (name, orderVar, status) => ({
  name,
  request: {
    method: 'PUT',
    header: authHeaders('admin'),
    body: jsonBody({ status }),
    url: urlFromPath(`/api/admin/orders/${orderVar}/status`),
  },
  event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assert(name, 200)] } }],
});

const userCancel = (name, orderVar) => ({
  name,
  request: {
    method: 'PUT',
    header: authHeaders('user'),
    url: urlFromPath(`/api/orders/${orderVar}/cancel`),
  },
  event: [{ listen: 'test', script: { type: 'text/javascript', exec: [assert(name, 200)] } }],
});

const pendingFixtures = [
  ['pendingOrderId', 120001],
  ['b007PendingId', 120007],
  ['b008PendingId', 120008],
  ['b018PendingId', 120018],
  ['b020PendingId', 120020],
  ['b021PendingId', 120021],
  ['b022PendingId', 120022],
  ['b024PendingId', 120024],
  ['b025PendingId', 120025],
  ['b026PendingId', 120026],
  ['b027PendingId', 120027],
  ['b028PendingId', 120028],
  ['b029PendingId', 120029],
  ['b030PendingId', 120030],
  ['b031PendingId', 120031],
  ['b032PendingId', 120032],
  ['b033PendingId', 120033],
  ['b036PendingId', 120036],
  ['b038PendingId', 120038],
  ['b039PendingId', 120039],
  ['b040PendingId', 120040],
  ['c001PendingId', 130001],
  ['c004PendingId', 130004],
  ['c033PendingId', 130033],
  ['c034PendingId', 130034],
  ['c035PendingId', 130035],
  ['c037PendingId', 130037],
  ['c040PendingId', 130040],
  ['authorizationOrderId', 130100],
  ['adminBodyTestId', 130101],
];

const setup = [
  login('SETUP-01 Login user', 'test@eshop.com', 'Test1234!', 'userToken'),
  login('SETUP-02 Login admin', 'admin@eshop.com', 'Admin123!', 'adminToken'),
  {
    name: 'SETUP-03 Register user2 (IDOR)',
    request: {
      method: 'POST',
      header: [{ key: 'Content-Type', value: 'application/json' }],
      body: jsonBody({ name: 'HW6 User2', email: 'user2.hw6@eshop.com', password: 'User2Pass123!' }),
      url: urlFromPath('/api/register'),
    },
    event: [{
      listen: 'test',
      script: {
        type: 'text/javascript',
        exec: ["pm.test('register user2', function () { pm.expect(pm.response.code).to.be.oneOf([200, 400]); });"],
      },
    }],
  },
  login('SETUP-04 Login user2', 'user2.hw6@eshop.com', 'User2Pass123!', 'user2Token'),
  checkout('SETUP-05 user2OrderId', 'user2OrderId', 120099, 'HW6 user2 order', 'user2Token'),
  login('SETUP-06 Re-login user', 'test@eshop.com', 'Test1234!', 'userToken'),
  ...pendingFixtures.map(([v, amt], i) => checkout(`SETUP-${String(7 + i).padStart(2, '0')} ${v}`, v, amt, `HW6 ${v}`)),
  checkout('SETUP-37 doubleCancelOrderId', 'doubleCancelOrderId', 120002, 'HW6 double cancel'),
  userCancel('SETUP-38 doubleCancelOrderId pre-cancel', '{{doubleCancelOrderId}}'),
  checkout('SETUP-39 confirmedCancelId', 'confirmedCancelId', 120003, 'HW6 confirmed cancel'),
  adminStatus('SETUP-40 confirmedCancelId→confirmed', '{{confirmedCancelId}}', 'confirmed'),
  checkout('SETUP-41 b019ConfirmedId', 'b019ConfirmedId', 120019, 'HW6 b019'),
  adminStatus('SETUP-42 b019ConfirmedId→confirmed', '{{b019ConfirmedId}}', 'confirmed'),
  checkout('SETUP-43 b034ConfirmedId', 'b034ConfirmedId', 120034, 'HW6 b034'),
  adminStatus('SETUP-44 b034ConfirmedId→confirmed', '{{b034ConfirmedId}}', 'confirmed'),
  checkout('SETUP-45 shippingOrderId', 'shippingOrderId', 120009, 'HW6 shipping'),
  adminStatus('SETUP-46 shippingOrderId→confirmed', '{{shippingOrderId}}', 'confirmed'),
  adminStatus('SETUP-47 shippingOrderId→shipping', '{{shippingOrderId}}', 'shipping'),
  checkout('SETUP-48 c002ConfirmedId', 'c002ConfirmedId', 130002, 'HW6 c002'),
  adminStatus('SETUP-49 c002ConfirmedId→confirmed', '{{c002ConfirmedId}}', 'confirmed'),
  checkout('SETUP-50 c003ShippingId', 'c003ShippingId', 130003, 'HW6 c003'),
  adminStatus('SETUP-51 c003ShippingId→confirmed', '{{c003ShippingId}}', 'confirmed'),
  adminStatus('SETUP-52 c003ShippingId→shipping', '{{c003ShippingId}}', 'shipping'),
  checkout('SETUP-53 c005ConfirmedId', 'c005ConfirmedId', 130005, 'HW6 c005'),
  adminStatus('SETUP-54 c005ConfirmedId→confirmed', '{{c005ConfirmedId}}', 'confirmed'),
  checkout('SETUP-55 c036ConfirmedId', 'c036ConfirmedId', 130036, 'HW6 c036'),
  adminStatus('SETUP-56 c036ConfirmedId→confirmed', '{{c036ConfirmedId}}', 'confirmed'),
  checkout('SETUP-57 deliveredOrderId', 'deliveredOrderId', 120011, 'HW6 delivered'),
  adminStatus('SETUP-58 deliveredOrderId→confirmed', '{{deliveredOrderId}}', 'confirmed'),
  adminStatus('SETUP-59 deliveredOrderId→shipping', '{{deliveredOrderId}}', 'shipping'),
  adminStatus('SETUP-60 deliveredOrderId→delivered', '{{deliveredOrderId}}', 'delivered'),
  checkout('SETUP-61 canceledOrderId', 'canceledOrderId', 120012, 'HW6 canceled'),
  userCancel('SETUP-62 canceledOrderId pre-cancel', '{{canceledOrderId}}'),
];

function tcRequest(row) {
  const pathPart = row.path.startsWith('/') ? row.path : `/${row.path}`;
  return {
    name: `${row.id} ${row.title}`,
    request: {
      method: row.method,
      header: authHeaders(row.auth, row.extraHeaders),
      body: jsonBody(row.body),
      url: urlFromPath(pathPart),
    },
    event: [{
      listen: 'test',
      script: {
        type: 'text/javascript',
        exec: [tcAssertScript(row), `console.log('${row.id}', pm.response.code);`],
      },
    }],
  };
}

const poolA = mapped.filter((r) => r.pool === 'A').map(tcRequest);
const poolB = mapped.filter((r) => r.pool === 'B').map(tcRequest);
const poolC = mapped.filter((r) => r.pool === 'C').map(tcRequest);

const collection = {
  info: { name: '23127173 HW06 EShop API Testing', schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json' },
  event: [{
    listen: 'prerequest',
    script: {
      type: 'text/javascript',
      exec: [
        `pm.request.headers.upsert({ key: 'X-Student-Id', value: '${studentId}' });`,
        "console.log('X-Student-Id applied:', pm.request.headers.get('X-Student-Id'));",
      ],
    },
  }],
  item: [
    { name: '00 Setup', item: setup },
    { name: 'A FR-04 Profile (40 TC)', item: poolA },
    { name: 'C FR-18 Admin order status (40 TC)', item: poolC },
    { name: 'B FR-10 Cancel order (40 TC)', item: poolB },
  ],
};

await mkdir(path.resolve(root, '../postman/collections'), { recursive: true });
await writeFile(
  path.resolve(root, '../postman/collections/23127173_HW06_EShop_API.postman_collection.json'),
  JSON.stringify(collection, null, 2),
);
console.log('Collection:', setup.length, 'setup +', poolA.length + poolB.length + poolC.length, 'TC', `mode=${collectionMode}`);
