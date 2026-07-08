# Domain Testing - FR-11 Xem lịch sử đơn hàng (user)

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | `server.js` | Token hợp lệ required for `/api/orders/my-orders` | Missing 401, invalid 403 |
| User ownership | State | `server.js` SQL | `SELECT * FROM orders WHERE user_id = ?` | Có bằng chứng source privacy rule |
| Order collection | List | DB/API/UI | Rỗng or non-empty | UI branches on `orders.length` |
| Status | Enum | README/UI | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Label và màu sắc phải phân biệt được |
| Sort order | Ordering | `server.js` | `ORDER BY id DESC` | Newest id first |
| Order detail route | API | `server.js` | `GET /api/orders/:id` has no auth in source | Privacy risk for order detail |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| B-DT-EC-01 | Token | Valid | Logged-in user's token | token for `test@eshop.com` | Required happy path |
| B-DT-EC-02 | Token | Invalid | Thiếu token | no header | Kiểm soát truy cập |
| B-DT-EC-03 | Token | Invalid | Malformed token | `Bearer invalid.token` | Kiểm soát truy cập |
| B-DT-EC-04 | Order collection | Valid | No orders | empty array | Rỗng state |
| B-DT-EC-05 | Order collection | Valid | Một đơn của chính user | một đơn pending | Hiển thị một dòng |
| B-DT-EC-06 | Order collection | Valid | Multiple own orders | ids 3, 2, 1 | Sorting |
| B-DT-EC-07 | Ownership | Invalid | Other user's order | admin user's order id | Must not appear in my-orders |
| B-DT-EC-08 | Status | Valid | Đang chờ xác nhận | `pending` | Nhãn tiếng Việt và action hủy |
| B-DT-EC-09 | Status | Valid | Confirmed | `confirmed` | Nhãn tiếng Việt và action hủy |
| B-DT-EC-10 | Status | Valid | Shipping | `shipping` | Nhãn tiếng Việt; user không được hủy theo FR-10 |
| B-DT-EC-11 | Status | Valid | Delivered | `delivered` | Trạng thái kết thúc; không có action hủy |
| B-DT-EC-12 | Status | Valid | Canceled | `canceled` | Trạng thái kết thúc; không có action hủy |
| B-DT-EC-13 | Detail route | Invalid | Non-owned order id via `/api/orders/:id` | order id of another user | Source indicates privacy bug |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| B-DT-C01 | Token + user id | Lịch sử chỉ được trả đơn của chủ token | So sánh đơn của hai user |
| B-DT-C02 | Status + UI label | Mỗi trạng thái hợp lệ phải map sang nhãn tiếng Việt và màu tương ứng | Bao phủ từng trạng thái |
| B-DT-C03 | Status + cancel action | User chỉ được hủy `pending` hoặc `confirmed` theo FR-10 | UI/API hủy ở trạng thái shipping là rủi ro cao |
| B-DT-C04 | Order id + sorting | ID lớn hơn xuất hiện trước | Seed/tạo nhiều đơn |
| B-DT-C05 | Detail route + ownership | Truy cập chi tiết không được lộ đơn của user khác | Negative test qua API |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-DT-01 | Show empty history message | B-DT-EC-01, B-DT-EC-04 | Token=valid user token unless specified; user_id=token owner; order_collection=Token hợp lệ; no orders; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User account has no orders | Login; open `/profile` | UI hiển thị `Bạn chưa có đơn hàng nào.` | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-02 | Show one own order | B-DT-EC-01, B-DT-EC-05, B-DT-C01 | Token=valid user token unless specified; user_id=token owner; order_collection=One order for current user; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Token hợp lệ; order exists | Open `/profile` | Table shows id, date, total, status for that order | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-03 | Show multiple orders newest first | B-DT-EC-01, B-DT-EC-06, B-DT-C04 | Token=valid user token unless specified; user_id=token owner; order_collection=Orders with ids 1, 2, 3; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Token hợp lệ | Call `/api/orders/my-orders`; inspect UI | Orders sorted by id descending | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| B-DT-04 | Do not show other user's orders | B-DT-EC-07, B-DT-C01 | Token=valid user token unless specified; user_id=token owner; order_collection=Orders for user A and user B; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Login as user B | Call history; inspect rows | Only user B orders are returned/displayed | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-DT-05 | Block history API without token | B-DT-EC-02 | Token=valid user token unless specified; user_id=token owner; order_collection=No auth header; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Backend running | GET `/api/orders/my-orders` | 401 `Unauthorized` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-DT-06 | Block history API with invalid token | B-DT-EC-03 | Token=valid user token unless specified; user_id=token owner; order_collection=Token không hợp lệ; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Backend running | GET `/api/orders/my-orders` | 403 `Forbidden` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-DT-07 | Display pending status correctly | B-DT-EC-08, B-DT-C02, B-DT-C03 | Token=valid user token unless specified; user_id=token owner; order_collection=Trạng thái đơn `pending`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has pending order | Open history | Label `Chờ xác nhận`, yellow style, cancel button visible | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-08 | Display confirmed status correctly | B-DT-EC-09, B-DT-C02, B-DT-C03 | Token=valid user token unless specified; user_id=token owner; order_collection=Trạng thái đơn `confirmed`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has confirmed order | Open history | Label `Đã xác nhận`, indigo style, cancel button visible | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-09 | Display shipping status correctly | B-DT-EC-10, B-DT-C02, B-DT-C03 | Token=valid user token unless specified; user_id=token owner; order_collection=Trạng thái đơn `shipping`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has shipping order | Open history | Label `Đang giao`, blue style; user cancel should not be available by FR-10 | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; có khả năng là bug |
| B-DT-10 | Display delivered status correctly | B-DT-EC-11, B-DT-C02 | Token=valid user token unless specified; user_id=token owner; order_collection=Trạng thái đơn `delivered`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has delivered order | Open history | Label `Đã giao`, green style, no cancel button | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-11 | Display canceled status correctly | B-DT-EC-12, B-DT-C02 | Token=valid user token unless specified; user_id=token owner; order_collection=Trạng thái đơn `canceled`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has canceled order | Open history | Label `Đã hủy`, red style, no cancel button | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-12 | Format total amount | B-DT-EC-01, B-DT-C02 | Token=valid user token unless specified; user_id=token owner; order_collection=`total_amount=300000`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Order exists | Open history | Total appears as localized number with currency suffix | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-DT-13 | Prevent non-owned order detail leak | B-DT-EC-13, B-DT-C05 | Token=valid user token unless specified; user_id=token owner; order_collection=Other user's order id; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Token hợp lệ for different user | GET `/api/orders/:id` | Nên reject/hide non-owned order | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API; source indicates bug |
| B-DT-14 | Refresh after cancel action | B-DT-EC-08, B-DT-EC-09, B-DT-C03 | Token=valid user token unless specified; user_id=token owner; order_collection=Chờ bổ sung/confirmed own order; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Token hợp lệ | Click cancel; wait for `fetchOrders()` | History refreshes and status becomes `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* Có bằng chứng source risks: public order-detail route and user cancel action visible for `shipping` orders.





