# Domain Testing - FR-18 Quản lý đơn hàng (admin)

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | README FR-12, `server.js` | Phải là token admin hợp lệ | Mã nguồn route chỉ gọi `authenticateToken`, chưa kiểm tra role |
| Danh sách đơn | Mảng | `/api/admin/orders` | Admin xem tất cả đơn, sắp xếp id giảm dần | Join thêm `users.name as user_name` |
| Mã đơn | Path | API | ID tồn tại cập nhật; ID không tồn tại trả 404 | Có bằng chứng mã nguồn |
| Trạng thái hiện tại | Tập giá trị | DB | Trạng thái trước khi chuyển | FR-10 máy trạng thái |
| Trạng thái đích | Tập giá trị/body | API/UI | Phải là trạng thái kế tiếp hợp lệ | Mã nguồn đang cho phép một chuyển trạng thái sai: `canceled -> delivered` |
| Đang giao address | Văn bản | Admin UI | Must be safely displayed | UI dùng `dangerouslySetInnerHTML` |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| C-DT-EC-01 | Token | Hợp lệ | Token admin | `admin@eshop.com` token | Luồng đúng |
| C-DT-EC-02 | Token | Không hợp lệ | Thiếu token | không có header | Nên từ chối |
| C-DT-EC-03 | Token | Không hợp lệ | Token user thường | `test@eshop.com` token | Admin access control |
| C-DT-EC-04 | Danh sách đơn | Hợp lệ | Không có đơn | rỗng table | Rỗng admin list |
| C-DT-EC-05 | Danh sách đơn | Hợp lệ | Đơn từ nhiều user | đơn của user/admin | FR-18 yêu cầu xem tất cả đơn |
| C-DT-EC-06 | Mã đơn | Không hợp lệ | ID không tồn tại | `999999` | 404 path |
| C-DT-EC-07 | Transition | Hợp lệ | `pending -> confirmed` | target `confirmed` | Máy trạng thái |
| C-DT-EC-08 | Transition | Hợp lệ | `pending -> canceled` | target `canceled` | Máy trạng thái |
| C-DT-EC-09 | Transition | Hợp lệ | `confirmed -> shipping` | target `shipping` | Máy trạng thái |
| C-DT-EC-10 | Transition | Hợp lệ | `confirmed -> canceled` | target `canceled` | Máy trạng thái |
| C-DT-EC-11 | Transition | Hợp lệ | `shipping -> delivered` | target `delivered` | Máy trạng thái |
| C-DT-EC-12 | Transition | Không hợp lệ | Từ `delivered` sang bất kỳ trạng thái nào | target `canceled` | Trạng thái kết thúc |
| C-DT-EC-13 | Transition | Không hợp lệ | Từ `canceled` sang bất kỳ trạng thái nào | target `delivered` | Mã nguồn cho thấy có khả năng là lỗi |
| C-DT-EC-14 | Address | Không hợp lệ rendering risk | HTML/script address | `<img src=x onerror=alert(1)>` | Safe display requirement |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| C-DT-C01 | Token + role | Admin APIs require role admin | Test token user thường against admin orders |
| C-DT-C02 | Trạng thái hiện tại + trạng thái đích | FR-10 đồ thị chuyển trạng thái hợp lệ | Bao phủ cạnh hợp lệ và không hợp lệ |
| C-DT-C03 | Trạng thái kết thúc + trạng thái đích | `delivered` and `canceled` are final | Test attempted chuyển trạng thái sau trạng thái kết thúc |
| C-DT-C04 | Address + rendering | Address must not execute/render HTML | Use malicious shipping address |
| C-DT-C05 | Danh sách đơn + user | Admin sees all users' orders | Seed orders for multiple users |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-DT-01 | Admin xem được tất cả đơn hàng | C-DT-EC-01, C-DT-EC-05, C-DT-C05 | Token=token admin hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=đơn từ nhiều user | Có đơn của nhiều user | GET `/api/admin/orders` | Trả về tất cả đơn kèm `user_name`, sắp xếp id giảm dần | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-02 | UI admin hiển thị bảng đơn hàng | C-DT-EC-01, C-DT-EC-05 | Token=token admin hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=đơn từ nhiều user | Có đơn hàng | Mở tab Orders của admin | Các cột hiển thị ID, user, tổng tiền, địa chỉ, trạng thái và thao tác | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-DT-03 | Từ chối thiếu token | C-DT-EC-02, C-DT-C01 | Token=missing; order_id=bất kỳ; current_status=N/A; target_status=N/A; shipping_address=N/A; order_list=N/A | Backend đang chạy | GET `/api/admin/orders` | Nên trả 401 | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-04 | Từ chối token user thường | C-DT-EC-03, C-DT-C01 | Token=token người dùng thường hợp lệ; order_id=bất kỳ đơn tồn tại nào; current_status=bất kỳ; target_status=không đổi; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Đăng nhập bằng `test@eshop.com` | GET `/api/admin/orders` | Nên trả 403/từ chối truy cập admin | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API; mã nguồn cho thấy có khả năng là lỗi |
| C-DT-05 | Cập nhật `pending` sang `confirmed` | C-DT-EC-07, C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=confirmed; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `pending` | PUT status | Trạng thái trở thành `confirmed` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-06 | Cancel đơn `pending` | C-DT-EC-08, C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `pending` | PUT status | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-07 | Cập nhật `confirmed` sang `shipping` | C-DT-EC-09, C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `confirmed`; current_status=confirmed; target_status=shipping; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `confirmed` | PUT status | Trạng thái trở thành `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-08 | Cancel đơn `confirmed` | C-DT-EC-10, C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `confirmed`; current_status=confirmed; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `confirmed` | PUT status | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-09 | Complete đơn `shipping` | C-DT-EC-11, C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `shipping`; current_status=shipping; target_status=delivered; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `shipping` | PUT status | Trạng thái trở thành `delivered` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-10 | Từ chối chuyển thẳng `pending` sang `shipping` | C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=shipping; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `pending` | PUT status | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-11 | Từ chối `delivered` sang `canceled` | C-DT-EC-12, C-DT-C03 | Token=token admin hợp lệ; order_id=đơn `delivered`; current_status=delivered; target_status=canceled; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `delivered` | PUT status | 400 do chuyển trạng thái không hợp lệ; `delivered` vẫn là trạng thái kết thúc | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-12 | Từ chối `canceled` sang `delivered` | C-DT-EC-13, C-DT-C03 | Token=token admin hợp lệ; order_id=đơn `canceled`; current_status=canceled; target_status=delivered; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `canceled` | PUT status | 400 do chuyển trạng thái không hợp lệ; `canceled` vẫn là trạng thái kết thúc | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; mã nguồn cho thấy có khả năng là lỗi |
| C-DT-13 | Từ chối cập nhật đơn không tồn tại | C-DT-EC-06 | Token=token admin hợp lệ; order_id=999999; current_status=N/A; target_status=confirmed; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin | PUT status confirmed | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-14 | Từ chối trạng thái đích không xác định | C-DT-C02 | Token=token admin hợp lệ; order_id=đơn `pending`; current_status=pending; target_status=returned; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Token admin; đơn `pending` | PUT status | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-15 | Hiển thị an toàn địa chỉ dạng HTML | C-DT-EC-14, C-DT-C04 | Token=token admin hợp lệ; order_id=order with malicious address; current_status=bất kỳ; target_status=không đổi; shipping_address=<img src=x onerror=alert(1)>; order_list=danh sách đơn đã seed | Token admin; order exists | Mở tab Orders | Văn bản được escape; không có HTML/image/script được thực thi | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; mã nguồn cho thấy có khả năng là lỗi |
| C-DT-16 | Kiểm tra nút thao tác ở trạng thái kết thúc | C-DT-EC-12, C-DT-EC-13, C-DT-C03 | Token=token admin hợp lệ; order_id=delivered/đơn `canceled`s; current_status=delivered or canceled; target_status=không được khả dụng; shipping_address=văn bản an toàn; order_list=danh sách đơn đã seed | Admin UI | Mở tab Orders | Đã giao/canceled không được hiển thị thao tác chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; UI của đơn `canceled` có thể vẫn hiển thị thao tác chuyển sang `delivered` |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* Mã nguồn review found có khả năng là bugs: admin routes lack role check, canceled can transition to delivered, and address uses unsafe HTML rendering.









