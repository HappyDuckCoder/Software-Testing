# Bug Report - FR-10 Máy trạng thái đơn hàng

## 1. Tổng quan lỗi

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test liên quan | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-D-01 | User có thể hủy đơn ở trạng thái `shipping` | Major | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | D-DT-07, D-BVA-07 | `backend/server.js` route hủy đơn |
| BUG-D-02 | Admin có thể chuyển đơn `canceled` sang `delivered` | Major | Cao | Xác định từ mã nguồn, chờ thực thi xác nhận | D-DT-13, D-BVA-08 | `backend/server.js` route cập nhật trạng thái admin |

GitHub Issue: chờ bổ sung link issue thật sau khi xác nhận bằng SUT.

## 2. BUG-D-01 - User hủy được đơn đang giao

### Mô tả

FR-10 quy định user chỉ được hủy đơn khi trạng thái là `pending` hoặc `confirmed`. Trạng thái `shipping` không còn nằm trong khoảng được phép hủy vì đơn đã bắt đầu giao. Tuy nhiên backend route `PUT /api/orders/:id/cancel` hiện chỉ từ chối `delivered` và `canceled`, nên `shipping` vẫn lọt qua điều kiện và bị cập nhật thành `canceled`.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API và web/mobile flow |
| Feature | FR-10 Máy trạng thái đơn hàng |
| Endpoint | `PUT /api/orders/:id/cancel` |
| Actor | User sở hữu đơn |

### Bước tái hiện

1. Đăng nhập bằng user thường.
2. Tạo một đơn hàng mới, trạng thái ban đầu là `pending`.
3. Dùng admin chuyển đơn sang `confirmed`, rồi sang `shipping`.
4. Dùng token của user sở hữu đơn gọi `PUT /api/orders/<id>/cancel`.
5. Lấy lại đơn hàng để kiểm tra trạng thái.

### Kết quả mong đợi

API phải trả 400 hoặc thông báo không thể hủy đơn. Trạng thái đơn phải giữ nguyên là `shipping`.

### Kết quả thực tế dự kiến theo mã nguồn

Route chỉ kiểm tra:

```js
if (order.status === "delivered" || order.status === "canceled") {
  return res.status(400).json({ error: "Cannot cancel this order." });
}
```

Do đó đơn `shipping` không bị từ chối và có thể bị cập nhật thành `canceled`.

### Tác động

Máy trạng thái bị phá vỡ. User có thể hủy đơn đang giao, gây sai lệch vận hành, sai trạng thái giao hàng và có thể ảnh hưởng hoàn tiền/kho hàng.

### Hướng sửa đề xuất

1. Đổi điều kiện backend thành chỉ cho phép:

```js
if (order.status !== "pending" && order.status !== "confirmed") {
  return res.status(400).json({ error: "Cannot cancel this order." });
}
```

2. Đồng bộ UI/web/mobile để chỉ hiển thị nút hủy ở `pending` và `confirmed`.
3. Chạy lại D-DT-07, D-BVA-07 và các test liên quan của Feature B.

## 3. BUG-D-02 - Trạng thái kết thúc `canceled` vẫn chuyển được sang `delivered`

### Mô tả

Trong máy trạng thái FR-10, `canceled` và `delivered` là trạng thái kết thúc. Khi đơn đã bị hủy, hệ thống không được chuyển đơn đó sang `delivered`. Tuy nhiên route admin cập nhật trạng thái hiện cho phép `canceled -> delivered`.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API |
| Feature | FR-10 Máy trạng thái đơn hàng |
| Endpoint | `PUT /api/admin/orders/:id/status` |
| Actor | Admin |

### Bước tái hiện

1. Tạo một đơn hàng hoặc chọn đơn đang tồn tại.
2. Chuyển đơn sang trạng thái `canceled`.
3. Gọi:

```http
PUT /api/admin/orders/<id>/status
Content-Type: application/json

{"status":"delivered"}
```

4. Lấy lại danh sách đơn để kiểm tra trạng thái.

### Kết quả mong đợi

API phải trả 400 vì `canceled` là trạng thái kết thúc. Trạng thái đơn phải giữ nguyên là `canceled`.

### Kết quả thực tế dự kiến theo mã nguồn

Backend đánh dấu transition này là hợp lệ:

```js
if (currentStatus === "canceled" && status === "delivered")
  isValidTransition = true;
```

### Tác động

Đơn đã hủy có thể bị biến thành đơn đã giao. Điều này làm sai lịch sử trạng thái, sai báo cáo doanh thu và sai logic quản trị đơn hàng.

### Hướng sửa đề xuất

1. Xóa transition `canceled -> delivered`.
2. Định nghĩa state machine bằng bảng chuyển trạng thái hợp lệ, trong đó:
   * `delivered: []`
   * `canceled: []`
3. Bổ sung test tự động cho các trạng thái kết thúc.
4. Chạy lại D-DT-13, D-BVA-08 và các test liên quan của Feature C.
