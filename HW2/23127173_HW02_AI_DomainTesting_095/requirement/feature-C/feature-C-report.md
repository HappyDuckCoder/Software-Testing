# Báo cáo Feature C - FR-18 Quản lý đơn hàng của admin

## 1. Thông tin feature

| Mục | Giá trị |
| --- | --- |
| Pool | Pool C - Web Admin |
| Feature ID | FR-18 |
| Feature | Quản lý đơn hàng của admin |
| Actor chính | Admin |
| Hệ thống kiểm thử | EShop admin frontend và backend API |
| Trạng thái | Đã chạy test và cập nhật kết quả thực tế |

Feature C kiểm tra việc admin xem toàn bộ đơn hàng, cập nhật trạng thái đơn, xử lý các trạng thái kết thúc và hiển thị địa chỉ giao hàng an toàn. Đây là feature khá “đụng nhiều nơi”: vừa có phân quyền admin, vừa có state machine của FR-10, vừa có dữ liệu người dùng nhập hiển thị lại trên màn hình quản trị.

## 2. Phạm vi kiểm thử

| Thành phần | Vai trò trong kiểm thử |
| --- | --- |
| `Eshop/backend/server.js` | API `GET /api/admin/orders` và `PUT /api/admin/orders/:id/status` |
| `Eshop/frontend-admin/src/App.jsx` | Bảng Orders, nút chuyển trạng thái, hiển thị địa chỉ |
| `Eshop/README.md` | Đối chiếu FR-18 và state machine FR-10 |
| `Eshop/api_specification.md` | Đối chiếu endpoint admin orders |

Các miền đầu vào chính gồm token, role, mã đơn, trạng thái hiện tại, trạng thái đích, danh sách đơn hàng và nội dung địa chỉ giao hàng.

## 3. Tóm tắt kết quả thực thi

| Nhóm test | Tổng số | Pass | Fail | Warning | Chưa chạy |
| --- | ---: | ---: | ---: | ---: | ---: |
| Domain Testing | 16 | 12 | 4 | 0 | 0 |
| Boundary Value Analysis | 8 | 6 | 2 | 0 | 0 |
| Tổng cộng | 24 | 18 | 6 | 0 | 0 |

## 4. Kết quả đáng chú ý

| Test ID | Verdict | Nhận xét |
| --- | --- | --- |
| C-DT-01 | Pass | Admin xem được danh sách tất cả đơn hàng, có `user_name` và thứ tự mới nhất trước. |
| C-DT-03 | Pass | Thiếu token bị chặn đúng. |
| C-DT-04 | Fail | Token user thường vẫn xem được danh sách đơn admin. Đây là lỗi phân quyền nghiêm trọng. |
| C-DT-05 đến C-DT-09 | Pass | Các transition hợp lệ như `pending -> confirmed`, `confirmed -> shipping`, `shipping -> delivered` chạy đúng. |
| C-DT-10 | Pass | Hệ thống chặn chuyển tắt `pending -> shipping`. |
| C-DT-11 | Pass | Hệ thống chặn `delivered -> canceled`. |
| C-DT-12 | Fail | Hệ thống lại cho phép `canceled -> delivered`, trái với trạng thái kết thúc của FR-10. |
| C-DT-13 | Pass | Mã đơn không tồn tại trả lỗi đúng. |
| C-DT-14 | Pass | Trạng thái đích không xác định bị từ chối. |
| C-DT-15 | Fail | Địa chỉ giao hàng chứa HTML/script bị thực thi trên admin UI. |
| C-DT-16 | Fail | Đơn đã hủy vẫn có nút “Đánh dấu Đã giao” và thực hiện được thao tác. |
| C-BVA-05 | Pass | Biên bỏ bước `pending -> shipping` bị chặn đúng. |
| C-BVA-06 | Fail | Biên sau trạng thái kết thúc `canceled -> delivered` bị xử lý sai. |
| C-BVA-08 | Fail | Biên địa chỉ HTML nguy hiểm không được escape an toàn. |

## 5. Bug được lập từ kết quả test

| Bug ID | Test liên quan | Mức độ | Tóm tắt |
| --- | --- | --- | --- |
| BUG-C-01 | C-DT-04 | Critical | API admin chỉ kiểm tra token, không kiểm tra role admin. |
| BUG-C-02 | C-DT-12, C-DT-16, C-BVA-06 | Major | Đơn `canceled` vẫn có thể chuyển thành `delivered`; UI cũng hiển thị nút chuyển trạng thái này. |
| BUG-C-03 | C-DT-15, C-BVA-08 | Critical | Admin UI render `shipping_address` bằng HTML thô, gây XSS. |

Chi tiết từng lỗi nằm trong `bug-report/bug-report.md`.

## 6. Đánh giá mức đạt của Feature C

Feature C làm tốt các luồng quản lý cơ bản: admin xem danh sách đơn, bảng hiển thị được dữ liệu, các transition hợp lệ chạy đúng, các transition sai phổ biến như `pending -> shipping` và `delivered -> canceled` được chặn. Nói cách khác, phần “đường thẳng” của feature khá ổn.

Tuy nhiên feature chưa đạt yêu cầu an toàn và đầy đủ vì còn ba rủi ro lớn. Một là user thường có thể gọi API admin. Hai là state machine bị thủng ở nhánh `canceled -> delivered`. Ba là địa chỉ giao hàng của user được render như HTML trên màn hình admin, dẫn tới XSS. Đây đều là lỗi cần sửa trước khi coi FR-18 là đạt.

## 7. Liên kết artifact

| Artifact | Đường dẫn |
| --- | --- |
| Domain Testing | `domain-testing/domain-testing.md` |
| Boundary Value Analysis | `boundary-value-analysis/boundary-value-analysis.md` |
| Bug Report | `bug-report/bug-report.md` |
| AI Gap Analysis | `ai-gap-analysis/ai-gap-analysis.md` |
