# Báo cáo Feature D Mobile - Pool D

## 1. Lựa chọn feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool D - Mobile App |
| Feature đã chọn | Trạng thái đơn hàng (Order state machine) |
| Feature ID | FR-10 |
| Lý do chọn | FR-10 là workflow đơn hàng dùng chung nhiều nền tảng, gồm hủy đơn phía user/mobile và chuyển trạng thái phía admin, với các cạnh trạng thái hợp lệ/không hợp lệ rõ ràng. |
| Status | Đã thiết kế test case dựa trên source EShop; chờ thực thi trên SUT/mobile |

## 2. Phân tích feature từ repo EShop

| Mục | Ghi chú |
| --- | --- |
| Actor/vai trò | User/mobile user chỉ được hủy đơn của chính mình khi `pending` hoặc `confirmed`; admin có thể chuyển/hủy đơn qua admin API. |
| Thiết bị/emulator/browser | Mobile app hoặc luồng user tương đương mobile; backend API dùng chung với web. |
| Tiền điều kiện | Có đơn hàng; có token user/admin; có thể chuẩn bị trạng thái đơn qua checkout/admin API. |
| Luồng chính | Đơn bắt đầu ở `pending`; admin có thể chuyển `pending -> confirmed -> shipping -> delivered`; user/admin có thể hủy `pending` hoặc `confirmed`. |
| Luồng thay thế/lỗi | Transition không hợp lệ, transition từ trạng thái kết thúc, user hủy sau khi shipping, hủy đơn không thuộc sở hữu, thiếu token. |
| Biến đầu vào | Trạng thái hiện tại, trạng thái đích, vai trò actor, token, mã đơn, quyền sở hữu. |
| Kết quả đầu ra | Transition hợp lệ cập nhật `orders.status`; transition không hợp lệ trả lỗi và giữ nguyên trạng thái. |
| Rủi ro riêng trên mobile | Nút/action hủy trên mobile phải tuân theo FR-10; hiển thị trạng thái/action trên màn hình nhỏ không được lộ action không hợp lệ. |
| Bằng chứng source | `Eshop/README.md` FR-10 và FR-20 mobile, `Eshop/backend/server.js`, `Eshop/frontend-web/src/pages/Profile.jsx`, `Eshop/frontend-admin/src/App.jsx`. |

## 3. Tóm tắt feature - FR-10 Trạng thái đơn hàng

### 3.1 Phạm vi

| Mục | Giá trị |
| --- | --- |
| Pool | Pool D / workflow đơn hàng dùng chung |
| Feature ID | FR-10 |
| Actor | User/mobile user và Admin |
| Môi trường | EShop backend API; luồng lịch sử đơn hàng user/mobile; luồng quản lý đơn admin |

### 3.2 Phân tích luồng

| Luồng | Các bước | Kết quả mong đợi | Bằng chứng |
| --- | --- | --- | --- |
| Tạo đơn hàng | User checkout | Đơn mới có trạng thái `pending` | `server.js` checkout route |
| Admin chuyển tiến trình | Admin cập nhật trạng thái pending -> confirmed -> shipping -> delivered | Chuỗi chuyển tiếp hợp lệ được chấp nhận | README FR-10; `server.js` |
| User hủy đơn | User hủy đơn của chính mình khi pending/confirmed | Trạng thái trở thành `canceled` | README FR-10/FR-20 |
| User hủy không hợp lệ | User hủy đơn ở trạng thái shipping/delivered/canceled | Phải bị reject | README FR-10; backend hiện chỉ reject delivered/canceled |
| Bảo vệ trạng thái kết thúc | Thử bất kỳ transition nào từ delivered/canceled | Phải bị reject | README FR-10; backend đang cho phép canceled -> delivered |

### 3.3 Danh mục đầu vào / đầu ra

| Biến | Kiểu | Nguồn | Quy tắc |
| --- | --- | --- | --- |
| Trạng thái hiện tại | Enum | DB/API | Một trong các trạng thái `pending`, `confirmed`, `shipping`, `delivered`, `canceled`. |
| Trạng thái đích | Enum | Admin API | Phải tuân theo graph transition hợp lệ. |
| Vai trò actor | State | User/token admin | User chỉ được hủy đơn của chính mình ở `pending`/`confirmed`; admin điều khiển các transition admin. |
| Quyền sở hữu đơn | State | User hủy đơn route | Query hủy đơn của user có `WHERE id=? AND user_id=?`. |
| Token | Header | API | Action của user/admin yêu cầu token hợp lệ. |

## 4. Báo cáo liên kết

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Tóm tắt thực thi

| Đã thiết kế | Đã chạy | Pass | Fail | Chưa chạy | Bug |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 24 | 0 | 0 | 0 | 24 | 2 |





