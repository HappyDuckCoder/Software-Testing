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

10 workflow, 40 sample, 0 lỗi; workflow p95 **4659 ms**, trung bình **4536.80 ms**, 0.557 workflow/s.

## 5. Kết quả Stress test

30 workflow, 120 sample, 0 lỗi; workflow p95 **3022 ms**, trung bình **3021.87 ms**, 1.036 workflow/s.

## 6. Kết quả Spike test

50 workflow, 200 sample, 0 lỗi; workflow p95 **1682 ms**, trung bình **1548.66 ms**, 53.706 workflow/s.

## 7. Endurance threshold

Endurance thực chạy **601.15 giây**: 1.200 workflow, 4.800 sample, 0 lỗi; workflow p95 **4840 ms**, trung bình **4824.38 ms**, 1.996 workflow/s. Đây là ngưỡng đã quan sát ở 10 virtual users/think-time 1.6 s, không phải năng lực tối đa của phần cứng; cần chạy thêm mức tải tăng dần nếu muốn xác định maximum stable RPS.

## 8. AI analysis và misinterpretation hunt

Phân tích từ raw JTL: không được đọc 4.800 sample endurance thành 4.800 workflow; đúng là 1.200 transaction controller workflow, mỗi workflow gồm 3 API và 1 parent transaction. Sai lầm khác là so sánh RPS Spike với Endurance như cùng điều kiện: Spike không có sustained think-time, còn Endurance có 1.6 s timer sau mỗi sampler. Vì vậy Spike 53.706 workflow/s không chứng minh hệ thống bền vững ở mức đó.

## 9. Đề xuất Continuous Performance Testing

## 10. Kết luận
