# Boundary Value Analysis - Feature D Mobile: FR-10 Máy trạng thái đơn hàng

## 1. Cách hiểu BVA cho state machine

FR-10 không phải bài toán số học thuần túy, nên “biên” ở đây là biên của trạng thái:

- Biên đầu luồng: đơn mới bắt đầu ở `pending`.
- Biên cuối luồng bình thường: `shipping -> delivered`.
- Biên cuối quyền hủy của user: user chỉ hủy được tới `confirmed`; ngay sau đó là `shipping` thì không được hủy.
- Biên trạng thái kết thúc: từ `delivered` hoặc `canceled` không được đi tiếp.
- Biên quyền sở hữu: ID đơn của mình so với ID đơn của người khác.

## 2. Danh mục biên


| Biên ID   | Biến / vùng biên             | Giá trị tại biên                                            | Giá trị ngay ngoài biên     | Ý nghĩa                                                |
| --------- | ---------------------------- | ----------------------------------------------------------- | --------------------------- | ------------------------------------------------------ |
| D-BVA-B01 | Luồng trạng thái bình thường | `pending`, `confirmed`, `shipping`, `delivered`             | thử đi tiếp sau `delivered` | Kiểm tra đầu/cuối luồng giao hàng.                     |
| D-BVA-B02 | Khoảng user được hủy         | `pending`, `confirmed`                                      | `shipping`                  | `shipping` là trạng thái đầu tiên user không được hủy. |
| D-BVA-B03 | Trạng thái kết thúc          | `delivered`, `canceled`                                     | bất kỳ transition đi ra     | Hai trạng thái này phải đóng lại.                      |
| D-BVA-B04 | Quyền sở hữu order ID        | order của chính user                                        | order của user khác         | User chỉ được thao tác trên đơn của mình.              |
| D-BVA-B05 | Tập trạng thái hợp lệ        | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | `returned`                  | Trạng thái ngoài tập hợp phải bị từ chối.              |




## 3. Giá trị biên cụ thể


| Biên ID   | Case dưới/tại biên                                                                               | Case trên/ngoài biên                            |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| D-BVA-B01 | Đơn mới ở `pending`; chuyển đầu tiên `pending -> confirmed`; chuyển cuối `shipping -> delivered` | `delivered -> canceled` phải bị từ chối         |
| D-BVA-B02 | User hủy `pending`; user hủy `confirmed`                                                         | User hủy `shipping` phải bị từ chối             |
| D-BVA-B03 | `delivered` và `canceled` có 0 transition hợp lệ đi ra                                           | `canceled -> delivered` phải bị từ chối         |
| D-BVA-B04 | User dùng ID đơn của chính mình                                                                  | User dùng ID đơn của người khác phải bị từ chối |
| D-BVA-B05 | Trạng thái hợp lệ trong enum                                                                     | Trạng thái lạ `returned` phải bị từ chối        |




## 4. Test case BVA


| ID       | Mục tiêu dễ hiểu                           | Biên                                 | Thiết lập dữ liệu                          | Cách test                                     | Kết quả mong đợi                           | Actual                                     | Verdict   | Bằng chứng                                                                                                                                   |
| -------- | ------------------------------------------ | ------------------------------------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| D-BVA-01 | Kiểm tra trạng thái đầu tiên của đơn mới   | D-BVA-B01 tại biên dưới              | User đăng nhập và tạo đơn mới              | Checkout rồi xem lại đơn                      | Trạng thái bắt đầu là `pending`            | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-01.png`                                                                          |
| D-BVA-02 | Kiểm tra transition đầu tiên sau `pending` | D-BVA-B01 ngay sau biên dưới         | Có đơn `pending`, token admin              | PUT status `confirmed`                        | Được chấp nhận                             | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-02-1.png`, `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-02-2.png` |
| D-BVA-03 | Kiểm tra transition cuối hợp lệ            | D-BVA-B01 tại biên trên              | Có đơn `shipping`, token admin             | PUT status `delivered`                        | Được chấp nhận, đơn kết thúc ở `delivered` | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-03.png`                                                                          |
| D-BVA-04 | Không cho đi tiếp sau `delivered`          | D-BVA-B01 ngoài biên trên, D-BVA-B03 | Có đơn `delivered`, token admin            | PUT status `canceled`                         | Bị từ chối                                 | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-04.png`                                                                          |
| D-BVA-05 | User hủy đơn ở biên dưới được phép         | D-BVA-B02 tại biên dưới              | User sở hữu đơn `pending`                  | Gọi API hủy đơn                               | Được chấp nhận, đơn thành `canceled`       | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-05.png`                                                                          |
| D-BVA-06 | User hủy đơn ở biên trên được phép         | D-BVA-B02 tại biên trên              | User sở hữu đơn `confirmed`                | Gọi API hủy đơn                               | Được chấp nhận, đơn thành `canceled`       | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-06-1.png`, `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-06-2.png` |
| D-BVA-07 | User hủy ngay sau khoảng được phép         | D-BVA-B02 ngay ngoài biên trên       | User sở hữu đơn `shipping`                 | Gọi API hủy đơn hoặc kiểm tra nút hủy trên UI | Bị từ chối; đơn vẫn là `shipping`          | Vẫn hủy được đơn `shipping`                | Fail      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-07.png`                                                                          |
| D-BVA-08 | Không cho đi ra từ `canceled`              | D-BVA-B03 trạng thái kết thúc        | Có đơn `canceled`, token admin             | PUT status `delivered`                        | Bị từ chối                                 | Backend chuyển sang `delivered` thành công | Fail      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-08.png`                                                                          |
| D-BVA-09 | User hủy ID đơn của chính mình             | D-BVA-B04 tại biên sở hữu            | User sở hữu đơn ở trạng thái được phép hủy | Gọi API hủy đơn bằng ID của chính user        | Được xử lý theo trạng thái hiện tại        | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-09.png`                                                                          |
| D-BVA-10 | User hủy ID đơn của người khác             | D-BVA-B04 ngay ngoài biên sở hữu     | Token user A, order thuộc user B           | User A gọi API hủy order của user B           | Trả 404 `Order not found`                  | Giống như kết quả mong muốn                | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-10.png`                                                                          |
| D-BVA-11 | Trạng thái đích ngoài tập hợp              | D-BVA-B05 ngoài tập hợp hợp lệ       | Có đơn `pending`, token admin              | PUT status `returned`                         | Bị từ chối với lỗi transition không hợp lệ | Giống kết quả mong đợi                     | Pass      | `requirement\feature-D-mobile\boundary-value-analysis\D-BVA-11.png`                                                                          |




## 5. Review độ đủ

Bộ BVA hiện tập trung vào các biên quan trọng nhất của máy trạng thái:

- Đầu luồng: `pending`.
- Cuối luồng hợp lệ: `delivered`.
- Ngay sau quyền hủy của user: `shipping`.
- Trạng thái kết thúc: `delivered` và `canceled`.
- Biên quyền sở hữu: order của mình và order của người khác.
- Biên enum: trạng thái hợp lệ và trạng thái lạ.

Một số BVA đã dùng lại bằng chứng từ Domain Testing/Feature C vì cùng kiểm tra một rule FR-10 trên cùng endpoint. Sau khi tái sử dụng bằng chứng, BVA chỉ còn các case chưa có evidence trực tiếp nếu Domain Testing tương ứng cũng chưa đủ hoặc cần ảnh riêng rõ hơn.
