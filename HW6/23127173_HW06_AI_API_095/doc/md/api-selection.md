# Lựa chọn API — HW06

Oracle và test case thiết kế theo **đặc tả EShop**, không căn cứ hành vi code backend.

| Pool | Chức năng | Endpoint | Ý nghĩa | Điều kiện tiên quyết |
| --- | --- | --- | --- | --- |
| A | FR-04 — Hồ sơ cá nhân | `PUT /api/users/me` | User sửa họ tên, SĐT, địa chỉ giao hàng của **chính mình** | JWT user hợp lệ |
| B | FR-10 — Hủy đơn | `PUT /api/orders/:id/cancel` | User hủy đơn thuộc mình; chỉ khi trạng thái cho phép (pending/confirmed) | JWT owner; đơn chưa shipping/delivered |
| C | FR-18 — Admin đơn hàng | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái theo state machine FR-10 | JWT admin; đơn test ở trạng thái nguồn hợp lệ |

**Không trùng Vân:** `POST /register`, `GET /api/products/:id`, `POST /api/checkout`.

**Tham chiếu đặc tả:** `Eshop/api_specification.md` (§2.2, §4.6, §6.2), `Eshop/README.md` (FR-04, FR-10, FR-12, FR-18, SEC-02, SEC-03, SEC-06).
