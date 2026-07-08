# Domain Testing - FR-10 Trạng thái đơn hàng

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Trạng thái hiện tại | Enum | README/DB | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | State machine nodes |
| Trạng thái đích | Enum | Admin API | Valid target depends on current status | State machine edges |
| User hủy đơn action | Command | `/api/orders/:id/cancel` | User can cancel own `pending` or `confirmed` only | Source currently permits `shipping` |
| Admin transition action | Command | `/api/admin/orders/:id/status` | Admin can advance/cancel according to FR-10 | Source permits `canceled -> delivered` |
| Ownership | State | User hủy đơn API | User can cancel only own order | Query checks user_id |
| Token | Header | API | Thiếu token rejected | Có bằng chứng source |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| D-DT-EC-01 | Status | Valid | Initial state | `pending` | Checkout creates pending |
| D-DT-EC-02 | Transition | Valid | Admin confirm | `pending -> confirmed` | Cạnh trạng thái |
| D-DT-EC-03 | Transition | Valid | Admin start shipping | `confirmed -> shipping` | Cạnh trạng thái |
| D-DT-EC-04 | Transition | Valid | Admin deliver | `shipping -> delivered` | Cạnh trạng thái |
| D-DT-EC-05 | Transition | Valid | Cancel before processing | `pending -> canceled` | Cạnh trạng thái |
| D-DT-EC-06 | Transition | Valid | Cancel after confirmed | `confirmed -> canceled` | Cạnh trạng thái |
| D-DT-EC-07 | Transition | Invalid | Skip state | `pending -> shipping` | Cạnh không hợp lệ |
| D-DT-EC-08 | Transition | Invalid | Reopen delivered | `delivered -> confirmed` | Final state |
| D-DT-EC-09 | Transition | Invalid | Reopen canceled | `canceled -> delivered` | Final state; source bug |
| D-DT-EC-10 | User hủy đơn | Invalid | Cancel shipping | user cancel `shipping` | README forbids |
| D-DT-EC-11 | User hủy đơn | Invalid | Cancel other user's order | other user order id | Ownership |
| D-DT-EC-12 | Trạng thái đích | Invalid | Unknown status | `returned` | Enum validation |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| D-DT-C01 | Current + target status | Only graph edges in FR-10 are valid | Cover all valid/invalid edges |
| D-DT-C02 | Final state + target | `delivered` and `canceled` are terminal | Test transitions after final |
| D-DT-C03 | Actor + status | User/mobile cancel only `pending` or `confirmed` | Test user cancel for each state |
| D-DT-C04 | User + order id | User can cancel only own order | Test other user's order id |
| D-DT-C05 | UI action + backend rule | Mobile/web action visibility must match backend rule | Check action for `shipping` |

## 4. Test case Domain Testing

| ID | Mục tiêu | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-DT-01 | New checkout creates pending order | Checkout body | Token user hợp lệ | POST `/api/checkout`; fetch order | Đơn mới có trạng thái `pending` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| D-DT-02 | Admin confirms pending order | `pending -> confirmed` | Pending order; token admin | PUT admin status confirmed | Trạng thái trở thành `confirmed` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-03 | Admin ships confirmed order | `confirmed -> shipping` | Confirmed order; token admin | PUT admin status shipping | Status becomes `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-04 | Admin delivers shipping order | `shipping -> delivered` | Shipping order; token admin | PUT admin status delivered | Status becomes `delivered` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-05 | User hủy đơn pending | User hủy đơn pending | Own pending order | PUT `/api/orders/:id/cancel` | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-06 | User hủy đơn confirmed | User hủy đơn confirmed | Own confirmed order | PUT cancel | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-07 | User cannot cancel shipping order | User hủy đơn shipping | Own shipping order | PUT cancel | 400 error; status remains `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| D-DT-08 | User cannot cancel delivered order | User hủy đơn delivered | Own delivered order | PUT cancel | 400 `Cannot cancel this order.` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-09 | User cannot cancel canceled order | User hủy đơn canceled | Own canceled order | PUT cancel | 400 `Cannot cancel this order.` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-10 | User cannot cancel other user's order | Other user's order id | Token user hợp lệ | PUT cancel | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-11 | Reject skipped admin transition | `pending -> shipping` | Pending order; token admin | PUT target shipping | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-12 | Reject delivered final-state transition | `delivered -> canceled` | Delivered order; token admin | PUT target canceled | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-13 | Reject canceled final-state transition | `canceled -> delivered` | Canceled order; token admin | PUT target delivered | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| D-DT-14 | Reject unknown status | target `returned` | Pending order; token admin | PUT target returned | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* FR-10 is shared between admin backend and mobile/user cancel behavior. The mobile-specific requirement in README says cancel is only allowed for `pending` or `confirmed`.





