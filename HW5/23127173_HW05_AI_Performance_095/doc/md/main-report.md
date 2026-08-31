# HW05-AI Performance Testing Report

> Trạng thái: template. Chỉ điền kết quả, ảnh, số liệu và liên kết sau khi thực thi thực tế.

## 1. Thông tin chung và SUT

## 2. Workflow và endpoint mapping

Workflow được chọn, tái sử dụng phạm vi HW2: `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`.

| Bước | Nhóm endpoint | API | Liên hệ HW2 | Dữ liệu/đầu ra dùng cho bước sau |
| --- | --- | --- | --- | --- |
| 1 | Auth-heavy | `POST /api/login` | Tiền điều kiện xác thực cho FR-11/FR-10. | CSV credentials -> JWT. |
| 2 | Read-heavy | `GET /api/orders/my-orders` | FR-11 - lịch sử đơn hàng. | JWT -> danh sách đơn; trích `orderId` đủ điều kiện. |
| 3 | Transactional | `PUT /api/orders/:id/cancel` | FR-10 state machine và thao tác hủy của FR-11. | JWT + `orderId` -> cập nhật trạng thái `canceled`. |

Không trùng lựa chọn của Vân: `POST /register`, `/api/products/:id`, `POST /api/checkout`.

### Chức năng và dữ liệu trao đổi

- `POST /api/login` nhận email/mật khẩu test và trả JWT. JWT là điều kiện bắt buộc để gọi các API đơn hàng; số lần login sai có thể kích hoạt account lockout, do đó cần tách và kiểm soát dữ liệu lỗi khi chạy Stress/Spike.
- `GET /api/orders/my-orders` dùng JWT để đọc danh sách đơn của user hiện tại theo ID giảm dần. Plan phải trích một `orderId` có trạng thái phù hợp từ response thay vì hard-code ID.
- `PUT /api/orders/:id/cancel` dùng JWT và `orderId` để cập nhật một đơn thuộc user sang `canceled`. Mỗi virtual user cần có đơn dữ liệu riêng ở trạng thái `pending`/`confirmed` để tránh xung đột và bảo đảm lần chạy lặp lại được.

## 3. Thiết kế test plan có hỗ trợ AI và human review

## 4. Kết quả Load test

## 5. Kết quả Stress test

## 6. Kết quả Spike test

## 7. Endurance threshold

## 8. AI analysis và misinterpretation hunt

## 9. Đề xuất Continuous Performance Testing

## 10. Kết luận
