# Báo cáo Feature C - Pool C

## 1. Lựa chọn feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool C - Web Admin |
| Feature đã chọn | Quản lý đơn hàng (admin) |
| Feature ID | FR-18 |
| Lý do chọn | Feature quản lý đơn hàng admin của EShop kết hợp kiểm soát truy cập admin, xem toàn bộ đơn, chuyển trạng thái và render an toàn địa chỉ giao hàng. |
| Status | Đã thiết kế test case dựa trên source EShop; chờ thực thi trên SUT |

## 2. Phân tích feature từ repo EShop

| Mục | Ghi chú |
| --- | --- |
| Actor/vai trò | Admin user. Tài khoản seed admin: `admin@eshop.com` / `Admin123!`. |
| Tiền điều kiện | Frontend admin có token trong `adminToken`; backend API chạy tại `localhost:3000`; DB có đơn hàng. |
| Luồng chính | Admin mở tab Orders; frontend gọi `GET /api/admin/orders`; UI liệt kê tất cả đơn với tên user, tổng tiền, địa chỉ giao hàng, trạng thái và nút chuyển trạng thái. |
| Luồng thay thế/lỗi | Thiếu/token không hợp lệ; token user thường; địa chỉ giao hàng chứa HTML độc hại; chuyển trạng thái không hợp lệ; mã đơn không tồn tại. |
| Biến đầu vào | Token xác thực, order id, current status, target status, shipping address content, order list size. |
| Kết quả đầu ra | Admin xem được toàn bộ đơn; chuyển trạng thái hợp lệ thì cập nhật đơn; chuyển trạng thái không hợp lệ trả 400. |
| Luật nghiệp vụ | API admin yêu cầu token admin hợp lệ; admin chuyển trạng thái theo FR-10; địa chỉ giao hàng phải hiển thị an toàn, không render HTML. |
| Bằng chứng source | `Eshop/README.md` FR-18/FR-12/FR-10, `api_specification.md` 6.2, `backend/server.js`, `frontend-admin/src/App.jsx`. |

## 3. Tóm tắt feature - FR-18 Quản lý đơn hàng (admin)

### 3.1 Phạm vi

| Mục | Giá trị |
| --- | --- |
| Pool | Pool C |
| Feature ID | FR-18 |
| Actor | Admin |
| Môi trường | EShop admin frontend + backend API |

### 3.2 Phân tích luồng

| Luồng | Các bước | Kết quả mong đợi | Bằng chứng |
| --- | --- | --- | --- |
| Liệt kê tất cả đơn hàng | Đăng nhập admin, mở tab Orders | Table shows all orders joined with `users.name as user_name`, newest id first | `backend/server.js`, `frontend-admin/src/App.jsx` |
| Cập nhật trạng thái đơn hàng | Click action trạng thái hoặc gọi `PUT /api/admin/orders/:id/status` | Transition hợp lệ theo FR-10 sẽ cập nhật trạng thái | `server.js` |
| Từ chối chuyển trạng thái không hợp lệ | Gửi trạng thái đích không hợp lệ cho trạng thái hiện tại | 400 with `Invalid state transition...` | `server.js` |
| Bắt buộc quyền admin | Dùng token thiếu/không hợp lệ/token user thường | Endpoint admin phải reject user không phải admin | README FR-12; source thiếu middleware kiểm tra role |
| Hiển thị địa chỉ an toàn | Render địa chỉ giao hàng chứa HTML/script | UI phải hiển thị text an toàn | README FR-18; UI uses `dangerouslySetInnerHTML` |

### 3.3 Danh mục đầu vào / đầu ra

| Biến | Kiểu | Nguồn | Quy tắc |
| --- | --- | --- | --- |
| Token admin | Header/trạng thái | README FR-12, admin app | Admin endpoints should require `role='admin'`. |
| Order id | Path param | API route | ID tồn tại can update; missing id returns 404. |
| Trạng thái hiện tại | Enum | DB | Drives allowed target statuses. |
| Trạng thái đích | Enum/body | API/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled`; phải tuân theo FR-10. |
| Shipping address | Text/HTML risk | DB/admin UI | Must be displayed safely, not rendered as HTML. |
| Order list | Array | Admin API | Shows all users' orders with user name. |

## 4. Báo cáo liên kết

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Tóm tắt thực thi

| Đã thiết kế | Đã chạy | Pass | Fail | Chưa chạy | Bug |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 24 | 0 | 0 | 0 | 24 | 3 |





