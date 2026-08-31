# API selection - HW05

## Ba API được chọn

| Loại API | Method và endpoint | Liên hệ HW2 | Vai trò trong workflow |
| --- | --- | --- | --- |
| Auth-heavy | `POST /api/login` | Tiền điều kiện xác thực đã có trong kiểm thử FR-11/FR-10. | Đăng nhập bằng CSV credentials, nhận JWT. |
| Read-heavy | `GET /api/orders/my-orders` | FR-11 - Xem lịch sử đơn hàng của người dùng. | Lấy danh sách đơn của chính user và trích ID đơn có thể hủy. |
| Transactional | `PUT /api/orders/:id/cancel` | FR-10 - Máy trạng thái đơn hàng; FR-11 - thao tác hủy. | Cập nhật đơn `pending`/`confirmed` thành `canceled`. |

## Chức năng của từng API

### 1. `POST /api/login` - xác thực

- Nhận `email` và `password` của tài khoản test qua body.
- Nếu thông tin hợp lệ, trả về JWT (`token`) và thông tin người dùng; test plan phải trích JWT này để gửi trong header `Authorization: Bearer <token>` ở hai bước sau.
- Nếu sai thông tin đăng nhập, trả `401`. Backend có cơ chế theo dõi số lần đăng nhập lỗi và khóa tài khoản tạm thời khi đạt ngưỡng, nên kịch bản Stress/Spike cần kiểm soát dữ liệu sai và tài liệu hóa bước reset nếu lockout xảy ra.
- Đây là bước **auth-heavy** vì mọi virtual user đều cần tạo phiên xác thực trước khi đọc/hủy đơn.

### 2. `GET /api/orders/my-orders` - đọc lịch sử đơn hàng

- Yêu cầu JWT hợp lệ trong header `Authorization`.
- Trả về danh sách các đơn thuộc về chính người dùng đăng nhập, theo thứ tự ID giảm dần.
- Test plan dùng response để tìm một đơn phù hợp có trạng thái `pending` hoặc `confirmed`, sau đó trích ID đơn thành biến `orderId` cho bước hủy.
- Đây là bước **read-heavy** vì chỉ truy vấn danh sách đơn, không làm thay đổi trạng thái dữ liệu. Nó tương ứng trực tiếp với FR-11 của HW2.

### 3. `PUT /api/orders/:id/cancel` - hủy đơn hàng

- Yêu cầu JWT hợp lệ và `id` đơn hàng trong đường dẫn URL.
- Backend kiểm tra đơn có tồn tại và thuộc về user đang đăng nhập; nếu không có, trả `404`.
- Với đơn hợp lệ, request cập nhật trạng thái đơn thành `canceled`. Theo nghiệp vụ mong đợi từ HW2, chỉ nên dùng order ở trạng thái `pending` hoặc `confirmed`; không dùng lại một đơn đã hủy cho virtual user khác.
- Đây là bước **transactional** vì nó ghi/cập nhật dữ liệu, đồng thời liên quan rule state machine của FR-10 và thao tác hủy trong FR-11.

## Ràng buộc dữ liệu và tính lặp lại

1. Mỗi virtual user cần có tài khoản test và các đơn riêng để không tranh chấp cùng `orderId`.
2. Trước mỗi run, seed/tạo lại đơn có trạng thái `pending` hoặc `confirmed`; không hủy một order nhiều lần.
3. Extract `token` từ response login và `orderId` từ response `my-orders` trong plan; không hard-code JWT hoặc order ID.
4. Với Stress/Spike, cấu hình tỉ lệ login lỗi riêng nếu cần kiểm thử lockout và tài liệu hóa bước reset; không để nó phá workflow đo chính.

## Không trùng lựa chọn đã công bố

Workflow này không dùng ba API của Vân: `POST /register`, `/api/products/:id`, hoặc `POST /api/checkout`.
