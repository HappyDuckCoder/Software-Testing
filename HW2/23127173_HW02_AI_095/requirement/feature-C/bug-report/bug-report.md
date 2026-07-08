# Bug Report - FR-18 Quản lý đơn hàng (admin)

| Bug ID | Tóm tắt | Severity | Priority | GitHub Issue | Bằng chứng | Status |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-C-01 | Admin order APIs do not enforce `role='admin'` | Critical | Cao | Chờ bổ sung | `backend/server.js` admin order routes only call `authenticateToken` | Đã xác định từ source; chờ thực thi xác nhận |
| BUG-C-02 | Backend allows `canceled -> delivered` transition | Major | Cao | Chờ bổ sung | `backend/server.js` explicitly marks this transition valid | Đã xác định từ source; chờ thực thi xác nhận |
| BUG-C-03 | Admin order table renders shipping address as raw HTML | Critical | Cao | Chờ bổ sung | `frontend-admin/src/App.jsx` uses `dangerouslySetInnerHTML` | Đã xác định từ source; chờ thực thi xác nhận |

## BUG-C-01 - Normal User Token Can Access Admin Orders API

### Các bước tái hiện

1. Login as `test@eshop.com`.
2. Use that token to call `GET /api/admin/orders`.

### Kết quả mong đợi

API rejects the request because token role is not admin.

### Kết quả thực tế

Chờ thực thi. Source shows no role check in the admin orders route.

## BUG-C-02 - Canceled Order Can Be Marked Delivered

### Các bước tái hiện

1. Create or set an order to `canceled`.
2. Call `PUT /api/admin/orders/<id>/status` with `{"status":"delivered"}`.

### Kết quả mong đợi

400 invalid transition because `canceled` is a final state.

### Kết quả thực tế

Chờ thực thi. Source explicitly allows `currentStatus === "canceled" && status === "delivered"`.

## BUG-C-03 - Shipping Address HTML Injection In Admin Order Table

### Các bước tái hiện

1. Create an order with shipping address `<img src=x onerror=alert(1)>`.
2. Login to admin UI and open Orders tab.

### Kết quả mong đợi

Address is escaped and displayed as text.

### Kết quả thực tế

Chờ thực thi. Source uses `dangerouslySetInnerHTML` to render `shipping_address`.





