# Boundary Value Analysis - FR-11 Xem lịch sử đơn hàng (user)
## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool B - FR-11: Xem lịch sử đơn hàng của người dùng |
| Kỹ thuật | Boundary Value Analysis |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend web và backend |
| Actor chính | User đã đăng nhập |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định danh mục biên, liệt kê giá trị tại/ngay ngoài biên, lập test case BVA, sau đó ghi chú review. Các test ID, verdict và bằng chứng được giữ nguyên để không làm đứt trace.

## 1. Danh mục biên


| Biên ID   | Biến                      | Biên dưới           | Biên trên                     | Nguồn quy tắc                   | Độ tin cậy |
| --------- | ------------------------- | ------------------- | ----------------------------- | ------------------------------- | ---------- |
| B-BVA-B01 | Số đơn hàng hiển thị      | 0 đơn               | Không có biên trên được mô tả | `Profile.jsx` rỗng/table branch | Trung bình |
| B-BVA-B02 | Mã đơn của API chi tiết   | ID tồn tại          | N/A                           | `GET /api/orders/:id` route     | Trung bình |
| B-BVA-B03 | `total_amount` display    | 0                   | Không có biên trên được mô tả | DB integer + UI formatting      | Trung bình |
| B-BVA-B04 | Kích thước tập trạng thái | 5 trạng thái hợp lệ | 5 trạng thái hợp lệ           | README FR-10/FR-11              | Cao        |




## 2. Giá trị biên


| Biên ID   | Dưới biên dưới          | Tại biên dưới              | Trên biên dưới               | Danh nghĩa            | Dưới biên trên | Tại biên trên              | Trên biên trên      |
| --------- | ----------------------- | -------------------------- | ---------------------------- | --------------------- | -------------- | -------------------------- | ------------------- |
| B-BVA-B01 | N/A                     | 0 đơn                      | 1 đơn                        | 2 đơn                 | N/A            | Không có biên trên         | Nhiều đơn, ví dụ 50 |
| B-BVA-B02 | ID không tồn tại        | ID tồn tại                 | ID đơn tồn tại của user khác | ID đơn của chính user | N/A            | N/A                        | N/A                 |
| B-BVA-B03 | Negative amount         | 0                          | 1                            | 300000                | N/A            | Không có biên trên         | Very large amount   |
| B-BVA-B04 | Trạng thái không hợp lệ | Hợp lệ đầu tiên: `pending` | Hợp lệ thứ hai: `confirmed`  | `shipping`            | `delivered`    | Hợp lệ thứ năm: `canceled` | Trạng thái lạ       |




## 3. Test case BVA


| ID       | Mục tiêu                                    | Điều kiện/biên thỏa mãn      | Biên                         | Đầu vào                                                                                                                                                                                                                                                                          | Tiền điều kiện                     | Các bước                  | Kết quả mong đợi                               | Actual                         | Verdict                                    | Bằng chứng                                                                      |
| -------- | ------------------------------------------- | ---------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------- | ---------------------------------------------- | ------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------- |
| B-BVA-01 | Kiểm tra rỗng history boundary              | B-BVA-B01 biên dưới          | B-BVA-B01 biên dưới          | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=0 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                     | User has không có đơn              | Mở `/profile`             | Hiển thị Bạn chưa có đơn hàng nào.             | Giống như kết quả mong muôn    | Pass                                       | boundary-value-analysis/B-BVA-01.png |
| B-BVA-02 | Kiểm tra first order row boundary           | B-BVA-B01 above biên dưới    | B-BVA-B01 above biên dưới    | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=1 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                     | User có 1 order                    | Mở `/profile`             | Hiển thị đúng một dòng                         | Giống như kết quả mong muốn    | Pass                                       | boundary-value-analysis/B-BVA-02.png |
| B-BVA-03 | Kiểm tra hiển thị nhiều đơn                 | B-BVA-B01 không có biên trên | B-BVA-B01 không có biên trên | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=50 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC                    | Seed/tạo nhiều đơn                 | Mở `/profile`             | Các dòng hiển thị đầy đủ đơn của user hiện tại | Giống như kết quả mong muốn    | Pass                                       | boundary-value-analysis/B-BVA-03.png |
| B-BVA-04 | Kiểm tra non-existing order detail id       | B-BVA-B02 below existing     | B-BVA-B02 below existing     | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=`GET /api/orders/999999`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC  | Backend đang chạy                  | Gọi endpoint chi tiết đơn | 404 `Order not found`                          | Giống như kết quả mong muốn    | Pass                                       | boundary-value-analysis/B-BVA-04.png |
| B-BVA-05 | Kiểm tra other user's existing detail id    | B-BVA-B02 ownership boundary | B-BVA-B02 ownership boundary | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Đơn của user khác id; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC      | Token hợp lệ của user khác         | Gọi endpoint chi tiết đơn | Nên từ chối; mã nguồn likely leaks order       | User có thể xem đơn của admin  | Fail                                       | boundary-value-analysis/B-BVA-05.png |
| B-BVA-06 | Kiểm tra đơn hàng có `total_amount = 0`     | B-BVA-B03 biên dưới          | B-BVA-B03 biên dưới          | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=`total_amount=0`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC          | Đơn tồn tại                        | Mở lịch sử đơn            | `0` amount formats safely                      | Hiển thị số 0                  | Pass                                       | boundary-value-analysis/B-BVA-06.png |
| B-BVA-07 | Kiểm tra đủ năm trạng thái hợp lệ           | B-BVA-B04 biên trên set      | B-BVA-B04 biên trên set      | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=mỗi trạng thái có một đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Đơn đã được seed đủ các trạng thái | Mở lịch sử đơn            | Mỗi trạng thái có nhãn tiếng Việt và màu đúng  | trạng thái shipping có nút hủy | Warning - vi phạm lỗi của FR-10            | boundary-value-analysis/B-BVA-07.png |
| B-BVA-08 | Kiểm tra trạng thái không xác định fallback | B-BVA-B04 trên tập hợp lệ    | B-BVA-B04 trên tập hợp lệ    | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=status `returned`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC         | Thiết lập trực tiếp bằng DB/API    | Mở lịch sử đơn            | UI không được crash; có nhãn dự phòng          | Có nhãn màu vàng               | Pass - nhưng nên có màu khác thay màu vàng | boundary-value-analysis/B-BVA-08.png |




## 4. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 8 | 6 | 1 | 1 | 0 |

## 5. Ghi chú review

- Agent skill đã dùng: `boundary-value-analysis-designer`.
- FR-11 has fewer numeric boundaries; most value comes from count, ownership, status-set, and detail-id boundaries.




