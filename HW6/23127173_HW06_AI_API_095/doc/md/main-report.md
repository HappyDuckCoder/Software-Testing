# Báo cáo kiểm thử API — HW06-AI

## 1. Phạm vi và môi trường

- **Hệ thống:** EShop backend (Node.js / Express / SQLite), chạy tại `http://127.0.0.1:3000`.
- **Ngày chạy chính:** 03/09/2026 — oracle đặc tả, **12 assertion fail** trên full run (6 nhóm bug).
- **Công cụ:** Postman/Newman 6.2.1 + `newman-reporter-htmlextra`.
- **Header bắt buộc:** mọi request có `X-Student-Id: 23127173` (pre-request script cấp collection).
- **Dữ liệu:** backend reset/seed mỗi lần khởi động; setup 62 bước tạo fixture riêng cho từng TC (không dùng chung order bị mutate).

Oracle lấy từ **đặc tả** (`Eshop/api_specification.md`, `Eshop/README.md`), không thiết kế theo code backend.

## 2. Ba API đã chọn

| Pool | API | Ý nghĩa | Tham chiếu đặc tả |
| --- | --- | --- | --- |
| A | `PUT /api/users/me` | User cập nhật họ tên, SĐT, địa chỉ giao hàng | FR-04, SEC-02, SEC-06 |
| B | `PUT /api/orders/:id/cancel` | User hủy đơn khi state machine cho phép | FR-10, SEC-02; api_spec §4.6 |
| C | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái đơn | FR-10, FR-12, FR-18, SEC-03 |

## 3. Phương pháp

1. AI sinh ≥35 TC/API theo đặc tả; sinh viên bổ sung 5 TC/API.
2. Map oracle từng ID qua `oracle-utils.mjs` + `oracle-execution.json` (không suy từ code).
3. Collection: **1 folder/API, 40 request**, ID trùng ma trận (A-001…C-040).
4. Newman assert HTTP status theo spec; vi phạm → **FAIL**.

Chi tiết: `test-cases/test-case-matrix.md`, `test-cases/execution-mapping.md`.

## 4. Tóm tắt test case

| API | AI | SV | Tổng | Thực thi |
| --- | ---: | ---: | ---: | --- |
| A — Profile | 35 | 5 | 40 | Oracle FR-04/SEC-06 |
| B — Hủy đơn | 35 | 5 | 40 | Oracle FR-10 |
| C — Admin status | 35 | 5 | 40 | Oracle FR-18/SEC-03 |

## 5. Postman / Newman

- Collection: `api-testing/postman/collections/23127173_HW06_EShop_API.postman_collection.json`
- **Full run:** 182 request (62 setup + 120 TC), **182 assertion, 12 fail**.
- Lệnh: `npm run test` trong `api-testing/`.
- Minh chứng Newman: `evidence/newman-ui/` (03/09/2026).
- Minh chứng Postman: `evidence/postman-ui/` — 5 ảnh, **170 pass / 12 fail** (cùng run spec oracle).

## 6. CI/CD

Xem `ci-cd/ci-cd-report.md`. Có remote baseline pass; chưa có remote fail có chủ đích.

## 7. Bug report

Sáu nhóm lỗi (chi tiết `issues/bug-report.md`):

| ID | Mô tả ngắn |
| --- | --- |
| HW6-BUG-01 | SEC-06 — client gán `role`/`isAdmin` vẫn 200 |
| HW6-BUG-02 | FR-10 — hủy đơn `shipping` vẫn 200 |
| HW6-BUG-03 | SEC-03 — token user vẫn gọi admin API |
| HW6-BUG-04 | FR-04 — không validate SĐT |
| HW6-BUG-05 | Thiếu Content-Type vẫn 200 |
| HW6-BUG-06 | GET thay PUT trả 404 thay vì 405 |

GitHub Issues: chưa tạo.

## 8. Kết luận

Đã redesign 120 TC bám spec, fixture tách biệt, assert oracle trên Newman. Còn: Excel kết quả, GitHub Issues, diagram tự vẽ, PDF/ZIP.
