# API selection

| Pool | Feature | Endpoint | Preconditions | Trạng thái xác nhận |
| --- | --- | --- | --- | --- |
| A | FR-04 Personal profile | `PUT /api/users/me` | JWT của user; profile test có thể khôi phục | Đã chọn - dùng lại HW2 |
| B | FR-10 Cancel order | `PUT /api/orders/:id/cancel` | JWT owner và đơn chưa giao | Đã chọn - dùng lại HW2 |
| C | FR-18 Admin order status | `PUT /api/admin/orders/:id/status` | JWT admin, order test và state hợp lệ | Đã chọn - dùng lại HW2 |

Lý do: bộ này bao phủ ba pool bắt buộc, tận dụng FR-04/FR-10/FR-18 đã làm ở HW2, và không trùng `POST /register`, `GET /api/products/:id`, `POST /api/checkout` của Vân. Xác minh endpoint/response từ `Eshop/api_specification.md`, implementation và SUT đang chạy trước khi sinh test.
