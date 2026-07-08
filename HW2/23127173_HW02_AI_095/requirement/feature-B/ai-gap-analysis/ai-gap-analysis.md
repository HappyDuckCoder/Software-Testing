# AI Gap Analysis - Feature B: FR-11 Xem lịch sử đơn hàng của người dùng

## 1. Mục tiêu tự review

Phần này đánh giá lại chất lượng test case Feature B sau khi đã chạy 14 test Domain Testing và 8 test Boundary Value Analysis. Mục tiêu là xác định AI đã hỗ trợ tốt ở đâu, còn thiếu gì, và sinh viên đã phải kiểm chứng hoặc sửa lại gì dựa trên repo EShop và kết quả chạy thật.

## 2. Tổng quan kết quả

| Nhóm test | Số lượng | Kết quả chính |
| --- | ---: | --- |
| Domain Testing | 14 | 12 Pass, 1 Fail, 1 Warning |
| Boundary Value Analysis | 8 | 6 Pass, 1 Fail, 1 Warning |
| Tổng cộng | 22 | 18 Pass, 2 Fail, 2 Warning |
| Bug chính | 1 | Lộ chi tiết đơn hàng qua API chi tiết |
| Warning chính | 1 | FR-11 hiển thị nút hủy đơn `shipping`, nhưng rule gốc thuộc FR-10 |

## 3. Các gap quan trọng

| Gap ID | Output AI ban đầu | Thiếu / sai | Vì sao dễ bị bỏ sót | Sinh viên đã bổ sung / sửa | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
| B-GAP-01 | Chỉ kiểm tra lịch sử đơn hàng hiển thị trên UI | Cần kiểm tra quyền sở hữu ở API, không chỉ kiểm tra bảng trên `/profile` | UI có thể lọc đúng nhưng API khác vẫn lộ dữ liệu | Thêm B-DT-04, B-DT-13, B-BVA-05 | `backend/server.js`, ảnh B-DT-13, B-BVA-05 |
| B-GAP-02 | Xem `GET /api/orders/:id` như route chi tiết bình thường | Route chi tiết không có `authenticateToken` và không lọc `user_id` | Lỗi nằm ở route phụ, không nằm trong API danh sách lịch sử | Lập BUG-B-01 và xác nhận bằng test fail | B-DT-13, B-BVA-05 |
| B-GAP-03 | Tách FR-11 khỏi FR-10 | Nút hủy trong lịch sử đơn hàng phải tuân thủ state machine của FR-10 | Feature B là màn hình history nhưng có thao tác thay đổi trạng thái | Thêm B-DT-09, B-DT-14, B-BVA-07 và phân loại thành WARNING-B-01 thay vì bug trực tiếp của FR-11 | B-DT-09, B-BVA-07 |
| B-GAP-04 | Tập trung vào case phổ biến có đơn hàng | Cần có biên 0 đơn, 1 đơn, nhiều đơn và mã đơn không tồn tại | Lịch sử rỗng và boundary API thường bị xem nhẹ | Thêm B-BVA-01 đến B-BVA-04 | B-BVA-01 đến B-BVA-04 |
| B-GAP-05 | Chưa phân biệt rõ lỗi chức năng và điểm cải thiện UI | B-BVA-08 pass nhưng màu fallback chưa lý tưởng | Trạng thái lạ không crash nên không nên phóng đại thành bug chính | Ghi chú cải thiện, không lập bug riêng | B-BVA-08 |

## 4. Tự đánh giá chất lượng test case

| Tiêu chí | Đánh giá |
| --- | --- |
| Bám sát repo EShop | Tốt. Test case dựa trên `server.js`, `Profile.jsx`, README và API specification, không còn là test chung chung cho mọi website bán hàng. |
| Bao phủ equivalence class | Khá tốt. Bộ test bao phủ token hợp lệ/thiếu/sai, không có đơn/một đơn/nhiều đơn, đơn của user khác, năm trạng thái hợp lệ và trạng thái lạ. |
| Bao phủ boundary | Khá tốt. Có biên 0 đơn, 1 đơn, nhiều đơn, mã đơn không tồn tại, mã đơn của user khác, tổng tiền bằng 0 và đủ tập trạng thái. |
| Tối ưu test case | Tương đối tốt. Nhiều test case valid gom được nhiều class hợp lệ; test âm tính tập trung vào một điều kiện invalid quan trọng như token sai hoặc ownership sai. |
| Đầu vào test | Đạt yêu cầu. Các test case đã bổ sung đủ miền đầu vào như token, user id, tập đơn hàng, trạng thái, mã đơn, tổng tiền, ngày tạo và thứ tự sắp xếp. |
| Chất lượng bằng chứng | Đủ để viết report Feature B. Tuy nhiên vẫn cần bổ sung link GitHub Issue thật nếu bài nộp yêu cầu issue tracking. |

## 5. Điểm tốt của bộ test sau khi sửa

1. Bộ test phát hiện được lỗi bảo mật thực tế ở API chi tiết đơn hàng, không chỉ kiểm tra UI.
2. Bộ test bắt được mâu thuẫn giữa FR-11 và FR-10: màn hình lịch sử đơn hàng hiển thị thao tác hủy không hợp lệ cho trạng thái `shipping`, nhưng đã phân loại đúng là warning liên feature.
3. Các test âm tính rõ ràng hơn: thiếu token, sai token, mã đơn không tồn tại, mã đơn của user khác.
4. BVA không chỉ kiểm tra số lượng đơn mà còn kiểm tra biên của trạng thái và tổng tiền bằng 0.

## 6. Điểm còn hạn chế

1. Chưa có GitHub Issue thật được gắn vào bug report.
2. B-DT-14 dùng bằng chứng gián tiếp từ trạng thái trước/sau khi hủy; nếu muốn chặt hơn nên có ảnh hoặc log riêng cho đúng thao tác bấm hủy.
3. B-BVA-08 xác nhận UI không crash với trạng thái lạ, nhưng chưa kiểm tra sâu khả năng trạng thái lạ có đi vào database qua đường API nào.
4. Chưa có test tải lớn thực sự cho số lượng đơn rất cao; B-BVA-03 mới kiểm tra mức nhiều đơn ở quy mô vừa.

## 7. Kết luận

AI đã hỗ trợ tốt trong việc tạo khung miền đầu vào, equivalence class, boundary và danh sách test case ban đầu. Tuy nhiên nếu chỉ dùng output AI ban đầu thì dễ bỏ sót route chi tiết đơn hàng và liên kết giữa FR-11 với state machine FR-10. Sau khi đối chiếu repo EShop và chạy test, bộ test Feature B hiện tại đủ tốt để phản ánh rủi ro chính của feature: quyền riêng tư dữ liệu đơn hàng. Trường hợp hủy đơn `shipping` vẫn cần ghi nhận, nhưng nên được xử lý như WARNING-B-01 vì rule nghiệp vụ gốc thuộc FR-10.

Trạng thái cuối: bộ test đã chạy đầy đủ, report và bug report đã được cập nhật theo kết quả thực tế; cần bổ sung GitHub Issue thật nếu quy trình nộp bài yêu cầu.
