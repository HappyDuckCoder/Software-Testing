/** Oracle và request template theo đặc tả — không suy từ code backend. */

export function parseStatusCodes(expected) {
  const head = (expected.split('—')[0] ?? expected).trim();
  if (/observation|SLA|hợp lý|ghi nhận quan sát/i.test(expected)) return [200];
  if (head.includes('/')) {
    return head.split('/').map((part) => Number(part.replace(/\D/g, ''))).filter(Boolean);
  }
  const m = head.match(/\b(\d{3})\b/);
  return m ? [Number(m[1])] : [200];
}

export function assertScript(id, codes) {
  const label = `${id} spec oracle`;
  if (codes.length === 1) {
    return `pm.test(${JSON.stringify(label)}, function () { pm.response.to.have.status(${codes[0]}); });`;
  }
  return `pm.test(${JSON.stringify(label)}, function () { pm.expect(pm.response.code).to.be.oneOf(${JSON.stringify(codes)}); });`;
}

const profileBody = {
  name: 'HW6 User',
  shipping_address: '123 Nguyen Van Cu, Q1, TP.HCM',
  phone: '0912345678',
};

export function mapProfile(c) {
  let pre = 'User test@eshop.com đã đăng nhập (JWT hợp lệ).';
  let expected = '200 — cập nhật thành công (FR-04, api_spec §2.2)';
  let auth = 'user';
  let body = { ...profileBody };
  let extraHeaders = null;

  switch (c.id) {
    case 'A-001':
      body = { name: 'Tran Hai Duc', shipping_address: profileBody.shipping_address, phone: profileBody.phone };
      break;
    case 'A-002':
      body = { ...profileBody, name: 'A' };
      break;
    case 'A-003':
      body = { ...profileBody, name: 'A'.repeat(100) };
      break;
    case 'A-004':
      body = { ...profileBody, name: 'Nguyễn Văn A' };
      break;
    case 'A-005':
      body = { ...profileBody, name: '  HW6 User  ' };
      break;
    case 'A-006':
      body = { shipping_address: profileBody.shipping_address, phone: profileBody.phone };
      break;
    case 'A-007':
      body = { name: null, shipping_address: profileBody.shipping_address, phone: profileBody.phone };
      break;
    case 'A-008':
      body = { name: 12345, shipping_address: profileBody.shipping_address, phone: profileBody.phone };
      break;
    case 'A-009':
      body = { ...profileBody, name: "' OR 1=1 --" };
      expected = '200/400 — dữ liệu an toàn, không lỗi SQL (SEC-05)';
      break;
    case 'A-010':
      body = { ...profileBody, name: '<script>alert(1)</script>' };
      expected = '200/400 — dữ liệu an toàn (SEC-05)';
      break;
    case 'A-011':
      body = { ...profileBody, shipping_address: '123 Nguyễn Văn Cừ, Phường 5, Quận 5, TP.HCM' };
      break;
    case 'A-012':
      body = { ...profileBody, shipping_address: '' };
      break;
    case 'A-013':
      body = { name: profileBody.name, phone: profileBody.phone };
      break;
    case 'A-014':
      body = { name: profileBody.name, shipping_address: null, phone: profileBody.phone };
      break;
    case 'A-015':
      body = { ...profileBody, shipping_address: 'X'.repeat(500) };
      break;
    case 'A-016':
      body = { ...profileBody, shipping_address: "'; DROP TABLE users; --" };
      expected = '200/400 — dữ liệu an toàn (SEC-05)';
      break;
    case 'A-017':
      body = { ...profileBody, shipping_address: '<img onerror=alert(1)>' };
      expected = '200/400 — dữ liệu an toàn (SEC-05)';
      break;
    case 'A-018':
      body = { ...profileBody, phone: '0912345678' };
      break;
    case 'A-019':
      body = { ...profileBody, phone: '09123456789' };
      break;
    case 'A-020':
      body = { ...profileBody, phone: '0123456789' };
      break;
    case 'A-021':
      body = { ...profileBody, phone: '123' };
      expected = '400 — SĐT không hợp lệ (FR-04: 10–11 chữ số, bắt đầu bằng 0)';
      break;
    case 'A-022':
      body = { ...profileBody, phone: '012345678901' };
      expected = '400 — SĐT không hợp lệ (FR-04: 10–11 chữ số, bắt đầu bằng 0)';
      break;
    case 'A-023':
      body = { ...profileBody, phone: '09abc45678' };
      expected = '400 — SĐT không hợp lệ (FR-04: 10–11 chữ số, bắt đầu bằng 0)';
      break;
    case 'A-024':
      body = { ...profileBody, phone: '09-123-4567' };
      break;
    case 'A-025':
      body = { ...profileBody, phone: '   ' };
      expected = '400 — SĐT không hợp lệ (FR-04: 10–11 chữ số, bắt đầu bằng 0)';
      break;
    case 'A-026':
      body = { name: profileBody.name, shipping_address: profileBody.shipping_address, phone: null };
      break;
    case 'A-027':
      auth = 'none';
      expected = '401 — thiếu token (SEC-02)';
      break;
    case 'A-028':
    case 'A-029':
      auth = 'invalid';
      expected = '403 — token không hợp lệ (SEC-02)';
      break;
    case 'A-030':
      pre = 'API scope theo token — chỉ sửa hồ sơ của chính mình (FR-04).';
      expected = '200 — cập nhật hồ sơ user trong token (FR-04)';
      break;
    case 'A-031':
      body = { ...profileBody, role: 'admin' };
      expected = '400 — không cho client đổi role (SEC-06, FR-04)';
      break;
    case 'A-032':
      body = { ...profileBody, isAdmin: true };
      expected = '400 — không cho client leo quyền (SEC-06, FR-04)';
      break;
    case 'A-033':
      body = { ...profileBody, hacker_field: 'x' };
      break;
    case 'A-034':
      extraHeaders = 'no-content-type';
      expected = '400/415 — thiếu hoặc sai Content-Type';
      break;
    case 'A-035':
      expected = '200 — body có message thành công theo đặc tả';
      break;
    case 'A-036':
      body = {};
      expected = '200 — các field §2.2 là tùy chọn (FR-04)';
      break;
    case 'A-037':
      pre = 'Newman chạy tuần tự; TC mô phỏng nhiều user bằng một request hợp lệ (giới hạn công cụ).';
      break;
    case 'A-038':
      pre = 'User đã đăng nhập; TC giả định đổi mật khẩu trước đó vẫn cập nhật profile được (FR-04).';
      break;
    case 'A-039':
      body = { ...profileBody, name: 'User 😀' };
      break;
    case 'A-040':
      body = { ...profileBody, shipping_address: 'Nhà 🏠 Q1' };
      break;
    default:
      break;
  }

  return {
    pre,
    request: `PUT /api/users/me; auth=${auth}`,
    expected,
    spec: 'FR-04, SEC-02, SEC-06; api_spec §2.2; README FR-04',
    auth,
    body,
    extraHeaders,
    path: '/api/users/me',
    method: 'PUT',
  };
}

/** Map B-001…B-040 — oracle từ FR-10, SEC-02, api_spec §4.6 */
const cancelCases = {
  'B-001': { orderVar: '{{pendingOrderId}}', expected: '200 — hủy pending thành công (FR-10)' },
  'B-002': { orderVar: '{{doubleCancelOrderId}}', pre: 'Đơn đã bị hủy một lần trong setup.', expected: '400 — không hủy lại đơn đã canceled (FR-10)' },
  'B-003': { orderVar: '{{confirmedCancelId}}', pre: 'Đơn confirmed thuộc user.', expected: '200 — hủy confirmed thành công (FR-10)' },
  'B-004': { orderVar: '{{shippingOrderId}}', pre: 'Đơn shipping (FR-10: user không được hủy).', expected: '400 — user không hủy khi shipping (FR-10)' },
  'B-005': { orderVar: '{{deliveredOrderId}}', pre: 'Đơn delivered (trạng thái kết thúc).', expected: '400 — không hủy trạng thái kết thúc (FR-10)' },
  'B-006': { orderVar: '{{canceledOrderId}}', pre: 'Đơn đã canceled.', expected: '400 — không hủy lại (FR-10)' },
  'B-007': { orderVar: '{{b007PendingId}}', expected: '200 — hủy pending ngay sau checkout (FR-10)' },
  'B-008': { orderVar: '{{b008PendingId}}', pre: 'ID đơn là số hợp lệ.', expected: '200 — hủy thành công (FR-10)' },
  'B-009': { path: '/api/orders/0/cancel', expected: '404 — ID không hợp lệ/không thuộc user' },
  'B-010': { path: '/api/orders/-1/cancel', expected: '404 — ID không hợp lệ' },
  'B-011': { path: '/api/orders/1.5/cancel', expected: '404 — ID không hợp lệ' },
  'B-012': { path: '/api/orders/abc/cancel', expected: '404 — ID không hợp lệ' },
  'B-013': { path: '/api/orders/1%27%20OR%20%271%27%3D%271/cancel', expected: '404 — ID không hợp lệ (SEC-05)' },
  'B-014': { path: '/api/orders/%3Cscript%3E/cancel', expected: '404 — ID không hợp lệ (SEC-05)' },
  'B-015': { path: '/api/orders/999999999/cancel', expected: '404 — ID không tồn tại' },
  'B-016': { path: '/api/orders/999999/cancel', expected: '404 — ID không tồn tại' },
  'B-017': { path: '/api/orders/cancel', expected: '404 — thiếu ID trên path' },
  'B-018': { path: '/api/orders/{{b018PendingId}}/cancel?debug=1', expected: '200 — query string thừa vẫn hủy được (FR-10)' },
  'B-019': { path: '/api/orders/{{b019ConfirmedId}}/cancel/', expected: '200 — hủy confirmed (FR-10)' },
  'B-020': { orderVar: '{{b020PendingId}}', auth: 'none', expected: '401 — thiếu JWT (SEC-02)' },
  'B-021': { orderVar: '{{b021PendingId}}', auth: 'invalid', expected: '401/403 — token không hợp lệ (SEC-02)' },
  'B-022': { orderVar: '{{b022PendingId}}', auth: 'invalid', expected: '401/403 — token không hợp lệ (SEC-02)' },
  'B-023': { orderVar: '{{user2OrderId}}', pre: 'Đơn thuộc user2; token test user (IDOR).', expected: '403/404 — không hủy đơn người khác (FR-11)' },
  'B-024': { orderVar: '{{b024PendingId}}', auth: 'admin', pre: 'Token admin trên endpoint user cancel.', expected: '403/404 — không hủy đơn user khác (FR-11)' },
  'B-025': { orderVar: '{{b025PendingId}}', auth: 'lowercase', expected: '200 — HTTP header name không phân biệt hoa thường (RFC 7230)' },
  'B-026': { orderVar: '{{b026PendingId}}', auth: 'no-bearer', expected: '401 — thiếu tiền tố Bearer (SEC-02)' },
  'B-027': { orderVar: '{{b027PendingId}}', auth: 'empty-bearer', expected: '401/403 — Bearer rỗng (SEC-02)' },
  'B-028': { path: '/api/orders/{{b028PendingId}}/cancel', method: 'GET', expected: '405 — sai phương thức HTTP' },
  'B-029': { orderVar: '{{b029PendingId}}', body: { note: 'extra' }, expected: '200 — body thừa không cản hủy (api_spec §4.6)' },
  'B-030': { orderVar: '{{b030PendingId}}', expected: '200 — hủy thành công + schema hợp lệ (FR-10)' },
  'B-031': { orderVar: '{{b031PendingId}}', expected: '200 — status = canceled (FR-10)' },
  'B-032': { orderVar: '{{b032PendingId}}', expected: '200 — hủy thành công (FR-10)' },
  'B-033': { orderVar: '{{b033PendingId}}', expected: '200 — hủy thành công (FR-10)' },
  'B-034': { orderVar: '{{b034ConfirmedId}}', pre: 'Admin đã confirmed.', expected: '200 — user hủy confirmed (FR-10)' },
  'B-035': { orderVar: '{{shippingOrderId}}', pre: 'Đơn shipping.', expected: '400 — user không hủy shipping (FR-10)' },
  'B-036': { orderVar: '{{b036PendingId}}', expected: '200 — retry hủy pending (FR-10)' },
  'B-037': { path: '/api/orders/%E2%82%AC123/cancel', expected: '404 — path/ID không hợp lệ' },
  'B-038': { orderVar: '{{b038PendingId}}', auth: 'bearer-space', expected: '401/403 — token không hợp lệ (SEC-02)' },
  'B-039': { orderVar: '{{b039PendingId}}', expected: '200 — hủy pending (FR-10)' },
  'B-040': { orderVar: '{{b040PendingId}}', body: { reason: 'test' }, expected: '200 — body thừa vẫn hủy được (api_spec §4.6)' },
};

export function mapCancel(c) {
  const cfg = cancelCases[c.id] ?? { orderVar: '{{pendingOrderId}}', expected: '200 — hủy thành công (FR-10, api_spec §4.6)' };
  const auth = cfg.auth ?? 'user';
  const method = cfg.method ?? 'PUT';
  const pathSuffix = cfg.pathSuffix === '' ? '' : '/cancel';
  let path = cfg.path;
  if (!path) {
    const ov = cfg.orderVar ?? '{{pendingOrderId}}';
    path = `/api/orders/${ov}${pathSuffix}`;
  }

  return {
    pre: cfg.pre ?? 'User có đơn ở trạng thái phù hợp FR-10.',
    request: `${method} ${path}; auth=${auth}`,
    expected: cfg.expected,
    spec: 'FR-10, SEC-02; api_spec §4.6; README FR-10',
    auth,
    body: cfg.body,
    path,
    method,
    orderVar: cfg.orderVar ?? null,
  };
}

/** Map C-001…C-040 — oracle từ FR-10, FR-12, FR-18, SEC-03, api_spec §6.2 */
const adminCases = {
  'C-001': { orderVar: '{{c001PendingId}}', body: { status: 'confirmed' }, expected: '200 — pending → confirmed (FR-10, FR-18)' },
  'C-002': { orderVar: '{{c002ConfirmedId}}', body: { status: 'shipping' }, pre: 'Đơn confirmed.', expected: '200 — confirmed → shipping (FR-10)' },
  'C-003': { orderVar: '{{c003ShippingId}}', body: { status: 'delivered' }, pre: 'Đơn shipping.', expected: '200 — shipping → delivered (FR-10)' },
  'C-004': { orderVar: '{{c004PendingId}}', body: { status: 'canceled' }, expected: '200 — pending → canceled (FR-10)' },
  'C-005': { orderVar: '{{c005ConfirmedId}}', body: { status: 'canceled' }, pre: 'Đơn confirmed.', expected: '200 — confirmed → canceled (FR-10)' },
  'C-006': { orderVar: '{{shippingOrderId}}', body: { status: 'canceled' }, expected: '400 — shipping → canceled không hợp lệ (FR-10)' },
  'C-007': { orderVar: '{{deliveredOrderId}}', body: { status: 'canceled' }, expected: '400 — delivered là trạng thái kết thúc (FR-10)' },
  'C-008': { orderVar: '{{canceledOrderId}}', body: { status: 'pending' }, expected: '400 — canceled → pending không hợp lệ (FR-10)' },
  'C-009': { orderVar: '{{deliveredOrderId}}', body: { status: 'confirmed' }, expected: '400 — delivered → confirmed không hợp lệ (FR-10)' },
  'C-010': { orderVar: '{{adminBodyTestId}}', body: { status: 'returned' }, expected: '400 — status không thuộc enum (api_spec §6.2)' },
  'C-011': { orderVar: '{{adminBodyTestId}}', body: {}, expected: '400 — thiếu status' },
  'C-012': { orderVar: '{{adminBodyTestId}}', body: { status: null }, expected: '400 — status null' },
  'C-013': { orderVar: '{{adminBodyTestId}}', body: { status: '' }, expected: '400 — status rỗng' },
  'C-014': { orderVar: '{{adminBodyTestId}}', body: { status: 1 }, expected: '400 — status không phải chuỗi enum' },
  'C-015': { orderVar: '{{adminBodyTestId}}', body: { status: 'Confirmed' }, expected: '400 — status sai enum (case-sensitive)' },
  'C-016': { orderVar: '{{adminBodyTestId}}', body: { status: ' confirmed ' }, expected: '400 — status có khoảng trắng' },
  'C-017': { orderVar: '{{adminBodyTestId}}', body: { status: "'; DROP TABLE orders;--" }, expected: '400 — status SQL injection không hợp lệ (SEC-05)' },
  'C-018': { orderVar: '{{adminBodyTestId}}', body: { status: '<script>x</script>' }, expected: '400 — status XSS không hợp lệ (SEC-05)' },
  'C-019': { orderVar: '{{adminBodyTestId}}', body: { status: 'confirmed', extra_field: 'ignored' }, expected: '200 — trường lạ bị bỏ qua, status hợp lệ (api_spec §6.2)' },
  'C-020': { orderVar: '{{c001PendingId}}', auth: 'none', body: { status: 'confirmed' }, expected: '401 — thiếu JWT (SEC-02)' },
  'C-021': { orderVar: '{{c001PendingId}}', auth: 'invalid', body: { status: 'confirmed' }, expected: '403 — token không hợp lệ (SEC-02)' },
  'C-022': { orderVar: '{{c001PendingId}}', auth: 'invalid', body: { status: 'confirmed' }, expected: '403 — token không hợp lệ (SEC-02)' },
  'C-023': { orderVar: '{{authorizationOrderId}}', auth: 'user', body: { status: 'confirmed' }, expected: '403 — user không phải admin (SEC-03, FR-12)' },
  'C-024': { orderVar: '{{authorizationOrderId}}', auth: 'user', body: { status: 'confirmed' }, expected: '403 — user không phải admin (SEC-03, FR-12)' },
  'C-025': { path: '/api/admin/orders/0/status', body: { status: 'confirmed' }, expected: '404 — ID không hợp lệ' },
  'C-026': { path: '/api/admin/orders/-1/status', body: { status: 'confirmed' }, expected: '404 — ID không hợp lệ' },
  'C-027': { path: '/api/admin/orders/1.5/status', body: { status: 'confirmed' }, expected: '404 — ID thập phân không hợp lệ' },
  'C-028': { path: '/api/admin/orders/abc/status', body: { status: 'confirmed' }, expected: '404 — ID không hợp lệ' },
  'C-029': { path: '/api/admin/orders/1%27%20OR%201=1/status', body: { status: 'confirmed' }, expected: '404 — ID không hợp lệ' },
  'C-030': { path: '/api/admin/orders/999999/status', body: { status: 'confirmed' }, expected: '404 — order không tồn tại' },
  'C-031': { path: '/api/admin/orders/status', body: { status: 'confirmed' }, expected: '404 — thiếu ID' },
  'C-032': { path: '/api/admin/orders/{{c001PendingId}}/status', method: 'GET', expected: '405 — sai phương thức HTTP' },
  'C-033': { orderVar: '{{c033PendingId}}', body: { status: 'confirmed' }, expected: '200 — pending → confirmed (FR-18)' },
  'C-034': { orderVar: '{{c034PendingId}}', body: { status: 'confirmed' }, expected: '200 — trạng thái lưu đúng (FR-18)' },
  'C-035': { orderVar: '{{c035PendingId}}', body: { status: 'confirmed' }, expected: '200 — chuyển trạng thái hợp lệ (FR-18)' },
  'C-036': { orderVar: '{{c036ConfirmedId}}', body: { status: 'confirmed' }, pre: 'Đã confirmed; gọi confirmed lần 2.', expected: '400 — chuyển tiếp trùng/không hợp lệ (FR-10)' },
  'C-037': { orderVar: '{{c037PendingId}}', auth: 'bearer-space', body: { status: 'confirmed' }, expected: '401/403 — token admin không hợp lệ (SEC-02)' },
  'C-038': { orderVar: '{{adminBodyTestId}}', body: ['confirmed'], expected: '400 — body phải là object {"status":...}' },
  'C-039': { orderVar: '{{adminBodyTestId}}', body: { status: 'x'.repeat(520) }, expected: '400 — status quá dài/không thuộc enum' },
  'C-040': { orderVar: '{{c040PendingId}}', body: { status: 'confirmed' }, pre: 'Đơn pending vừa checkout.', expected: '200 — pending → confirmed ngay sau checkout (FR-18)' },
};

export function mapAdmin(c) {
  const cfg = adminCases[c.id] ?? {
    orderVar: '{{c001PendingId}}',
    body: { status: 'confirmed' },
    expected: '200 — chuyển trạng thái hợp lệ (FR-10, FR-18, api_spec §6.2)',
  };
  const auth = cfg.auth ?? 'admin';
  const method = cfg.method ?? 'PUT';
  const body = cfg.body ?? { status: 'confirmed' };
  const path = cfg.path ?? `/api/admin/orders/${cfg.orderVar}/status`;

  return {
    pre: cfg.pre ?? 'Admin đăng nhập; đơn ở trạng thái nguồn phù hợp FR-10.',
    request: `${method} ${path}; auth=${auth}; body ${JSON.stringify(body)}`,
    expected: cfg.expected,
    spec: 'FR-10, FR-12, FR-18, SEC-03; api_spec §6.2',
    auth,
    body,
    path,
    method,
    orderVar: cfg.orderVar ?? null,
  };
}

export function mapCase(c) {
  const base = c.pool === 'A' ? mapProfile(c) : c.pool === 'B' ? mapCancel(c) : mapAdmin(c);
  const statusCodes = parseStatusCodes(base.expected);
  return { ...c, ...base, statusCodes };
}
