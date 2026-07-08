# Bug Report - FR-18 Quản lý đơn hàng của admin

## 1. Tổng quan lỗi

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test liên quan | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-C-01 | API admin quản lý đơn hàng chỉ xác thực token, chưa kiểm tra `role='admin'` | Critical | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | C-DT-04 | `backend/server.js` admin routes |
| BUG-C-02 | Backend cho phép chuyển trạng thái `canceled -> delivered` | Major | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | C-DT-12, C-BVA-06 | `backend/server.js` state transition branch |
| BUG-C-03 | Bảng đơn hàng admin render `shipping_address` bằng HTML thô | Critical | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | C-DT-15, C-BVA-08 | `frontend-admin/src/App.jsx` dùng `dangerouslySetInnerHTML` |

GitHub Issue: chờ bổ sung link issue thật sau khi xác nhận bằng SUT.

## 2. BUG-C-01 - User thường có thể gọi API quản lý đơn hàng admin

### Mô tả

FR-18 là chức năng dành cho admin. Các API như `GET /api/admin/orders` và `PUT /api/admin/orders/:id/status` phải chỉ cho phép tài khoản có `role='admin'`. Tuy nhiên mã nguồn hiện chỉ gọi `authenticateToken`, nghĩa là chỉ cần token hợp lệ là có thể đi tiếp, kể cả token của user thường.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-18 Quản lý đơn hàng admin |
| Endpoint | `GET /api/admin/orders`, `PUT /api/admin/orders/:id/status` |
| Tài khoản test | `test@eshop.com` / `Test1234!` |

### Bước tái hiện

1. Đăng nhập bằng user thường `test@eshop.com`.
2. Lấy bearer token của user thường.
3. Gửi `GET /api/admin/orders` với token này.
4. Nếu có order id, tiếp tục thử `PUT /api/admin/orders/<id>/status`.

### Kết quả mong đợi

API phải trả 403 hoặc thông báo không có quyền admin.

### Kết quả thực tế dự kiến theo mã nguồn

API có khả năng trả danh sách tất cả đơn hàng hoặc cho phép cập nhật trạng thái vì route chỉ xác thực token, không kiểm tra role.

### Tác động

User thường có thể xem toàn bộ đơn hàng trong hệ thống hoặc thay đổi trạng thái đơn hàng. Đây là lỗi phân quyền nghiêm trọng.

### Nguyên nhân mã nguồn

Các route admin dùng `authenticateToken` nhưng không có middleware kiểm tra `req.user.role === "admin"`.

### Hướng sửa đề xuất

1. Thêm middleware `authorizeAdmin`.
2. Áp dụng middleware này cho toàn bộ route `/api/admin/*`.
3. Trả 403 khi token không có `role='admin'`.
4. Chạy lại C-DT-04 và các test admin liên quan.

## 3. BUG-C-02 - Đơn đã hủy có thể bị chuyển thành đã giao

### Mô tả

Theo FR-10, `canceled` là trạng thái kết thúc. Khi đơn đã hủy thì không được chuyển sang trạng thái khác. Tuy nhiên backend hiện đánh dấu chuyển trạng thái `canceled -> delivered` là hợp lệ.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-18 kết hợp state machine FR-10 |
| Endpoint | `PUT /api/admin/orders/:id/status` |
| Trạng thái lỗi | `canceled -> delivered` |

### Bước tái hiện

1. Tạo hoặc chọn một đơn hàng.
2. Chuyển đơn sang `canceled`.
3. Gọi `PUT /api/admin/orders/<id>/status` với body:

```json
{
  "status": "delivered"
}
```

4. Lấy lại danh sách đơn hoặc chi tiết đơn để kiểm tra trạng thái.

### Kết quả mong đợi

API phải trả 400 vì `canceled` là trạng thái kết thúc. Trạng thái đơn phải giữ nguyên là `canceled`.

### Kết quả thực tế dự kiến theo mã nguồn

Backend cho phép chuyển sang `delivered`.

### Tác động

Lịch sử trạng thái đơn hàng bị sai. Đơn đã hủy có thể bị tính như đơn đã giao, ảnh hưởng báo cáo doanh thu, vận hành và tính đúng đắn của state machine.

### Nguyên nhân mã nguồn

Trong `backend/server.js` có nhánh:

```js
if (currentStatus === "canceled" && status === "delivered")
  isValidTransition = true;
```

### Hướng sửa đề xuất

1. Xóa nhánh cho phép `canceled -> delivered`.
2. Định nghĩa transition hợp lệ bằng một map rõ ràng:

```js
const transitions = {
  pending: ["confirmed", "canceled"],
  confirmed: ["shipping", "canceled"],
  shipping: ["delivered"],
  delivered: [],
  canceled: []
};
```

3. Chạy lại C-DT-12 và C-BVA-06.

## 4. BUG-C-03 - Địa chỉ giao hàng có nguy cơ HTML injection/XSS trên admin UI

### Mô tả

Bảng đơn hàng admin hiển thị `shipping_address` bằng `dangerouslySetInnerHTML`. Nếu địa chỉ giao hàng chứa HTML hoặc payload như `<img src=x onerror=alert(1)>`, trình duyệt có thể render HTML thay vì hiển thị text thuần.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop admin frontend |
| Feature | FR-18 Quản lý đơn hàng admin |
| Thành phần lỗi | `Eshop/frontend-admin/src/App.jsx` |
| Dữ liệu nguy hiểm | `shipping_address` |

### Bước tái hiện

1. Tạo đơn hàng với địa chỉ giao hàng:

```html
<img src=x onerror=alert(1)>
```

2. Đăng nhập admin.
3. Mở tab Orders.
4. Quan sát cách địa chỉ được hiển thị.

### Kết quả mong đợi

Địa chỉ phải được hiển thị như văn bản thuần. HTML/script không được render hoặc thực thi.

### Kết quả thực tế dự kiến theo mã nguồn

Admin UI render `shipping_address` bằng `dangerouslySetInnerHTML`, tạo nguy cơ thực thi HTML/script.

### Tác động

Đây là lỗi bảo mật phía frontend. Payload độc hại có thể chạy trong phiên admin, dẫn tới đánh cắp token, thao tác trái phép hoặc làm sai dữ liệu quản trị.

### Hướng sửa đề xuất

1. Không dùng `dangerouslySetInnerHTML` cho dữ liệu người dùng nhập.
2. Render trực tiếp bằng JSX text: `{o.shipping_address || "Chưa cập nhật"}`.
3. Nếu cần hỗ trợ định dạng, phải sanitize bằng thư viện đáng tin cậy trước khi render.
4. Chạy lại C-DT-15 và C-BVA-08.
