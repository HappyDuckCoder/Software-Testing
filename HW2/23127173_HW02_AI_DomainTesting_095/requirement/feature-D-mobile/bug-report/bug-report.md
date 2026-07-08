# Bug Report - Feature D Mobile: FR-10 Máy trạng thái đơn hàng

## 1. Tổng quan lỗi đã ghi nhận

| Bug ID | Tóm tắt | Mức độ | Ưu tiên | Trạng thái | Test phát hiện | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-D-01 | User có thể hủy đơn đang ở trạng thái `shipping` | Major | Cao | Đã tái hiện | D-DT-07, D-BVA-07 | `domain-testing/D-DT-07.png`, `boundary-value-analysis/D-BVA-07.png` |
| BUG-D-02 | Admin có thể chuyển đơn `canceled` sang `delivered` | Major | Cao | Đã tái hiện | D-DT-13, D-BVA-08 | `domain-testing/D-DT-13.png`, `boundary-value-analysis/D-BVA-08.png` |

Ảnh minh chứng GitHub issue/screenshot bug nằm trong `bug-report/screenshots`: `BUG-D-01-1.png`, `BUG-D-01-2.png`, `BUG-D-02-1.png`, `BUG-D-02-2.png`. Nếu giảng viên yêu cầu link issue thật, cần gắn thêm URL issue vào từng bug trước khi nộp.

## 2. BUG-D-01 - User hủy được đơn đang giao

### Mô tả

Theo FR-10, user chỉ được hủy đơn khi đơn còn ở `pending` hoặc `confirmed`. Khi đơn đã sang `shipping`, nghĩa là đơn đã bắt đầu giao, user không được hủy nữa. Tuy nhiên khi chạy D-DT-07 và D-BVA-07, hệ thống vẫn cho user hủy đơn `shipping`.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API và luồng user/mobile |
| Feature | FR-10 - Máy trạng thái đơn hàng |
| Endpoint lỗi | `PUT /api/orders/:id/cancel` |
| Actor | User sở hữu đơn |
| Test liên quan | D-DT-07, D-BVA-07 |

### Bước tái hiện

1. Đăng nhập bằng user thường.
2. Tạo một đơn mới, mặc định ở `pending`.
3. Dùng admin chuyển đơn lần lượt sang `confirmed`, rồi `shipping`.
4. Dùng token của chính user gọi `PUT /api/orders/<id>/cancel`.
5. Kiểm tra response và trạng thái đơn sau khi gọi API.

### Kết quả mong đợi

API phải từ chối thao tác hủy, ví dụ trả `400 Cannot cancel this order.`. Trạng thái đơn phải giữ nguyên là `shipping`.

### Kết quả thực tế

API vẫn cho hủy thành công và trạng thái đơn chuyển sang `canceled`. D-DT-07 và D-BVA-07 đều có verdict `Fail`.

### Tác động

Đơn đang giao có thể bị hủy bởi user. Điều này làm sai quy trình vận hành, gây lệch dữ liệu giao hàng và có thể ảnh hưởng tới hoàn tiền, tồn kho hoặc xử lý đơn thực tế.

### Nguyên nhân mã nguồn

Trong `Eshop/backend/server.js`, route hủy đơn chỉ chặn `delivered` và `canceled`:

```js
if (order.status === "delivered" || order.status === "canceled") {
  return res.status(400).json({ error: "Cannot cancel this order." });
}
```

Vì `shipping` không bị chặn, request hủy vẫn đi tiếp.

### Hướng sửa đề xuất

Chỉ cho phép hủy khi trạng thái hiện tại là `pending` hoặc `confirmed`:

```js
if (order.status !== "pending" && order.status !== "confirmed") {
  return res.status(400).json({ error: "Cannot cancel this order." });
}
```

Sau khi sửa, chạy lại D-DT-07, D-BVA-07 và các test liên quan ở Feature B.

## 3. BUG-D-02 - Đơn đã hủy vẫn chuyển được sang đã giao

### Mô tả

Theo FR-10, `canceled` là trạng thái kết thúc. Một đơn đã hủy thì không được chuyển sang `delivered`. Tuy nhiên D-DT-13 và D-BVA-08 cho thấy admin vẫn chuyển được `canceled -> delivered`.

### Môi trường

| Mục | Giá trị |
| --- | --- |
| Ứng dụng | EShop backend API và admin UI |
| Feature | FR-10 - Máy trạng thái đơn hàng |
| Endpoint lỗi | `PUT /api/admin/orders/:id/status` |
| Actor | Admin |
| Test liên quan | D-DT-13, D-BVA-08 |

### Bước tái hiện

1. Tạo hoặc chọn một đơn hàng.
2. Chuyển đơn sang `canceled`.
3. Gọi `PUT /api/admin/orders/<id>/status` với body:

```json
{
  "status": "delivered"
}
```

4. Kiểm tra response và trạng thái đơn sau khi cập nhật.

### Kết quả mong đợi

API phải trả `400 Invalid state transition`. Trạng thái đơn phải giữ nguyên là `canceled`.

### Kết quả thực tế

Backend cho phép cập nhật thành `delivered`. D-DT-13 và D-BVA-08 đều fail.

### Tác động

Đơn đã hủy có thể bị tính thành đơn đã giao. Điều này làm sai lịch sử trạng thái, sai báo cáo vận hành và có thể làm lệch doanh thu hoặc thống kê đơn hoàn tất.

### Nguyên nhân mã nguồn

Trong `Eshop/backend/server.js`, có nhánh cho phép transition sai:

```js
if (currentStatus === "canceled" && status === "delivered")
  isValidTransition = true;
```

### Hướng sửa đề xuất

Xóa nhánh `canceled -> delivered`, và định nghĩa state machine bằng bảng rõ ràng:

```js
const transitions = {
  pending: ["confirmed", "canceled"],
  confirmed: ["shipping", "canceled"],
  shipping: ["delivered"],
  delivered: [],
  canceled: []
};
```

Sau khi sửa, chạy lại D-DT-13, D-BVA-08 và các test liên quan ở Feature C.

## 4. Ghi chú

Các test pass cho thấy state machine không hỏng toàn bộ. Hệ thống vẫn xử lý đúng nhiều đường quan trọng như tạo đơn `pending`, chuyển `pending -> confirmed -> shipping -> delivered`, chặn `pending -> shipping`, chặn `delivered -> canceled`, chặn trạng thái lạ và chặn user hủy đơn của người khác. Hai bug chính nằm ở đúng hai “cửa thoát” nguy hiểm: user hủy khi đã giao và admin mở lại đơn đã hủy.
