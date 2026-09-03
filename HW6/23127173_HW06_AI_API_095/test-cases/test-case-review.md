# Review test case HW06 (03/09/2026)

Rà soát lần 2: oracle bám **đặc tả**, không bám code backend.

## Kết luận tổng quan

| Tiêu chí | Đánh giá | Ghi chú |
| --- | --- | --- |
| Đủ 120 TC (40×3) | ✅ | 35 AI + 5 SV mỗi pool |
| ID trùng Postman/Newman | ✅ | A/B/C-001…040 |
| Oracle từ spec | ✅ | `oracle-utils.mjs` map từng ID |
| Fixture tách biệt | ✅ | Setup 62 bước, order riêng |
| Assert HTTP theo spec | ✅ | 12 fail = bug SUT thật |
| TC sinh viên đầy đủ kịch bản | ⚠️ | A-037, A-038, B-039: giới hạn Newman tuần tự (đã ghi chú) |

## Pool A — `PUT /api/users/me` (FR-04, SEC-06)

| Nhóm | TC | Oracle | Spec | Review |
| --- | --- | --- | --- | --- |
| Happy path | A-001…A-020, A-024, A-026, A-033, A-035…A-040 | 200 | FR-04 §2.2 | ✅ Body/field khớp mô tả |
| SĐT invalid | A-021, A-022, A-023, A-025 | 400 | FR-04 (10–11 số, bắt đầu 0) | ✅ **FAIL trên SUT** → HW6-BUG-04 |
| Auth | A-027…A-029 | 401/403 | SEC-02 | ✅ |
| Privilege | A-031, A-032 | 400 | SEC-06 | ✅ **FAIL** → HW6-BUG-01 |
| Content-Type | A-034 | 400/415 | JSON body | ✅ **FAIL** → HW6-BUG-05 |
| Security payload | A-009, A-010, A-016, A-017 | 200/400 | SEC-05 | ✅ oneOf — spec không bắt 400 tuyệt đối |
| SV bổ sung | A-036 body rỗng | 200 | Field tùy chọn §2.2 | ✅ |
| SV bổ sung | A-037 đồng thời | 200 | Mô phỏng 1 request | ⚠️ Ghi chú giới hạn công cụ |
| SV bổ sung | A-038 đổi MK rồi profile | 200 | FR-04 | ⚠️ Không chạy luồng forgot-password trong setup |

## Pool B — `PUT /api/orders/:id/cancel` (FR-10)

| Nhóm | TC | Oracle | Review |
| --- | --- | --- | --- |
| Hủy hợp lệ | B-001, B-003, B-007, B-008, B-018, B-019, B-029…B-034, B-036, B-039, B-040 | 200 | ✅ Fixture riêng |
| Hủy lần 2 | B-002 | 400 | ✅ Setup pre-cancel |
| State machine | B-004, B-005, B-006, B-035 | 400 | ✅ B-004 **FAIL** → HW6-BUG-02 |
| ID invalid | B-009…B-017, B-037 | 404 | ✅ |
| Auth | B-020…B-027, B-038 | 401/403 | ✅ |
| IDOR | B-023 | 403/404 | ✅ user2 order + test token |
| HTTP method | B-028 | 405 | ✅ **FAIL** 404 → HW6-BUG-06 |
| Header case | B-025 | 200 | ✅ RFC 7230 — header name không phân biệt hoa thường |

## Pool C — `PUT /api/admin/orders/:id/status` (FR-18, SEC-03)

| Nhóm | TC | Oracle | Review |
| --- | --- | --- | --- |
| Transition hợp lệ | C-001…C-005, C-033…C-035, C-040 | 200 | ✅ |
| Transition cấm | C-006…C-009, C-036 | 400 | ✅ FR-10 state machine |
| Body/status invalid | C-010…C-016, C-018, C-038, C-039 | 400 | ✅ |
| Status SQL/XSS | C-017, C-018 | 400 | ✅ Sửa map khớp tiêu đề (status body) |
| Trường lạ | C-019 | 200 | ✅ `status` hợp lệ + field thừa |
| ID invalid path | C-025…C-031, C-029 | 404 | ✅ C-029 = SQL trên **orderId** |
| SEC-03 | C-023, C-024 | 403 | ✅ **FAIL** → HW6-BUG-03 |
| HTTP method | C-032 | 405 | ✅ **FAIL** 404 → HW6-BUG-06 |

## Sửa trong review lần 2

1. **C-017/C-018/C-019**: map body khớp tiêu đề ma trận (trước đó C-017 dùng SQL trên path, C-019 dùng XSS thay vì trường lạ).
2. **A-011**: body địa chỉ Việt Nam có dấu.
3. **A-037/A-038**: ghi chú precondition giới hạn Newman.

## Việc còn lại (ngoài phạm vi TC)

- Excel kết quả từng ID
- GitHub Issue + screenshot gốc
- Postman Desktop screenshot (nếu đề bắt buộc — hiện dùng runner render từ JSON)
