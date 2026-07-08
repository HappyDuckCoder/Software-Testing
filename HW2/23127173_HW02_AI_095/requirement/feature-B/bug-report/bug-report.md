# Bug Report - FR-11 Xem lịch sử đơn hàng của user

## 1. Tổng quan lỗi

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test liên quan | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-B-01 | API `GET /api/orders/:id` trả chi tiết đơn hàng mà không xác thực và không kiểm tra chủ sở hữu | Critical | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | B-DT-13, B-BVA-04, B-BVA-05 | `backend/server.js` route chi tiết đơn |
| BUG-B-02 | UI lịch sử đơn hàng hiển thị nút hủy cho đơn đang `shipping` | Major | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | B-DT-09, B-DT-14 | `Profile.jsx` điều kiện hiển thị nút hủy |

GitHub Issue: chờ bổ sung link issue thật sau khi xác nhận bằng SUT.

## 2. BUG-B-01 - API chi tiết đơn có thể làm lộ đơn hàng của user khác

### Mô tả

FR-11 yêu cầu user chỉ xem lịch sử đơn hàng của chính mình. API `GET /api/orders/my-orders` đã lọc theo `req.user.id`, nhưng route `GET /api/orders/:id` lại không dùng middleware xác thực và không kiểm tra `user_id`. Vì vậy bất kỳ client nào biết `order_id` đều có thể gọi API chi tiết đơn.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-11 Xem lịch sử đơn hàng |
| Endpoint lỗi | `GET /api/orders/:id` |
| Thành phần mã nguồn | `Eshop/backend/server.js` |

### Bước tái hiện

1. Tạo hoặc tìm một đơn hàng thuộc user A.
2. Không gửi token, hoặc đăng nhập bằng user B.
3. Gửi request `GET /api/orders/<id-cua-user-A>`.
4. Quan sát response.

### Kết quả mong đợi

API phải yêu cầu bearer token hợp lệ. Nếu token thuộc user khác, API phải trả 403 hoặc 404, không được trả dữ liệu đơn hàng.

### Kết quả thực tế dự kiến theo mã nguồn

Route trả đơn hàng theo `id` trực tiếp nếu đơn tồn tại, không cần token và không kiểm tra chủ sở hữu.

### Tác động

Lỗi này có thể làm lộ thông tin đơn hàng như mã đơn, tổng tiền, trạng thái, địa chỉ giao hàng và thời điểm tạo đơn. Đây là lỗi bảo mật và riêng tư dữ liệu.

### Nguyên nhân mã nguồn

Trong `backend/server.js`, route chi tiết đơn hiện là:

```js
app.get("/api/orders/:id", (req, res) => {
  db.get("SELECT * FROM orders WHERE id = ?", [req.params.id], ...);
});
```

Route không có `authenticateToken` và query không có điều kiện `user_id = req.user.id`.

### Hướng sửa đề xuất

1. Thêm `authenticateToken` cho route `GET /api/orders/:id`.
2. Với user thường, query phải lọc `WHERE id = ? AND user_id = ?`.
3. Nếu muốn admin xem mọi đơn, tách route admin riêng và kiểm tra `role='admin'`.
4. Chạy lại B-DT-13, B-BVA-04 và B-BVA-05.

## 3. BUG-B-02 - User có thể hủy/nhìn thấy nút hủy đơn đang giao

### Mô tả

Theo FR-10, user chỉ được hủy đơn khi trạng thái là `pending` hoặc `confirmed`. Tuy nhiên UI lịch sử đơn hàng trong `/profile` chỉ ẩn nút hủy khi trạng thái là `delivered` hoặc `canceled`. Do đó đơn `shipping` vẫn hiện nút hủy.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop web |
| Feature | FR-11 kết hợp rule trạng thái FR-10 |
| Thành phần lỗi | `Eshop/frontend-web/src/pages/Profile.jsx` |
| API liên quan | `PUT /api/orders/:id/cancel` |

### Bước tái hiện

1. Tạo một đơn hàng cho user.
2. Dùng admin chuyển đơn sang trạng thái `shipping`.
3. Đăng nhập bằng user sở hữu đơn.
4. Mở `/profile` và xem bảng lịch sử đơn hàng.
5. Kiểm tra cột thao tác của đơn `shipping`.

### Kết quả mong đợi

Đơn `shipping` không được hiển thị nút hủy. Nếu user gọi API hủy trực tiếp, backend cũng phải từ chối.

### Kết quả thực tế dự kiến theo mã nguồn

UI vẫn hiển thị nút hủy vì điều kiện hiện tại chỉ ẩn nút khi:

```js
o.status !== "delivered" && o.status !== "canceled"
```

Ngoài ra backend cancel route cũng chỉ từ chối `delivered` và `canceled`, nên `shipping` có thể bị hủy.

### Tác động

User có thể hủy đơn đang giao, làm sai quy trình xử lý đơn hàng và gây mâu thuẫn giữa trạng thái vận chuyển thực tế với dữ liệu hệ thống.

### Hướng sửa đề xuất

1. UI chỉ hiển thị nút hủy khi `status` là `pending` hoặc `confirmed`.
2. Backend `PUT /api/orders/:id/cancel` chỉ cho phép hủy khi `order.status === "pending" || order.status === "confirmed"`.
3. Chạy lại B-DT-09 và B-DT-14, đồng thời đối chiếu thêm D-DT-07/D-BVA-07 của Feature D.
