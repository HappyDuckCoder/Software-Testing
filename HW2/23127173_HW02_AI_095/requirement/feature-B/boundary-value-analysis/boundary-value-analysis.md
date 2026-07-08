# Boundary Value Analysis - FR-11 Xem lịch sử đơn hàng (user)

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | Số đơn hàng hiển thị | 0 đơn | Không có biên trên được mô tả | `Profile.jsx` rỗng/table branch | Trung bình |
| B-BVA-B02 | Mã đơn của API chi tiết | ID tồn tại | N/A | `GET /api/orders/:id` route | Trung bình |
| B-BVA-B03 | `total_amount` display | 0 | Không có biên trên được mô tả | DB integer + UI formatting | Trung bình |
| B-BVA-B04 | Kích thước tập trạng thái | 5 trạng thái hợp lệ | 5 trạng thái hợp lệ | README FR-10/FR-11 | Cao |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-B01 | N/A | 0 đơn | 1 đơn | 2 đơn | N/A | Không có biên trên | Nhiều đơn, ví dụ 50 |
| B-BVA-B02 | ID không tồn tại | ID tồn tại | ID đơn tồn tại của user khác | ID đơn của chính user | N/A | N/A | N/A |
| B-BVA-B03 | Negative amount | 0 | 1 | 300000 | N/A | Không có biên trên | Very large amount |
| B-BVA-B04 | Trạng thái không hợp lệ | Hợp lệ đầu tiên: `pending` | Hợp lệ thứ hai: `confirmed` | `shipping` | `delivered` | Hợp lệ thứ năm: `canceled` | Trạng thái lạ |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-BVA-01 | Kiểm tra rỗng history boundary | B-BVA-B01 biên dưới | B-BVA-B01 biên dưới | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=0 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | User has không có đơn | Mở `/profile` | Hiển thị thông báo rỗng; bảng không bị lỗi | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-02 | Kiểm tra first order row boundary | B-BVA-B01 above biên dưới | B-BVA-B01 above biên dưới | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=1 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | User has one order | Mở `/profile` | Hiển thị đúng một dòng | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-03 | Kiểm tra hiển thị nhiều đơn | B-BVA-B01 không có biên trên | B-BVA-B01 không có biên trên | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=50 đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Seed/tạo nhiều đơn | Mở `/profile` | Các dòng hiển thị đầy đủ đơn của user hiện tại | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-04 | Kiểm tra non-existing order detail id | B-BVA-B02 below existing | B-BVA-B02 below existing | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=`GET /api/orders/999999`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Backend đang chạy | Gọi endpoint chi tiết đơn | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-BVA-05 | Kiểm tra other user's existing detail id | B-BVA-B02 ownership boundary | B-BVA-B02 ownership boundary | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=Đơn của user khác id; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Token hợp lệ của user khác | Gọi endpoint chi tiết đơn | Nên từ chối; mã nguồn likely leaks order | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng API |
| B-BVA-06 | Kiểm tra zero total display | B-BVA-B03 biên dưới | B-BVA-B03 biên dưới | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=`total_amount=0`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Đơn tồn tại | Mở lịch sử đơn | `0` amount formats safely | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-07 | Kiểm tra đủ năm trạng thái hợp lệ | B-BVA-B04 biên trên set | B-BVA-B04 biên trên set | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=mỗi trạng thái có một đơn; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Đơn đã được seed | Mở lịch sử đơn | Mỗi trạng thái có nhãn tiếng Việt và màu đúng | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |
| B-BVA-08 | Kiểm tra trạng thái không xác định fallback | B-BVA-B04 trên tập hợp lệ | B-BVA-B04 trên tập hợp lệ | Token=token người dùng hợp lệ, trừ khi test case ghi khác; user_id=chủ token; order_collection=status `returned`; status=trạng thái đang kiểm thử; order_id=mã đơn của chính user, trừ khi test case ghi khác; total_amount=300000; created_at=ngày hợp lệ; sort=id DESC | Thiết lập trực tiếp bằng DB/API | Mở lịch sử đơn | UI không được crash; có nhãn dự phòng | Chưa chạy | Chưa chạy | Chờ bổ sung screenshot |

## 4. Ghi chú review

* Agent skill đã dùng: `boundary-value-analysis-designer`.
* FR-11 has fewer numeric boundaries; most value comes from count, ownership, status-set, and detail-id boundaries.










