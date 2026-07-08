# Boundary Value Analysis - FR-18 Quản lý đơn hàng (admin)

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| C-BVA-B01 | Order count in admin table | 0 orders | Không có biên trên được mô tả | Admin table maps `orders` | Trung bình |
| C-BVA-B02 | Số bước chuyển trạng thái | 0 after final state | 3 forward steps from pending to delivered | README FR-10 | Cao |
| C-BVA-B03 | Shipping address length/rendering | 0 characters | Không có biên trên được mô tả | DB `TEXT`, UI render | Trung bình |
| C-BVA-B04 | Order id existence | First existing id | Last existing id | DB/API path | Trung bình |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-BVA-B01 | N/A | 0 | 1 | 2 | N/A | Không có biên trên | Many, e.g. 50 |
| C-BVA-B02 | Attempt from final | 0 allowed moves from final | 1 valid move | `confirmed -> shipping` | 2 moves | 3-step chain | Skip step `pending -> shipping` |
| C-BVA-B03 | N/A | empty address | 1 char | normal address | N/A | Không có biên trên | HTML payload/long address |
| C-BVA-B04 | 0/non-existing | first existing id | second id | middle id | penultimate id | last existing id | 999999 |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-BVA-01 | Admin table with zero orders | C-BVA-B01 lower | C-BVA-B01 lower | Token=admin token unless specified; order_id=0 orders; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Rỗng orders table | Open admin Orders tab | Table handles empty state without crash | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-BVA-02 | Admin table with one order | C-BVA-B01 above lower | C-BVA-B01 above lower | Token=admin token unless specified; order_id=1 order; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | One order exists | Open Orders tab | Exactly one row appears | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-BVA-03 | Admin table with many orders | C-BVA-B01 no upper bound | C-BVA-B01 no upper bound | Token=admin token unless specified; order_id=50 orders; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Many orders exist | Open Orders tab | All rows render, newest first | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-BVA-04 | Full valid transition chain | C-BVA-B02 upper chain | C-BVA-B02 upper chain | Token=admin token unless specified; order_id=`pending -> confirmed -> shipping -> delivered`; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Token admin; pending order | Apply transitions in order | Ends at delivered with each step accepted | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| C-BVA-05 | Reject skipped transition | C-BVA-B02 above step | C-BVA-B02 above step | Token=admin token unless specified; order_id=`pending -> shipping`; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Token admin; pending order | PUT target shipping | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| C-BVA-06 | Reject transition after final state | C-BVA-B02 lower final | C-BVA-B02 lower final | Token=admin token unless specified; order_id=`canceled -> delivered`; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Token admin; canceled order | PUT target delivered | 400 invalid transition | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; source indicates bug |
| C-BVA-07 | Rỗng shipping address display | C-BVA-B03 lower | C-BVA-B03 lower | Token=admin token unless specified; order_id=empty address; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Order exists | Open Orders tab | Shows safe fallback or blank text | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| C-BVA-08 | HTML address display safety | C-BVA-B03 above safe rendering | C-BVA-B03 above safe rendering | Token=admin token unless specified; order_id=`<b>X</b><img src=x onerror=alert(1)>`; current_status=test setup; target_status=test value; shipping_address=safe text unless specified; order_list=seeded orders | Order exists | Open Orders tab | Escaped text only; no HTML execution | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot; source indicates bug |

## 4. Ghi chú review

* Agent skill used: `boundary-value-analysis-designer`.
* FR-18 BVA focuses on count, transition-step boundaries, final-state boundaries, and rendering boundary inputs.





