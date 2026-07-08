# Bug/Warning Report - Feature B: FR-11 Xem lịch sử đơn hàng của người dùng

## 1. Tổng quan lỗi đã ghi nhận

| ID | Loại | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test phát hiện | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BUG-B-01 | Bug của FR-11 | API `GET /api/orders/:id` cho phép xem chi tiết đơn hàng của người khác | Critical | Cao | Đã tái hiện | B-DT-13, B-BVA-05 | `domain-testing/B-DT-13.png`, `boundary-value-analysis/B-BVA-05.png` |
| WARNING-B-01 | Warning liên feature FR-10 | Người dùng vẫn thấy nút hủy cho đơn đang ở trạng thái `shipping`; backend cũng không chặn `shipping` theo mã nguồn | Major | Cao | Đã tái hiện qua UI, đã đối chiếu thêm mã nguồn backend | B-DT-09, B-BVA-07 | `domain-testing/B-DT-09.png`, `boundary-value-analysis/B-BVA-07.png` |

Ảnh minh chứng GitHub issue/screenshot bug nằm trong `bug-report/screenshots`: `BUG-B-01-1.png`, `BUG-B-01-2.png`, `WARNING-B-01-1.png`, `WARNING-B-01-2.png`.

## 2. BUG-B-01 - Lộ chi tiết đơn hàng không thuộc người dùng hiện tại

### Mô tả

FR-11 yêu cầu người dùng chỉ được xem lịch sử đơn hàng của chính mình. API danh sách `GET /api/orders/my-orders` đã lọc theo `req.user.id`, nhưng API chi tiết `GET /api/orders/:id` chỉ truy vấn theo `id`. Khi đăng nhập bằng user khác và gọi trực tiếp mã đơn không thuộc user đó, hệ thống vẫn trả dữ liệu đơn hàng.

### Môi trường kiểm thử

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-11 - Xem lịch sử đơn hàng của người dùng |
| Endpoint lỗi | `GET /api/orders/:id` |
| File mã nguồn liên quan | `Eshop/backend/server.js` |
| Test liên quan | B-DT-13, B-BVA-05 |

### Bước tái hiện

1. Đăng nhập bằng một tài khoản user hợp lệ.
2. Lấy token của user đó.
3. Chọn một `order_id` đang thuộc user khác, ví dụ đơn của admin hoặc user khác.
4. Gửi request `GET /api/orders/<order_id-cua-user-khac>`.
5. Quan sát response trả về.

### Kết quả mong đợi

API phải từ chối truy cập nếu đơn hàng không thuộc user hiện tại. Kết quả hợp lệ nên là `403 Forbidden` hoặc `404 Order not found`, và không được trả bất kỳ dữ liệu chi tiết đơn hàng nào.

### Kết quả thực tế

API trả chi tiết đơn hàng của user khác. Kết quả này được ghi nhận trong B-DT-13 và B-BVA-05 với verdict `Fail`.

### Tác động

Đây là lỗi bảo mật dữ liệu. Người dùng có thể xem thông tin đơn hàng không thuộc mình nếu đoán hoặc biết `order_id`, bao gồm mã đơn, tổng tiền, trạng thái, địa chỉ giao hàng và thời điểm tạo đơn.

### Nguyên nhân mã nguồn

Trong `Eshop/backend/server.js`, route chi tiết đơn hàng đang được khai báo không có middleware xác thực và không lọc theo chủ sở hữu:

```js
app.get("/api/orders/:id", (req, res) => {
  db.get("SELECT * FROM orders WHERE id = ?", [req.params.id], ...);
});
```

### Hướng sửa đề xuất

1. Thêm `authenticateToken` cho `GET /api/orders/:id`.
2. Nếu người gọi là user thường, query phải dùng `WHERE id = ? AND user_id = ?`.
3. Nếu admin cần xem mọi đơn, nên dùng route admin riêng và kiểm tra role rõ ràng.
4. Chạy lại B-DT-13 và B-BVA-05 sau khi sửa.

## 3. WARNING-B-01 - FR-11 hiển thị thao tác không hợp lệ do rule FR-10

### Mô tả

Theo FR-10, người dùng chỉ được hủy đơn khi trạng thái là `pending` hoặc `confirmed`. Tuy nhiên trong lịch sử đơn hàng ở `/profile`, đơn `shipping` vẫn hiển thị nút hủy. Vì quy tắc cấm hủy đơn `shipping` thuộc FR-10, trường hợp này được ghi nhận là warning của Feature B thay vì bug trực tiếp của FR-11.

### Môi trường kiểm thử

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop web frontend và backend API |
| Feature liên quan | FR-11 hiển thị dữ liệu, FR-10 định nghĩa state machine |
| File frontend liên quan | `Eshop/frontend-web/src/pages/Profile.jsx` |
| Endpoint backend liên quan | `PUT /api/orders/:id/cancel` |
| Test liên quan | B-DT-09, B-BVA-07 |

### Bước tái hiện

1. Tạo một đơn hàng thuộc user hiện tại.
2. Chuyển trạng thái đơn sang `shipping`.
3. Đăng nhập bằng user sở hữu đơn.
4. Mở trang `/profile`.
5. Quan sát dòng đơn có trạng thái `Đang giao`.

### Kết quả mong đợi

Đơn đang `shipping` chỉ được hiển thị trạng thái, không được hiển thị nút hủy. Nếu user gọi trực tiếp API hủy đơn `shipping`, backend cũng phải từ chối.

### Kết quả thực tế

UI vẫn hiển thị nút hủy cho đơn `shipping`. Kết quả này được ghi nhận trong B-DT-09 và B-BVA-07 với verdict `Warning` vì FR-11 đang bộc lộ một thao tác không hợp lệ theo quy tắc trạng thái của FR-10. Khi đối chiếu mã nguồn backend, route hủy đơn cũng chỉ chặn `delivered` và `canceled`, nên `shipping` chưa được bảo vệ ở tầng API.

### Tác động

Người dùng có thể thực hiện thao tác không hợp lệ trên đơn đang giao. Nếu backend cũng cho phép cập nhật, dữ liệu đơn hàng sẽ chuyển từ `shipping` sang `canceled`, gây sai lệch quy trình xử lý đơn. Tuy nhiên trách nhiệm nghiệp vụ gốc nằm ở FR-10, nên không tính đây là bug chính của FR-11.

### Nguyên nhân mã nguồn

Trong `Eshop/frontend-web/src/pages/Profile.jsx`, điều kiện hiển thị nút hủy chỉ ẩn nút khi đơn đã `delivered` hoặc `canceled`:

```jsx
{o.status !== "delivered" && o.status !== "canceled" && (
  <button onClick={() => cancelOrder(o.id)}>Hủy</button>
)}
```

Trong `Eshop/backend/server.js`, route hủy đơn cũng chỉ chặn `delivered` và `canceled`, chưa chặn `shipping`.

### Hướng sửa đề xuất

1. Frontend chỉ hiển thị nút hủy khi `o.status === "pending" || o.status === "confirmed"`.
2. Backend `PUT /api/orders/:id/cancel` chỉ cho phép hủy khi trạng thái hiện tại là `pending` hoặc `confirmed`.
3. Chạy lại B-DT-09, B-DT-14, B-BVA-07 và các test Feature D liên quan tới state machine.

## 4. Ghi chú không lập bug riêng

| Trường hợp | Kết quả | Lý do |
| --- | --- | --- |
| B-BVA-08 - trạng thái lạ `returned` | Pass, UI không crash và hiển thị nhãn dự phòng | Có thể cải thiện màu fallback để dễ phân biệt hơn, nhưng chưa đủ điều kiện lập bug chức năng. |
| B-DT-05/B-DT-06 - thiếu hoặc sai token ở `/api/orders/my-orders` | Pass | API danh sách lịch sử đơn hàng xử lý đúng 401/403. |
| B-BVA-04 - mã đơn không tồn tại | Pass | API trả `404 Order not found` đúng mong đợi. |
