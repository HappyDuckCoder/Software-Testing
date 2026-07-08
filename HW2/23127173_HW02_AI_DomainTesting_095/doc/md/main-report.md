# HW02-AI Main Report - Domain Testing trên EShop

## Thông tin tổng quan

| Mục | Giá trị |
| --- | --- |
| Sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW02-AI - Domain Testing trên EShop |
| SUT | EShop |
| Mức tự đánh giá mục tiêu | 095 |
| Nội dung report | Kết hợp nội dung đầy đủ của Feature A report, Feature B report, Feature C Domain Testing, Feature D-mobile report và toàn bộ thư mục AI Audit |

## Bản đồ nội dung

| Phần | Nguồn nội dung |
| --- | --- |
| Phần 1 - Feature A Report | `requirement\feature-A\feature-A-report.md` |
| Phần 2 - Feature B Report | `requirement\feature-B\feature-B-report.md` |
| Phần 3 - Feature C Domain Testing | `requirement\feature-C\domain-testing\domain-testing.md` |
| Phần 4 - Feature D Mobile Report | `requirement\feature-D-mobile\feature-D-mobile-report.md` |
| Phụ lục A - AI Audit Report | `doc\md\AI Audit\01_AI-Audit-Report.md` |
| Phụ lục B - AI Critique | `doc\md\AI Audit\02_AI-Critique.md` |
| Phụ lục C - Mandatory Disclosure | `doc\md\AI Audit\03_Mandatory-Disclosure.md` |
| Phụ lục D - AI Privacy Checklist | `doc\md\AI Audit\04_AI-Privacy-Checklist.md` |

## Ghi chú sử dụng

Report này là bản tổng hợp để export PDF hoặc đọc tập trung. Các file nguồn vẫn được giữ nguyên trong từng thư mục feature để tiện truy vết ảnh minh chứng, test case và bug report chi tiết.

---

# Phần 1 - Feature A Report

Nguồn: `Lab\HW2\23127173_HW02_AI_095\requirement\feature-A\feature-A-report.md`

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

---

# Phần 2 - Feature B Report

Nguồn: `Lab\HW2\23127173_HW02_AI_095\requirement\feature-B\feature-B-report.md`

# Báo cáo Feature B - FR-11 Xem lịch sử đơn hàng của người dùng

## 1. Thông tin feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Feature | Order history view - người dùng xem lịch sử đơn hàng |
| Actor chính | Người dùng đã đăng nhập |
| Hệ thống kiểm thử | EShop web frontend và backend API |
| Trạng thái kiểm thử | Đã chạy test Feature B và đã cập nhật kết quả thực tế |

## 2. Phạm vi kiểm thử

Feature B tập trung kiểm tra việc người dùng xem danh sách đơn hàng của chính mình trong trang hồ sơ. Phạm vi gồm API danh sách đơn hàng, phần hiển thị trên web, trạng thái rỗng, thứ tự sắp xếp, định dạng tổng tiền, nhãn/màu trạng thái và các ràng buộc quyền sở hữu dữ liệu.

Các thành phần được đối chiếu trong repo EShop:

| Thành phần | Vai trò trong kiểm thử |
| --- | --- |
| `Eshop/README.md` | Mô tả FR-11 và liên hệ trạng thái đơn với FR-10 |
| `Eshop/api_specification.md` | Đối chiếu endpoint đơn hàng |
| `Eshop/backend/server.js` | Kiểm tra API `/api/orders/my-orders`, `/api/orders/:id`, `/api/orders/:id/cancel` |
| `Eshop/frontend-web/src/pages/Profile.jsx` | Kiểm tra UI lịch sử đơn hàng, nhãn trạng thái, nút hủy |

## 3. Phân tích luồng chính

| Luồng | Kết quả mong đợi | Test bao phủ |
| --- | --- | --- |
| User có token hợp lệ mở `/profile` | UI gọi API và hiển thị lịch sử đơn hàng của chính user | B-DT-01, B-DT-02, B-DT-03, B-BVA-01, B-BVA-02, B-BVA-03 |
| User chưa có đơn hàng | UI hiển thị thông báo chưa có đơn | B-DT-01, B-BVA-01 |
| User có nhiều đơn hàng | API trả danh sách theo `id DESC`, UI hiển thị đầy đủ | B-DT-03, B-BVA-03 |
| Thiếu hoặc sai token | API chặn truy cập bằng 401/403 | B-DT-05, B-DT-06 |
| Đơn không thuộc user hiện tại | Không được xuất hiện trong lịch sử và không được xem chi tiết | B-DT-04, B-DT-13, B-BVA-05 |
| Hiển thị trạng thái đơn hàng | Mỗi trạng thái có nhãn tiếng Việt và màu tương ứng | B-DT-07 đến B-DT-11, B-BVA-07, B-BVA-08 |
| Hủy đơn từ lịch sử | Chỉ được hủy khi trạng thái là `pending` hoặc `confirmed` | B-DT-09, B-DT-14, B-BVA-07 |

## 4. Tóm tắt kết quả thực thi

| Nhóm test | Tổng số | Pass | Fail | Warning | Chưa chạy |
| --- | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 14 | 12 | 1 | 1 | 0 |
| Boundary Value Analysis | 8 | 6 | 1 | 1 | 0 |
| Tổng cộng | 22 | 18 | 2 | 2 | 0 |

## 5. Kết quả đáng chú ý

| Test ID | Verdict | Nhận xét |
| --- | --- | --- |
| B-DT-04 | Pass | API lịch sử đơn hàng chỉ trả đơn của user hiện tại. |
| B-DT-05 | Pass | Thiếu token bị chặn bằng `401 Unauthorized`. |
| B-DT-06 | Pass | Token không hợp lệ bị chặn bằng `403 Forbidden`. |
| B-DT-09 | Warning | Trạng thái `shipping` hiển thị nhãn đúng nhưng vẫn có thao tác hủy, trái với FR-10. |
| B-DT-13 | Fail | User có thể xem chi tiết đơn của người khác qua `GET /api/orders/:id`. |
| B-BVA-04 | Pass | Mã đơn không tồn tại trả `404 Order not found`. |
| B-BVA-05 | Fail | Biên quyền sở hữu của API chi tiết bị lỗi: đơn của user khác vẫn xem được. |
| B-BVA-07 | Warning | Tập 5 trạng thái hợp lệ hiển thị được, nhưng trạng thái `shipping` vẫn có nút hủy. |
| B-BVA-08 | Pass | Trạng thái lạ không làm UI crash, có nhãn dự phòng; màu fallback nên được cải thiện nhưng không lập bug riêng. |

## 6. Bug và warning được lập từ kết quả test

| ID | Loại | Test liên quan | Mức độ | Tóm tắt |
| --- | --- | --- | --- | --- |
| BUG-B-01 | Bug của FR-11 | B-DT-13, B-BVA-05 | Critical | API chi tiết đơn hàng không kiểm tra xác thực/chủ sở hữu, dẫn tới lộ đơn của user khác. |
| WARNING-B-01 | Warning liên feature FR-10 | B-DT-09, B-BVA-07 | Major | UI hiển thị thao tác hủy cho đơn `shipping`; đây là vi phạm rule state machine của FR-10 được phát hiện khi test màn hình FR-11. |

Chi tiết bug và warning nằm trong `bug-report/bug-report.md`.

## 7. Đánh giá mức đạt của Feature B

Feature B đạt phần hiển thị lịch sử cơ bản: trạng thái rỗng, một đơn, nhiều đơn, sắp xếp, định dạng tổng tiền, nhãn trạng thái và kiểm tra token của API danh sách đều hoạt động đúng. Tuy nhiên feature chưa đạt yêu cầu đầy đủ vì còn lỗi bảo mật ở API chi tiết đơn hàng. Ngoài ra có một warning liên feature: màn hình FR-11 bộc lộ thao tác hủy đơn `shipping`, trong khi rule cấm thao tác này thuộc FR-10.

Mức rủi ro hiện tại: cao. Lý do chính là BUG-B-01 có thể làm lộ dữ liệu đơn hàng của người dùng khác. WARNING-B-01 cũng cần được xử lý cùng Feature D/FR-10 để tránh thao tác sai state machine.

## 8. Liên kết artifact

| Artifact | Đường dẫn |
| --- | --- |
| Domain Testing | `domain-testing/domain-testing.md` |
| Boundary Value Analysis | `boundary-value-analysis/boundary-value-analysis.md` |
| Bug Report | `bug-report/bug-report.md` |
| AI Gap Analysis | `ai-gap-analysis/ai-gap-analysis.md` |

---

# Phần 3 - Feature C Domain Testing

Nguồn: `Lab\HW2\23127173_HW02_AI_095\requirement\feature-C\domain-testing\domain-testing.md`

# Domain Testing - FR-18 Quản lý đơn hàng (admin)
## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool C - FR-18: Quản lý đơn hàng của admin |
| Kỹ thuật | Domain Testing |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend admin và backend |
| Actor chính | Admin |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định miền đầu vào, chia lớp tương đương, ghi ràng buộc liên biến, lập test case, sau đó ghi chú review. Các giá trị kỹ thuật như endpoint, enum trạng thái, test ID và verdict được giữ nguyên để dễ truy vết bằng chứng.

## 1. Miền đầu vào


| Biến                | Kiểu              | Nguồn                     | Ràng buộc                                     | Ghi chú                                                                   |
| ------------------- | ----------------- | ------------------------- | --------------------------------------------- | ------------------------------------------------------------------------- |
| Token xác thực      | Header/trạng thái | README FR-12, `server.js` | Phải là token admin hợp lệ                    | Mã nguồn route chỉ gọi `authenticateToken`, chưa kiểm tra role            |
| Danh sách đơn       | Mảng              | `/api/admin/orders`       | Admin xem tất cả đơn, sắp xếp id giảm dần     | Join thêm `users.name as user_name`                                       |
| Mã đơn              | Path              | API                       | ID tồn tại cập nhật; ID không tồn tại trả 404 | Có bằng chứng mã nguồn                                                    |
| Trạng thái hiện tại | Tập giá trị       | DB                        | Trạng thái trước khi chuyển                   | FR-10 máy trạng thái                                                      |
| Trạng thái đích     | Tập giá trị/body  | API/UI                    | Phải là trạng thái kế tiếp hợp lệ             | Mã nguồn đang cho phép một chuyển trạng thái sai: `canceled -> delivered` |
| Đang giao address   | Văn bản           | Admin UI                  | Must be safely displayed                      | UI dùng `dangerouslySetInnerHTML`                                         |




## 2. Lớp tương đương


| Class ID   | Biến          | Hợp lệ/Không hợp lệ         | Phân vùng                                 | Giá trị đại diện               | Lý do                                |
| ---------- | ------------- | --------------------------- | ----------------------------------------- | ------------------------------ | ------------------------------------ |
| C-DT-EC-01 | Token         | Hợp lệ                      | Token admin                               | `admin@eshop.com` token        | Luồng đúng                           |
| C-DT-EC-02 | Token         | Không hợp lệ                | Thiếu token                               | không có header                | Nên từ chối                          |
| C-DT-EC-03 | Token         | Không hợp lệ                | Token user thường                         | `test@eshop.com` token         | Admin access control                 |
| C-DT-EC-04 | Danh sách đơn | Hợp lệ                      | Không có đơn                              | rỗng table                     | Rỗng admin list                      |
| C-DT-EC-05 | Danh sách đơn | Hợp lệ                      | Đơn từ nhiều user                         | đơn của user/admin             | FR-18 yêu cầu xem tất cả đơn         |
| C-DT-EC-06 | Mã đơn        | Không hợp lệ                | ID không tồn tại                          | `999999`                       | 404 path                             |
| C-DT-EC-07 | Transition    | Hợp lệ                      | `pending -> confirmed`                    | target `confirmed`             | Máy trạng thái                       |
| C-DT-EC-08 | Transition    | Hợp lệ                      | `pending -> canceled`                     | target `canceled`              | Máy trạng thái                       |
| C-DT-EC-09 | Transition    | Hợp lệ                      | `confirmed -> shipping`                   | target `shipping`              | Máy trạng thái                       |
| C-DT-EC-10 | Transition    | Hợp lệ                      | `confirmed -> canceled`                   | target `canceled`              | Máy trạng thái                       |
| C-DT-EC-11 | Transition    | Hợp lệ                      | `shipping -> delivered`                   | target `delivered`             | Máy trạng thái                       |
| C-DT-EC-12 | Transition    | Không hợp lệ                | Từ `delivered` sang bất kỳ trạng thái nào | target `canceled`              | Trạng thái kết thúc                  |
| C-DT-EC-13 | Transition    | Không hợp lệ                | Từ `canceled` sang bất kỳ trạng thái nào  | target `delivered`             | Mã nguồn cho thấy có khả năng là lỗi |
| C-DT-EC-14 | Address       | Không hợp lệ rendering risk | HTML/script address                       | `<img src=x onerror=alert(1)>` | Safe display requirement             |




## 3. Ràng buộc liên biến


| Constraint ID | Biến / trạng thái                     | Quy tắc                               | Tác động kiểm thử                                        |
| ------------- | ------------------------------------- | ------------------------------------- | -------------------------------------------------------- |
| C-DT-C01      | Token + role                          | Admin APIs require role admin         | Test token user thường against admin orders              |
| C-DT-C02      | Trạng thái hiện tại + trạng thái đích | FR-10 đồ thị chuyển trạng thái hợp lệ | Bao phủ cạnh hợp lệ và không hợp lệ                      |
| C-DT-C03      | Trạng thái kết thúc + trạng thái đích | `delivered` and `canceled` are final  | Test attempted chuyển trạng thái sau trạng thái kết thúc |
| C-DT-C04      | Address + rendering                   | Address must not execute/render HTML  | Use malicious shipping address                           |
| C-DT-C05      | Danh sách đơn + user                  | Admin sees all users' orders          | Seed orders for multiple users                           |




## 4. Test case Domain Testing


| ID      | Mục tiêu                                       | Điều kiện/class thỏa mãn         | Đầu vào                                                                                                                                                                                                   | Tiền điều kiện                  | Các bước                | Kết quả mong đợi                                                              | Actual                                                        | Verdict                                                                                                       | Bằng chứng                                                                                                                                       |
| ------- | ---------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| C-DT-01 | Admin xem được tất cả đơn hàng                 | C-DT-EC-01, C-DT-EC-05, C-DT-C05 | Token=token admin hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=đơn từ nhiều user                                 | Có đơn của nhiều user           | GET `/api/admin/orders` | Trả về tất cả đơn kèm `user_name`, sắp xếp id giảm dần                        | Giống như kết quả mong muốn                                   | Pass                                                                                                          | domain-testing/C-DT-01.png                                                                            |
| C-DT-02 | UI admin hiển thị bảng đơn hàng                | C-DT-EC-01, C-DT-EC-05           | Token=token admin hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=đơn từ nhiều user                                 | Có đơn hàng                     | Mở tab Orders của admin | Các cột hiển thị ID, user, tổng tiền, địa chỉ, trạng thái và thao tác         | Giống như kết quả mong muốn                                   | Pass                                                                                                          | domain-testing/C-DT-02.png                                                                            |
| C-DT-03 | Từ chối thiếu token                            | C-DT-EC-02, C-DT-C01             | Token=missing; order_id=bất kỳ; current_status=N/A; target_status=N/A; shipping_address=N/A; order_list=N/A                                                                                               | Backend đang chạy               | GET `/api/admin/orders` | Nên trả 401                                                                   | Giống như kết quả mong muốn                                   | Pass                                                                                                          | domain-testing/C-DT-03.png                                                                            |
| C-DT-04 | Từ chối token user thường                      | C-DT-EC-03, C-DT-C01             | Token=token người dùng thường hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                 | Đăng nhập bằng `test@eshop.com` | GET `/api/admin/orders` | Nên trả 403/từ chối truy cập admin                                            | user xem được danh sách orders                                | Fail                                                                                                          | domain-testing/C-DT-04.png                                                                            |
| C-DT-05 | Cập nhật `pending` sang `confirmed`            | C-DT-EC-07, C-DT-C02             | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=confirmed; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                     | Token admin; đơn `pending`      | PUT status              | Trạng thái trở thành `confirmed`                                              | Giống kết quả mong muốn                                       | Pass - xem hình minh chứng pending ở domain-testing/C-DT-02.png    | domain-testing/C-DT-05.png                                                                            |
| C-DT-06 | Cancel đơn `pending`                           | C-DT-EC-08, C-DT-C02             | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                      | Token admin; đơn `pending`      | PUT status              | Trạng thái trở thành `canceled`                                               | Giống kết quả mong muốn                                       | Pass - xem hình minh chứng pending ở domain-testing/C-DT-05.png    | domain-testing/C-DT-06.png                                                                            |
| C-DT-07 | Cập nhật `confirmed` sang `shipping`           | C-DT-EC-09, C-DT-C02             | Token=token admin hợp lệ; order_id=đơn `confirmed`; current_status=confirmed; target_status=shipping; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                  | Token admin; đơn `confirmed`    | PUT status              | Trạng thái trở thành `shipping`                                               | Giống kết quả mong muốn                                       | Pass - xem hình minh chứng confirmed ở domain-testing/C-DT-06.png  | domain-testing/C-DT-07.png                                                                            |
| C-DT-08 | Cancel đơn `confirmed`                         | C-DT-EC-10, C-DT-C02             | Token=token admin hợp lệ; order_id=đơn `confirmed`; current_status=confirmed; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                  | Token admin; đơn `confirmed`    | PUT status              | Trạng thái trở thành `canceled`                                               | Giống kết quả mong muốn                                       | Pass                                                                                                          | domain-testing/C-DT-08-1.png, domain-testing/C-DT-08-2.png |
| C-DT-09 | Complete đơn `shipping`                        | C-DT-EC-11, C-DT-C02             | Token=token admin hợp lệ; order_id=đơn `shipping`; current_status=shipping; target_status=delivered; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                   | Token admin; đơn `shipping`     | PUT status              | Trạng thái trở thành `delivered`                                              | Giống như kết quả mong muốn                                   | Pass - xem hình minh chứng shipping ở domain-testing/C-DT-08-2.png | domain-testing/C-DT-09.png                                                                            |
| C-DT-10 | Từ chối chuyển thẳng `pending` sang `shipping` | C-DT-C02                         | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=shipping; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                      | Token admin; đơn `pending`      | PUT status              | 400 do chuyển trạng thái không hợp lệ                                         | Giống kết quả mong đợi                                        | Pass                                                                                                          | domain-testing/C-DT-10.png                                                                            |
| C-DT-11 | Từ chối `delivered` sang `canceled`            | C-DT-EC-12, C-DT-C03             | Token=token admin hợp lệ; order_id=đơn `delivered`; current_status=delivered; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                  | Token admin; đơn `delivered`    | PUT status              | 400 do chuyển trạng thái không hợp lệ; `delivered` vẫn là trạng thái kết thúc | Giống như kết quả mong đợi                                    | Pass                                                                                                          | domain-testing/C-DT-11.png                                                                            |
| C-DT-12 | Từ chối `canceled` sang `delivered`            | C-DT-EC-13, C-DT-C03             | Token=token admin hợp lệ; order_id=đơn `canceled`; current_status=canceled; target_status=delivered; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                   | Token admin; đơn `canceled`     | PUT status              | 400 do chuyển trạng thái không hợp lệ; `canceled` vẫn là trạng thái kết thúc  | Chuyển sang delivered thành công                              | Fail                                                                                                          | domain-testing/C-DT-12.png                                                                            |
| C-DT-13 | Từ chối cập nhật đơn không tồn tại             | C-DT-EC-06                       | Token=token admin hợp lệ; order_id=999999; current_status=N/A; target_status=confirmed; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                                | Token admin                     | PUT status confirmed    | 404 `Order not found`                                                         | Giống như kết quả mong đợi                                    | Pass                                                                                                          | domain-testing/C-DT-13.png                                                                            |
| C-DT-14 | Từ chối trạng thái đích không xác định         | C-DT-C02                         | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=returned; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed                                      | Token admin; đơn `pending`      | PUT status              | 400 do chuyển trạng thái không hợp lệ                                         | Giống như kết quả mong đợi                                    | Pass                                                                                                          | domain-testing/C-DT-14.png                                                                            |
| C-DT-15 | Hiển thị an toàn địa chỉ dạng HTML             | C-DT-EC-14, C-DT-C04             | Token=token admin hợp lệ; order_id=order with malicious address; current_status=bất kỳ; target_status=không đổi; shipping_address=; order_list=danh sách đơn đã seed                                      | Token admin; order exists       | Mở tab Orders           | Văn bản được escape; không có HTML/image/script được thực thi                 | script lỗi được thực thi                                      | Fail                                                                                                          | domain-testing/C-DT-15-1.png, domain-testing/C-DT-15-2.png |
| C-DT-16 | Kiểm tra nút thao tác ở trạng thái kết thúc    | C-DT-EC-12, C-DT-EC-13, C-DT-C03 | Token=token admin hợp lệ; order_id=delivered/đơn `canceled`s; current_status=delivered or canceled; target_status=không được khả dụng; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Admin UI                        | Mở tab Orders           | Đã giao/canceled không được hiển thị thao tác chuyển trạng thái không hợp lệ  | Có nút và thực hiện được thao tác chuyển từ hủy thành đã giao | Fail                                                                                                          | domain-testing/C-DT-14.png                                                                            |




## 5. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 16 | 12 | 4 | 0 | 0 |

## 6. Ghi chú review

- Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
- Mã nguồn review found có khả năng là bugs: admin routes lack role check, canceled can transition to delivered, and address uses unsafe HTML rendering.

---

# Phần 4 - Feature D Mobile Report

Nguồn: `Lab\HW2\23127173_HW02_AI_095\requirement\feature-D-mobile\feature-D-mobile-report.md`

# Báo cáo Feature D Mobile - FR-10 Máy trạng thái đơn hàng

## 1. Thông tin feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool D - Mobile App |
| Feature ID | FR-10 |
| Feature | Máy trạng thái đơn hàng |
| Actor chính | User/mobile user và admin |
| Hệ thống kiểm thử | EShop backend API, user order history flow và admin orders flow |
| Trạng thái | Đã chạy toàn bộ test case hiện có |

Feature D kiểm tra luật trạng thái đơn hàng của EShop. Với user/mobile, trọng tâm là quyền hủy đơn. Với admin, trọng tâm là chuyển trạng thái đơn theo state machine. Rule đúng cần giữ là:

```text
pending -> confirmed -> shipping -> delivered
pending -> canceled
confirmed -> canceled
```

Trong đó `delivered` và `canceled` là trạng thái kết thúc, không được chuyển tiếp nữa.

## 2. Phạm vi kiểm thử

| Thành phần | Vai trò trong kiểm thử |
| --- | --- |
| `Eshop/backend/server.js` | API checkout, user cancel và admin update status |
| `Eshop/frontend-web/src/pages/Profile.jsx` | User xem/hủy đơn từ lịch sử đơn hàng |
| `Eshop/frontend-admin/src/App.jsx` | Admin chuyển trạng thái đơn |
| `Eshop/README.md` | Đối chiếu FR-10 và rule hủy đơn |

Bộ test có dùng lại một số ảnh từ Feature C vì Feature C cũng kiểm tra cùng endpoint admin transition của FR-10. Việc dùng lại này hợp lý khi cùng dữ liệu, cùng API và cùng rule.

## 3. Tóm tắt kết quả thực thi

| Nhóm test | Tổng số | Pass | Fail | Warning | Chưa chạy |
| --- | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 14 | 12 | 2 | 0 | 0 |
| Boundary Value Analysis | 11 | 9 | 2 | 0 | 0 |
| **Tổng cộng** | **25** | **21** | **4** | **0** | **0** |

## 4. Kết quả đáng chú ý

| Test ID | Verdict | Nhận xét |
| --- | --- | --- |
| D-DT-01 / D-BVA-01 | Pass | Đơn mới sau checkout bắt đầu đúng ở `pending`. |
| D-DT-02 đến D-DT-04 | Pass | Chuỗi admin hợp lệ `pending -> confirmed -> shipping -> delivered` chạy đúng. |
| D-DT-05, D-DT-06 | Pass | User hủy được đơn ở `pending` và `confirmed`, đúng rule. |
| D-DT-07 / D-BVA-07 | Fail | User vẫn hủy được đơn `shipping`, trong khi FR-10 chỉ cho hủy tới `confirmed`. |
| D-DT-08, D-DT-09 | Pass | User không hủy được đơn `delivered` hoặc hủy lại đơn `canceled`. |
| D-DT-10 / D-BVA-10 | Pass | User không hủy được đơn của người khác. |
| D-DT-11 | Pass | Admin không được nhảy thẳng `pending -> shipping`. |
| D-DT-12 / D-BVA-04 | Pass | `delivered -> canceled` bị chặn đúng. |
| D-DT-13 / D-BVA-08 | Fail | Admin vẫn chuyển được `canceled -> delivered`, sai rule trạng thái kết thúc. |
| D-DT-14 / D-BVA-11 | Pass | Trạng thái lạ `returned` bị từ chối. |

## 5. Bug được lập từ kết quả test

| Bug ID | Test liên quan | Mức độ | Tóm tắt |
| --- | --- | --- | --- |
| BUG-D-01 | D-DT-07, D-BVA-07 | Major | User có thể hủy đơn đang `shipping`. |
| BUG-D-02 | D-DT-13, D-BVA-08 | Major | Admin có thể chuyển đơn `canceled` sang `delivered`. |

Chi tiết từng bug nằm trong `bug-report/bug-report.md`.

## 6. Đánh giá mức đạt của Feature D

Feature D đạt nhiều phần cốt lõi: đơn mới tạo đúng trạng thái, các bước admin hợp lệ hoạt động, user hủy được ở hai trạng thái được phép, hệ thống chặn được một số transition sai như `pending -> shipping`, `delivered -> canceled`, trạng thái lạ và hủy đơn của người khác.

Tuy nhiên feature chưa đạt hoàn toàn vì còn hai lỗi state machine. Lỗi thứ nhất nằm ở user cancel: hệ thống cho hủy đơn `shipping`. Lỗi thứ hai nằm ở admin transition: hệ thống cho chuyển `canceled -> delivered`. Hai lỗi này đều làm trạng thái đơn hàng không còn đáng tin, nên cần sửa trước khi coi FR-10 là ổn.

## 7. Liên kết artifact

| Artifact | Đường dẫn |
| --- | --- |
| Domain Testing | `domain-testing/domain-testing.md` |
| Boundary Value Analysis | `boundary-value-analysis/boundary-value-analysis.md` |
| Bug Report | `bug-report/bug-report.md` |
| AI Gap Analysis | `ai-gap-analysis/ai-gap-analysis.md` |

---

# Phụ lục A - AI Audit Report

Nguồn: `Lab\HW2\23127173_HW02_AI_095\doc\md\AI Audit\01_AI-Audit-Report.md`

# AI Audit Report - HW02

## 1. Thong tin sinh vien

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Tran Hai Duc |
| MSSV | 23127173 |
| Lop / Khoa | Chua dien |
| Ma bai tap | HW02-AI |
| Ten bai tap | Domain Testing on EShop |
| Ngay cap nhat | 2026-07-08 |
| Cong cu AI da dung | Codex / ChatGPT |
| Co dung AI | Co |

## 2. Bang Audit - 1 hang / artifact

| (1) Prompt + Cong cu | (2) Output AI | (3) Verdict | (4) Ly do / doi chieu | (5) Ban sinh vien sua |
| --- | --- | --- | --- | --- |
| Tool: Codex / ChatGPT. Thoi gian: 2026-06-27 19:29:25 +07:00. Prompt: "toi muon ban lam 1 roadmap de hoan thanh HW nay 1 cach 10 diem vao Lab\\HW2\\23127173_HW02_AI_095\\roadmap.md ... AI template ban xem trong Lab\\AI Templates\\md" | Tao roadmap hoan thanh HW02, tao cau truc thu muc/file tuong ung voi HW1, tao README/checklist/main-report skeleton, prompt log va AI Audit entry dau tien. | INCOMPLETE | AI chi ho tro lap ke hoach, tao khung tai lieu va anh xa yeu cau. Theo yeu cau HW02, diem chinh den tu viec sinh vien tu chon feature, ap dung Domain Testing/BVA, chay SUT, cap nhat Actual/Verdict, tao GitHub Issues that, quay demo Agent Skill va export PDF. | Sinh vien can chot 4 feature voi nhom, chay EShop, viet va thuc thi test case that, bo sung bug evidence, cap nhat audit cho moi prompt sau, hoan thien report/PDF va zip nop bai. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-06-27 19:43:38 +07:00. Prompt: "Lab\\HW2\\23127173_HW02_AI_095\\agent-skills ... ban tim cho toi cac skills de them vo agents-skills theo chuan yeu cau ... them vao AI-audit" | Tao bo 5 Agent Skills cho HW02: `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, `ai-gap-analysis-reviewer`, `github-bug-report-writer`; moi skill co `SKILL.md` va `agents/openai.yaml`, kem `skill-catalog.md` va goi y demo flow. | INCOMPLETE | Cac skill dap ung phan chuan artifact va co the dung de demo quy trinh AI-first. Tuy nhien, diem Agent Skills chi chac khi sinh vien that su dung skill tren mot feature, quay video demo end-to-end, va chung minh output duoc review/chinh sua bang execution evidence. | Sinh vien can tu chay demo, ghi link video vao `agent-skills/demo-videos/link-video.md`, cap nhat report chinh va dung it nhat mot skill de tao artifact that cho feature da chon. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "hay su dung cac agent skill o thu muc Lab\\HW2\\23127173_HW02_AI_095\\agent-skills de sinh test case cho feature A o Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-A ... cap nhat AI audit ... feature A cua toi la Pool A: FR-04: Personal profile management" | Su dung cac skill `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, va `ai-gap-analysis-reviewer` de tao Feature A brief, Domain Testing test cases, Boundary Value Analysis test cases, AI Gap Analysis, va Bug Report placeholder cho FR-04 Personal profile management. | INCOMPLETE | Output thoa yeu cau thiet ke test case theo Domain Testing/BVA va danh dau cac rule chua co evidence la assumption. Tuy nhien, chua duoc xem la hoan tat vi chua chay EShop SUT, chua co Actual/Verdict, screenshot, bug evidence, hoac GitHub Issue. | Sinh vien can chay tung test case tren EShop, xac nhan field/rule that, cap nhat boundary that, dien Actual/Verdict/Evidence, tao bug report/GitHub Issue neu co loi, va cap nhat lai AI Gap Analysis dua tren ket qua that. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "ban can sinh test case dua tren repo Eshop, sua lai" | Doc repo `Eshop`, gom `README.md`, `api_specification.md`, `backend/server.js`, `backend/database.js`, `frontend-web/src/pages/Profile.jsx`, va viet lai Feature A test cases theo source that. Removed generic DOB/avatar/gender tests; added source-backed tests for `name`, `phone`, `shipping_address`, token, disabled email, and role tampering. | INCOMPLETE | Output nay source-grounded hon ban truoc va phat hien duoc 2 bug source-level: phone regex frontend trai README, va backend cho phep cap nhat `role`. Van INCOMPLETE vi bug/test cases can duoc chay tren SUT, chup screenshot/log API, cap nhat Actual/Verdict, va tao GitHub Issue that. | Sinh vien can execute cac test case tren frontend/API, xac nhan BUG-A-01 va BUG-A-02 bang evidence that, cap nhat GitHub Issue link va ket qua final. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "lam tuong tu cho feature B, C, D ... Pool B FR-11 Order history view (user), Pool C FR-18 Order management (admin), Pool D FR-10 Order state machine; nho su dung agent skills va bo sung ai audit" | Su dung cac skill `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, va `ai-gap-analysis-reviewer`; doc repo `Eshop` va tao source-based artifacts cho Feature B/C/D, bao gom feature report, Domain Testing, BVA, AI Gap Analysis, va bug report. | INCOMPLETE | Output dua tren source EShop va phat hien cac bug source-level: public order detail route, user cancel shipping order, admin API thieu role check, unsafe shipping address render, va canceled -> delivered transition. Van INCOMPLETE vi chua chay SUT/mobile, chua co Actual/Verdict, screenshot/log API, hoac GitHub Issue that. | Sinh vien can chay test cases tren backend/frontend/mobile flow, xac nhan bug bang evidence, cap nhat Actual/Verdict/Evidence va dien GitHub Issue link. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "sua lai cac ket qua trong Lab\\HW2\\23127173_HW02_AI_095\\requirement thanh tieng viet co dau; doi chung lai voi Lab\\HW2\\requirement\\HW2-requirement.md xem chuan chua; bo sung ai audit" | Doi chieu HW2 requirement: moi feature can Domain Testing, BVA, AI Gap Analysis, Bug Report; 4 feature gom Pool A/B/C/D. Viet hoa cac heading, cot bang, trang thai thuc thi, mo ta feature/rui ro/test evidence trong thu muc `requirement`, giu nguyen ma API/status/test ID de de trace khi chay SUT. | INCOMPLETE | Dinh dang deliverable phu hop cac requirement chinh, nhung van INCOMPLETE vi test case chua duoc thuc thi tren SUT, chua co screenshot/log API/GitHub Issue that, va mot so ten ky thuat nhu Domain Testing/BVA/API/status code duoc giu nguyen co chu dich. | Sinh vien can doc lai ban tieng Viet, chay SUT, cap nhat Actual/Verdict/Evidence, lap GitHub Issue that va export report/PDF truoc khi nop. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "phan test case bo sung them 1 cot thoa man cac dieu kien nao dua tren cac dieu kien cac mien ... bo sung hoac sua trong skill, sinh test case sao cho toi uu ... dau vao cua test case phai co du cac gia tri o Mien dau vao" | Cap nhat `domain-testing-designer` va `boundary-value-analysis-designer` de yeu cau test case toi uu: valid case gom nhieu valid class, negative case co mot invalid class khi co the, moi test case co cot trace class/condition va dau vao day du bien mien dau vao. Cap nhat cac bang Domain/BVA trong Feature A/B/C/D them cot `Dieu kien/class thoa man` hoac `Dieu kien/bien thoa man`, dong thoi mo rong o `Dau vao`. | INCOMPLETE | Output da tang traceability giua test case va equivalence class/boundary/constraint, phu hop yeu cau toi uu hoa test design. Van INCOMPLETE vi day la thiet ke test; Actual/Verdict/Evidence can duoc cap nhat sau khi chay SUT. | Sinh vien can chay lai cac test case da toi uu, xac nhan coverage thuc te, cap nhat bang ket qua va evidence. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "toi vua sua feature-A boundary-value-analysis va domain-testing; hay hoan thanh feature-A-report; domain-testing va boundary-value-analysis tieng anh va tieng viet lan lon qua, chuyen het ve tieng Viet de hieu; sua ngon ngu tuong tu cho feature B, C, D; cap nhat ai audit" | Hoan thien `feature-A-report.md` theo ket qua thuc thi Feature A: 30 test da chay, 10 Pass, 14 Fail, 6 Warning, 0 chua chay, 2 nhom bug chinh. Chuan hoa ngon ngu tieng Viet trong cac file Domain Testing/BVA va report cua Feature A/B/C/D, giu nguyen endpoint, status enum va test ID de truy vet khi chay SUT. | INCOMPLETE | Output giup tai lieu de doc hon va dong bo voi ket qua test thuc te cua Feature A. Van INCOMPLETE vi cac feature B/C/D chua co Actual/Verdict/Evidence thuc thi that, va sinh vien can review lai cac bang sau khi chay SUT. | Sinh vien can doc lai ban tieng Viet, bo sung evidence that cho B/C/D, tao/cap nhat bug report va GitHub Issue neu loi duoc xac nhan. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-A\\bug-report\\bug-report.md van bi lan lon tieng anh tieng viet, toi can ban report bug day du va chinh xac hon; lam tuong tu cho B, C, D; cap nhat AI audit" | Viet lai day du bug report cho Feature A/B/C/D bang tieng Viet ro rang, gom tong quan loi, moi truong, buoc tai hien, ket qua mong doi/thuc te, tac dong, nguyen nhan ma nguon, test lien quan va huong sua. Feature A ghi nhan loi da tai hien tu ket qua test; Feature B/C/D danh dau loi xac dinh tu ma nguon va cho thuc thi xac nhan. | INCOMPLETE | Bug report da day du va source-grounded hon, nhung cac issue link GitHub va bang chung thuc thi cho B/C/D van chua duoc bo sung. | Sinh vien can tao GitHub Issue that, dan link vao bang bug report, chay lai test case lien quan va cap nhat bang chung screenshot/log API. |
| Tool: Codex / ChatGPT. Thoi gian: 2026-07-08 +07:00. Prompt: "dua vao luong test case da viet hay sua lai feature-A/ai-gap-analysis bang tieng Viet; ban tu danh gia xem ban da sinh test case tot chua; bo sung ai audit" | Viet lai `feature-A/ai-gap-analysis/ai-gap-analysis.md` bang tieng Viet, dua tren 30 test da chay: 18 Domain Testing, 12 BVA, 10 Pass, 14 Fail, 6 Warning, 2 bug chinh. Bo sung tu danh gia chat luong test case, diem tot, diem chua tot, gap AI ban dau va huong cai thien. | INCOMPLETE | Phan phan tich da phan anh thuc te hon va khong to hong output AI. Van INCOMPLETE vi mot so cai thien de xuat nhu giam trung lap, co lap bien BVA va tao GitHub Issue that chua duoc thuc hien. | Sinh vien can review lai danh gia, quyet dinh co toi uu them test case hay khong, tao issue that va cap nhat report cuoi. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi vừa hoàn thành test các test ở featureB ... hãy sửa lại bug-report và feature-B-report ... sau đó tự review lại và viết ai-gap-analysis ... cập nhật AI audit" | Viết lại `feature-B-report.md`, `feature-B/bug-report/bug-report.md` và `feature-B/ai-gap-analysis/ai-gap-analysis.md` bằng tiếng Việt có dấu dựa trên kết quả đã chạy: 22 test, 18 Pass, 2 Fail, 2 Warning. Cập nhật bug Feature B từ trạng thái dự đoán sang trạng thái đã tái hiện/đối chiếu: lộ chi tiết đơn hàng qua `GET /api/orders/:id` và hiển thị nút hủy cho đơn `shipping`. | INCOMPLETE | Output đã dựa trên kết quả test và bằng chứng ảnh trong Feature B, nhưng vẫn chưa có link GitHub Issue thật cho các bug. Một vài bằng chứng như B-DT-14 còn dùng ảnh trước/sau gián tiếp thay vì log riêng cho thao tác. | Sinh viên cần tạo GitHub Issue thật nếu rubric yêu cầu, gắn link vào bug report, kiểm tra lại bằng chứng B-DT-14 nếu muốn chặt hơn, và đối chiếu final report trước khi nộp. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "thay vì để là BUG-B-02, thì đổi thành WARNING-B-01 vì lỗi không phải do FR-11 mà do FR-10, bổ sung ai audit" | Cập nhật phân loại trong Feature B: đổi `BUG-B-02` thành `WARNING-B-01`, ghi rõ đây là warning liên feature FR-10 được phát hiện khi test màn hình FR-11. Cập nhật `bug-report.md`, `feature-B-report.md`, `ai-gap-analysis.md` và AI Audit. | INCOMPLETE | Phân loại đã chính xác hơn về trách nhiệm requirement: lỗi bảo mật `BUG-B-01` thuộc FR-11, còn thao tác hủy `shipping` là vấn đề state machine của FR-10. Vẫn INCOMPLETE vì cần sinh viên xác nhận lần cuối và gắn issue/evidence theo quy trình nộp bài. | Sinh viên cần kiểm tra lại wording cuối cùng, đảm bảo Feature D/FR-10 có bug tương ứng hoặc ghi nhận cùng warning này để trace giữa hai feature. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi vừa test xong các test case ở feature-C boundary-value-analysis và domain-testing ... hãy sửa lại feature-C-report và bug-report ... tự review và viết lại ai-gap-analysis ... viết bằng tiếng việt có dấu, cố gắng viết gần gũi" | Viết lại `feature-C-report.md`, `feature-C/bug-report/bug-report.md` và `feature-C/ai-gap-analysis/ai-gap-analysis.md` theo kết quả đã chạy: 24 test, 18 Pass, 6 Fail. Gom lỗi thành 3 bug chính: thiếu phân quyền role admin, cho phép `canceled -> delivered`, và XSS qua `shipping_address` trên admin UI. | INCOMPLETE | Output đã dựa trên kết quả thực thi và bằng chứng ảnh của Feature C, nhưng vẫn cần sinh viên rà lần cuối tên ảnh minh chứng, gắn GitHub Issue thật nếu rubric yêu cầu, và liên kết BUG-C-02 với Feature D/FR-10. | Sinh viên cần kiểm tra lại các ảnh evidence, tạo issue thật nếu cần, và đảm bảo báo cáo chính/PDF dùng đúng số liệu 24 test, 18 Pass, 6 Fail. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "bạn viết các case feature-D-mobile boundary-value-analysis và domain-testing hơi khó hiểu; review lại xem đủ các case với viết dễ hiểu hơn, bổ sung audit, một số test tôi đã test rồi" | Viết lại `feature-D-mobile/domain-testing/domain-testing.md` và `feature-D-mobile/boundary-value-analysis/boundary-value-analysis.md` bằng tiếng Việt dễ đọc hơn. Giữ các kết quả đã chạy trong Domain Testing, làm rõ rule FR-10 theo state machine, và bổ sung D-BVA-11 cho trạng thái ngoài tập hợp `returned`. | INCOMPLETE | Output đã giúp bảng dễ hiểu và trace tốt hơn, nhưng vẫn INCOMPLETE vì nhiều test D-DT/D-BVA còn chưa chạy, đặc biệt D-DT-07, D-DT-13, D-BVA-07, D-BVA-08 là các case source cho thấy dễ fail. | Sinh viên cần chạy tiếp các test chưa chạy, cập nhật Actual/Verdict/Evidence, sau đó sửa lại feature-D report, bug report và AI gap analysis theo kết quả thật. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "tôi nghĩ là có nhiều ảnh minh chứng có thể sử dụng lại từ feature C, bạn hãy copy các ảnh đó cho feature D và đặt tên là D-DT- hoặc D-BVA-, feature nào test rồi thì không test lại nữa; cập nhật audit" | Copy các ảnh minh chứng trùng rule FR-10 từ Feature C sang Feature D với tên D-DT/D-BVA tương ứng; cập nhật Domain Testing, BVA và `feature-D-mobile-report.md`. Sau cập nhật, Feature D có 25 test thiết kế, 16 test đã có evidence, 14 Pass, 2 Fail, 9 chưa chạy. | INCOMPLETE | Việc dùng lại evidence là hợp lý vì các case admin transition của Feature C và Feature D kiểm tra cùng endpoint/rule FR-10. Tuy nhiên D-DT-07/D-BVA-07 về user hủy đơn `shipping` vẫn chưa có bằng chứng trực tiếp nên chưa được đánh dấu đã chạy. | Sinh viên cần test tiếp các case chưa có evidence trực tiếp, đặc biệt D-DT-07/D-BVA-07, rồi cập nhật bug report và gap analysis của Feature D. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "bổ sung feature-D-mobile boundary-value-analysis do một số case đã bị trùng ở domain-testing; copy hình ảnh và đặt tên là D-BVA-, cập nhật audit" | Copy thêm evidence trùng từ Domain Testing sang BVA cho Feature D: `D-DT-07.png -> D-BVA-07.png` và `D-DT-10.png -> D-BVA-10.png`. Cập nhật `D-BVA-07` thành Fail, `D-BVA-10` thành Pass, và cập nhật `feature-D-mobile-report.md` thành 25 test thiết kế, 22 đã có evidence, 18 Pass, 4 Fail, 3 chưa chạy. | INCOMPLETE | Bổ sung evidence hợp lý vì các BVA này kiểm tra cùng thao tác với Domain Testing. Vẫn INCOMPLETE vì D-BVA còn một số case chưa có evidence riêng hoặc cần đối chiếu cuối với report/bug/gap sau khi test hết. | Sinh viên cần rà lại ảnh minh chứng và tiếp tục cập nhật Feature D bug report/AI gap analysis sau khi chốt toàn bộ kết quả. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt tổng hợp các lượt hỏi lệnh API test trong conversation cho Feature A/B/C/D | Cung cấp các bộ lệnh CMD/PowerShell/cURL để test API cho Feature A, B, C và D: đăng nhập lấy token, gọi profile/order/admin endpoints, tạo đơn checkout, đổi trạng thái admin, hủy đơn user, kiểm tra token thiếu/sai, order không thuộc user, trạng thái lạ, HTML/XSS address, và các transition FR-10. | INCOMPLETE | Các lệnh API giúp sinh viên chạy SUT thật nhanh hơn, nhưng AI không tự chạy trên máy sinh viên và không tự tạo bằng chứng. Một số lệnh cần sinh viên thay đúng `order_id`, trạng thái hiện tại và môi trường backend/frontend đang chạy. | Sinh viên phải tự chạy lệnh, chụp screenshot/log response, cập nhật Actual/Verdict/Evidence trong từng bảng A/B/C/D; không được coi command output do AI mô tả là bằng chứng thật nếu chưa chạy. |
| Tool: Codex / ChatGPT. Thời gian: 2026-07-08 +07:00. Prompt: "dựa vào feature-D-mobile domain-testing và boundary-value-analysis viết lại bug-report, feature-D-mobile-report; tự review và viết ai-gap-analysis; tiếng Việt có dấu, dễ hiểu; cập nhật audit" | Viết lại `feature-D-mobile-report.md`, `bug-report.md` và `ai-gap-analysis.md` theo kết quả cuối: 25 test đã chạy, 21 Pass, 4 Fail. Ghi nhận 2 bug chính của FR-10: user hủy được đơn `shipping` và admin chuyển được `canceled -> delivered`. | INCOMPLETE | Output đã bám vào kết quả test thật và evidence hiện có, nhưng vẫn cần sinh viên rà cuối tên ảnh, tạo GitHub Issue nếu rubric yêu cầu, và đồng bộ số liệu này vào báo cáo/PDF chính. | Sinh viên cần kiểm tra lại report cuối, gắn issue thật cho BUG-D-01/BUG-D-02 nếu cần, và đảm bảo Feature C/B cross-reference không mâu thuẫn với Feature D. |

## 3. Tong ket do chinh xac AI

| Chi so | So luong | Ti le |
| --- | ---: | ---: |
| Tong artifact AI sinh da audit | 24 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 24 | 100% |

## 4. Ket luan - khi nao nen / khong nen dung AI?

Nen dung AI de lap roadmap, tao khung bao cao, chuan hoa bang test case, goi y phan vung domain, tim boundary ung vien va nhac cac deliverable de thieu. Khong nen dung AI de thay the viec hieu feature, chay SUT, xac nhan actual result, tao bug evidence, tao GitHub Issues that, hoac quyet dinh feature da dat yeu cau. Voi HW02, AI phu hop vai tro tro ly co kiem soat; sinh vien phai review, thuc thi, sua va chiu trach nhiem cuoi cung.

## 5. Mandatory Disclosure draft

"The roadmap, report structure, checklist, prompt log, Agent Skills, Feature A/B/C/D test designs, Vietnamese artifact revisions, Feature A/B/C/D report/bug/gap revisions, Feature B warning reclassification, Feature D-mobile test-case readability revision, Feature D evidence reuse updates, Feature D-mobile encoding/format cleanup, API command guidance for A/B/C/D testing, final consistency/coverage review, README/checklist/main-report updates, AI Critique, AI Privacy Checklist, and AI Audit entries were generated with assistance from Codex / ChatGPT. I reviewed and will modify the feature selection, testing method, executed results, bug reports, AI gap analysis, Agent Skill demo, and final report. Actual test execution, screenshots, GitHub Issues, videos, and final judgments are verified by me. The detailed AI Audit Report is attached as Appendix A."

## 6. Phu luc audit lenh API da duoc AI ho tro

| Feature | Nhom lenh API / command AI da cung cap | Test case lien quan | Ghi chu kiem soat |
| --- | --- | --- | --- |
| Feature A - FR-04 | Lenh `set BASE`, login lay `TOKEN`, va cac lenh `curl`/PowerShell goi API profile de test cap nhat ten, phone, dia chi, token/role/profile validation. | A-DT-01, A-DT-02, A-DT-03, A-DT-04, A-DT-05, A-DT-13, A-DT-16, A-DT-17, A-DT-18 | Sinh vien phai tu chay tren SUT va cap nhat response/screenshot that vao Feature A. |
| Feature B - FR-11 | Lenh login user/admin, `GET /api/orders/my-orders`, `GET /api/orders/:id`, setup order, test token thieu/sai, order khong thuoc user, zero total, refresh sau cancel, va PUT/setup status la. | B-DT-04, B-DT-05, B-DT-06, B-DT-13, B-DT-14, B-BVA-04, B-BVA-05, B-BVA-08 | Mot so lenh dung de tao du lieu tien dieu kien; verdict van dua tren ket qua sinh vien chay that. |
| Feature C - FR-18 | Lenh login admin/user, `GET /api/admin/orders`, `PUT /api/admin/orders/:id/status`, checkout tao order, setup transition, test token user thuong, id khong ton tai, status `returned`, HTML/XSS address. | C-DT-01, C-DT-03, C-DT-04, C-DT-10, C-DT-11, C-DT-12, C-DT-13, C-DT-14, C-DT-15, C-DT-16, C-BVA-05, C-BVA-06, C-BVA-08 | Cac lenh da ho tro phat hien role bug, `canceled -> delivered`, va XSS; screenshot/log do sinh vien tao moi la evidence. |
| Feature D - FR-10 | Lenh login user/admin, checkout tao order, chuoi PUT admin de dua order qua `confirmed`, `shipping`, `delivered`, lenh user cancel, test own/other order va cac state bien. | D-DT-01, D-DT-07, D-DT-08, D-DT-09, D-DT-10, D-BVA-01, D-BVA-07, D-BVA-09, D-BVA-10 | Mot so evidence duoc tai su dung hop le tu Feature C/Domain Testing khi cung endpoint/rule FR-10; case con lai can evidence rieng. |

## 7. Chu ky

| Muc | Gia tri |
| --- | --- |
| Ho ten sinh vien | Tran Hai Duc |
| MSSV | 23127173 |
| Mon hoc | CS423 / CSC13003 - Kiem chung Phan mem |
| Giang vien / Tro giang | Dr. Lam Quang Vu; Dr. Tran Duy Hoang; MSc. Tran Thi Bich Hanh; MSc. Truong Phuoc Loc; MSc. Ho Tuan Thanh |
| Ngay | 2026-07-08 |
| Chu ky | Tran Hai Duc |

## 8. Audit addendum - Final consistency and coverage review

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "review lai tinh consistency cua toan bo HW2; review tinh day du test case cua toan bo HW2; review xem da khop voi Lab\\HW2\\requirement\\HW2-requirement.md chua; cap nhat ai audit" |
| Output AI | Ra soat toan bo HW2, cap nhat `README.md`, `checklist.md`, `doc/md/main-report.md`, tao `doc/md/hw2-consistency-coverage-review.md`, viet lai AI Critique, cap nhat AI Privacy Checklist va Mandatory Disclosure. |
| Verdict | INCOMPLETE |
| Ly do | Review xac nhan 4 feature da co Domain Testing, BVA, bug report, AI gap analysis va 101/101 test da chay. Tuy nhien cac bang chung ngoai Markdown nhu GitHub Issue that, PDF, video demo Agent Skill va commit log that van can sinh vien bo sung truoc khi nop. |
| Ban sinh vien can sua | Tao/link GitHub Issues, export PDF, quay demo Agent Skill, paste commit log that, va dong bo prompt log neu muon no day du nhu AI Audit. |

## 9. Audit addendum - Consistency formatting for Domain Testing, BVA and Feature D report

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "cac file domain-testing.md va boundary-value-analysis.md cua ca 4 feature A B C D chua consistency ve cach trinh bay; tuong tu cho feature-i-mobile-report.md; toi muon chung consistency hon; bo sung audit" |
| Output AI | Chuan hoa cach trinh bay cho 8 file `domain-testing.md` va `boundary-value-analysis.md`: them muc thong tin chung/quy uoc trinh bay, them bang tom tat ket qua cho A/B/C, viet lai sach hon hai file Domain/BVA cua Feature D-mobile, va viet lai `feature-D-mobile-report.md` theo cung format voi B/C report. |
| Verdict | INCOMPLETE |
| Ly do | Format da nhat quan hon va khong doi test ID/verdict/evidence chinh. Tuy nhien sinh vien van can doc lai ban cuoi trong Markdown/PDF de dam bao rendering bang dai, duong dan anh va encoding tieng Viet hien dung. |
| Ban sinh vien can sua | Review file sau khi export PDF, dam bao cac bang khong tran trang, va bo sung GitHub Issue/PDF/video/commit log that neu chua co. |

## 10. Audit addendum - Evidence path normalization

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "chua consistency ve path file minh chung" |
| Output AI | Chuan hoa duong dan minh chung trong cac file Markdown thuoc `requirement` ve dang tuong doi ngan: `domain-testing/...png`, `boundary-value-analysis/...png`, va `bug-report/screenshots/...png`; loai bo cac prefix dai nhu `23127173_HW02_AI_095\\requirement\\feature-*\\...`. |
| Verdict | INCOMPLETE |
| Ly do | Path da nhat quan hon trong Markdown, nhung sinh vien van can mo/preview report sau khi export PDF de dam bao link anh render dung trong moi moi truong nop bai. |
| Ban sinh vien can sua | Khi dong goi zip/PDF, kiem tra lai anh co nam dung thu muc tuong doi va cac link trong bug report/GitHub Issue co mo duoc. |

## 11. Audit addendum - Feature D-mobile encoding and formatting cleanup

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-08 +07:00 |
| Prompt | "ban review lai Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\domain-testing\\domain-testing.md, Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\boundary-value-analysis\\boundary-value-analysis.md loi dinh dang hay gi do" |
| Output AI | Kiem tra va phat hien hai file Feature D-mobile Domain Testing/BVA bi loi mojibake tieng Viet. Viet lai sach hai file bang UTF-8, giu nguyen ID test, verdict, so lieu tong ket va duong dan minh chung tuong doi. |
| Verdict | INCOMPLETE |
| Ly do | Da sua loi hien thi/encoding trong Markdown, nhung sinh vien van can preview lai khi export PDF de dam bao bang dai va tieng Viet co dau render dung. |
| Ban sinh vien can sua | Mo lai hai file trong editor/PDF preview, doi chieu anh minh chung va so lieu voi report cuoi truoc khi nop. |

## 12. Audit addendum - Final submission readiness review and evidence-folder update

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-09 +07:00 |
| Prompt | "cac anh github nam trong cac thu muc kieu Lab\\HW2\\23127173_HW02_AI_095\\requirement\\feature-D-mobile\\bug-report\\screenshots; review lai lan nua xem toi san sang nop chua; ngoai ra cham lai diem toan bai, toi muon duoc it nhat 95/100, cap nhat audit" va "toi se bo cot video demo... thay video demo thanh folder chua cac anh..." |
| Output AI | Ra soat lai deliverable HW02, xac nhan PNG evidence hop le, sua bug report Feature B bi loi encoding, ghi ro anh minh chung GitHub/bug nam trong `bug-report/screenshots`, cap nhat README/checklist/main-report theo huong bo cot demo video trong test summary va thay bang thu muc anh minh chung. Tu danh gia muc tieu 95/100 khi cac artifact Markdown/evidence da day du; PDF va video skill se do sinh vien tu bo sung khi dong goi. |
| Verdict | INCOMPLETE |
| Ly do | Markdown va evidence folders da san sang hon cho muc tieu 95, nhung diem cuoi cung van phu thuoc vao viec sinh vien export PDF, bo sung video demo skill neu rubric yeu cau, va gan URL GitHub Issue that neu giang vien bat buoc. |
| Ban sinh vien can sua | Export PDF, kiem tra render bang/anh, cap nhat link video demo skill neu can, va gan URL issue that neu rubric yeu cau ngoai screenshot. |

## 13. Audit addendum - Prompt log sync and full main report composition

| Muc | Gia tri |
| --- | --- |
| Tool | Codex / ChatGPT |
| Thoi gian | 2026-07-09 +07:00 |
| Prompt | "cap nhat Lab\\HW2\\23127173_HW02_AI_095\\doc\\md\\appendixA-prompt-log.md; main-report se la ban ket hop noi dung day du cua feature-A report, feature-B report, feature-C domain-testing, feature-D-mobile report, toan bo thu muc AI Audit" |
| Output AI | Cap nhat prompt log theo cac interaction chinh cua HW02 va tao lai `doc/md/main-report.md` thanh ban tong hop day du, gom Feature A report, Feature B report, Feature C Domain Testing, Feature D-mobile report va toan bo cac file trong `doc/md/AI Audit`. |
| Verdict | INCOMPLETE |
| Ly do | Main report da gom noi dung Markdown can nop, nhung sinh vien van can preview/export PDF de dam bao cac bang dai render dung va khong bi tran trang. |
| Ban sinh vien can sua | Doc lai ban main report sau khi export PDF, sua layout neu bang qua rong, va cap nhat lai prompt log neu co them interaction AI truoc khi nop. |

---

# Phụ lục B - AI Critique

Nguồn: `Lab\HW2\23127173_HW02_AI_095\doc\md\AI Audit\02_AI-Critique.md`

# AI Critique - HW02

Trong HW02, AI giúp tôi đi nhanh hơn ở phần dựng khung báo cáo, tạo Agent Skills, phân chia miền đầu vào, đề xuất test case Domain Testing/BVA và viết lại bug report cho dễ đọc. Tuy nhiên AI không đúng ngay từ đầu. Lỗi lớn nhất là AI có xu hướng suy đoán theo kinh nghiệm thương mại điện tử chung, ví dụ ban đầu đề xuất các trường hồ sơ như ngày sinh, avatar, giới tính dù repo EShop không có. Nếu chỉ tin output đó thì test case sẽ lệch khỏi SUT thật.

AI cũng có bias về "happy path": thường ưu tiên luồng hợp lệ và các lỗi validation dễ thấy, trong khi các lỗi nguy hiểm hơn lại nằm ở API phụ hoặc nhánh ít dùng, như `GET /api/orders/:id` không kiểm tra chủ sở hữu, admin API không kiểm tra role, hoặc state machine cho `canceled -> delivered`. Các lỗi này chỉ lộ ra khi đọc source và chủ động tạo negative test.

Một thiếu sót khác là AI chưa luôn cô lập biến tốt. Ở Feature A, một số test BVA cho tên/địa chỉ bị nhiễu bởi lỗi validation phone, làm kết quả không còn đo đúng biến đang kiểm thử. Sau khi chạy thật, tôi phải ghi nhận gap này thay vì cố làm đẹp số liệu.

Bài học chính là AI phù hợp làm trợ lý có kỷ luật, không phải người phán quyết cuối. Muốn dùng AI tốt trong kiểm thử, tôi phải bắt AI bám requirement, bám source code, ghi rõ giả định, rồi tự chạy SUT, chụp evidence và sửa lại report theo kết quả thật.

---

# Phụ lục C - Mandatory Disclosure

Nguồn: `Lab\HW2\23127173_HW02_AI_095\doc\md\AI Audit\03_Mandatory-Disclosure.md`

# Mandatory Disclosure - HW02

## Disclosure Statement

"The roadmap, initial folder structure, report templates, checklist, prompt log, Agent Skills, source-based Feature A/B/C/D test designs, Vietnamese revision of requirement artifacts, optimized test-case traceability columns, Feature A/B/C/D report and bug/gap revisions, Feature B warning reclassification, Feature D-mobile test-case readability revision, Feature D evidence reuse updates, API command guidance for A/B/C/D testing, final HW2 consistency/coverage review, README/checklist/main-report updates, consistency formatting for Domain Testing/BVA/Feature D-mobile report, evidence path normalization, Feature D-mobile encoding/format cleanup, final readiness review, evidence-folder summary updates, prompt log synchronization, and full main-report composition were generated with assistance from Codex / ChatGPT. I reviewed and will modify the feature selection, Domain Testing analysis, Boundary Value Analysis, test cases, actual execution results, bug reports, AI gap analysis, Agent Skill demo, and final report. Actual SUT execution, screenshots, GitHub Issues, videos, and final verdicts are verified by me. I confirm I did not use AI to generate fake evidence or any prohibited artifact. The detailed AI Audit Report is attached as Appendix A."

## Student Signature

| Field | Value |
| --- | --- |
| Student name | Tran Hai Duc |
| Student ID | 23127173 |
| Course | CS423 / CSC13003 - Software Testing |
| Assignment | HW02-AI - Domain Testing |
| Date | 2026-07-08 |
| Signature | Tran Hai Duc |

---

# Phụ lục D - AI Privacy Checklist

Nguồn: `Lab\HW2\23127173_HW02_AI_095\doc\md\AI Audit\04_AI-Privacy-Checklist.md`

# AI Privacy & Responsible Use Checklist - HW02

## 1. Before Using AI

* [x] Confirmed the AI level required for HW02.
* [x] Read the course AI policy and templates.
* [x] Confirmed that evidence such as screenshots, videos, actual results, and GitHub Issues must be real and verified.
* [x] Removed private credentials, tokens, and personal data before prompting AI.

## 2. While Using AI

* [x] Logged major AI interactions in `doc/md/AI Audit/01_AI-Audit-Report.md`.
* [x] Mirrored the major artifact-changing interactions in `doc/md/appendixA-prompt-log.md`.
* [x] Did not use AI-generated text as fake execution evidence.
* [x] Did not paste private passwords, long-lived tokens, or sensitive personal data into AI.
* [x] Tagged AI-generated artifacts in the AI Audit Report.

## 3. Before Submission

* [x] All AI-generated feature artifacts are audited at artifact level.
* [x] AI-suggested rules/test cases were checked against EShop repo and executed results.
* [x] Actual results in feature tables are based on SUT execution/evidence prepared by the student.
* [x] AI Critique is 200-300 words.
* [x] Mandatory Disclosure is included.
* [x] README test summary is complete.
* [x] Main report and AI Audit have been exported to PDF.
* [ ] GitHub Issue links/screenshots have been attached for all bugs.
* [x] Agent Skill demo video link has been added.
* [x] Git commit log has been pasted from real repository history.

## 4. Final Responsibility

I understand that final responsibility for correctness, originality, and academic integrity belongs to me.

| Field | Value |
| --- | --- |
| Student name | Trần Hải Đức |
| Student ID | 23127173 |
| Date | 2026-07-09 |
| Signature | Trần Hải Đức |
