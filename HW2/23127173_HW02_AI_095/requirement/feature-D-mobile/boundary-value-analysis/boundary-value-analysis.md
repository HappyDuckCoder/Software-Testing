# Boundary Value Analysis - FR-10 Trạng thái đơn hàng

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | State index in normal path | `pending` index 0 | `delivered` index 3 | README FR-10 graph | Cao |
| D-BVA-B02 | User-cancel allowed window | `pending` | `confirmed` | README FR-10/FR-20 | Cao |
| D-BVA-B03 | Final-state outgoing transitions | 0 allowed | 0 allowed | README final state rule | Cao |
| D-BVA-B04 | Order id ownership boundary | Own existing id | Other user's existing id | Cancel route SQL | Cao |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | N/A | `pending` | `confirmed` | `shipping` | `shipping` | `delivered` | attempt after delivered |
| D-BVA-B02 | N/A | `pending` | `confirmed` | `confirmed` | `confirmed` | last cancelable `confirmed` | first non-cancelable `shipping` |
| D-BVA-B03 | Any outgoing from final | 0 allowed | N/A | final states | N/A | 0 allowed | `canceled -> delivered` |
| D-BVA-B04 | ID không tồn tại | own id | other user's id | own id | N/A | other user's id | deleted id |

## 3. Test case BVA

| ID | Mục tiêu | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-01 | Verify lower state pending | D-BVA-B01 lower | New checkout order | Token user hợp lệ | Checkout; fetch đơn hàng | Trạng thái bắt đầu là `pending` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-02 | Verify first transition after lower | D-BVA-B01 above lower | `pending -> confirmed` | Token admin | PUT confirmed | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-03 | Verify upper normal transition | D-BVA-B01 upper | `shipping -> delivered` | Token admin; shipping order | PUT delivered | Được chấp nhận; final delivered | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-04 | Reject transition after delivered | D-BVA-B01 above upper | `delivered -> canceled` | Token admin; delivered order | PUT canceled | Rejected | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-05 | User hủy đơn at lower allowed state | D-BVA-B02 lower | Pending order | Own user token | PUT cancel | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-06 | User hủy đơn at upper allowed state | D-BVA-B02 upper | Confirmed order | Own user token | PUT cancel | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-07 | User hủy đơn just above allowed window | D-BVA-B02 above upper | Shipping order | Own user token | PUT cancel | Rejected; status remains shipping | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| D-BVA-08 | Reject canceled final outgoing transition | D-BVA-B03 final | `canceled -> delivered` | Token admin; canceled order | PUT delivered | Rejected | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| D-BVA-09 | Cancel own existing order id | D-BVA-B04 lower | Own order id | Own user token | PUT cancel | Ownership accepted if state cancelable | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-10 | Reject other user's existing order id | D-BVA-B04 above lower | Other user's order id | User token | PUT cancel | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |

## 4. Ghi chú review

* Agent skill used: `boundary-value-analysis-designer`.
* State-machine BVA is modeled as edges around allowed windows and terminal states rather than numeric-only ranges.





