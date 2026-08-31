# API selection - HW05

## Ba API được chọn

| Loại API | Method và endpoint | Liên hệ HW2 | Vai trò trong workflow |
| --- | --- | --- | --- |
| Auth-heavy | `POST /api/login` | Tiền điều kiện xác thực đã có trong kiểm thử FR-11/FR-10. | Đăng nhập bằng CSV credentials, nhận JWT. |
| Read-heavy | `GET /api/orders/my-orders` | FR-11 - Xem lịch sử đơn hàng của người dùng. | Lấy danh sách đơn của chính user và trích ID đơn có thể hủy. |
| Transactional | `PUT /api/orders/:id/cancel` | FR-10 - Máy trạng thái đơn hàng; FR-11 - thao tác hủy. | Cập nhật đơn `pending`/`confirmed` thành `canceled`. |

## Ràng buộc dữ liệu và tính lặp lại

1. Mỗi virtual user cần có tài khoản test và các đơn riêng để không tranh chấp cùng `orderId`.
2. Trước mỗi run, seed/tạo lại đơn có trạng thái `pending` hoặc `confirmed`; không hủy một order nhiều lần.
3. Extract `token` từ response login và `orderId` từ response `my-orders` trong plan; không hard-code JWT hoặc order ID.
4. Với Stress/Spike, cấu hình tỉ lệ login lỗi riêng nếu cần kiểm thử lockout và tài liệu hóa bước reset; không để nó phá workflow đo chính.

## Không trùng lựa chọn đã công bố

Workflow này không dùng ba API của Vân: `POST /register`, `/api/products/:id`, hoặc `POST /api/checkout`.
