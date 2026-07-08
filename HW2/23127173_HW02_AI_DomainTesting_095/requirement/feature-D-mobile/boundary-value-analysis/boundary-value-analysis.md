# Boundary Value Analysis - FR-10 Máy trạng thái đơn hàng

## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool D - FR-10: Máy trạng thái đơn hàng |
| Kỹ thuật | Boundary Value Analysis |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend web/admin và backend |
| Actor chính | User/mobile user và admin |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định danh mục biên, liệt kê giá trị tại/ngay ngoài biên, lập test case BVA, sau đó ghi chú review. Với state machine, "biên" không phải luôn là số học mà là điểm đầu/cuối luồng, ngay trước/ngay sau quyền hủy, trạng thái kết thúc, ownership và tập enum hợp lệ.

## 1. Danh mục biên

| Biên ID | Biến / vùng biên | Biên dưới / tại biên | Biên trên / ngay ngoài biên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | Luồng trạng thái bình thường | `pending` | thử đi tiếp sau `delivered` | README FR-10 | Cao |
| D-BVA-B02 | Khoảng user được hủy | `pending`, `confirmed` | `shipping` | README FR-10 và user cancel route | Cao |
| D-BVA-B03 | Trạng thái kết thúc | `delivered`, `canceled` | transition đi ra từ trạng thái kết thúc | README FR-10 | Cao |
| D-BVA-B04 | Ownership order ID | order của chính user | order của user khác | `PUT /api/orders/:id/cancel` | Cao |
| D-BVA-B05 | Tập trạng thái hợp lệ | 5 trạng thái hợp lệ | trạng thái lạ `returned` | README FR-10 | Cao |

## 2. Giá trị biên

| Biên ID | Dưới/tại biên | Ngay trên/ngoài biên | Danh nghĩa | Lý do chọn |
| --- | --- | --- | --- | --- |
| D-BVA-B01 | Đơn mới ở `pending`; `pending -> confirmed`; `shipping -> delivered` | `delivered -> canceled` | Luồng `pending -> confirmed -> shipping -> delivered` | Kiểm tra đầu/cuối luồng giao hàng |
| D-BVA-B02 | User hủy `pending`; user hủy `confirmed` | User hủy `shipping` | Hủy trước khi giao | `shipping` là trạng thái đầu tiên user không được hủy |
| D-BVA-B03 | `delivered` và `canceled` có 0 transition hợp lệ đi ra | `canceled -> delivered` | Không chuyển tiếp sau trạng thái kết thúc | Xác nhận terminal state |
| D-BVA-B04 | User dùng ID đơn của chính mình | User dùng ID đơn của người khác | Đơn của chính user | Kiểm tra biên sở hữu dữ liệu |
| D-BVA-B05 | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | `returned` | 5 trạng thái hợp lệ | Kiểm tra enum ngoài tập hợp |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-01 | Kiểm tra trạng thái đầu tiên của đơn mới | D-BVA-B01 tại biên dưới | Trạng thái khởi tạo `pending` | Token=user; order_id=đơn mới; current_status=N/A; target_status=N/A | User đăng nhập và checkout được | Checkout rồi xem lại đơn | Trạng thái bắt đầu là `pending` | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-01.png` |
| D-BVA-02 | Kiểm tra transition đầu tiên sau `pending` | D-BVA-B01 ngay sau biên dưới | `pending -> confirmed` | Token=admin; current_status=`pending`; target_status=`confirmed`; order_id=đơn tồn tại | Có đơn `pending` | PUT status `confirmed` | Được chấp nhận | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-02-1.png`, `boundary-value-analysis/D-BVA-02-2.png` |
| D-BVA-03 | Kiểm tra transition cuối hợp lệ | D-BVA-B01 tại biên trên | `shipping -> delivered` | Token=admin; current_status=`shipping`; target_status=`delivered`; order_id=đơn tồn tại | Có đơn `shipping` | PUT status `delivered` | Được chấp nhận, đơn kết thúc ở `delivered` | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-03.png` |
| D-BVA-04 | Không cho đi tiếp sau `delivered` | D-BVA-B01 ngoài biên trên, D-BVA-B03 | `delivered -> canceled` | Token=admin; current_status=`delivered`; target_status=`canceled`; order_id=đơn tồn tại | Có đơn `delivered` | PUT status `canceled` | Bị từ chối | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-04.png` |
| D-BVA-05 | User hủy đơn ở biên dưới được phép | D-BVA-B02 tại biên dưới | User hủy `pending` | Token=user; current_status=`pending`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `pending` | Gọi API hủy đơn | Được chấp nhận, đơn thành `canceled` | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-05.png` |
| D-BVA-06 | User hủy đơn ở biên trên được phép | D-BVA-B02 tại biên trên | User hủy `confirmed` | Token=user; current_status=`confirmed`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `confirmed` | Gọi API hủy đơn | Được chấp nhận, đơn thành `canceled` | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-06-1.png`, `boundary-value-analysis/D-BVA-06-2.png` |
| D-BVA-07 | User hủy ngay sau khoảng được phép | D-BVA-B02 ngay ngoài biên trên | User hủy `shipping` | Token=user; current_status=`shipping`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `shipping` | Gọi API hủy đơn hoặc kiểm tra nút hủy trên UI | Bị từ chối; đơn vẫn là `shipping` | Vẫn hủy được đơn `shipping` | Fail | `boundary-value-analysis/D-BVA-07.png` |
| D-BVA-08 | Không cho đi ra từ `canceled` | D-BVA-B03 trạng thái kết thúc | `canceled -> delivered` | Token=admin; current_status=`canceled`; target_status=`delivered`; order_id=đơn tồn tại | Có đơn `canceled` | PUT status `delivered` | Bị từ chối | Backend chuyển sang `delivered` thành công | Fail | `boundary-value-analysis/D-BVA-08.png` |
| D-BVA-09 | User hủy ID đơn của chính mình | D-BVA-B04 tại biên sở hữu | Order của chính user | Token=user; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn ở trạng thái được phép hủy | Gọi API hủy đơn bằng ID của chính user | Được xử lý theo trạng thái hiện tại | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-09.png` |
| D-BVA-10 | User hủy ID đơn của người khác | D-BVA-B04 ngay ngoài biên sở hữu | Order của user khác | Token=user A; ownership=order thuộc user B; order_id=đơn của user B | Có đơn của user B | User A gọi API hủy order của user B | Trả 404 `Order not found` | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-10.png` |
| D-BVA-11 | Trạng thái đích ngoài tập hợp | D-BVA-B05 ngoài tập hợp hợp lệ | target `returned` | Token=admin; current_status=`pending`; target_status=`returned`; order_id=đơn tồn tại | Có đơn `pending` | PUT status `returned` | Bị từ chối với lỗi transition không hợp lệ | Giống kết quả mong đợi | Pass | `boundary-value-analysis/D-BVA-11.png` |

## 4. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 11 | 9 | 2 | 0 | 0 |

## 5. Ghi chú review

- Bộ BVA tập trung vào các biên quan trọng nhất của state machine: đầu luồng, cuối luồng, ngay sau quyền hủy của user, trạng thái kết thúc, ownership và enum trạng thái.
- Một số ảnh BVA được tái sử dụng từ Domain Testing hoặc Feature C vì cùng kiểm tra rule FR-10 trên cùng endpoint.
- Hai biên fail quan trọng là `shipping` ngay sau khoảng user được hủy và `canceled` là trạng thái kết thúc nhưng vẫn đi được tới `delivered`.
