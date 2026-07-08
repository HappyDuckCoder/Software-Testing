# AI Gap Analysis - Feature D Mobile: FR-10 Máy trạng thái đơn hàng

## 1. Mục tiêu tự review

Phần này nhìn lại bộ test Feature D sau khi đã có kết quả cho cả Domain Testing và Boundary Value Analysis. Vì FR-10 là máy trạng thái, AI rất dễ viết case “đúng đường chính” nhưng bỏ sót các cạnh ở rìa: hủy khi đang giao, mở lại trạng thái kết thúc, hoặc actor user/admin dùng cùng một rule nhưng qua endpoint khác nhau.

## 2. Tổng quan kết quả

| Nhóm test | Số lượng | Kết quả chính |
| --- | ---: | --- |
| Domain Testing | 14 | 12 Pass, 2 Fail |
| Boundary Value Analysis | 11 | 9 Pass, 2 Fail |
| Tổng cộng | 25 | 21 Pass, 4 Fail |
| Bug chính | 2 | User hủy được `shipping`; admin chuyển được `canceled -> delivered` |

## 3. Các gap quan trọng

| Gap ID | Output AI ban đầu | Thiếu / sai | Vì sao dễ bỏ sót | Đã sửa sau khi test | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| D-GAP-01 | Tập trung vào đường đẹp `pending -> confirmed -> shipping -> delivered` | Cần test user hủy ở từng trạng thái, đặc biệt `shipping` | Rule hủy đơn nằm ở user/mobile route, không chỉ ở admin state machine | Thêm D-DT-07, D-BVA-07 và lập BUG-D-01 | D-DT-07, D-BVA-07 |
| D-GAP-02 | Nghĩ trạng thái kết thúc đã được backend khóa đúng | Backend cho phép `canceled -> delivered` | Lỗi chỉ nằm trong một nhánh nhỏ của code transition | Thêm D-DT-13, D-BVA-08 và lập BUG-D-02 | D-DT-13, D-BVA-08 |
| D-GAP-03 | Dễ xem FR-10 như một feature admin | FR-10 còn ảnh hưởng tới user/mobile cancel flow | Một rule nghiệp vụ nhưng trải trên nhiều endpoint | Tách rõ actor user và admin trong test case | D-DT-05 đến D-DT-10 |
| D-GAP-04 | BVA ban đầu hơi khó đọc vì cố mô tả như biên số học | Biên của state machine là biên trạng thái, không phải min/max số | State machine cần diễn giải bằng cạnh và trạng thái kết thúc | Viết lại BVA theo biên `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | BVA đã sửa |
| D-GAP-05 | Dễ test trùng giữa Feature C và D mà không ghi rõ | Một số evidence admin transition trùng với Feature C | Cùng endpoint/rule FR-10 được kiểm tra ở hai feature khác nhau | Copy ảnh và đổi tên D-DT/D-BVA, ghi rõ reuse evidence | D-DT-11 đến D-DT-14, D-BVA-02 đến D-BVA-11 |

## 4. Tự đánh giá chất lượng test case

| Tiêu chí | Đánh giá |
| --- | --- |
| Bám sát FR-10 | Tốt. Bộ test thể hiện rõ các cạnh hợp lệ, cạnh sai và trạng thái kết thúc. |
| Bao phủ actor | Tốt. Có cả user/mobile cancel và admin update status. |
| Bao phủ BVA | Khá tốt. BVA đã chuyển sang cách hiểu theo biên trạng thái: đầu luồng, cuối luồng, ngay sau quyền hủy, trạng thái kết thúc và ownership. |
| Chất lượng bằng chứng | Khá tốt. Nhiều ảnh được tái sử dụng hợp lý từ Feature C hoặc Domain Testing vì cùng rule và endpoint. |
| Điểm cần chú ý | Cần ghi rõ khi dùng lại evidence để người chấm hiểu đây không phải ảnh thiếu, mà là cùng một kiểm thử state machine được trace sang Feature D. |

## 5. Điểm tốt của bộ test sau khi sửa

1. Bộ test không chỉ kiểm tra happy path mà còn kiểm tra các điểm dễ thủng nhất của state machine.
2. Hai lỗi được tìm thấy đều là lỗi nghiệp vụ thật, không phải lỗi giao diện nhỏ.
3. Test đã phân biệt rõ trách nhiệm user và admin: user chỉ hủy đơn, admin chuyển trạng thái.
4. Bộ BVA dễ hiểu hơn trước vì mô tả biên theo trạng thái, gần với cách người đọc nghĩ về đơn hàng.

## 6. Điểm còn hạn chế

1. Chưa có GitHub Issue thật cho BUG-D-01 và BUG-D-02.
2. Một số ảnh được dùng lại từ Feature C, hợp lý nhưng cần giữ tên file rõ ràng như hiện tại để trace dễ.
3. Chưa có test tự động; toàn bộ kết quả vẫn là manual API/UI test.
4. Nếu muốn mạnh hơn, có thể thêm một sơ đồ state machine trong report chính để người đọc thấy ngay transition nào hợp lệ.

## 7. Kết luận

AI đã giúp dựng khung test ban đầu, nhưng bản đầu còn hơi khó hiểu và dễ thiên về đường hợp lệ. Sau khi chạy test thật và tái sử dụng bằng chứng hợp lý từ Feature C, bộ test Feature D hiện đã phản ánh khá rõ chất lượng FR-10: phần lớn state machine chạy đúng, nhưng còn hai lỗi quan trọng cần sửa.

Kết luận ngắn gọn: FR-10 chưa đạt hoàn toàn vì hệ thống vẫn cho user hủy đơn `shipping` và cho admin chuyển `canceled -> delivered`. Đây là hai bug cần đưa vào báo cáo cuối và ưu tiên sửa.
