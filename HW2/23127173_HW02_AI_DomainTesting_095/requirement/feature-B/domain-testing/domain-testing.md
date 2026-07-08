# Domain Testing - FR-11 Xem lịch sử đơn hàng (user)
## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool B - FR-11: Xem lịch sử đơn hàng của người dùng |
| Kỹ thuật | Domain Testing |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend web và backend |
| Actor chính | User đã đăng nhập |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định miền đầu vào, chia lớp tương đương, ghi ràng buộc liên biến, lập test case, sau đó ghi chú review. Các giá trị kỹ thuật như endpoint, enum trạng thái, test ID và verdict được giữ nguyên để dễ truy vết bằng chứng.

## 1. Miền đầu vào


| Biến               | Kiểu              | Nguồn           | Ràng buộc                                                   | Ghi chú                                |
| ------------------ | ----------------- | --------------- | ----------------------------------------------------------- | -------------------------------------- |
| Token xác thực     | Header/trạng thái | `server.js`     | Token hợp lệ bắt buộc for `/api/orders/my-orders`           | Thiếu token trả 401, token sai trả 403 |
| Quyền sở hữu user  | Trạng thái        | `server.js` SQL | `SELECT * FROM orders WHERE user_id = ?`                    | Có bằng chứng mã nguồn privacy rule    |
| Tập đơn hàng       | Danh sách         | DB/API/UI       | Rỗng hoặc không rỗng                                        | UI rẽ nhánh theo `orders.length`       |
| Trạng thái         | Tập giá trị       | README/UI       | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Label và màu sắc phải phân biệt được   |
| Thứ tự sắp xếp     | Thứ tự sắp xếp    | `server.js`     | `ORDER BY id DESC`                                          | ID mới nhất đứng trước                 |
| Route chi tiết đơn | API               | `server.js`     | `GET /api/orders/:id` trong mã nguồn không có xác thực      | Rủi ro lộ chi tiết đơn hàng            |




## 2. Lớp tương đương


| Class ID   | Biến           | Hợp lệ/Không hợp lệ | Phân vùng                                     | Giá trị đại diện           | Lý do                                           |
| ---------- | -------------- | ------------------- | --------------------------------------------- | -------------------------- | ----------------------------------------------- |
| B-DT-EC-01 | Token          | Hợp lệ              | Token của người dùng đã đăng nhập             | token của `test@eshop.com` | Luồng đúng bắt buộc                             |
| B-DT-EC-02 | Token          | Không hợp lệ        | Thiếu token                                   | không có header            | Kiểm soát truy cập                              |
| B-DT-EC-03 | Token          | Không hợp lệ        | Token sai định dạng                           | `Bearer invalid.token`     | Kiểm soát truy cập                              |
| B-DT-EC-04 | Tập đơn hàng   | Hợp lệ              | Không có đơn                                  | mảng rỗng                  | Trạng thái rỗng                                 |
| B-DT-EC-05 | Tập đơn hàng   | Hợp lệ              | Một đơn của chính user                        | một đơn pending            | Hiển thị một dòng                               |
| B-DT-EC-06 | Tập đơn hàng   | Hợp lệ              | Nhiều đơn của chính user                      | id 3, 2, 1                 | Sắp xếp                                         |
| B-DT-EC-07 | Quyền sở hữu   | Không hợp lệ        | Đơn của user khác                             | mã đơn của admin           | Không được xuất hiện trong my-orders            |
| B-DT-EC-08 | Trạng thái     | Hợp lệ              | Đang chờ xác nhận                             | `pending`                  | Nhãn tiếng Việt và action hủy                   |
| B-DT-EC-09 | Trạng thái     | Hợp lệ              | Đã xác nhận                                   | `confirmed`                | Nhãn tiếng Việt và action hủy                   |
| B-DT-EC-10 | Trạng thái     | Hợp lệ              | Đang giao                                     | `shipping`                 | Nhãn tiếng Việt; user không được hủy theo FR-10 |
| B-DT-EC-11 | Trạng thái     | Hợp lệ              | Đã giao                                       | `delivered`                | Trạng thái kết thúc; không có action hủy        |
| B-DT-EC-12 | Trạng thái     | Hợp lệ              | Đã hủy                                        | `canceled`                 | Trạng thái kết thúc; không có action hủy        |
| B-DT-EC-13 | Route chi tiết | Không hợp lệ        | Mã đơn không thuộc user qua `/api/orders/:id` | mã đơn của user khác       | Mã nguồn indicates lỗi lộ dữ liệu               |




## 3. Ràng buộc liên biến


| Constraint ID | Biến / trạng thái          | Quy tắc                                                              | Tác động kiểm thử                              |
| ------------- | -------------------------- | -------------------------------------------------------------------- | ---------------------------------------------- |
| B-DT-C01      | Token + user id            | Lịch sử chỉ được trả đơn của chủ token                               | So sánh đơn của hai user                       |
| B-DT-C02      | Trạng thái + nhãn UI       | Mỗi trạng thái hợp lệ phải map sang nhãn tiếng Việt và màu tương ứng | Bao phủ từng trạng thái                        |
| B-DT-C03      | Trạng thái + thao tác hủy  | User chỉ được hủy `pending` hoặc `confirmed` theo FR-10              | UI/API hủy ở trạng thái shipping là rủi ro cao |
| B-DT-C04      | Mã đơn + sắp xếp           | ID lớn hơn xuất hiện trước                                           | Seed/tạo nhiều đơn                             |
| B-DT-C05      | Route chi tiết + ownership | Truy cập chi tiết không được lộ đơn của user khác                    | Test âm tính qua API                           |




## 4. Test case Domain Testing


| ID      | Mục tiêu                                | Điều kiện/class thỏa mãn         | Đầu vào                                                                                                                                                                                                                                                                                         | Tiền điều kiện                | Các bước                                   | Kết quả mong đợi                                             | Actual                          | Verdict                                        | Bằng chứng                                                                                                                                   |
| ------- | --------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| B-DT-01 | Hiển thị rỗng history message           | B-DT-EC-01, B-DT-EC-04           | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=không có đơn hàng; không có đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC          | User account has không có đơn | Đăng nhập rồi mở `/profile`                | UI hiển thị `Bạn chưa có đơn hàng nào.`                      | Giống kết quả mong đợi          | Pass                                           | domain-testing/B-DT-01.png                                                                        |
| B-DT-02 | Hiển thị một đơn của chính user         | B-DT-EC-01, B-DT-EC-05, B-DT-C01 | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=một đơn của user hiện tại; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                | Token hợp lệ; order exists    | Mở `/profile`                              | Bảng hiển thị mã đơn, ngày, tổng tiền và trạng thái của đơn  | Giống kết quả mong đợi          | Pass                                           | domain-testing/B-DT-02.png                                                                        |
| B-DT-03 | Hiển thị nhiều đơn theo id giảm dần     | B-DT-EC-01, B-DT-EC-06, B-DT-C04 | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=các đơn có id 1, 2, 3; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                    | Token hợp lệ                  | Gọi `/api/orders/my-orders` và kiểm tra UI | Đơn được sắp xếp theo id giảm dần                            | Giống kết quả mong đợi          | Pass                                           | domain-testing/B-DT-03.png                                                                        |
| B-DT-04 | Không xem được order của người khác     | B-DT-EC-07, B-DT-C01             | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=đơn của user A và user B; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                 | Đăng nhập bằng user B         | Gọi lịch sử đơn và kiểm tra các dòng       | Chỉ đơn của user B được trả về/hiển thị                      | Giống như kết quả mong muốn     | Pass                                           | domain-testing/B-DT-04.png                                                                        |
| B-DT-05 | Chặn history API without token          | B-DT-EC-02                       | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=No auth header; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                           | Backend đang chạy             | GET `/api/orders/my-orders`                | 401 `Unauthorized`                                           | Như kết quả mong muốn           | Pass                                           | domain-testing/B-DT-05.png                                                                        |
| B-DT-06 | Chặn API lịch sử với token không hợp lệ | B-DT-EC-03                       | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Token không hợp lệ; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                       | Backend đang chạy             | GET `/api/orders/my-orders`                | 403 `Forbidden`                                              | Như kết quả mong muốn           | Pass                                           | domain-testing/B-DT-06.png                                                                        |
| B-DT-07 | Hiển thị trạng thái `pending` đúng      | B-DT-EC-08, B-DT-C02, B-DT-C03   | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Trạng thái đơn `pending`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                 | User có đơn `pending`         | Mở lịch sử đơn                             | Nhãn `Chờ xác nhận`, màu vàng, có nút hủy                    | Giống như kết quả mong muốn     | Pass                                           | domain-testing/B-DT-07.png                                                                        |
| B-DT-08 | Hiển thị trạng thái `confirmed` đúng    | B-DT-EC-09, B-DT-C02, B-DT-C03   | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Trạng thái đơn `confirmed`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC               | User có đơn `confirmed`       | Mở lịch sử đơn                             | Nhãn `Đã xác nhận`, màu chàm, có nút hủy                     | Giống như kết quả mong muốn     | Pass                                           | domain-testing/B-DT-08.png                                                                        |
| B-DT-09 | Hiển thị trạng thái `shipping` đúng     | B-DT-EC-10, B-DT-C02, B-DT-C03   | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Trạng thái đơn `shipping`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                | User có đơn `shipping`        | Mở lịch sử đơn                             | Nhãn `Đang giao`, màu xanh; theo FR-10 user không được hủy   | User có thể hủy được            | Warning - vi phạm logic của FR-10              | domain-testing/B-DT-09.png                                                                        |
| B-DT-10 | Hiển thị trạng thái `delivered` đúng    | B-DT-EC-11, B-DT-C02             | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Trạng thái đơn `delivered`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC               | User có đơn `delivered`       | Mở lịch sử đơn                             | Nhãn `Đã giao`, màu xanh lá, không có nút hủy                | Giống như kết quả mong muốn     | Pass                                           | domain-testing/B-DT-10.png                                                                        |
| B-DT-11 | Hiển thị trạng thái `canceled` đúng     | B-DT-EC-12, B-DT-C02             | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Trạng thái đơn `canceled`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                | User có đơn `canceled`        | Mở lịch sử đơn                             | Nhãn `Đã hủy`, màu đỏ, không có nút hủy                      | Giống như kết quả mong muốn     | Pass                                           | domain-testing/B-DT-11.png                                                                        |
| B-DT-12 | Định dạng tổng tiền                     | B-DT-EC-01, B-DT-C02             | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=`total_amount=300000`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                    | Đơn tồn tại                   | Mở lịch sử đơn                             | Tổng tiền hiển thị theo định dạng địa phương kèm đơn vị tiền | Giống như kết quả mong muốn     | Pass - Có thể dựa vào minh chứng của B-DT-11   | domain-testing/B-DT-11.png                                                                        |
| B-DT-13 | Ngăn lộ chi tiết đơn không thuộc user   | B-DT-EC-13, B-DT-C05             | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Đơn của user khác id; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                     | Token hợp lệ của user khác    | GET `/api/orders/:id`                      | Nên từ chối/ẩn/từ chối đơn không thuộc user                  | User có thể xem order của admin | Fail                                           | domain-testing/B-DT-13.png                                                                        |
| B-DT-14 | Làm mới sau thao tác hủy                | B-DT-EC-08, B-DT-EC-09, B-DT-C03 | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Chờ bổ sung/confirmed đơn của chính user; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Token hợp lệ                  | Bấm hủy và chờ `fetchOrders()`             | Lịch sử được làm mới và trạng thái chuyển thành `canceled`   | Giống như kết quả mong muốn     | Pass - có thể dùng minh chứng của ảnh 10 và 11 | domain-testing/B-DT-10.png, domain-testing/B-DT-11.png |




## 5. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 14 | 12 | 1 | 1 | 0 |

## 6. Ghi chú review

- Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
- Có bằng chứng mã nguồn risks: route chi tiết đơn công khai và action hủy của user vẫn hiển thị với đơn `shipping`.




