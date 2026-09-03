# Báo cáo kiểm thử API — HW06-AI

## 1. Phạm vi và môi trường

- **Hệ thống:** EShop backend (Node.js / Express / SQLite), chạy tại `http://127.0.0.1:3000`.
- **Ngày chạy chính:** 03/09/2026 (full 120 TC); baseline/compliance: 01/09/2026.
- **Công cụ:** Postman Desktop, Newman 6.2.1 + `newman-reporter-htmlextra`.
- **Header bắt buộc:** mọi request có `X-Student-Id: 23127173` (pre-request script cấp collection).
- **Dữ liệu:** mỗi lần khởi động backend, CSDL reset/seed — đơn test được tách riêng.

Oracle test case lấy từ **đặc tả** (`Eshop/api_specification.md`, `Eshop/README.md`), không thiết kế theo hành vi code hiện tại.

## 2. Ba API đã chọn

| Pool | API | Ý nghĩa | Tham chiếu đặc tả |
| --- | --- | --- | --- |
| A | `PUT /api/users/me` | User cập nhật họ tên, SĐT, địa chỉ giao hàng của chính mình | FR-04, SEC-02, SEC-06 |
| B | `PUT /api/orders/:id/cancel` | User hủy đơn của mình khi trạng thái cho phép | FR-10, SEC-02; api_spec §4.6 |
| C | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái đơn theo state machine | FR-10, FR-12, FR-18, SEC-03 |

Không trùng bộ của Vân: `/register`, `/api/products/:id`, `POST /api/checkout`.

## 3. Phương pháp

Pipeline mỗi API:

1. AI sinh ≥35 test case theo đặc tả (domain, state, security, schema).
2. Sinh viên rà soát — **toàn bộ 35 TC AI/pool đã được chấp nhận**.
3. Sinh viên bổ sung 5 TC/pool (retry, Unicode, emoji, body lạ…).
4. Thực thi Postman + Newman; lưu raw/HTML report.
5. Ghi bug thật; tạo GitHub Issue khi đã xác minh.

Chi tiết 120 TC: `test-cases/test-case-matrix.md` và `test-cases/execution-mapping.md`.

## 4. Tóm tắt test case

| API | AI sinh | Sinh viên bổ sung | Tổng | Ghi chú thực thi |
| --- | ---: | ---: | ---: | --- |
| A — Profile | 35 | 5 | 40 | Core 4 request + observation; compliance phát hiện SEC-06 |
| B — Hủy đơn | 35 | 5 | 40 | Core 4 request; compliance phát hiện vi phạm FR-10 (hủy shipping) |
| C — Admin status | 35 | 5 | 40 | Core 4 request; compliance phát hiện SEC-03 |

**Lưu ý:** suite observation 120 request chỉ kiểm HTTP không phải 5xx; không thay cho oracle từng TC trong ma trận.

## 5. Postman / Newman

- Collection: `api-testing/postman/collections/23127173_HW06_EShop_API.postman_collection.json`
- Tính năng đã dùng: collection folders, pre-request script, environment variables, setup chain, Newman CLI, HTML reporter.
- **Full 120 TC (Newman):** 128 request (8 setup + 120 observation A/B/C), 128 assertion, 0 fail, 11.9s — raw `api-testing/newman/raw-output/full-120-20260903.txt`, HTML `api-testing/newman/html-reports/full-120/report.html`, lệnh `npm run test:full120`.
- Baseline local: 20 request, 21 assertion, 0 fail.
- Compliance local: 3 assertion fail → 3 bug trong `issues/bug-report.md`.
- Ảnh Postman: `evidence/postman-ui/` (5 ảnh **03/09/2026**, full 120 TC run).
- Ảnh Newman: `evidence/newman-ui/newman-full-120-terminal-20260903.png`, `evidence/newman-ui/newman-full-120-report-20260903.png`.

## 6. CI/CD

Xem `ci-cd/ci-cd-report.md`. Có remote baseline pass (run `33500850638`); chưa có remote fail có chủ đích.

## 7. Bug report

Ba lỗi tái lập được (oracle đặc tả):

| ID | API | Mô tả ngắn |
| --- | --- | --- |
| HW6-BUG-01 | `PUT /api/users/me` | Client gán `role=admin` vẫn 200 — vi phạm SEC-06 |
| HW6-BUG-02 | `PUT /api/orders/:id/cancel` | Hủy đơn `shipping` vẫn 200 — vi phạm FR-10 |
| HW6-BUG-03 | `PUT /api/admin/orders/:id/status` | Token user vẫn đổi status — vi phạm SEC-03 |

GitHub Issues + screenshot: chưa tạo (chờ sinh viên xác nhận).

## 8. AI test generator

Thiết kế và pseudocode: `agent-skills/eshop-api-test-generator/README.md`. Sơ đồ nộp bài phải **tự vẽ**.

## 9. Kết luận

Đã có: 120 TC thiết kế theo spec, collection + Newman + CI baseline, evidence Postman/CI, 3 bug compliance.

Chưa nộp đủ: Excel kết quả chạy từng ID, GitHub Issues, remote CI fail, diagram tự vẽ, PDF/ZIP.
