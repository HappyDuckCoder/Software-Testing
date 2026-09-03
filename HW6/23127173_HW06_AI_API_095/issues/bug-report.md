# Báo cáo lỗi HW6

Oracle theo `Eshop/api_specification.md` + `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02/03/06). **Không** căn cứ code backend.

| ID | Bug | API / TC | Kỳ vọng (spec) | Thực tế SUT | Newman |
| --- | --- | --- | --- | --- | --- |
| HW6-BUG-01 | SEC-06 / FR-04 | `PUT /api/users/me` — **A-031**, A-032 | 400 khi client gửi `role` / `isAdmin` | 200 `Profile updated` | **FAIL** |
| HW6-BUG-02 | FR-10 / api_spec §4.6 | `PUT /api/orders/:id/cancel` — **B-004** | 400 khi đơn `shipping` (user không được hủy) | 200 `Order canceled successfully` | **FAIL** |
| HW6-BUG-03 | SEC-03 / FR-12 | `PUT /api/admin/orders/:id/status` — **C-023**, C-024 | 403 khi token user (không phải admin) | C-023: 200; C-024: 400 | **FAIL** |
| HW6-BUG-04 | FR-04 | `PUT /api/users/me` — **A-021**, A-022, A-023, A-025 | 400 khi SĐT không hợp lệ (10–11 chữ số, bắt đầu 0) | 200 | **FAIL** |
| HW6-BUG-05 | FR-04 | `PUT /api/users/me` — **A-034** | 400/415 khi thiếu `Content-Type: application/json` | 200 | **FAIL** |
| HW6-BUG-06 | HTTP semantics | `B-028`, **C-032** (GET thay PUT) | 405 Method Not Allowed | 404 | **FAIL** |

**Bằng chứng (03/09/2026, redesign spec-aligned):**

- `api-testing/newman/raw-output/full-120-spec-20260903.txt` — **182 request**, **182 assertion**, **12 fail** (6 bug nhóm trên)
- `api-testing/newman/html-reports/core/report.html`, `full-120/report.html`
- Ma trận + oracle: `test-cases/test-case-matrix.md`, `test-cases/oracle-execution.json`

GitHub Issue: chưa tạo.
