# Boundary Value Analysis - FR-18 Quản lý đơn hàng (admin)
## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool C - FR-18: Quản lý đơn hàng của admin |
| Kỹ thuật | Boundary Value Analysis |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend admin và backend |
| Actor chính | Admin |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định danh mục biên, liệt kê giá trị tại/ngay ngoài biên, lập test case BVA, sau đó ghi chú review. Các test ID, verdict và bằng chứng được giữ nguyên để không làm đứt trace.

## 1. Danh mục biên


| Biên ID   | Biến                              | Biên dưới                 | Biên trên                                | Nguồn quy tắc                     | Độ tin cậy |
| --------- | --------------------------------- | ------------------------- | ---------------------------------------- | --------------------------------- | ---------- |
| C-BVA-B01 | Số đơn trong bảng admin           | 0 đơn                     | Không có biên trên được mô tả            | Bảng admin map danh sách `orders` | Trung bình |
| C-BVA-B02 | Số bước chuyển trạng thái         | 0 sau trạng thái kết thúc | 3 bước tiến từ `pending` đến `delivered` | README FR-10                      | Cao        |
| C-BVA-B03 | Độ dài/hiển thị địa chỉ giao hàng | 0 ký tự                   | Không có biên trên được mô tả            | DB `TEXT`, UI render              | Trung bình |
| C-BVA-B04 | Sự tồn tại của mã đơn             | ID tồn tại đầu tiên       | ID tồn tại cuối cùng                     | DB/API path                       | Trung bình |




## 2. Giá trị biên


| Biên ID   | Dưới biên dưới                    | Tại biên dưới                                        | Trên biên dưới             | Danh nghĩa              | Dưới biên trên | Tại biên trên        | Trên biên trên                    |
| --------- | --------------------------------- | ---------------------------------------------------- | -------------------------- | ----------------------- | -------------- | -------------------- | --------------------------------- |
| C-BVA-B01 | N/A                               | 0                                                    | 1                          | 2                       | N/A            | Không có biên trên   | Nhiều, ví dụ 50                   |
| C-BVA-B02 | Thử chuyển từ trạng thái kết thúc | 0 chuyển trạng thái được phép từ trạng thái kết thúc | 1 chuyển trạng thái hợp lệ | `confirmed -> shipping` | 2 moves        | chuỗi 3 bước         | Bỏ qua bước `pending -> shipping` |
| C-BVA-B03 | N/A                               | địa chỉ rỗng                                         | 1 ký tự                    | địa chỉ bình thường     | N/A            | Không có biên trên   | HTML payload/địa chỉ dài          |
| C-BVA-B04 | 0/non-existing                    | first existing id                                    | ID thứ hai                 | ID ở giữa               | ID áp chót     | ID tồn tại cuối cùng | 999999                            |




## 3. Test case BVA


| ID       | Mục tiêu                                          | Điều kiện/biên thỏa mãn                 | Biên                                    | Đầu vào                                                                                                                                                                                                                                                                                        | Tiền điều kiện              | Các bước                                | Kết quả mong đợi                                   | Actual                                                              | Verdict                          | Bằng chứng                                                                                                                                                                                                                                                                                                                                 |
| -------- | ------------------------------------------------- | --------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C-BVA-01 | Bảng admin với 0 đơn                              | C-BVA-B01 biên dưới                     | C-BVA-B01 biên dưới                     | Token=token admin, trừ khi test case ghi khác; order_id=0 đơn; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                                           | Bảng đơn rỗng               | Mở tab Orders của admin                 | Bảng xử lý trạng thái rỗng không bị crash          | Giống như mong đợi                                                  | Pass                             | boundary-value-analysis/C-BVA-01.png                                                                                                                                                                                                                                                            |
| C-BVA-02 | Bảng admin với 1 đơn                              | C-BVA-B01 above biên dưới               | C-BVA-B01 above biên dưới               | Token=token admin, trừ khi test case ghi khác; order_id=1 đơn; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                                           | Có một đơn                  | Mở tab Orders                           | Hiển thị đúng một dòng                             | Giống như kết quả mong muốn                                         | Pass                             | boundary-value-analysis/C-BVA-02.png                                                                                                                                                                                                                                                            |
| C-BVA-03 | Bảng admin với nhiều đơn                          | C-BVA-B01 không có biên trên            | C-BVA-B01 không có biên trên            | Token=token admin, trừ khi test case ghi khác; order_id=50 đơn; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                                          | Có nhiều đơn                | Mở tab Orders                           | Tất cả dòng hiển thị, đơn mới nhất đứng trước      | Giống như mong muốn                                                 | Pass                             | boundary-value-analysis/C-BVA-03.png                                                                                                                                                                                                                                                            |
| C-BVA-04 | Chuỗi chuyển trạng thái hợp lệ đầy đủ             | C-BVA-B02 chuỗi biên trên               | C-BVA-B02 chuỗi biên trên               | Token=token admin, trừ khi test case ghi khác; order_id=`pending -> confirmed -> shipping -> delivered`; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed | Token admin; đơn `pending`  | Thực hiện chuyển trạng thái đúng thứ tự | Kết thúc ở `delivered` và từng bước được chấp nhận | Giống như kết quả mong muốn                                         | Pass                             | boundary-value-analysis/C-BVA-04-1.png, boundary-value-analysis/C-BVA-04-2.png, boundary-value-analysis/C-BVA-04-3.png, boundary-value-analysis/C-BVA-04-4.png |
| C-BVA-05 | Từ chối chuyển trạng thái bỏ bước                 | C-BVA-B02 trên biên bước                | C-BVA-B02 trên biên bước                | Token=token admin, trừ khi test case ghi khác; order_id=`pending -> shipping`; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                           | Token admin; đơn `pending`  | Gọi PUT với trạng thái đích `shipping`  | 400 do chuyển trạng thái không hợp lệ              | Giống kết quả mong muốn                                             | Pass                             | boundary-value-analysis/C-BVA-05.png                                                                                                                                                                                                                                                            |
| C-BVA-06 | Từ chối chuyển trạng thái sau trạng thái kết thúc | C-BVA-B02 biên dưới trạng thái kết thúc | C-BVA-B02 biên dưới trạng thái kết thúc | Token=token admin, trừ khi test case ghi khác; order_id=`canceled -> delivered`; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                         | Token admin; đơn `canceled` | Gọi PUT với trạng thái đích `delivered` | 400 do chuyển trạng thái không hợp lệ              | chuyển thành công từ trạng thái canceled sang trạng tháng delivered | Fail                             | boundary-value-analysis/C-BVA-06.png                                                                                                                                                                                                                                                            |
| C-BVA-07 | Hiển thị địa chỉ giao hàng rỗng                   | C-BVA-B03 biên dưới                     | C-BVA-B03 biên dưới                     | Token=token admin, trừ khi test case ghi khác; order_id=địa chỉ rỗng; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed                                    | Đơn tồn tại                 | Mở tab Orders                           | Hiển thị fallback an toàn hoặc để trống            | Hiển thị fallback là "Chưa cập nhật"                                | Pass - minh chứng giống C-BVA-02 | boundary-value-analysis/C-BVA-02.png                                                                                                                                                                                                                                                            |
| C-BVA-08 | An toàn hiển thị địa chỉ dạng HTML                | C-BVA-B03 trên biên hiển thị an toàn    | C-BVA-B03 trên biên hiển thị an toàn    | Token=token admin, trừ khi test case ghi khác; order_id=`<b>X</b><img src=x onerror=alert(1)>`; current_status=trạng thái được thiết lập cho test; target_status=giá trị đang kiểm thử; shipping_address=văn bản an toàn trừ khi test case ghi khác; order_list=danh sách đơn đã seed          | Đơn tồn tại                 | Mở tab Orders                           | Chỉ hiển thị text đã escape; không thực thi HTML   | script được thực thi                                                | Fail                             | boundary-value-analysis/C-BVA-08-1.png, boundary-value-analysis/C-BVA-08-2.png                                                                                                                                                                       |




## 4. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 8 | 6 | 2 | 0 | 0 |

## 5. Ghi chú review

- Agent skill đã dùng: `boundary-value-analysis-designer`.
- BVA của FR-18 tập trung vào số lượng đơn, biên số bước chuyển trạng thái, biên trạng thái kết thúc và biên hiển thị dữ liệu.




