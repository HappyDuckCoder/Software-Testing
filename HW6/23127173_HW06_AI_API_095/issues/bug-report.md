# Báo cáo lỗi HW06

| ID | API | Kỳ vọng (đặc tả) | Thực tế (compliance run) | Trạng thái |
| --- | --- | --- | --- | --- |
| HW6-BUG-01 | `PUT /api/users/me` | Client **không** được đổi `role` (FR-04, SEC-06) | Body `"role":"admin"` trả 200 `Profile updated` | Tái lập được; GitHub Issue chờ tạo |
| HW6-BUG-02 | `PUT /api/orders/:id/cancel` | User **không** hủy đơn `shipping` (FR-10, README §5) | Request trả 200 `Order canceled successfully` | Tái lập được; GitHub Issue chờ tạo |
| HW6-BUG-03 | `PUT /api/admin/orders/:id/status` | Token user thường bị từ chối (FR-12, SEC-03) | JWT user đổi status pending → confirmed, trả 200 | Tái lập được; GitHub Issue chờ tạo |

**Bằng chứng:** `api-testing/newman/raw-output/compliance-20260901.txt`, `api-testing/newman/html-reports/compliance/report.html`.

Oracle lấy từ đặc tả EShop, không căn cứ vào code backend. Chưa ghi số Issue GitHub vì chưa tạo issue thật.
