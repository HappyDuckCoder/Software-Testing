import { mkdir, writeFile } from 'node:fs/promises';

const out = new URL('../', import.meta.url);

const profileAi = [
  'Cập nhật profile hợp lệ đầy đủ',
  'Tên đúng độ dài tối thiểu',
  'Tên đúng độ dài tối đa',
  'Tên tiếng Việt có dấu',
  'Tên có khoảng trắng đầu/cuối',
  'Thiếu trường name',
  'Trường name = null',
  'Trường name là số',
  'Tên chứa payload SQL injection',
  'Tên chứa payload XSS',
  'Địa chỉ đúng định dạng Việt Nam',
  'Địa chỉ chuỗi rỗng',
  'Thiếu trường shipping_address',
  'Trường shipping_address = null',
  'Địa chỉ quá dài',
  'Địa chỉ chứa payload SQL injection',
  'Địa chỉ chứa payload XSS',
  'SĐT hợp lệ 10 chữ số',
  'SĐT hợp lệ 11 chữ số',
  'SĐT bắt đầu bằng số 0',
  'SĐT quá ngắn',
  'SĐT quá dài',
  'SĐT chứa chữ cái',
  'SĐT chứa ký tự đặc biệt',
  'SĐT chỉ có khoảng trắng',
  'Trường phone = null',
  'Thiếu JWT',
  'JWT sai định dạng',
  'JWT hết hạn',
  'Token user khác không sửa được hồ sơ người khác',
  'Gán trường role từ client (SEC-06)',
  'Gán trường isAdmin từ client',
  'Gửi thêm trường lạ không có trong đặc tả',
  'Thiếu header Content-Type',
  'Kiểm tra schema/message phản hồi thành công',
];

const profileStudent = [
  'Gửi body rỗng',
  'User A, B, C cập nhật hồ sơ đồng thời',
  'Đổi mật khẩu rồi cập nhật profile',
  'Tên có emoji',
  'Địa chỉ có emoji',
];

const cancelAi = [
  'Hủy đơn pending của chính mình',
  'Hủy cùng một đơn hai lần',
  'Hủy đơn confirmed của chính mình',
  'Hủy đơn đang shipping',
  'Hủy đơn delivered',
  'Hủy đơn đã canceled',
  'Hủy ngay sau khi checkout',
  'ID đơn là số hợp lệ',
  'ID đơn = 0',
  'ID đơn âm',
  'ID đơn dạng thập phân',
  'ID đơn là chữ cái',
  'ID đơn chứa SQL injection',
  'ID đơn chứa XSS',
  'ID đơn rất lớn',
  'ID đơn không tồn tại',
  'Thiếu ID trên đường dẫn',
  'URL có query string thừa',
  'URL có dấu / ở cuối',
  'Thiếu JWT',
  'JWT sai định dạng',
  'JWT hết hạn',
  'Hủy đơn của user khác (IDOR)',
  'Dùng token admin để hủy',
  'Header Authorization viết thường',
  'Thiếu tiền tố Bearer',
  'Bearer token rỗng',
  'Gọi bằng GET thay vì PUT',
  'Gửi body JSON không mong đợi',
  'Kiểm tra schema phản hồi thành công',
  'Trạng thái lưu thành canceled',
  'Lịch sử đơn phản ánh đã hủy',
  'Hủy đồng thời (race)',
  'Hủy sau khi admin confirmed',
  'Hủy sau khi admin chuyển shipping',
];

const cancelStudent = [
  'Thử lại sau khi mất kết nối',
  'Đường dẫn Unicode trong URL',
  'Token Bearer có khoảng trắng thừa',
  'Hủy đơn khi phản hồi chậm (timeout)',
  'Gửi body JSON khi hủy đơn',
];

const adminAi = [
  'Admin: pending → confirmed',
  'Admin: confirmed → shipping',
  'Admin: shipping → delivered',
  'Admin: pending → canceled',
  'Admin: confirmed → canceled',
  'Admin: shipping → canceled (bị từ chối)',
  'Admin: delivered → canceled (bị từ chối)',
  'Admin: canceled → pending (bị từ chối)',
  'Admin: delivered → confirmed (bị từ chối)',
  'Admin: status = returned (không hợp lệ)',
  'Thiếu trường status',
  'Trường status = null',
  'Trường status rỗng',
  'Trường status là số',
  'Trường status viết hoa lẫn lộn',
  'Trường status có khoảng trắng',
  'Status chứa SQL injection',
  'Status chứa XSS',
  'Gửi thêm trường lạ trong body',
  'Thiếu JWT',
  'JWT sai định dạng',
  'JWT hết hạn',
  'Token user thường bị từ chối (SEC-03)',
  'Token user khác bị từ chối',
  'ID đơn = 0',
  'ID đơn âm',
  'ID đơn dạng thập phân',
  'ID đơn là chữ cái',
  'ID đơn chứa SQL injection',
  'ID đơn không tồn tại',
  'Thiếu ID trên đường dẫn',
  'Gọi bằng GET thay vì PUT',
  'Kiểm tra schema/message phản hồi',
  'Trạng thái lưu đúng sau chuyển tiếp',
  'Cập nhật trạng thái đồng thời (race)',
];

const adminStudent = [
  'Chuyển pending → confirmed hai lần liên tiếp',
  'Token admin có khoảng trắng thừa',
  'Body là mảng JSON thay vì object',
  'Giá trị status quá dài',
  'Đổi trạng thái ngay sau khi tạo đơn bằng checkout',
];

const makeCases = (pool, endpoint, aiTitles, studentTitles) => [
  ...aiTitles.map((title, i) => ({
    id: `${pool}-${String(i + 1).padStart(3, '0')}`,
    pool,
    endpoint,
    title,
    source: 'AI sinh',
  })),
  ...studentTitles.map((title, i) => ({
    id: `${pool}-${String(i + 36).padStart(3, '0')}`,
    pool,
    endpoint,
    title,
    source: 'Sinh viên bổ sung',
    gapNote: gapNotes[pool]?.[i] ?? '',
  })),
];

const gapNotes = {
  A: [
    'AI ít nghĩ tới body hoàn toàn rỗng khi API vẫn yêu cầu JWT.',
    'AI không mô phỏng nhiều user cập nhật đồng thời.',
    'AI không nối luồng đổi mật khẩu rồi cập nhật profile ngay sau đó.',
    'AI chỉ test emoji ở nhóm student cũ, chưa tách riêng tên.',
    'AI chưa thử emoji trong địa chỉ giao hàng.',
  ],
  B: [
    'AI không mô phỏng retry sau mất kết nối.',
    'AI chưa thử ID đơn dạng Unicode trên path.',
    'AI chưa thử Bearer token có khoảng trắng.',
    'AI không kiểm tra hành vi khi phản hồi chậm.',
    'AI giả định endpoint hủy đơn không có body.',
  ],
  C: [
    'AI chưa thử chuyển tiếp trùng lặp sau khi đã confirmed.',
    'AI chưa thử token admin có khoảng trắng.',
    'AI chưa gửi body dạng mảng JSON.',
    'AI chưa thử chuỗi status vượt độ dài enum.',
    'AI chưa gắn chặt chuyển trạng thái ngay sau fixture checkout.',
  ],
};

const cases = [
  ...makeCases('A', 'PUT /api/users/me', profileAi, profileStudent),
  ...makeCases('B', 'PUT /api/orders/:id/cancel', cancelAi, cancelStudent),
  ...makeCases('C', 'PUT /api/admin/orders/:id/status', adminAi, adminStudent),
];

function mapProfile(c) {
  const t = c.title;
  const auth = /Thiếu JWT/.test(t) ? 'Không gửi Authorization'
    : /JWT sai|JWT hết hạn/.test(t) ? 'Authorization: Bearer <token không hợp lệ/hết hạn>'
      : 'Authorization: Bearer {{userToken}}';
  let expected = '200 — cập nhật thành công (FR-04, api_spec §2.2)';
  if (/Thiếu JWT/.test(t)) expected = '401 — thiếu token (SEC-02)';
  else if (/JWT sai|JWT hết hạn/.test(t)) expected = '403 — token không hợp lệ (SEC-02)';
  else if (/Token user khác/.test(t)) expected = '403 — không sửa được hồ sơ người khác (FR-04)';
  else if (/Gán trường role|isAdmin/.test(t)) expected = '400 — không cho client đổi role (SEC-06, FR-04)';
  else if (/SĐT quá ngắn|SĐT quá dài|SĐT chứa chữ|SĐT chỉ có khoảng/.test(t)) expected = '400 — SĐT không hợp lệ (FR-04: 10–11 chữ số, bắt đầu bằng 0)';
  else if (/SQL|XSS/.test(t)) expected = '200/400 — dữ liệu được lưu an toàn, không lỗi SQL (SEC-05)';
  else if (/Thiếu header Content-Type/.test(t)) expected = '400/415 — thiếu hoặc sai Content-Type';
  else if (/schema/.test(t)) expected = '200 — body có message thành công theo đặc tả';

  let pre = 'Đăng nhập user test@eshop.com, có JWT hợp lệ.';
  let request = `PUT /api/users/me; ${auth}; body theo mô tả case.`;

  if (c.id === 'A-036') {
    pre = 'User A đã đăng nhập.';
    request = 'PUT /api/users/me; Bearer {{userToken}}; body {}';
    expected = '200 — không đổi field nào hoặc 400 nếu server từ chối body rỗng (đặc tả §2.2 chỉ liệt kê field tùy chọn)';
  } else if (c.id === 'A-037') {
    pre = 'Ba tài khoản A, B, C đều có JWT riêng.';
    request = 'Gửi 3 PUT /api/users/me song song, mỗi token chỉ sửa hồ sơ của mình.';
    expected = '200 cho từng user — không ghi đè dữ liệu user khác (FR-04, SEC-02)';
  } else if (c.id === 'A-038') {
    pre = 'User A đổi mật khẩu qua flow reset/forgot, login lại.';
    request = 'PUT /api/users/me với token mới sau đổi mật khẩu.';
    expected = '200 — cập nhật profile bình thường với session mới (FR-04)';
  } else if (c.id === 'A-039') {
    pre = 'User A đã đăng nhập.';
    request = 'PUT /api/users/me; name chứa emoji 😀';
    expected = '200 — lưu Unicode/emoji trong tên (đặc tả không cấm)';
  } else if (c.id === 'A-040') {
    pre = 'User A đã đăng nhập.';
    request = 'PUT /api/users/me; shipping_address chứa emoji 🏠';
    expected = '200 — lưu Unicode/emoji trong địa chỉ';
  }

  return { pre, request, expected, spec: 'FR-04, SEC-02, SEC-06; api_spec §2.2; README FR-04' };
}

function mapCancel(c) {
  const t = c.title;
  const auth = /Thiếu JWT/.test(t) ? 'Không gửi Authorization'
    : /JWT sai|JWT hết hạn/.test(t) ? 'Authorization: Bearer <token không hợp lệ>'
      : /Token Bearer có khoảng trắng/.test(t) ? 'Authorization: Bearer␠␠{{userToken}}'
        : 'Authorization: Bearer {{userToken}}';

  let pre = 'User có đơn pending/confirmed thuộc chính mình.';
  let expected = '200 — hủy thành công, status = canceled (FR-10, api_spec §4.6)';

  if (/shipping/.test(t) && !/sau khi admin chuyển shipping/.test(t)) {
    pre = 'Đơn đã pending → confirmed → shipping.';
    expected = '400 — user không được hủy khi shipping (FR-10, README dòng 161)';
  } else if (/delivered|canceled hai lần|đã canceled/.test(t)) {
    pre = 'Đơn ở trạng thái final hoặc đã canceled.';
    expected = '400 — không hủy được trạng thái kết thúc (FR-10)';
  } else if (/Thiếu JWT/.test(t)) expected = '401 (SEC-02)';
  else if (/JWT sai|JWT hết hạn|Bearer token rỗng|khoảng trắng thừa/.test(t)) expected = '401/403 — token không hợp lệ (SEC-02)';
  else if (/user khác|IDOR/.test(t)) expected = '403/404 — không hủy đơn người khác (SEC-02, FR-11)';
  else if (/không tồn tại|ID đơn = 0|âm|thập phân|chữ cái|SQL|XSS|Unicode/.test(t)) expected = '404 — ID không hợp lệ hoặc không thuộc user';
  else if (/GET/.test(t)) expected = '405 — sai phương thức HTTP';

  let request = `PUT /api/orders/{orderId}/cancel; ${auth}.`;

  if (c.id === 'B-036') {
    pre = 'User có đơn pending; mô phỏng timeout/mất kết nối lần 1.';
    request = 'Gọi lại PUT cancel lần 2 với cùng orderId.';
    expected = '200 — hủy thành công ở lần gọi hợp lệ (FR-10)';
  } else if (c.id === 'B-037') {
    pre = 'User đã đăng nhập.';
    request = 'PUT /api/orders/%E2%82%AC123/cancel hoặc path Unicode tương đương.';
    expected = '404 — path/ID không parse được (SEC-05 không áp dụng nếu không chạm DB)';
  } else if (c.id === 'B-039') {
    pre = 'Đơn pending sẵn sàng hủy.';
    request = 'PUT cancel với timeout client ngắn (quan sát thời gian phản hồi).';
    expected = '200 trong thời gian hợp lý — đặc tả không nêu SLA; ghi nhận quan sát thực tế';
  } else if (c.id === 'B-040') {
    pre = 'Đơn pending của user.';
    request = 'PUT cancel kèm body JSON {"reason":"test"}';
    expected = '200 — hủy thành công, body thừa bị bỏ qua hoặc 400 nếu server từ chối';
  }

  return { pre, request, expected, spec: 'FR-10, SEC-02; api_spec §4.6; README FR-10' };
}

function mapAdmin(c) {
  const t = c.title;
  const auth = /Thiếu JWT/.test(t) ? 'Không gửi Authorization'
    : /JWT sai|JWT hết hạn/.test(t) ? 'Authorization: Bearer <token không hợp lệ>'
      : /Token user|user thường|user khác/.test(t) ? 'Authorization: Bearer {{userToken}}'
        : /khoảng trắng thừa/.test(t) ? 'Authorization: Bearer␠␠{{adminToken}}'
          : 'Authorization: Bearer {{adminToken}}';

  let pre = 'Admin login; đơn test ở trạng thái nguồn phù hợp.';
  let expected = '200 — chuyển trạng thái hợp lệ (FR-10, FR-18, api_spec §6.2)';
  let request = `PUT /api/admin/orders/{orderId}/status; ${auth}; body {"status":"<target>"}`;

  if (/bị từ chối|không hợp lệ|canceled → pending|delivered →/.test(t)) expected = '400 — chuyển tiếp không hợp lệ (FR-10 state machine)';
  else if (/Token user|SEC-03/.test(t)) expected = '403 — user không phải admin (SEC-03, FR-12)';
  else if (/Thiếu JWT/.test(t)) expected = '401 (SEC-02)';
  else if (/JWT sai|JWT hết hạn/.test(t)) expected = '403 (SEC-02)';
  else if (/ID đơn = 0|âm|thập phân|chữ cái|SQL|không tồn tại|Thiếu ID/.test(t)) expected = '404 — orderId không hợp lệ';
  else if (/GET/.test(t)) expected = '405 — sai phương thức';
  else if (/Thiếu trường status|null|rỗng|là số|viết hoa|khoảng trắng|SQL|XSS|returned|quá dài|mảng JSON/.test(t)) expected = '400 — status/body không hợp lệ';

  if (c.id === 'C-036') {
    pre = 'Đơn đã pending → confirmed thành công.';
    request = 'PUT status {"status":"confirmed"} lần 2';
    expected = '400 — chuyển tiếp trùng/không hợp lệ (FR-10)';
  } else if (c.id === 'C-038') {
    pre = 'Admin token hợp lệ; đơn pending.';
    request = 'PUT body là JSON array ["confirmed"]';
    expected = '400 — body phải là object {"status":...}';
  } else if (c.id === 'C-039') {
    pre = 'Admin token; đơn pending.';
    request = 'PUT body status chuỗi 500+ ký tự';
    expected = '400 — status không thuộc enum pending|confirmed|shipping|delivered|canceled';
  } else if (c.id === 'C-040') {
    pre = 'Vừa checkout tạo đơn pending (fixture).';
    request = 'PUT {"status":"confirmed"} ngay sau checkout';
    expected = '200 — admin xác nhận đơn mới (FR-18, FR-10)';
  }

  return { pre, request, expected, spec: 'FR-10, FR-12, FR-18, SEC-03; api_spec §6.2' };
}

const mapped = cases.map((c) => ({
  ...c,
  ...(c.pool === 'A' ? mapProfile(c) : c.pool === 'B' ? mapCancel(c) : mapAdmin(c)),
}));

const matrixMd = [
  '# Ma trận test case HW06',
  '',
  'Mỗi API có **40** test case: **35 do AI sinh** (sinh viên đã rà soát và chấp nhận toàn bộ) và **5 do sinh viên tự bổ sung** (khoảng trống AI hay bỏ sót). Oracle lấy từ `Eshop/api_specification.md` và `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02, SEC-03, SEC-06), **không** suy ra từ mã nguồn backend.',
  '',
  '| ID | Pool | Endpoint | Mô tả test case | Nguồn | Lý do AI bỏ sót (chỉ áp dụng TC sinh viên) |',
  '| --- | --- | --- | --- | --- | --- |',
  ...cases.map((c) => `| ${c.id} | ${c.pool} | ${c.endpoint} | ${c.title} | ${c.source} | ${c.gapNote ?? '—'} |`),
  '',
  '## Ghi chú',
  '',
  '- **35 TC AI/pool:** đã được sinh viên duyệt; không ghi lại cột verdict vì toàn bộ được chấp nhận dùng tiếp.',
  '- **5 TC sinh viên/pool:** tập trung retry, Unicode, token lỗi, concurrency, emoji, body lạ — những góc AI ít đề xuất.',
  '- Tham chiếu đặc tả chính: FR-04 (profile), FR-10 (state machine), FR-18 (admin order), SEC-02/03/06.',
].join('\n');

const csv = [
  'ID,Pool,Endpoint,Mô tả test case,Nguồn,Lý do AI bỏ sót',
  ...cases.map((c) => [c.id, c.pool, c.endpoint, `"${c.title}"`, c.source, `"${c.gapNote ?? ''}"`].join(',')),
].join('\n');

const execMd = [
  '# Ánh xạ thực thi test case HW06',
  '',
  'Bảng dưới map từng ID sang điều kiện tiên quyết, request và **kết quả mong đợi theo đặc tả**. Các dòng ghi *oracle đặc tả* là case compliance — có thể fail trên SUT hiện tại nếu backend chưa đúng FR/SEC.',
  '',
  '| ID | Điều kiện trước khi chạy | Request | Kết quả mong đợi (theo spec) | Tham chiếu đặc tả |',
  '| --- | --- | --- | --- | --- |',
  ...mapped.map((c) => `| ${c.id} | ${c.pre} | ${c.request} | ${c.expected} | ${c.spec} |`),
].join('\n');

await mkdir(out, { recursive: true });
await writeFile(new URL('test-case-matrix.md', out), matrixMd);
await writeFile(new URL('test-case-source.csv', out), csv);
await writeFile(new URL('execution-mapping.md', out), execMd);
console.log('Đã sinh', cases.length, 'test case.');
