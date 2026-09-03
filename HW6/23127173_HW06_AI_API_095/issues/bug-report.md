# Báo cáo lỗi HW6

Oracle theo `Eshop/api_specification.md` + `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02/03/06). **Không** căn cứ code backend.

| ID | Bug | API / TC | Kỳ vọng (spec) | Thực tế SUT | Newman | Postman |
| --- | --- | --- | --- | --- | --- | --- |
| HW6-BUG-01 | SEC-06 / FR-04 | `PUT /api/users/me` — **A-031**, A-032 | 400 khi client gửi `role` / `isAdmin` | 200 `Profile updated` | **FAIL** | **FAIL** — xem ảnh 3 |
| HW6-BUG-02 | FR-10 / api_spec §4.6 | `PUT /api/orders/:id/cancel` — **B-004** | 400 khi đơn `shipping` (user không được hủy) | 200 `Order canceled successfully` | **FAIL** | **FAIL** — xem ảnh 3 |
| HW6-BUG-03 | SEC-03 / FR-12 | `PUT /api/admin/orders/:id/status` — **C-023**, C-024 | 403 khi token user (không phải admin) | C-023: 200; C-024: 400 | **FAIL** | **FAIL** — xem ảnh 3 |
| HW6-BUG-04 | FR-04 | `PUT /api/users/me` — **A-021**, A-022, A-023, A-025 | 400 khi SĐT không hợp lệ (10–11 chữ số, bắt đầu 0) | 200 | **FAIL** | **FAIL** — xem ảnh 3 |
| HW6-BUG-05 | FR-04 | `PUT /api/users/me` — **A-034** | 400/415 khi thiếu `Content-Type: application/json` | 200 | **FAIL** | **FAIL** — xem ảnh 3 |
| HW6-BUG-06 | HTTP semantics | **B-028**, C-032 (GET thay PUT) | 405 Method Not Allowed | 404 | **FAIL** | **FAIL** — xem ảnh 3 |

## Bằng chứng Newman (03/09/2026)

| Artefact | Đường dẫn |
| --- | --- |
| Raw CLI | `api-testing/newman/raw-output/full-120-20260903.txt` |
| JSON | `api-testing/newman/raw-output/full-120-20260903.json` |
| HTML report | `api-testing/newman/html-reports/report.html` |
| Ảnh terminal summary | `evidence/newman-ui/newman-full-120-terminal-20260903.png` |
| Ảnh HTML report | `evidence/newman-ui/newman-full-120-report-20260903.png` |

**Tổng kết run:** 182 request (62 setup + 120 TC), 182 assertion, **12 fail** (khớp 6 nhóm bug trên).

## Bằng chứng Postman (03/09/2026)

Ảnh **Postman Desktop gốc** (SV chụp), cùng collection `23127173_HW06_EShop_API.postman_collection.json`.

| # | Ảnh | Nội dung |
| --- | --- | --- |
| 1 | `evidence/postman-ui/postman-runner-config-20260903.png` | Cấu hình Runner (Run order SETUP + settings) |
| 2 | `evidence/postman-ui/postman-run-results-20260903.png` | **170 passed / 12 failed**, 182 test, 13s |
| 3 | `evidence/postman-ui/postman-run-details-negative-cases-20260903.png` | Chi tiết FAIL: A-021…A-032 (và cuộn thêm B/C nếu cần) |
| 4 | `evidence/postman-ui/postman-setup07-request-headers-20260903.png` | SETUP-07 checkout — Headers |
| 5 | `evidence/postman-ui/postman-a038-response-20260903.png` | A-038 PASS — response body |
| 6 | `evidence/postman-ui/postman-console-student-id-20260903.png` | Console — `X-Student-Id applied: 23127173` (đề §11) |

## Traceability

- Ma trận + oracle: `test-cases/test-case-matrix.md`, `test-cases/oracle-execution.json`
- Review TC: `test-cases/test-case-review.md`

GitHub Issue: chưa tạo.
