import { mkdir, writeFile } from 'node:fs/promises';
import { mapCase } from './oracle-utils.mjs';

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

const cases = [
  ...makeCases('A', 'PUT /api/users/me', profileAi, profileStudent),
  ...makeCases('B', 'PUT /api/orders/:id/cancel', cancelAi, cancelStudent),
  ...makeCases('C', 'PUT /api/admin/orders/:id/status', adminAi, adminStudent),
];

const mapped = cases.map(mapCase);

const matrixMd = [
  '# Ma trận test case HW06',
  '',
  'Mỗi API có **40** test case (35 AI + 5 sinh viên). Oracle lấy từ `Eshop/api_specification.md` và `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02/03/06), **không** suy từ code backend.',
  '',
  '| ID | Pool | Endpoint | Mô tả test case | Nguồn | Oracle HTTP (spec) | Tham chiếu |',
  '| --- | --- | --- | --- | --- | --- | --- |',
  ...mapped.map((c) => `| ${c.id} | ${c.pool} | ${c.endpoint} | ${c.title} | ${c.source} | ${c.statusCodes.join('/')} | ${c.spec.split(';')[0]} |`),
  '',
  '## Bug SUT đã biết (oracle đặc tả → FAIL trên Newman)',
  '',
  '| TC | Bug | Spec | Oracle |',
  '| --- | --- | --- | --- |',
  '| A-021, A-022, A-023, A-025 | HW6-BUG-04 | FR-04 (SĐT 10–11 chữ số, bắt đầu 0) | 400 |',
  '| A-031, A-032 | HW6-BUG-01 | SEC-06, FR-04 | 400 |',
  '| B-004 | HW6-BUG-02 | FR-10, api_spec §4.6 | 400 |',
  '| C-023, C-024 | HW6-BUG-03 | SEC-03, FR-12 | 403 |',
  '| A-034 | HW6-BUG-05 | FR-04 (Content-Type JSON) | 400/415 |',
  '| B-028, C-032 | HW6-BUG-06 | HTTP method (kỳ vọng 405) | 405 |',
  '',
  '## Ghi chú',
  '',
  '- TC sinh viên A-037/A-038/B-039: một số kịch bản (đồng thời, timeout) chỉ mô phỏng một phần trong Newman tuần tự.',
  '- C-019: trường lạ trong body — oracle 200 nếu `status` hợp lệ (api_spec §6.2 chỉ định nghĩa `status`).',
  '- C-029: SQL injection trên **orderId** path (404), khác C-017 (SQL trong **status** body → 400).',
  '- TC có oracle `401/403` hoặc `200/400` dùng assertion `oneOf` theo đặc tả.',
  '- Chi tiết request/precondition: `execution-mapping.md` và `oracle-execution.json`.',
].join('\n');

const csv = [
  'ID,Pool,Endpoint,Mô tả test case,Nguồn,Oracle HTTP,Tham chiếu',
  ...mapped.map((c) => [c.id, c.pool, c.endpoint, `"${c.title}"`, c.source, `"${c.statusCodes.join('/')}"`, `"${c.spec.split(';')[0]}"`].join(',')),
].join('\n');

const execMd = [
  '# Ánh xạ thực thi test case HW06',
  '',
  'Map từng ID sang precondition, request và **oracle theo đặc tả**. Vi phạm spec → assertion **FAIL**.',
  '',
  '| ID | Điều kiện trước khi chạy | Request | Kết quả mong đợi (spec) | HTTP | Tham chiếu |',
  '| --- | --- | --- | --- | --- | --- |',
  ...mapped.map((c) => `| ${c.id} | ${c.pre} | ${c.request} | ${c.expected} | ${c.statusCodes.join('/')} | ${c.spec} |`),
].join('\n');

await mkdir(out, { recursive: true });
await writeFile(new URL('test-case-matrix.md', out), matrixMd);
await writeFile(new URL('test-case-source.csv', out), csv);
await writeFile(new URL('execution-mapping.md', out), execMd);
await writeFile(new URL('oracle-execution.json', out), JSON.stringify(mapped, null, 2));
console.log('Đã sinh', mapped.length, 'test case theo spec.');
