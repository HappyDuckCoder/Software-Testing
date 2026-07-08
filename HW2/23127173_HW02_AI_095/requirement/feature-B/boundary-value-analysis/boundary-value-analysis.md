# Boundary Value Analysis - FR-11 Xem lịch sử đơn hàng (user)

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | Order count displayed | 0 orders | Không có biên trên được mô tả | `Profile.jsx` empty/table branch | Trung bình |
| B-BVA-B02 | Order id for detail API | ID tồn tại | N/A | `GET /api/orders/:id` route | Trung bình |
| B-BVA-B03 | `total_amount` display | 0 | Không có biên trên được mô tả | DB integer + UI formatting | Trung bình |
| B-BVA-B04 | Status set size | 5 valid states | 5 valid states | README FR-10/FR-11 | Cao |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | N/A | 0 orders | 1 order | 2 orders | N/A | Không có biên trên | Many orders, e.g. 50 |
| B-BVA-B02 | ID không tồn tại | ID tồn tại | Other user's existing id | Own order id | N/A | N/A | N/A |
| B-BVA-B03 | Negative amount | 0 | 1 | 300000 | N/A | Không có biên trên | Very large amount |
| B-BVA-B04 | Invalid status | First valid: `pending` | Second valid: `confirmed` | `shipping` | `delivered` | Fifth valid: `canceled` | Unknown status |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-01 | Verify empty history boundary | B-BVA-B01 lower | B-BVA-B01 lower | Token=valid user token unless specified; user_id=token owner; order_collection=0 orders; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has no orders | Open `/profile` | Rỗng message appears; no broken table | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-02 | Verify first order row boundary | B-BVA-B01 above lower | B-BVA-B01 above lower | Token=valid user token unless specified; user_id=token owner; order_collection=1 order; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | User has one order | Open `/profile` | Exactly one row appears | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-03 | Verify many-order rendering | B-BVA-B01 no upper bound | B-BVA-B01 no upper bound | Token=valid user token unless specified; user_id=token owner; order_collection=50 orders; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Seed/create many orders | Open `/profile` | Rows render without missing current user's orders | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-04 | Verify non-existing order detail id | B-BVA-B02 below existing | B-BVA-B02 below existing | Token=valid user token unless specified; user_id=token owner; order_collection=`GET /api/orders/999999`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Backend running | Call detail endpoint | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-BVA-05 | Verify other user's existing detail id | B-BVA-B02 ownership boundary | B-BVA-B02 ownership boundary | Token=valid user token unless specified; user_id=token owner; order_collection=Other user's order id; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Token hợp lệ for different user | Call detail endpoint | Nên reject; source likely leaks order | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-BVA-06 | Verify zero total display | B-BVA-B03 lower | B-BVA-B03 lower | Token=valid user token unless specified; user_id=token owner; order_collection=`total_amount=0`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Order exists | Open history | `0` amount formats safely | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-07 | Verify all five valid statuses | B-BVA-B04 upper set | B-BVA-B04 upper set | Token=valid user token unless specified; user_id=token owner; order_collection=One order per status; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Orders seeded | Open history | Each status has correct Vietnamese label/color | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-08 | Verify unknown status fallback | B-BVA-B04 above valid set | B-BVA-B04 above valid set | Token=valid user token unless specified; user_id=token owner; order_collection=status `returned`; status=the tested status; order_id=own order id unless specified; total_amount=300000; created_at=valid date; sort=id DESC | Direct DB/API setup | Open history | UI should not crash; fallback label visible | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |

## 4. Ghi chú review

* Agent skill used: `boundary-value-analysis-designer`.
* FR-11 has fewer numeric boundaries; most value comes from count, ownership, status-set, and detail-id boundaries.





