# Báo cáo kịch bản EMS

## 1. Phạm vi được phân công

| Nội dung | Thông tin |
| --- | --- |
| Kịch bản | B |
| Tên kịch bản | Người dùng đăng ký tham dự sự kiện |
| Vai trò thực hiện | User |
| Lý do chọn | Phạm vi bao quát luồng người dùng từ khám phá sự kiện đến đăng ký. |

## 2. Ba màn hình dùng xuyên suốt

| Mã | Màn hình / URL hoặc path | Lý do chọn | Task 1B | Task 2 | Task 3 |
| --- | --- | --- | --- | --- | --- |
| S1 / B1 | Home / danh sách sự kiện — featured carousel, category, search/filter; `https://prod-dev.ems-fitus.cloud/dashboard` | Điểm bắt đầu khám phá sự kiện của người dùng. | [ ] | [ ] | [ ] |
| S2 / B2 | Chi tiết sự kiện — banner, lịch trình và khu vực đăng ký; `https://prod-dev.ems-fitus.cloud/events/{event-id}` | Cung cấp thông tin và hỗ trợ người dùng quyết định đăng ký. | [ ] | [ ] | [ ] |
| S3 / B4 | My Registrations / ticket — trạng thái và barcode/QR; truy cập từ `https://prod-dev.ems-fitus.cloud/profile` sau khi đăng nhập | Màn hình độc lập xác nhận kết quả đăng ký và vé của người dùng. | [ ] | [ ] | [ ] |

> Ba dòng trên phải mô tả cùng ba màn hình trong toàn bộ Task 1B, Task 2 và Task 3.
>
> Với mỗi lượt kiểm thử hoặc user-testing session, sinh viên chọn và ghi lại tên, URL và trạng thái thực tế của một sự kiện mục tiêu. Không suy diễn kết quả từ lần đăng ký/hủy đăng ký trước đó.

## 3. Liên kết artefact

- Thực thi checklist: `screens/screen-1/`, `screens/screen-2/`, `screens/screen-3/`.
- Usability Report: `usability-report/usability-report.md`.
- Compatibility matrix: `compatibility-matrix/compatibility-matrix.md`.
- Findings Log: `findings-log.md`.
