# Bug Report - FR-11 Xem lịch sử đơn hàng (user)

| Bug ID | Tóm tắt | Severity | Priority | GitHub Issue | Bằng chứng | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-B-01 | `GET /api/orders/:id` exposes order detail without authentication/ownership check | Critical | Cao | Chờ bổ sung | `Eshop/backend/server.js` detail route | Đã xác định từ source; chờ thực thi xác nhận |
| BUG-B-02 | User history UI shows cancel button for `shipping` orders | Major | Cao | Chờ bổ sung | `Profile.jsx` condition hides only `delivered` and `canceled` | Đã xác định từ source; chờ thực thi xác nhận |

## BUG-B-01 - Order Detail Route May Leak Other Users' Orders

### Tóm tắt

`GET /api/orders/:id` returns an order by id without `authenticateToken` and without checking `user_id`, which can expose another user's order detail.

### Các bước tái hiện

1. Create or identify an order id for another user.
2. Send `GET /api/orders/<id>` without token or with a different user's token.
3. Observe response.

### Kết quả mong đợi

The API should require authentication and return only the token owner's order or reject access.

### Kết quả thực tế

Chờ thực thi. Source indicates the route returns the order directly.

## BUG-B-02 - User Can Attempt To Cancel Shipping Order From History

### Tóm tắt

FR-10 says user cannot cancel an order in `shipping`, but the order history UI shows the cancel button for every status except `delivered` and `canceled`.

### Các bước tái hiện

1. Create an order for a user and move it to `shipping`.
2. Login as that user and open `/profile`.
3. Inspect action column and attempt cancellation.

### Kết quả mong đợi

No user cancel action is shown for `shipping`; API should reject user cancellation.

### Kết quả thực tế

Chờ thực thi. Source indicates the button is visible and backend cancel route rejects only `delivered` and `canceled`.





