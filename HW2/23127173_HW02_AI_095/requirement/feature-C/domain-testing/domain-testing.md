# Domain Testing - FR-18 Quản lý đơn hàng (admin)

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Token xác thực | Header/trạng thái | README FR-12, `server.js` | Should be valid token admin | Source routes only call `authenticateToken`, no role check |
| Order list | Array | `/api/admin/orders` | Admin sees all orders, sorted by id desc | Joins `users.name as user_name` |
| Order id | Path | API | ID tồn tại updates; missing id returns 404 | Có bằng chứng source |
| Trạng thái hiện tại | Enum | DB | State before transition | FR-10 state machine |
| Trạng thái đích | Enum/body | API/UI | Must be valid next status | Source has one invalid allowance: `canceled -> delivered` |
| Shipping address | Text | Admin UI | Must be safely displayed | UI uses `dangerouslySetInnerHTML` |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| C-DT-EC-01 | Token | Valid | Token admin | `admin@eshop.com` token | Luồng đúng |
| C-DT-EC-02 | Token | Invalid | Thiếu token | no header | Nên reject |
| C-DT-EC-03 | Token | Invalid | Token user thường | `test@eshop.com` token | Admin access control |
| C-DT-EC-04 | Order list | Valid | No orders | empty table | Rỗng admin list |
| C-DT-EC-05 | Order list | Valid | Orders from multiple users | user/admin orders | FR-18 all orders |
| C-DT-EC-06 | Order id | Invalid | ID không tồn tại | `999999` | 404 path |
| C-DT-EC-07 | Transition | Valid | `pending -> confirmed` | target `confirmed` | State machine |
| C-DT-EC-08 | Transition | Valid | `pending -> canceled` | target `canceled` | State machine |
| C-DT-EC-09 | Transition | Valid | `confirmed -> shipping` | target `shipping` | State machine |
| C-DT-EC-10 | Transition | Valid | `confirmed -> canceled` | target `canceled` | State machine |
| C-DT-EC-11 | Transition | Valid | `shipping -> delivered` | target `delivered` | State machine |
| C-DT-EC-12 | Transition | Invalid | Final `delivered` to any status | target `canceled` | Final state |
| C-DT-EC-13 | Transition | Invalid | Final `canceled` to any status | target `delivered` | Source indicates bug |
| C-DT-EC-14 | Address | Invalid rendering risk | HTML/script address | `<img src=x onerror=alert(1)>` | Safe display requirement |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| C-DT-C01 | Token + role | Admin APIs require role admin | Test normal user token against admin orders |
| C-DT-C02 | Trạng thái hiện tại + target status | FR-10 valid transition graph | Cover valid and invalid edges |
| C-DT-C03 | Final state + target status | `delivered` and `canceled` are final | Test attempted post-final transitions |
| C-DT-C04 | Address + rendering | Address must not execute/render HTML | Use malicious shipping address |
| C-DT-C05 | Order list + users | Admin sees all users' orders | Seed orders for multiple users |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-DT-01 | Admin can list all orders | C-DT-EC-01, C-DT-EC-05, C-DT-C05 | Token=valid admin token; order_id=any existing order; current_status=any; target_status=not changed; shipping_address=safe text; order_list=orders from multiple users | Orders exist for multiple users | GET `/api/admin/orders` | Returns all orders with `user_name`, id desc | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-02 | Admin UI displays order table | C-DT-EC-01, C-DT-EC-05 | Token=valid admin token; order_id=any existing order; current_status=any; target_status=not changed; shipping_address=safe text; order_list=orders from multiple users | Orders exist | Open admin Orders tab | Columns show ID, user, total, address, status, action | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-DT-03 | Reject missing token | C-DT-EC-02, C-DT-C01 | Token=missing; order_id=any; current_status=N/A; target_status=N/A; shipping_address=N/A; order_list=N/A | Backend running | GET `/api/admin/orders` | Should return 401 | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-04 | Reject normal user token | C-DT-EC-03, C-DT-C01 | Token=valid normal-user token; order_id=any existing order; current_status=any; target_status=not changed; shipping_address=safe text; order_list=seeded orders | Login as `test@eshop.com` | GET `/api/admin/orders` | Should return 403/deny admin access | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API; source indicates bug |
| C-DT-05 | Update pending to confirmed | C-DT-EC-07, C-DT-C02 | Token=valid admin token; order_id=pending order; current_status=pending; target_status=confirmed; shipping_address=safe text; order_list=seeded orders | Token admin; order pending | PUT status | Trạng thái trở thành `confirmed` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-06 | Cancel pending order | C-DT-EC-08, C-DT-C02 | Token=valid admin token; order_id=pending order; current_status=pending; target_status=canceled; shipping_address=safe text; order_list=seeded orders | Token admin; order pending | PUT status | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-07 | Update confirmed to shipping | C-DT-EC-09, C-DT-C02 | Token=valid admin token; order_id=confirmed order; current_status=confirmed; target_status=shipping; shipping_address=safe text; order_list=seeded orders | Token admin; order confirmed | PUT status | Status becomes `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-08 | Cancel confirmed order | C-DT-EC-10, C-DT-C02 | Token=valid admin token; order_id=confirmed order; current_status=confirmed; target_status=canceled; shipping_address=safe text; order_list=seeded orders | Token admin; order confirmed | PUT status | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-09 | Complete shipping order | C-DT-EC-11, C-DT-C02 | Token=valid admin token; order_id=shipping order; current_status=shipping; target_status=delivered; shipping_address=safe text; order_list=seeded orders | Token admin; order shipping | PUT status | Status becomes `delivered` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-DT-10 | Reject pending directly to shipping | C-DT-C02 | Token=valid admin token; order_id=pending order; current_status=pending; target_status=shipping; shipping_address=safe text; order_list=seeded orders | Token admin; order pending | PUT status | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-11 | Reject delivered to canceled | C-DT-EC-12, C-DT-C03 | Token=valid admin token; order_id=delivered order; current_status=delivered; target_status=canceled; shipping_address=safe text; order_list=seeded orders | Token admin; order delivered | PUT status | 400 invalid transition; delivered remains final | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-12 | Reject canceled to delivered | C-DT-EC-13, C-DT-C03 | Token=valid admin token; order_id=canceled order; current_status=canceled; target_status=delivered; shipping_address=safe text; order_list=seeded orders | Token admin; order canceled | PUT status | 400 invalid transition; canceled remains final | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| C-DT-13 | Reject non-existing order update | C-DT-EC-06 | Token=valid admin token; order_id=999999; current_status=N/A; target_status=confirmed; shipping_address=safe text; order_list=seeded orders | Token admin | PUT status confirmed | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-14 | Reject unknown target status | C-DT-C02 | Token=valid admin token; order_id=pending order; current_status=pending; target_status=returned; shipping_address=safe text; order_list=seeded orders | Token admin; order pending | PUT status | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-DT-15 | Safely display HTML-like address | C-DT-EC-14, C-DT-C04 | Token=valid admin token; order_id=order with malicious address; current_status=any; target_status=not changed; shipping_address=<img src=x onerror=alert(1)>; order_list=seeded orders | Token admin; order exists | Open Orders tab | Text is escaped; no HTML/image/script executes | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; source indicates bug |
| C-DT-16 | Verify final-state action buttons | C-DT-EC-12, C-DT-EC-13, C-DT-C03 | Token=valid admin token; order_id=delivered/canceled orders; current_status=delivered or canceled; target_status=should be unavailable; shipping_address=safe text; order_list=seeded orders | Admin UI | Open Orders tab | Delivered/canceled should show no invalid transition action | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; canceled UI likely shows delivered action |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* Source review found có khả năng là bugs: admin routes lack role check, canceled can transition to delivered, and address uses unsafe HTML rendering.





