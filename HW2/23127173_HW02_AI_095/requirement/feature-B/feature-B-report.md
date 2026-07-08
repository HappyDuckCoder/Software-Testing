# Báo cáo Feature B - Pool B

## 1. Lựa chọn feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B - Shopping Cart and Checkout |
| Feature đã chọn | Xem lịch sử đơn hàng (user) |
| Feature ID | FR-11 |
| Lý do chọn | Repo EShop hiện thực lịch sử đơn hàng bằng API có xác thực và phần render frontend, có các khía cạnh cần test: ownership, nhãn trạng thái, thứ tự sắp xếp và hiển thị action. |
| Trạng thái | Đã thiết kế test case dựa trên mã nguồn EShop; chờ thực thi trên SUT |

## 2. Phân tích feature từ repo EShop

| Mục | Ghi chú |
| --- | --- |
| Actor/vai trò | Khách hàng/người dùng đã đăng nhập. |
| Tiền điều kiện | User có token hợp lệ; có thể tạo đơn hàng bằng `POST /api/checkout`. |
| Luồng chính | User mở `/profile`; `Profile.jsx` gọi `GET /api/orders/my-orders`; UI hiển thị mã đơn, ngày đặt, tổng tiền, nhãn/màu trạng thái và nút hủy khi có. |
| Luồng thay thế/lỗi | Thiếu/token không hợp lệ; user chưa có đơn; nhiều đơn; truy cập đơn không thuộc user; nhãn/action theo từng trạng thái. |
| Biến đầu vào | Token xác thực, user id từ JWT, trạng thái đơn, số lượng đơn, mã đơn, tổng tiền, ngày tạo. |
| Kết quả đầu ra | API chỉ trả đơn của user hiện tại theo `id DESC`; UI hiển thị bảng hoặc thông báo rỗng. |
| Luật nghiệp vụ | User chỉ xem được đơn của chính mình; hiển thị mã/ngày/tổng tiền/trạng thái; trạng thái được dịch sang tiếng Việt và phân biệt bằng màu. |
| Bằng chứng mã nguồn | `Eshop/README.md` FR-11, `Eshop/api_specification.md` 4.4, `Eshop/backend/server.js`, `Eshop/frontend-web/src/pages/Profile.jsx`. |

## 3. Tóm tắt feature - FR-11 Xem lịch sử đơn hàng (user)

### 3.1 Phạm vi

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Actor | Người dùng web đã đăng nhập |
| Môi trường | EShop web frontend + backend API |

### 3.2 Phân tích luồng

| Luồng | Các bước | Kết quả mong đợi | Bằng chứng |
| --- | --- | --- | --- |
| Liệt kê đơn của chính user | Đăng nhập và gọi `/api/orders/my-orders` | Chỉ có đơn với `orders.user_id = req.user.id`, sắp xếp id mới nhất trước | `backend/server.js` |
| Rỗng order history | Đăng nhập bằng user chưa có đơn rồi mở hồ sơ | UI hiển thị `Bạn chưa có đơn hàng nào.` | `Profile.jsx` |
| Hiển thị trạng thái | Render các dòng đơn hàng kèm trạng thái | Trạng thái được dịch và tô màu cho `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | `Profile.jsx` |
| API chưa xác thực | Gọi `/api/orders/my-orders` khi thiếu token hoặc token không hợp lệ | Thiếu token trả 401, token không hợp lệ trả 403 | `authenticateToken` |
| Rủi ro lộ chi tiết đơn | Gọi `/api/orders/:id` | Route trong mã nguồn không kiểm tra auth/ownership nên có thể lộ đơn của user khác | `backend/server.js` |

### 3.3 Danh mục đầu vào / đầu ra

| Biến | Kiểu | Nguồn | Quy tắc |
| --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | API/AuthContext | Bắt buộc cho `/api/orders/my-orders`. |
| User id | JWT claim | `server.js` | Query lọc theo user id hiện tại. |
| Trạng thái đơn | Văn bản/tập giá trị | DB/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled`; label/style được định nghĩa trong UI. |
| Số lượng đơn | Số/state | DB/API/UI | Danh sách rỗng hiển thị thông báo; danh sách không rỗng hiển thị bảng. |
| Mã đơn | Số | DB/API/UI | Bảng hiển thị `#id`; API sắp xếp `ORDER BY id DESC`. |
| Total amount | Số | DB/API/UI | UI uses `Số(...).toLocaleString()` and currency suffix. |

## 4. Báo cáo liên kết

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Tóm tắt thực thi

| Đã thiết kế | Đã chạy | Pass | Fail | Chưa chạy | Bug |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 22 | 0 | 0 | 0 | 22 | 2 |









