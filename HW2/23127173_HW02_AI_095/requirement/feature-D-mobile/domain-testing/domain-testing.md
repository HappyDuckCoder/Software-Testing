# Domain Testing - Feature D Mobile: FR-10 Máy trạng thái đơn hàng

## 1. Mục tiêu

Feature D kiểm tra rule trạng thái đơn hàng của EShop. Dù tên thư mục là `feature-D-mobile`, rule FR-10 không chỉ nằm ở mobile/user flow mà còn được backend admin dùng khi chuyển trạng thái. Vì vậy bộ test này kiểm tra cả hai hướng:

- User hủy đơn của chính mình qua `PUT /api/orders/:id/cancel`.
- Admin đổi trạng thái qua `PUT /api/admin/orders/:id/status`.

Cách hiểu đơn giản: đơn hàng đi theo luồng `pending -> confirmed -> shipping -> delivered`, và có thể bị hủy ở `pending` hoặc `confirmed`. Khi đã `delivered` hoặc `canceled` thì không được mở lại.

## 2. Miền đầu vào


| Biến                | Giá trị cần quan tâm                                         | Ý nghĩa kiểm thử                                                       |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Trạng thái hiện tại | `pending`, `confirmed`, `shipping`, `delivered`, `canceled`  | Đơn đang ở đâu trong máy trạng thái.                                   |
| Trạng thái đích     | `confirmed`, `shipping`, `delivered`, `canceled`, `returned` | Trạng thái muốn chuyển tới. `returned` dùng để kiểm tra trạng thái lạ. |
| Actor               | `user`, `admin`                                              | User chỉ được hủy đơn của chính mình; admin được xử lý đơn theo rule.  |
| Token               | token user, token admin, thiếu token                         | Kiểm tra xác thực và đúng vai trò thao tác.                            |
| Ownership           | đơn của chính user, đơn của user khác                        | User không được hủy đơn của người khác.                                |
| Order ID            | ID tồn tại, ID không thuộc user hiện tại                     | Kiểm tra route hủy đơn có lọc theo `user_id`.                          |




## 3. Lớp tương đương


| Class ID   | Nhóm                    | Hợp lệ?      | Giá trị đại diện          | Ghi chú                                                            |
| ---------- | ----------------------- | ------------ | ------------------------- | ------------------------------------------------------------------ |
| D-DT-EC-01 | Trạng thái khởi tạo     | Hợp lệ       | Sau checkout là `pending` | Đơn mới luôn bắt đầu ở `pending`.                                  |
| D-DT-EC-02 | Admin xác nhận đơn      | Hợp lệ       | `pending -> confirmed`    | Cạnh hợp lệ đầu tiên.                                              |
| D-DT-EC-03 | Admin bắt đầu giao      | Hợp lệ       | `confirmed -> shipping`   | Cạnh hợp lệ giữa luồng.                                            |
| D-DT-EC-04 | Admin hoàn tất giao     | Hợp lệ       | `shipping -> delivered`   | Cạnh hợp lệ cuối luồng.                                            |
| D-DT-EC-05 | User hủy sớm            | Hợp lệ       | user hủy `pending`        | User được hủy trước khi xử lý.                                     |
| D-DT-EC-06 | User hủy sau xác nhận   | Hợp lệ       | user hủy `confirmed`      | User vẫn được hủy khi chưa giao.                                   |
| D-DT-EC-07 | Bỏ qua bước             | Không hợp lệ | `pending -> shipping`     | Không được nhảy thẳng sang giao hàng.                              |
| D-DT-EC-08 | Mở lại đơn đã giao      | Không hợp lệ | `delivered -> canceled`   | `delivered` là trạng thái kết thúc.                                |
| D-DT-EC-09 | Mở lại đơn đã hủy       | Không hợp lệ | `canceled -> delivered`   | `canceled` là trạng thái kết thúc. Source hiện có bug ở nhánh này. |
| D-DT-EC-10 | User hủy đơn đang giao  | Không hợp lệ | user hủy `shipping`       | User chỉ được hủy `pending` hoặc `confirmed`.                      |
| D-DT-EC-11 | User hủy đơn người khác | Không hợp lệ | order của user khác       | Route phải lọc theo chủ đơn.                                       |
| D-DT-EC-12 | Trạng thái đích lạ      | Không hợp lệ | `returned`                | Không thuộc tập trạng thái của FR-10.                              |




## 4. Ràng buộc liên biến


| Constraint ID | Quy tắc                                            | Test cần có                                                             |
| ------------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| D-DT-C01      | Chỉ các cạnh trong máy trạng thái FR-10 mới hợp lệ | Test đủ cạnh hợp lệ và cạnh sai.                                        |
| D-DT-C02      | `delivered` và `canceled` là trạng thái kết thúc   | Không được chuyển trạng thái sau hai trạng thái này.                    |
| D-DT-C03      | User chỉ được hủy đơn ở `pending` hoặc `confirmed` | Test hủy ở `pending`, `confirmed`, `shipping`, `delivered`, `canceled`. |
| D-DT-C04      | User chỉ được hủy đơn của chính mình               | Test order của user khác.                                               |
| D-DT-C05      | UI/mobile/web phải thống nhất với backend          | Nếu backend cấm thì UI không nên hiện nút thao tác.                     |




## 5. Test case Domain Testing


| ID      | Mục tiêu dễ hiểu                                | Điều kiện/class                | Thiết lập dữ liệu                         | Cách test                                        | Kết quả mong đợi                              | Actual                                     | Verdict | Bằng chứng                                                                                                               |
| ------- | ----------------------------------------------- | ------------------------------ | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------- | ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| D-DT-01 | Đơn mới tạo phải ở `pending`                    | D-DT-EC-01, D-DT-C01           | User đăng nhập, tạo đơn mới bằng checkout | Gọi `POST /api/checkout`, sau đó xem lại đơn     | Đơn mới có trạng thái `pending`               | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-01.png`                                                                |
| D-DT-02 | Admin xác nhận đơn                              | D-DT-EC-02, D-DT-C01           | Có đơn `pending`, token admin hợp lệ      | Admin chuyển `pending -> confirmed`              | Trạng thái thành `confirmed`                  | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-02-1.png`, `requirement\feature-D-mobile\domain-testing\D-DT-02-2.png` |
| D-DT-03 | Admin bắt đầu giao hàng                         | D-DT-EC-03, D-DT-C01           | Có đơn `confirmed`, token admin hợp lệ    | Admin chuyển `confirmed -> shipping`             | Trạng thái thành `shipping`                   | Giống kết quả mong muốn                    | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-03.png`                                                                |
| D-DT-04 | Admin đánh dấu đã giao                          | D-DT-EC-04, D-DT-C01           | Có đơn `shipping`, token admin hợp lệ     | Admin chuyển `shipping -> delivered`             | Trạng thái thành `delivered`                  | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-04.png`                                                                |
| D-DT-05 | User hủy đơn đang `pending`                     | D-DT-EC-05, D-DT-C03, D-DT-C04 | User sở hữu một đơn `pending`             | Gọi `PUT /api/orders/:id/cancel`                 | Trạng thái thành `canceled`                   | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-05.png`                                                                |
| D-DT-06 | User hủy đơn đang `confirmed`                   | D-DT-EC-06, D-DT-C03, D-DT-C04 | User sở hữu một đơn `confirmed`           | Gọi API hủy đơn                                  | Trạng thái thành `canceled`                   | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-06-1.png`, `requirement\feature-D-mobile\domain-testing\D-DT-06-2.png` |
| D-DT-07 | User không được hủy đơn đang `shipping`         | D-DT-EC-10, D-DT-C03           | User sở hữu một đơn `shipping`            | Gọi API hủy đơn hoặc bấm nút hủy nếu UI còn hiện | Phải bị từ chối; đơn vẫn là `shipping`        | Vẫn hủy được đơn shipping                  | Fail    | `requirement\feature-D-mobile\domain-testing\D-DT-07.png`                                                                |
| D-DT-08 | User không được hủy đơn đã `delivered`          | D-DT-C02, D-DT-C03             | User sở hữu một đơn `delivered`           | Gọi API hủy đơn                                  | Trả 400 `Cannot cancel this order.`           | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-08.png`                                                                |
| D-DT-09 | User không được hủy lại đơn đã `canceled`       | D-DT-C02, D-DT-C03             | User sở hữu một đơn `canceled`            | Gọi API hủy đơn lần nữa                          | Trả 400 `Cannot cancel this order.`           | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-09.png`                                                                |
| D-DT-10 | User không được hủy đơn của người khác          | D-DT-EC-11, D-DT-C04           | Token user A, order thuộc user B          | User A gọi API hủy order của user B              | Trả 404 `Order not found`                     | Giống như kết quả mong muốn                | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-10.png`                                                                |
| D-DT-11 | Admin không được nhảy `pending -> shipping`     | D-DT-EC-07, D-DT-C01           | Có đơn `pending`, token admin hợp lệ      | Gọi PUT status `shipping`                        | Trả 400 do chuyển trạng thái không hợp lệ     | Giống kết quả mong đợi                     | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-11.png`                                                                |
| D-DT-12 | Admin không được đổi trạng thái sau `delivered` | D-DT-EC-08, D-DT-C02           | Có đơn `delivered`, token admin hợp lệ    | Gọi PUT status `canceled`                        | Trả 400 do `delivered` là trạng thái kết thúc | Giống kết quả mong đợi                     | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-12.png`                                                                |
| D-DT-13 | Admin không được đổi trạng thái sau `canceled`  | D-DT-EC-09, D-DT-C02           | Có đơn `canceled`, token admin hợp lệ     | Gọi PUT status `delivered`                       | Trả 400 do `canceled` là trạng thái kết thúc  | Backend chuyển sang `delivered` thành công | Fail    | `requirement\feature-D-mobile\domain-testing\D-DT-13.png`                                                                |
| D-DT-14 | Admin không được dùng trạng thái lạ             | D-DT-EC-12, D-DT-C01           | Có đơn `pending`, token admin hợp lệ      | Gọi PUT status `returned`                        | Trả 400 do trạng thái không hợp lệ            | Giống kết quả mong đợi                     | Pass    | `requirement\feature-D-mobile\domain-testing\D-DT-14.png`                                                                |




## 6. Review độ đủ

Bộ Domain Testing hiện đã bao phủ đủ các cạnh chính của FR-10:

- Cạnh hợp lệ: `pending -> confirmed`, `confirmed -> shipping`, `shipping -> delivered`, hủy ở `pending`, hủy ở `confirmed`.
- Cạnh không hợp lệ: bỏ bước `pending -> shipping`, chuyển tiếp sau `delivered`, chuyển tiếp sau `canceled`, trạng thái lạ `returned`.
- Rule user/mobile: chỉ hủy đơn của chính mình và chỉ hủy trước khi đơn bước vào `shipping`.

Một số test đã dùng lại bằng chứng từ Feature C vì cùng kiểm tra rule FR-10 trên cùng endpoint admin. Điểm nên ưu tiên chạy tiếp là D-DT-07, vì source hiện cho thấy user vẫn có thể hủy đơn `shipping`.