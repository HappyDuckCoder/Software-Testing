# Bug Report - Feature C: FR-18 Quản lý đơn hàng của admin

## 1. Tổng quan lỗi đã ghi nhận

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test phát hiện | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-C-01 | User thường có thể gọi API quản lý đơn hàng admin | Critical | Cao | Đã tái hiện | C-DT-04 | `domain-testing/C-DT-04.png` |
| BUG-C-02 | Đơn đã hủy vẫn có thể chuyển thành đã giao | Major | Cao | Đã tái hiện | C-DT-12, C-DT-16, C-BVA-06 | `domain-testing/C-DT-12.png`, `boundary-value-analysis/C-BVA-06.png` |
| BUG-C-03 | Admin UI thực thi HTML/script trong địa chỉ giao hàng | Critical | Cao | Đã tái hiện | C-DT-15, C-BVA-08 | `domain-testing/C-DT-15-1.png`, `domain-testing/C-DT-15-2.png`, `boundary-value-analysis/C-BVA-08-1.png`, `boundary-value-analysis/C-BVA-08-2.png` |

GitHub Issue: chưa có link issue thật trong tài liệu. Nếu rubric yêu cầu, cần tạo issue và gắn link vào từng bug.

## 2. BUG-C-01 - User thường truy cập được API admin orders

### Mô tả

FR-18 là chức năng dành cho admin. Vì vậy các API như `GET /api/admin/orders` và `PUT /api/admin/orders/:id/status` phải kiểm tra người gọi có quyền admin. Khi test C-DT-04, token của user thường vẫn xem được danh sách đơn hàng admin.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-18 - Quản lý đơn hàng admin |
| Endpoint lỗi | `GET /api/admin/orders` |
| Tài khoản test | `test@eshop.com` / `Test1234!` |
| Test liên quan | C-DT-04 |

### Bước tái hiện

1. Đăng nhập bằng user thường `test@eshop.com`.
2. Lấy bearer token của user thường.
3. Gửi request `GET /api/admin/orders` với token này.
4. Quan sát response.

### Kết quả mong đợi

API phải trả `403 Forbidden` hoặc thông báo không có quyền admin.

### Kết quả thực tế

API trả danh sách đơn hàng admin cho user thường. Test C-DT-04 có verdict `Fail`.

### Tác động

Đây là lỗi phân quyền nghiêm trọng. User thường có thể xem toàn bộ đơn hàng trong hệ thống, bao gồm thông tin khách hàng, tổng tiền, trạng thái và địa chỉ giao hàng. Nếu lỗi tương tự tồn tại ở API cập nhật trạng thái, user thường còn có thể can thiệp vào vận hành đơn hàng.

### Nguyên nhân mã nguồn

Trong `Eshop/backend/server.js`, route admin orders chỉ dùng `authenticateToken`, chưa kiểm tra `req.user.role === "admin"`.

### Hướng sửa đề xuất

1. Thêm middleware `authorizeAdmin`.
2. Áp dụng cho toàn bộ route `/api/admin/*`.
3. Trả `403` khi token hợp lệ nhưng role không phải admin.
4. Chạy lại C-DT-04 và các API admin liên quan.

## 3. BUG-C-02 - Đơn `canceled` vẫn chuyển được sang `delivered`

### Mô tả

Theo FR-10, `canceled` là trạng thái kết thúc. Khi đơn đã hủy thì không được chuyển sang trạng thái khác. Nhưng khi test C-DT-12 và C-BVA-06, backend vẫn cho chuyển `canceled -> delivered`. Trên UI admin, C-DT-16 cũng cho thấy đơn đã hủy vẫn hiện nút “Đánh dấu Đã giao”.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API và admin frontend |
| Feature | FR-18 kết hợp state machine FR-10 |
| Endpoint lỗi | `PUT /api/admin/orders/:id/status` |
| UI liên quan | Tab Orders trong admin |
| Test liên quan | C-DT-12, C-DT-16, C-BVA-06 |

### Bước tái hiện qua API

1. Tạo hoặc chọn một đơn hàng.
2. Chuyển đơn sang `canceled`.
3. Gửi `PUT /api/admin/orders/<id>/status` với body:

```json
{
  "status": "delivered"
}
```

4. Quan sát response và trạng thái đơn sau cập nhật.

### Bước tái hiện qua UI

1. Đăng nhập admin.
2. Mở tab Orders.
3. Tìm một đơn đang ở trạng thái `Đã hủy`.
4. Quan sát cột thao tác.

### Kết quả mong đợi

API phải trả `400 Invalid state transition`. UI không được hiển thị nút chuyển trạng thái cho đơn đã hủy.

### Kết quả thực tế

Backend cho phép chuyển `canceled -> delivered`. UI cũng hiển thị nút “Đánh dấu Đã giao” cho đơn `canceled`. C-DT-12, C-DT-16 và C-BVA-06 đều fail.

### Tác động

Đơn đã hủy có thể bị tính thành đơn đã giao. Điều này làm sai dữ liệu vận hành, sai báo cáo trạng thái đơn và có thể ảnh hưởng tới thống kê doanh thu.

### Nguyên nhân mã nguồn

Trong `Eshop/backend/server.js` có nhánh cho phép transition sai:

```js
if (currentStatus === "canceled" && status === "delivered")
  isValidTransition = true;
```

Trong `Eshop/frontend-admin/src/App.jsx`, UI cũng hiển thị nút chuyển `canceled -> delivered`:

```jsx
{o.status === "canceled" && (
  <button onClick={() => updateOrderStatus(o.id, "delivered")}>
    Đánh dấu Đã giao
  </button>
)}
```

### Hướng sửa đề xuất

1. Xóa transition `canceled -> delivered`.
2. Định nghĩa state machine bằng map rõ ràng, ví dụ:

```js
const transitions = {
  pending: ["confirmed", "canceled"],
  confirmed: ["shipping", "canceled"],
  shipping: ["delivered"],
  delivered: [],
  canceled: []
};
```

3. UI chỉ render nút theo chính map transition hợp lệ.
4. Chạy lại C-DT-12, C-DT-16 và C-BVA-06.

## 4. BUG-C-03 - XSS qua địa chỉ giao hàng trên admin UI

### Mô tả

Địa chỉ giao hàng là dữ liệu do user nhập. Khi admin xem Orders, hệ thống phải hiển thị địa chỉ như văn bản thường. Tuy nhiên C-DT-15 và C-BVA-08 cho thấy payload HTML/script trong `shipping_address` được thực thi, ví dụ xuất hiện `alert(1)`.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop admin frontend |
| Feature | FR-18 - Quản lý đơn hàng admin |
| File liên quan | `Eshop/frontend-admin/src/App.jsx` |
| Dữ liệu nguy hiểm | `shipping_address` |
| Test liên quan | C-DT-15, C-BVA-08 |

### Bước tái hiện

1. Tạo đơn hàng có địa chỉ giao hàng chứa payload:

```html
<b>C-DT-15</b><img src=x onerror=alert(1)>
```

2. Đăng nhập admin.
3. Mở tab Orders.
4. Quan sát ô địa chỉ giao hàng.

### Kết quả mong đợi

Địa chỉ phải hiển thị nguyên văn như text. HTML không được render, script không được chạy và không được xuất hiện alert.

### Kết quả thực tế

Script trong địa chỉ được thực thi. C-DT-15 và C-BVA-08 đều fail.

### Tác động

Đây là lỗi XSS trên màn hình admin. Nếu payload độc hại chạy trong phiên admin, kẻ tấn công có thể đánh cắp token, giả mạo thao tác quản trị hoặc làm sai dữ liệu hệ thống.

### Nguyên nhân mã nguồn

Trong `Eshop/frontend-admin/src/App.jsx`, `shipping_address` được render bằng HTML thô:

```jsx
<td
  dangerouslySetInnerHTML={{
    __html: o.shipping_address || "Chưa cập nhật",
  }}
/>
```

### Hướng sửa đề xuất

1. Không dùng `dangerouslySetInnerHTML` cho dữ liệu người dùng nhập.
2. Render bằng JSX text:

```jsx
<td>{o.shipping_address || "Chưa cập nhật"}</td>
```

3. Nếu thật sự cần hỗ trợ HTML có định dạng, phải sanitize bằng thư viện đáng tin cậy trước khi render.
4. Chạy lại C-DT-15 và C-BVA-08.

## 5. Ghi chú

Các test pass như C-DT-01, C-DT-03, C-DT-10, C-DT-11, C-DT-13, C-DT-14 và C-BVA-05 cho thấy hệ thống không hỏng toàn bộ. Lỗi chủ yếu nằm ở các điểm dễ bị bỏ sót: phân quyền role, trạng thái kết thúc `canceled`, và dữ liệu người dùng nhập được render lại cho admin.
