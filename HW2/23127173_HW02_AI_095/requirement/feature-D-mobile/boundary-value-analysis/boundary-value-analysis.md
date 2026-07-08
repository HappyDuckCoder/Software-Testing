# Boundary Value Analysis - FR-10 Trạng thái đơn hàng

## 1. Danh mục biên

| Biên ID | Biến | Biên dưới | Biên trên | Nguồn quy tắc | Độ tin cậy |
| --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | Trạng thái index in normal path | `pending` index 0 | `delivered` index 3 | Đồ thị FR-10 trong README | Cao |
| D-BVA-B02 | Khoảng trạng thái user được hủy | `pending` | `confirmed` | README FR-10/FR-20 | Cao |
| D-BVA-B03 | Chuyển trạng thái đi ra từ trạng thái kết thúc | 0 chuyển trạng thái được phép | 0 chuyển trạng thái được phép | Quy tắc trạng thái kết thúc trong README | Cao |
| D-BVA-B04 | Biên quyền sở hữu mã đơn | ID đơn tồn tại của chính user | ID đơn tồn tại của user khác | SQL của route hủy đơn | Cao |

## 2. Giá trị biên

| Biên ID | Dưới biên dưới | Tại biên dưới | Trên biên dưới | Danh nghĩa | Dưới biên trên | Tại biên trên | Trên biên trên |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-B01 | N/A | `pending` | `confirmed` | `shipping` | `shipping` | `delivered` | thử chuyển sau `delivered` |
| D-BVA-B02 | N/A | `pending` | `confirmed` | `confirmed` | `confirmed` | cuối cùng còn hủy được `confirmed` | đầu tiên không hủy được `shipping` |
| D-BVA-B03 | Bất kỳ chuyển trạng thái nào từ trạng thái kết thúc | 0 chuyển trạng thái được phép | N/A | trạng thái kết thúc | N/A | 0 chuyển trạng thái được phép | `canceled -> delivered` |
| D-BVA-B04 | ID không tồn tại | ID của chính user | ID của user khác | ID của chính user | N/A | ID của user khác | ID đã xóa |

## 3. Test case BVA

| ID | Mục tiêu | Điều kiện/biên thỏa mãn | Biên | Đầu vào | Tiền điều kiện | Các bước | Kết quả mong đợi | Actual | Verdict | Bằng chứng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-BVA-01 | Kiểm tra biên dưới state pending | D-BVA-B01 biên dưới | D-BVA-B01 biên dưới | current_status=trạng thái được thiết lập cho test; target_status=đơn mới sau checkout; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token user hợp lệ | Checkout rồi lấy lại đơn hàng | Trạng thái bắt đầu là `pending` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-02 | Kiểm tra first transition after biên dưới | D-BVA-B01 above biên dưới | D-BVA-B01 above biên dưới | current_status=trạng thái được thiết lập cho test; target_status=`pending -> confirmed`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token admin | PUT confirmed | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-03 | Kiểm tra biên trên normal transition | D-BVA-B01 biên trên | D-BVA-B01 biên trên | current_status=trạng thái được thiết lập cho test; target_status=`shipping -> delivered`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token admin; đơn `shipping` | Gọi PUT sang `delivered` | Được chấp nhận; trạng thái kết thúc `delivered` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-04 | Từ chối chuyển trạng thái sau `delivered` | D-BVA-B01 above biên trên | D-BVA-B01 above biên trên | current_status=trạng thái được thiết lập cho test; target_status=`delivered -> canceled`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token admin; đơn `delivered` | Gọi PUT sang `canceled` | Bị từ chối | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-05 | User hủy đơn at biên dưới allowed state | D-BVA-B02 biên dưới | D-BVA-B02 biên dưới | current_status=trạng thái được thiết lập cho test; target_status=đơn `pending`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token của chủ đơn | Gọi API hủy đơn | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-06 | User hủy đơn at biên trên allowed state | D-BVA-B02 biên trên | D-BVA-B02 biên trên | current_status=trạng thái được thiết lập cho test; target_status=đơn `confirmed`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token của chủ đơn | Gọi API hủy đơn | Được chấp nhận | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-07 | User hủy đơn ngay sau khoảng được phép | D-BVA-B02 above biên trên | D-BVA-B02 above biên trên | current_status=trạng thái được thiết lập cho test; target_status=đơn `shipping`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token của chủ đơn | Gọi API hủy đơn | Bị từ chối; trạng thái vẫn là `shipping` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; mã nguồn cho thấy có khả năng là lỗi |
| D-BVA-08 | Từ chối chuyển trạng thái đi ra từ `canceled` | D-BVA-B03 final | D-BVA-B03 final | current_status=trạng thái được thiết lập cho test; target_status=`canceled -> delivered`; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token admin; đơn `canceled` | Gọi PUT sang `delivered` | Bị từ chối | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng; mã nguồn cho thấy có khả năng là lỗi |
| D-BVA-09 | Hủy ID đơn tồn tại của chính user | D-BVA-B04 biên dưới | D-BVA-B04 biên dưới | current_status=trạng thái được thiết lập cho test; target_status=ID đơn của chính user; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token của chủ đơn | Gọi API hủy đơn | Quyền sở hữu được chấp nhận nếu trạng thái cho phép hủy | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |
| D-BVA-10 | Từ chối ID đơn tồn tại của user khác | D-BVA-B04 above biên dưới | D-BVA-B04 above biên dưới | current_status=trạng thái được thiết lập cho test; target_status=Đơn của user khác id; actor=user hoặc admin theo yêu cầu test; token=token đúng vai trò, trừ khi test case ghi khác; order_id=ID đơn tồn tại của chính user, trừ khi test case ghi khác; ownership=chính user hoặc user khác theo yêu cầu test | Token user | Gọi API hủy đơn | 404 `Order not found` | Chưa chạy | Chưa chạy | Chờ bổ sung bằng chứng |

## 4. Ghi chú review

* Agent skill đã dùng: `boundary-value-analysis-designer`.
* Trạng thái-machine BVA is modeled as edges around allowed windows and terminal states rather than numeric-only ranges.









