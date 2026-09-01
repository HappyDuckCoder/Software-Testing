# API selection

| Pool | Feature | Endpoint | Preconditions | Trạng thái xác nhận |
| --- | --- | --- | --- | --- |
| A | FR-02 Login | `POST /api/login` | Tài khoản test; kiểm soát lockout/reset | Dự kiến |
| B | FR-10 Cancel order | `PUT /api/orders/:id/cancel` | JWT owner và đơn chưa giao | Dự kiến |
| C | FR-18 Admin order status | `PUT /api/admin/orders/:id/status` | JWT admin, order test và state hợp lệ | Dự kiến |

Xác minh endpoint/response từ `Eshop/api_specification.md`, implementation và SUT đang chạy trước khi sinh test. Cập nhật bảng sau khi thống nhất không trùng lựa chọn nhóm.
