# Domain Testing - FR-10 Trạng thái đơn hàng

## 1. Miền đầu vào

| Biến | Kiểu | Nguồn | Ràng buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| Trạng thái hiện tại | Tập giá trị | README/DB | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Máy trạng thái nodes |
| Trạng thái đích | Tập giá trị | Admin API | Trạng thái đích hợp lệ phụ thuộc trạng thái hiện tại | Máy trạng thái edges |
| User hủy đơn action | Lệnh thao tác | `/api/orders/:id/cancel` | User can cancel own `pending` or `confirmed` only | Mã nguồn currently permits `shipping` |
| Admin transition action | Lệnh thao tác | `/api/admin/orders/:id/status` | Admin can advance/cancel according to FR-10 | Mã nguồn permits `canceled -> delivered` |
| Quyền sở hữu | Trạng thái | User hủy đơn API | User chỉ được hủy đơn của chính mình | Query checks user_id |
| Token | Header | API | Thiếu token bị từ chối | Có bằng chứng mã nguồn |

## 2. Lớp tương đương

| Class ID | Biến | Hợp lệ/Không hợp lệ | Phân vùng | Giá trị đại diện | Lý do |
| --- | --- | --- | --- | --- | --- |
| D-DT-EC-01 | Trạng thái | Hợp lệ | Trạng thái khởi tạo | `pending` | Checkout tạo đơn `pending` |
| D-DT-EC-02 | Transition | Hợp lệ | Admin confirm | `pending -> confirmed` | Cạnh trạng thái |
| D-DT-EC-03 | Transition | Hợp lệ | Admin start shipping | `confirmed -> shipping` | Cạnh trạng thái |
| D-DT-EC-04 | Transition | Hợp lệ | Admin deliver | `shipping -> delivered` | Cạnh trạng thái |
| D-DT-EC-05 | Transition | Hợp lệ | Cancel before processing | `pending -> canceled` | Cạnh trạng thái |
| D-DT-EC-06 | Transition | Hợp lệ | Cancel after confirmed | `confirmed -> canceled` | Cạnh trạng thái |
| D-DT-EC-07 | Transition | Không hợp lệ | Bỏ qua trạng thái | `pending -> shipping` | Cạnh không hợp lệ |
| D-DT-EC-08 | Transition | Không hợp lệ | Mở lại đơn đã giao | `delivered -> confirmed` | Trạng thái kết thúc |
| D-DT-EC-09 | Transition | Không hợp lệ | Mở lại đơn đã hủy | `canceled -> delivered` | Trạng thái kết thúc; mã nguồn bug |
| D-DT-EC-10 | User hủy đơn | Không hợp lệ | Cancel shipping | user cancel `shipping` | README forbids |
| D-DT-EC-11 | User hủy đơn | Không hợp lệ | Hủy đơn của user khác | mã đơn của user khác | Quyền sở hữu |
| D-DT-EC-12 | Trạng thái đích | Không hợp lệ | Trạng thái lạ | `returned` | Tập giá trị validation |

## 3. Ràng buộc liên biến

| Constraint ID | Biến / trạng thái | Quy tắc | Tác động kiểm thử |
| --- | --- | --- | --- |
| D-DT-C01 | Current + trạng thái đích | Only graph edges in FR-10 are valid | Cover all valid/invalid edges |
| D-DT-C02 | Trạng thái kết thúc + target | `delivered` and `canceled` are terminal | Test transitions after final |
| D-DT-C03 | Actor + status | User/mobile chỉ được hủy `pending` or `confirmed` | Kiểm thử user hủy ở từng trạng thái |
| D-DT-C04 | User + order id | User chỉ được hủy đơn của chính mình | Kiểm thử mã đơn của user khác |
| D-DT-C05 | UI action + backend rule | Mobile/web action visibility must match backend rule | Check action for `shipping` |

## 4. Test case Domain Testing

| ID | Mục tiêu | Điều kiện/class thỏa mãn | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-DT-01 | Checkout mới tạo đơn `pending` | D-DT-EC-01, D-DT-C01 | current_status=Không áp dụng trước checkout; target_status=`pending` sau checkout; actor=user; token=token người dùng hợp lệ; order_id=mã đơn mới; ownership=đơn của chính user | Token user hợp lệ | Gọi `POST /api/checkout`, sau đó lấy lại đơn | Đơn mới có trạng thái `pending` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| D-DT-02 | Admin xác nhận đơn `pending` | D-DT-EC-02, D-DT-C01 | current_status=pending; target_status=confirmed; actor=admin; token=token admin hợp lệ; order_id=đơn tồn tại bất kỳ `pending`; ownership=admin có quyền toàn cục | đơn `pending`; token admin | Admin gọi PUT sang `confirmed` | Trạng thái trở thành `confirmed` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-03 | Admin ships đơn `confirmed` | D-DT-EC-03, D-DT-C01 | current_status=confirmed; target_status=shipping; actor=admin; token=token admin hợp lệ; order_id=đơn `confirmed`; ownership=admin có quyền toàn cục | đơn `confirmed`; token admin | Admin gọi PUT sang `shipping` | Trạng thái trở thành `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-04 | Admin delivers đơn `shipping` | D-DT-EC-04, D-DT-C01 | current_status=shipping; target_status=delivered; actor=admin; token=token admin hợp lệ; order_id=đơn `shipping`; ownership=admin có quyền toàn cục | đơn `shipping`; token admin | Admin gọi PUT sang `delivered` | Trạng thái trở thành `delivered` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-05 | User hủy đơn pending | D-DT-EC-05, D-DT-C03, D-DT-C04 | current_status=pending; target_status=canceled; actor=user; token=token hợp lệ của chủ đơn; order_id=own đơn `pending`; ownership=đơn của chính user | Own đơn `pending` | PUT `/api/orders/:id/cancel` | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-06 | User hủy đơn confirmed | D-DT-EC-06, D-DT-C03, D-DT-C04 | current_status=confirmed; target_status=canceled; actor=user; token=token hợp lệ của chủ đơn; order_id=own đơn `confirmed`; ownership=đơn của chính user | Own đơn `confirmed` | Gọi API hủy đơn | Trạng thái trở thành `canceled` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-07 | User cannot cancel đơn `shipping` | D-DT-EC-10, D-DT-C03 | current_status=shipping; target_status=canceled; actor=user; token=token hợp lệ của chủ đơn; order_id=own đơn `shipping`; ownership=đơn của chính user | Own đơn `shipping` | Gọi API hủy đơn | Lỗi 400; trạng thái vẫn là `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; mã nguồn cho thấy có khả năng là lỗi |
| D-DT-08 | User cannot cancel đơn `delivered` | D-DT-C02, D-DT-C03 | current_status=delivered; target_status=canceled; actor=user; token=token hợp lệ của chủ đơn; order_id=own đơn `delivered`; ownership=đơn của chính user | Own đơn `delivered` | Gọi API hủy đơn | 400 `Cannot cancel this order.` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-09 | User cannot cancel đơn `canceled` | D-DT-C02, D-DT-C03 | current_status=canceled; target_status=canceled again; actor=user; token=token hợp lệ của chủ đơn; order_id=own đơn `canceled`; ownership=đơn của chính user | Own đơn `canceled` | Gọi API hủy đơn | 400 `Cannot cancel this order.` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-10 | User không được hủy đơn của user khác | D-DT-EC-11, D-DT-C04 | current_status=pending; target_status=canceled; actor=user; token=token hợp lệ của người không sở hữu đơn; order_id=mã đơn của user khác; ownership=other user order | Token user hợp lệ | Gọi API hủy đơn | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-11 | Từ chối skipped admin transition | D-DT-EC-07, D-DT-C01 | current_status=pending; target_status=shipping; actor=admin; token=token admin hợp lệ; order_id=đơn `pending`; ownership=admin có quyền toàn cục | đơn `pending`; token admin | Gọi PUT với trạng thái đích `shipping` | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-12 | Từ chối chuyển trạng thái khỏi `delivered` | D-DT-EC-08, D-DT-C02 | current_status=delivered; target_status=canceled; actor=admin; token=token admin hợp lệ; order_id=đơn `delivered`; ownership=admin có quyền toàn cục | Đơn `delivered`; token admin | Gọi PUT với trạng thái đích `canceled` | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-DT-13 | Từ chối chuyển trạng thái khỏi `canceled` | D-DT-EC-09, D-DT-C02 | current_status=canceled; target_status=delivered; actor=admin; token=token admin hợp lệ; order_id=đơn `canceled`; ownership=admin có quyền toàn cục | Đơn `canceled`; token admin | Gọi PUT với trạng thái đích `delivered` | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; mã nguồn cho thấy có khả năng là lỗi |
| D-DT-14 | Từ chối trạng thái không xác định | D-DT-EC-12, D-DT-C01 | current_status=pending; target_status=returned; actor=admin; token=token admin hợp lệ; order_id=đơn `pending`; ownership=admin có quyền toàn cục | đơn `pending`; token admin | Gọi PUT với trạng thái đích `returned` | 400 do chuyển trạng thái không hợp lệ | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |

## 5. Ghi chú review

* Agent skill đã dùng: `eshop-feature-inspector`, `domain-testing-designer`.
* FR-10 is shared between admin backend and mobile/user cancel behavior. The mobile-specific requirement in README says cancel is only allowed for `pending` or `confirmed`.









