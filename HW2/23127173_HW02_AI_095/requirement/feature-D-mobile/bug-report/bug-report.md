# Bug Report - FR-10 Trạng thái đơn hàng

| Bug ID | Tóm tắt | Severity | Priority | GitHub Issue | Bằng chứng | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-D-01 | User hủy đơn route allows `shipping` orders to be canceled | Major | Cao | Chờ bổ sung | `backend/server.js` cancel route rejects only `delivered` and `canceled` | Đã xác định từ source; chờ thực thi xác nhận |
| BUG-D-02 | Admin status route allows `canceled -> delivered` | Major | Cao | Chờ bổ sung | `backend/server.js` state transition branch | Đã xác định từ source; chờ thực thi xác nhận |

## BUG-D-01 - User Can Cancel Shipping Order

### Các bước tái hiện

1. Create an order for a user.
2. Move it to `shipping` as admin.
3. Login as that user or use the user's token.
4. Call `PUT /api/orders/<id>/cancel`.

### Kết quả mong đợi

Request bị reject vì user chỉ được hủy đơn ở trạng thái `pending` hoặc `confirmed`.

### Kết quả thực tế

Chờ thực thi. Source rejects only `delivered` and `canceled`, so `shipping` is likely canceled.

## BUG-D-02 - Canceled Order Can Become Delivered

### Các bước tái hiện

1. Create or set an order to `canceled`.
2. Call `PUT /api/admin/orders/<id>/status` with `{"status":"delivered"}`.

### Kết quả mong đợi

Request is rejected because `canceled` is a final state.

### Kết quả thực tế

Chờ thực thi. Source marks `currentStatus === "canceled" && status === "delivered"` as valid.





