# Báo cáo lỗi HW06

| ID | API | Kỳ vọng (đặc tả) | Thực tế (core spec run 03/09) | Trạng thái |
| --- | --- | --- | --- | --- |
| HW6-BUG-01 | `PUT /api/users/me` | Client **không** được đổi `role` (FR-04, SEC-06) | Body `"role":"admin"` trả 200 `Profile updated` | **FAIL** assertion — tái lập được |
| HW6-BUG-02 | `PUT /api/orders/:id/cancel` | User **không** hủy đơn `shipping` (FR-10, README §5) | Request trả 200 `Order canceled successfully` | **FAIL** assertion — tái lập được |
| HW6-BUG-03 | `PUT /api/admin/orders/:id/status` | Token user thường bị từ chối (FR-12, SEC-03) | JWT user đổi status pending → confirmed, trả 200 | **FAIL** assertion — tái lập được |

**Bằng chứng (03/09/2026):**

- Core: `api-testing/newman/raw-output/core-spec-20260903.txt` — 21 assertion, **3 failed**
- Full 120+core: `api-testing/newman/raw-output/full-120-20260903.txt` — 141 assertion, **5 failed** (3 bug + A-031/A-032 lặp SEC-06)
- HTML: `api-testing/newman/html-reports/full-120/report.html`, `core/report.html`

Collection assert **oracle đặc tả** (không còn chế độ baseline che lỗi). GitHub Issue chờ tạo.
