# Domain Testing - FR-10 Máy trạng thái đơn hàng

## 0. Thông tin chung và quy ước trình bày

| Mục | Giá trị |
| --- | --- |
| Feature | Pool D - FR-10: Máy trạng thái đơn hàng |
| Kỹ thuật | Domain Testing |
| SUT/nguồn đối chiếu | EShop repo: README, API spec, frontend web/admin và backend |
| Actor chính | User/mobile user và admin |
| Trạng thái thực thi | Đã chạy toàn bộ test case trong bảng |

File này dùng cùng cấu trúc với các feature còn lại: xác định miền đầu vào, chia lớp tương đương, ghi ràng buộc liên biến, lập test case, sau đó ghi chú review. Vì FR-10 là rule state machine dùng chung cho user/mobile flow và admin flow, một số bằng chứng được tái sử dụng từ Feature C khi cùng endpoint, cùng dữ liệu và cùng rule.

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Trạng thái hiện tại | Enum | DB/API | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Cho biết đơn đang ở đâu trong state machine |
| Trạng thái đích | Enum/API body | Admin API | Chỉ được chuyển theo cạnh hợp lệ của FR-10 | `returned` dùng để kiểm tra trạng thái lạ |
| Actor | Vai trò thao tác | User flow/admin flow | User chỉ được hủy đơn của mình; admin đổi trạng thái theo rule | FR-10 trải trên nhiều endpoint |
| Token | Header | `server.js` | Thiếu/sai token phải bị chặn | Dùng token user hoặc admin tùy test |
| Ownership | Quan hệ user-order | `orders.user_id` | User không được hủy đơn của người khác | Route cancel phải lọc theo `user_id` |
| Order ID | Path param | API | ID tồn tại/không thuộc user/không tồn tại | Dùng để kiểm tra ownership và path boundary |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| D-DT-EC-01 | Trạng thái khởi tạo | Hợp lệ | Đơn mới sau checkout | `pending` | Đơn mới phải bắt đầu ở `pending` |
| D-DT-EC-02 | Transition admin | Hợp lệ | `pending -> confirmed` | target `confirmed` | Cạnh hợp lệ đầu tiên |
| D-DT-EC-03 | Transition admin | Hợp lệ | `confirmed -> shipping` | target `shipping` | Cạnh hợp lệ giữa luồng |
| D-DT-EC-04 | Transition admin | Hợp lệ | `shipping -> delivered` | target `delivered` | Cạnh hợp lệ cuối luồng |
| D-DT-EC-05 | User cancel | Hợp lệ | User hủy `pending` | cancel API | User được hủy trước khi xác nhận |
| D-DT-EC-06 | User cancel | Hợp lệ | User hủy `confirmed` | cancel API | User vẫn được hủy khi chưa giao |
| D-DT-EC-07 | Transition admin | Không hợp lệ | Bỏ bước `pending -> shipping` | target `shipping` | Không được nhảy thẳng sang giao |
| D-DT-EC-08 | Transition admin | Không hợp lệ | Đi ra từ `delivered` | `delivered -> canceled` | `delivered` là trạng thái kết thúc |
| D-DT-EC-09 | Transition admin | Không hợp lệ | Đi ra từ `canceled` | `canceled -> delivered` | `canceled` là trạng thái kết thúc |
| D-DT-EC-10 | User cancel | Không hợp lệ | User hủy `shipping` | cancel API | User chỉ được hủy tới `confirmed` |
| D-DT-EC-11 | Ownership | Không hợp lệ | User hủy đơn của người khác | order thuộc user khác | Phải bảo vệ quyền sở hữu |
| D-DT-EC-12 | Trạng thái đích | Không hợp lệ | Trạng thái ngoài tập hợp | `returned` | Không thuộc enum FR-10 |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| D-DT-C01 | Trạng thái hiện tại + trạng thái đích | Chỉ cạnh trong state machine FR-10 mới hợp lệ | Bao phủ cả cạnh hợp lệ và cạnh sai |
| D-DT-C02 | `delivered`/`canceled` + trạng thái đích | Hai trạng thái này là trạng thái kết thúc | Test không được đi tiếp sau trạng thái kết thúc |
| D-DT-C03 | User + trạng thái hiện tại | User chỉ được hủy `pending` hoặc `confirmed` | Test hủy ở `pending`, `confirmed`, `shipping`, `delivered`, `canceled` |
| D-DT-C04 | User + order ID | User chỉ được thao tác trên đơn của chính mình | Test order của user khác |
| D-DT-C05 | UI/mobile/web + backend | UI không nên mở thao tác mà backend/rule không cho phép | Đối chiếu nút hủy/nút giao với API |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-DT-01 | Đơn mới tạo phải ở `pending` | D-DT-EC-01, D-DT-C01 | Token=user; current_status=N/A; target_status=N/A; ownership=đơn của user; order_id=đơn mới | User đăng nhập và có giỏ hàng checkout được | Gọi `POST /api/checkout`, sau đó xem lại đơn | Đơn mới có trạng thái `pending` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-01.png` |
| D-DT-02 | Admin xác nhận đơn | D-DT-EC-02, D-DT-C01 | Token=admin; current_status=`pending`; target_status=`confirmed`; order_id=đơn tồn tại | Có đơn `pending` | Admin gọi PUT status `confirmed` | Trạng thái thành `confirmed` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-02-1.png`, `domain-testing/D-DT-02-2.png` |
| D-DT-03 | Admin bắt đầu giao hàng | D-DT-EC-03, D-DT-C01 | Token=admin; current_status=`confirmed`; target_status=`shipping`; order_id=đơn tồn tại | Có đơn `confirmed` | Admin gọi PUT status `shipping` | Trạng thái thành `shipping` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-03.png` |
| D-DT-04 | Admin đánh dấu đã giao | D-DT-EC-04, D-DT-C01 | Token=admin; current_status=`shipping`; target_status=`delivered`; order_id=đơn tồn tại | Có đơn `shipping` | Admin gọi PUT status `delivered` | Trạng thái thành `delivered` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-04.png` |
| D-DT-05 | User hủy đơn `pending` | D-DT-EC-05, D-DT-C03, D-DT-C04 | Token=user; current_status=`pending`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `pending` | Gọi `PUT /api/orders/:id/cancel` | Đơn chuyển thành `canceled` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-05.png` |
| D-DT-06 | User hủy đơn `confirmed` | D-DT-EC-06, D-DT-C03, D-DT-C04 | Token=user; current_status=`confirmed`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `confirmed` | Gọi API hủy đơn | Đơn chuyển thành `canceled` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-06-1.png`, `domain-testing/D-DT-06-2.png` |
| D-DT-07 | User không được hủy đơn `shipping` | D-DT-EC-10, D-DT-C03 | Token=user; current_status=`shipping`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `shipping` | Gọi API hủy đơn hoặc kiểm tra nút hủy nếu UI còn hiện | Phải bị từ chối; đơn vẫn là `shipping` | Vẫn hủy được đơn `shipping` | Fail | `domain-testing/D-DT-07.png` |
| D-DT-08 | User không được hủy đơn `delivered` | D-DT-EC-08, D-DT-C02, D-DT-C03 | Token=user; current_status=`delivered`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `delivered` | Gọi API hủy đơn | Trả 400 `Cannot cancel this order.` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-08.png` |
| D-DT-09 | User không được hủy lại đơn `canceled` | D-DT-EC-09, D-DT-C02, D-DT-C03 | Token=user; current_status=`canceled`; ownership=đơn của user; order_id=đơn tồn tại | User sở hữu đơn `canceled` | Gọi API hủy đơn lần nữa | Trả 400 `Cannot cancel this order.` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-09.png` |
| D-DT-10 | User không được hủy đơn của người khác | D-DT-EC-11, D-DT-C04 | Token=user A; ownership=order thuộc user B; order_id=đơn của user B | Có ít nhất hai user và một đơn của user B | User A gọi API hủy order của user B | Trả 404 `Order not found` | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-10.png` |
| D-DT-11 | Admin không được nhảy `pending -> shipping` | D-DT-EC-07, D-DT-C01 | Token=admin; current_status=`pending`; target_status=`shipping`; order_id=đơn tồn tại | Có đơn `pending` | Gọi PUT status `shipping` | Trả 400 do transition không hợp lệ | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-11.png` |
| D-DT-12 | Admin không được đổi trạng thái sau `delivered` | D-DT-EC-08, D-DT-C02 | Token=admin; current_status=`delivered`; target_status=`canceled`; order_id=đơn tồn tại | Có đơn `delivered` | Gọi PUT status `canceled` | Trả 400 do `delivered` là trạng thái kết thúc | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-12.png` |
| D-DT-13 | Admin không được đổi trạng thái sau `canceled` | D-DT-EC-09, D-DT-C02 | Token=admin; current_status=`canceled`; target_status=`delivered`; order_id=đơn tồn tại | Có đơn `canceled` | Gọi PUT status `delivered` | Trả 400 do `canceled` là trạng thái kết thúc | Backend chuyển sang `delivered` thành công | Fail | `domain-testing/D-DT-13.png` |
| D-DT-14 | Admin không được dùng trạng thái lạ | D-DT-EC-12, D-DT-C01 | Token=admin; current_status=`pending`; target_status=`returned`; order_id=đơn tồn tại | Có đơn `pending` | Gọi PUT status `returned` | Trả 400 do trạng thái không hợp lệ | Giống kết quả mong đợi | Pass | `domain-testing/D-DT-14.png` |

## 5. Tóm tắt kết quả

| Tổng số test | Pass | Fail | Warning | Chưa chạy |
| ---: | ---: | ---: | ---: | ---: |
| 14 | 12 | 2 | 0 | 0 |

## 6. Ghi chú review

- Bộ Domain Testing đã bao phủ cạnh hợp lệ, cạnh không hợp lệ, trạng thái kết thúc, quyền hủy của user và ownership.
- Hai lỗi chính được xác nhận là user hủy được đơn `shipping` và admin chuyển được `canceled -> delivered`.
- Feature D thuộc Mobile pool, nhưng rule FR-10 được kiểm bằng API/web flow đại diện vì state machine nằm ở backend và được dùng chung cho mobile/user/admin.
