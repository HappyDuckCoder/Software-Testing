# Báo cáo Feature A - Pool A

## 1. Lựa chọn feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool A - Xác thực, danh mục và sản phẩm |
| Feature đã chọn | Quản lý hồ sơ cá nhân |
| Feature ID | FR-04 |
| Lý do chọn | Repo EShop có các trường hồ sơ rõ ràng, có quy tắc xác thực, có API cập nhật hồ sơ và có biên kiểm tra số điện thoại phù hợp để áp dụng Domain Testing và Boundary Value Analysis. |
| Trạng thái | Đã thiết kế và đã thực thi 30 test case trên SUT; đã ghi nhận Pass/Fail/Warning và bằng chứng ảnh chụp |

## 2. Phân tích feature từ repo EShop

| Mục | Ghi chú |
| --- | --- |
| Actor/vai trò | Khách hàng/người dùng đã đăng nhập. Dữ liệu seed có `admin@eshop.com` và `test@eshop.com` trong `Eshop/backend/database.js`. |
| Tiền điều kiện | Backend chạy tại `localhost:3000`; frontend chạy bằng Vite; người dùng có JWT token hợp lệ sau khi đăng nhập. |
| Luồng chính | Người dùng mở `/profile`, thấy email bị khóa, chỉnh `name`, `phone`, `shipping_address`, rồi gửi request `PUT /api/users/me`. |
| Luồng thay thế/lỗi | Thiếu token hoặc token không hợp lệ; tên rỗng bị HTML `required` chặn; số điện thoại không hợp lệ bị regex frontend chặn; request API trực tiếp có thể bỏ qua validation frontend; body request có thể chứa trường ngoài dự kiến như `role` hoặc `email`. |
| Biến đầu vào | `Authorization` token, `name`, `phone`, `shipping_address`, email bị khóa, và các trường ngoài dự kiến như `role`, `email`. |
| Kết quả đầu ra | `GET /api/users/me` trả về user hiện tại; `PUT /api/users/me` trả về `{ message: "Profile updated" }`; frontend hiển thị thông báo thành công hoặc lỗi validation. |
| Luật nghiệp vụ | README FR-04 quy định user chỉ được cập nhật họ tên, số điện thoại và địa chỉ giao hàng mặc định; số điện thoại phải bắt đầu bằng `0` và dài 10-11 chữ số; email không được đổi qua UI; user không được tự đổi `role`. |
| Bằng chứng mã nguồn | `Eshop/README.md` FR-04, `Eshop/api_specification.md` mục 2, `Eshop/frontend-web/src/pages/Profile.jsx`, `Eshop/backend/server.js`, `Eshop/backend/database.js`. |

## 3. Tóm tắt feature - FR-04 Quản lý hồ sơ cá nhân

### 3.1 Phạm vi

| Mục | Giá trị |
| --- | --- |
| Pool | Pool A |
| Feature ID | FR-04 |
| Actor | Người dùng web đã đăng nhập |
| Môi trường | EShop web frontend + backend API |

### 3.2 Phân tích luồng

| Luồng | Các bước | Kết quả mong đợi | Bằng chứng |
| --- | --- | --- | --- |
| Xem hồ sơ | Đăng nhập, mở `/profile`; frontend dùng auth context và dữ liệu user hiện tại | Form hồ sơ hiển thị email bị khóa, họ tên, số điện thoại và địa chỉ giao hàng | `frontend-web/src/pages/Profile.jsx` |
| Lấy hồ sơ qua API | Gửi `GET /api/users/me` với bearer token hợp lệ | API trả về user hiện tại từ bảng `users` theo user id trong token | `backend/server.js` |
| Cập nhật hồ sơ hợp lệ | Gửi `PUT /api/users/me` với `name`, `phone`, `shipping_address` | API cập nhật các trường đó cho `req.user.id` và trả về `Profile updated` | `api_specification.md`, `backend/server.js` |
| Từ chối truy cập chưa xác thực | Gọi `GET`/`PUT /api/users/me` khi thiếu token hoặc token không hợp lệ | Thiếu token trả 401; token không hợp lệ trả 403 | `authenticateToken` trong `backend/server.js` |
| Ngăn thay đổi hồ sơ bị cấm | Thử đổi email hoặc `role` qua UI/API | Email không được đổi qua UI; `role` không được cho client tự đổi | `README.md` FR-04; backend hiện đang vi phạm quy tắc `role` |

### 3.3 Danh mục đầu vào / đầu ra

| Biến | Kiểu | Nguồn | Quy tắc |
| --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | Auth context/API | Bắt buộc cho `/api/users/me`; thiếu token trả 401; token không hợp lệ trả 403 |
| `name` | Văn bản | Form hồ sơ/API body | Có thể sửa. Đầu vào UI có `required`; mã nguồn không có giới hạn độ dài tối đa. |
| `phone` | Văn bản | Form hồ sơ/API body | Quy tắc README: bắt đầu bằng `0`, dài 10-11 chữ số. Regex frontend hiện lại nhận `[1-9][0-9]{8,9}`. |
| `shipping_address` | Vùng nhập văn bản/API body | Form hồ sơ/API body | Địa chỉ giao hàng mặc định có thể sửa; mã nguồn không có quy tắc bắt buộc hoặc giới hạn độ dài tối đa. |
| Email | Đầu vào bị khóa | Profile form | Được hiển thị nhưng bị khóa; không nằm trong body cập nhật của frontend. |
| `role` | Trường ngoài dự kiến trong API body | Request API trực tiếp | README nói user không được đổi `role`; backend hiện vẫn cập nhật `role` nếu body có trường này. |

### 3.4 Rủi ro cần kiểm thử

| Rủi ro | Vì sao quan trọng | Cách xác minh |
| --- | --- | --- |
| Validation số điện thoại ở frontend mâu thuẫn README | Số đúng đặc tả như `0912345678` có thể bị từ chối, trong khi số sai không bắt đầu bằng 0 có thể được nhận | Chạy test UI và test API riêng |
| Backend thiếu validation hồ sơ | Gọi API trực tiếp có thể bỏ qua kiểm tra phone/name ở frontend | Chạy các test âm tính bằng `PUT /api/users/me` trực tiếp |
| Backend nhận `role` khi cập nhật hồ sơ | Vi phạm FR-04 và có thể dẫn tới leo thang đặc quyền | Gửi `role: "admin"` trong API body, rồi kiểm tra bằng `GET /api/users/me` |
| Email chỉ bị khóa ở UI | API nên bỏ qua trường email ngoài dự kiến | Gửi `email` trong API body và kiểm tra email không đổi |
| Cần kiểm tra dữ liệu lưu lại bằng API | Chỉ có alert thành công chưa chứng minh DB đã cập nhật | Kiểm tra bằng `GET /api/users/me` sau khi cập nhật |

## 4. Báo cáo liên kết

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Tóm tắt thực thi

| Đã thiết kế | Đã chạy | Pass | Fail | Warning | Chưa chạy | Bug chính |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 30 | 30 | 10 | 14 | 6 | 0 | 2 |

## 6. Kết luận sau khi chạy test

Các test case Feature A đã được cập nhật bằng kết quả thực thi và bằng chứng ảnh chụp trong hai thư mục `domain-testing` và `boundary-value-analysis`. Kết quả cho thấy hai nhóm lỗi chính: frontend kiểm tra số điện thoại trái với README, và backend cho phép user thường gửi `role=admin` qua API cập nhật hồ sơ. Một số case được đánh dấu Warning vì hệ thống có phản hồi lỗi nhưng nội dung thông báo chưa khớp quy tắc 10-11 chữ số hoặc phạm vi kiểm chứng còn hẹp.
