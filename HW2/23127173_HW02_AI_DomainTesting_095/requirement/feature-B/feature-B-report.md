# Báo cáo Feature B - FR-11 Xem lịch sử đơn hàng của người dùng

## 1. Thông tin feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Feature | Order history view - người dùng xem lịch sử đơn hàng |
| Actor chính | Người dùng đã đăng nhập |
| Hệ thống kiểm thử | EShop web frontend và backend API |
| Trạng thái kiểm thử | Đã chạy test Feature B và đã cập nhật kết quả thực tế |

## 2. Phạm vi kiểm thử

Feature B tập trung kiểm tra việc người dùng xem danh sách đơn hàng của chính mình trong trang hồ sơ. Phạm vi gồm API danh sách đơn hàng, phần hiển thị trên web, trạng thái rỗng, thứ tự sắp xếp, định dạng tổng tiền, nhãn/màu trạng thái và các ràng buộc quyền sở hữu dữ liệu.

Các thành phần được đối chiếu trong repo EShop:

| Thành phần | Vai trò trong kiểm thử |
| --- | --- |
| `Eshop/README.md` | Mô tả FR-11 và liên hệ trạng thái đơn với FR-10 |
| `Eshop/api_specification.md` | Đối chiếu endpoint đơn hàng |
| `Eshop/backend/server.js` | Kiểm tra API `/api/orders/my-orders`, `/api/orders/:id`, `/api/orders/:id/cancel` |
| `Eshop/frontend-web/src/pages/Profile.jsx` | Kiểm tra UI lịch sử đơn hàng, nhãn trạng thái, nút hủy |

## 3. Phân tích luồng chính

| Luồng | Kết quả mong đợi | Test bao phủ |
| --- | --- | --- |
| User có token hợp lệ mở `/profile` | UI gọi API và hiển thị lịch sử đơn hàng của chính user | B-DT-01, B-DT-02, B-DT-03, B-BVA-01, B-BVA-02, B-BVA-03 |
| User chưa có đơn hàng | UI hiển thị thông báo chưa có đơn | B-DT-01, B-BVA-01 |
| User có nhiều đơn hàng | API trả danh sách theo `id DESC`, UI hiển thị đầy đủ | B-DT-03, B-BVA-03 |
| Thiếu hoặc sai token | API chặn truy cập bằng 401/403 | B-DT-05, B-DT-06 |
| Đơn không thuộc user hiện tại | Không được xuất hiện trong lịch sử và không được xem chi tiết | B-DT-04, B-DT-13, B-BVA-05 |
| Hiển thị trạng thái đơn hàng | Mỗi trạng thái có nhãn tiếng Việt và màu tương ứng | B-DT-07 đến B-DT-11, B-BVA-07, B-BVA-08 |
| Hủy đơn từ lịch sử | Chỉ được hủy khi trạng thái là `pending` hoặc `confirmed` | B-DT-09, B-DT-14, B-BVA-07 |

## 4. Tóm tắt kết quả thực thi

| Nhóm test | Tổng số | Pass | Fail | Warning | Chưa chạy |
| --- | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 14 | 12 | 1 | 1 | 0 |
| Boundary Value Analysis | 8 | 6 | 1 | 1 | 0 |
| Tổng cộng | 22 | 18 | 2 | 2 | 0 |

## 5. Kết quả đáng chú ý

| Test ID | Verdict | Nhận xét |
| --- | --- | --- |
| B-DT-04 | Pass | API lịch sử đơn hàng chỉ trả đơn của user hiện tại. |
| B-DT-05 | Pass | Thiếu token bị chặn bằng `401 Unauthorized`. |
| B-DT-06 | Pass | Token không hợp lệ bị chặn bằng `403 Forbidden`. |
| B-DT-09 | Warning | Trạng thái `shipping` hiển thị nhãn đúng nhưng vẫn có thao tác hủy, trái với FR-10. |
| B-DT-13 | Fail | User có thể xem chi tiết đơn của người khác qua `GET /api/orders/:id`. |
| B-BVA-04 | Pass | Mã đơn không tồn tại trả `404 Order not found`. |
| B-BVA-05 | Fail | Biên quyền sở hữu của API chi tiết bị lỗi: đơn của user khác vẫn xem được. |
| B-BVA-07 | Warning | Tập 5 trạng thái hợp lệ hiển thị được, nhưng trạng thái `shipping` vẫn có nút hủy. |
| B-BVA-08 | Pass | Trạng thái lạ không làm UI crash, có nhãn dự phòng; màu fallback nên được cải thiện nhưng không lập bug riêng. |

## 6. Bug và warning được lập từ kết quả test

| ID | Loại | Test liên quan | Mức độ | Tóm tắt |
| --- | --- | --- | --- | --- |
| BUG-B-01 | Bug của FR-11 | B-DT-13, B-BVA-05 | Critical | API chi tiết đơn hàng không kiểm tra xác thực/chủ sở hữu, dẫn tới lộ đơn của user khác. |
| WARNING-B-01 | Warning liên feature FR-10 | B-DT-09, B-BVA-07 | Major | UI hiển thị thao tác hủy cho đơn `shipping`; đây là vi phạm rule state machine của FR-10 được phát hiện khi test màn hình FR-11. |

Chi tiết bug và warning nằm trong `bug-report/bug-report.md`.

## 7. Đánh giá mức đạt của Feature B

Feature B đạt phần hiển thị lịch sử cơ bản: trạng thái rỗng, một đơn, nhiều đơn, sắp xếp, định dạng tổng tiền, nhãn trạng thái và kiểm tra token của API danh sách đều hoạt động đúng. Tuy nhiên feature chưa đạt yêu cầu đầy đủ vì còn lỗi bảo mật ở API chi tiết đơn hàng. Ngoài ra có một warning liên feature: màn hình FR-11 bộc lộ thao tác hủy đơn `shipping`, trong khi rule cấm thao tác này thuộc FR-10.

Mức rủi ro hiện tại: cao. Lý do chính là BUG-B-01 có thể làm lộ dữ liệu đơn hàng của người dùng khác. WARNING-B-01 cũng cần được xử lý cùng Feature D/FR-10 để tránh thao tác sai state machine.

## 8. Liên kết artifact

| Artifact | Đường dẫn |
| --- | --- |
| Domain Testing | `domain-testing/domain-testing.md` |
| Boundary Value Analysis | `boundary-value-analysis/boundary-value-analysis.md` |
| Bug Report | `bug-report/bug-report.md` |
| AI Gap Analysis | `ai-gap-analysis/ai-gap-analysis.md` |
