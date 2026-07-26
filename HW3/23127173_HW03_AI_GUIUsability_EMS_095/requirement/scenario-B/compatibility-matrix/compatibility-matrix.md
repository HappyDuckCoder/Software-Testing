# Task 3 — Ma trận đa trình duyệt / đa nền tảng

## 1. Phạm vi và công cụ


| Nội dung               | Thông tin                                                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kịch bản EMS           | B — Người dùng đăng ký tham dự sự kiện                                                                                                                                        |
| Màn hình được kiểm thử | B1 Home / danh sách sự kiện tại `/dashboard`; B2 Chi tiết sự kiện kèm khu vực đăng ký tại `/events/{event-id}`; B4 My Registrations / ticket tại `/profile` sau khi đăng nhập |
| Công cụ / thiết bị     | [BrowserStack / LambdaTest / thiết bị thật — ĐIỀN SAU]                                                                                                                        |
| Ngày kiểm thử          | [ĐIỀN SAU]                                                                                                                                                                    |
| Người thực hiện        | [ĐIỀN SAU]                                                                                                                                                                    |


**Quy tắc bằng chứng:** Mỗi ô đã chạy phải có screenshot thật, hiển thị URL EMS, browser, OS, loại thiết bị và lớp phủ `MSSV@....edu.vn`. Không điền Pass/Fail trước khi chạy thật.

## 2. Chiến lược bao phủ

- Không bắt buộc chạy đầy đủ tổ hợp `3 × 5 × 3`.
- Với **mỗi màn hình**, chạy 5 case bên dưới để bao phủ 3 OS (Windows, Android, iOS), 5 browser (Chrome, Firefox, Safari, Edge, Opera) và 3 loại thiết bị (desktop, tablet, điện thoại).
- Dùng cùng một sự kiện có thể đăng ký cho S1 và S2 trong một lượt chạy; ghi URL thực tế thay cho `/events/{event-id}` trong screenshot.
- Các ô Fail phải có mô tả ngắn, mức độ nghiêm trọng, screenshot tham chiếu và dòng tương ứng trong `../findings-log.md`.



## 3. Tiêu chí đánh giá Pass / Fail


| Màn hình                   | Pass khi                                                                                                                 | Fail khi                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| S1 / B1 — Home             | Danh sách sự kiện hiển thị không vỡ bố cục; tìm kiếm/lọc dùng được; người dùng mở được trang chi tiết sự kiện.           | Không tải được danh sách; chữ/nút bị che, tràn hoặc không đọc được; tìm kiếm/lọc hoặc mở chi tiết không hoạt động.   |
| S2 / B2 — Chi tiết sự kiện | Thông tin sự kiện và khu vực đăng ký hiển thị đúng; thao tác đăng ký hoặc trạng thái không thể đăng ký phản hồi rõ ràng. | Nội dung/khu vực đăng ký bị lỗi hiển thị; nút không phản hồi; trạng thái hoặc phản hồi thao tác sai/không rõ.        |
| S3 / B4 — My Registrations | Danh sách đăng ký, trạng thái và ticket/QR (nếu có) hiển thị, đọc được và truy cập được.                                 | Không mở/xem được đăng ký; trạng thái hoặc ticket/QR thiếu, sai hoặc bị vỡ bố cục; control liên quan không phản hồi. |


> Event `Pending`, hết chỗ hoặc không mở đăng ký **không tự là Fail** nếu EMS hiển thị trạng thái và chặn thao tác một cách rõ ràng, nhất quán. Lỗi mạng, server hoặc ngrok phải chạy lại để xác minh trước khi ghi Fail; nếu chưa xác minh, giữ `[CHƯA CHẠY]` và ghi chú nguyên nhân.



## 4. Màn hình S1 / B1 — Home / danh sách sự kiện


| Cell ID | OS         | Browser | Loại thiết bị | Pass / Fail | Lý do Fail                                                                                  | Ghi chú                                             | Screenshot                                                                                |
| ------- | ---------- | ------- | ------------- | ----------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| S1-C01  | Windows 11 | Chrome  | Desktop       | Pass        | —                                                                                           | Kiểm tra danh sách, tìm kiếm/lọc và mở một sự kiện. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B1-window-chrome-desktop.png |
| S1-C02  | Android 14 | Firefox | Tablet        | [CHƯA CHẠY] | —                                                                                           | Kiểm tra danh sách, tìm kiếm/lọc và mở một sự kiện. | [ĐÍNH KÈM SAU]                                                                            |
| S1-C03  | iOS 17     | Safari  | Điện thoại    | Fail        | Lỗi resposive input from và input to date, bấm nút hủy filter 2, 3 lần mới hủy filter được. | Kiểm tra danh sách, tìm kiếm/lọc và mở một sự kiện. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B1-ios-safari-mobile.jpg     |
| S1-C04  | Windows 11 | Edge    | Desktop       | Pass        | —                                                                                           | Kiểm tra danh sách, tìm kiếm/lọc và mở một sự kiện. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B1-window-edge-desktop.png   |
| S1-C05  | Windows 11 | Opera   | Desktop       | [CHƯA CHẠY] | —                                                                                           | Kiểm tra danh sách, tìm kiếm/lọc và mở một sự kiện. | [ĐÍNH KÈM SAU]                                                                            |




### Kiểm tra bao phủ S1

- [ ] 3/3 OS.
- [ ] 5/5 browser.
- [ ] 3/3 loại thiết bị.
- [ ] Mọi ô có screenshot thật.



## 5. Màn hình S2 / B2 — Chi tiết sự kiện kèm khu vực đăng ký


| Cell ID | OS         | Browser | Loại thiết bị | Pass / Fail | Lý do Fail | Ghi chú                                                           | Screenshot                                                                                |
| ------- | ---------- | ------- | ------------- | ----------- | ---------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| S2-C01  | Windows 11 | Chrome  | Desktop       | Pass        | —          | Kiểm tra thông tin sự kiện, khu vực đăng ký và phản hồi thao tác. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B2-window-chrome-desktop.png |
| S2-C02  | Android 14 | Firefox | Tablet        | [CHƯA CHẠY] | —          | Kiểm tra thông tin sự kiện, khu vực đăng ký và phản hồi thao tác. | [ĐÍNH KÈM SAU]                                                                            |
| S2-C03  | iOS 17     | Safari  | Điện thoại    | Pass        | —          | Kiểm tra thông tin sự kiện, khu vực đăng ký và phản hồi thao tác. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B2-ios-safari-mobile.jpg     |
| S2-C04  | Windows 11 | Edge    | Desktop       | Pass        | —          | Kiểm tra thông tin sự kiện, khu vực đăng ký và phản hồi thao tác. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B2-window-edge-desktop.png   |
| S2-C05  | Windows 11 | Opera   | Desktop       | [CHƯA CHẠY] | —          | Kiểm tra thông tin sự kiện, khu vực đăng ký và phản hồi thao tác. | [ĐÍNH KÈM SAU]                                                                            |




### Kiểm tra bao phủ S2

- [ ] 3/3 OS.
- [ ] 5/5 browser.
- [ ] 3/3 loại thiết bị.
- [ ] Mọi ô có screenshot thật.



## 6. Màn hình S3 / B4 — My Registrations / ticket


| Cell ID | OS         | Browser | Loại thiết bị | Pass / Fail | Lý do Fail                                    | Ghi chú                                                     | Screenshot                                                                                |
| ------- | ---------- | ------- | ------------- | ----------- | --------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| S3-C01  | Windows 11 | Chrome  | Desktop       | Pass        | —                                             | Kiểm tra danh sách đăng ký, trạng thái và ticket/QR nếu có. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B4-window-chrome-desktop.png |
| S3-C02  | Android 14 | Firefox | Tablet        | [CHƯA CHẠY] | —                                             | Kiểm tra danh sách đăng ký, trạng thái và ticket/QR nếu có. | [ĐÍNH KÈM SAU]                                                                            |
| S3-C03  | iOS 17     | Safari  | Điện thoại    | Fail        | Thanh search activities chạm viền card bị xấu | Kiểm tra danh sách đăng ký, trạng thái và ticket/QR nếu có. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B4-ios-safari-mobile.jpg     |
| S3-C04  | Windows 11 | Edge    | Desktop       | Pass        | —                                             | Kiểm tra danh sách đăng ký, trạng thái và ticket/QR nếu có. | 23127173_HW03_AI_GUIUsability_EMS_095\evidence\compatibility\B4-window-edge-desktop.png   |
| S3-C05  | Windows 11 | Opera   | Desktop       | [CHƯA CHẠY] | —                                             | Kiểm tra danh sách đăng ký, trạng thái và ticket/QR nếu có. | [ĐÍNH KÈM SAU]                                                                            |




### Kiểm tra bao phủ S3

- [ ] 3/3 OS.
- [ ] 5/5 browser.
- [ ] 3/3 loại thiết bị.
- [ ] Mọi ô có screenshot thật.



## 7. Tóm tắt kết quả thật


| Màn hình | Số ô đã chạy | Pass       | Fail       | Ghi chú |
| -------- | ------------ | ---------- | ---------- | ------- |
| S1       | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU] |         |
| S2       | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU] |         |
| S3       | [ĐIỀN SAU]   | [ĐIỀN SAU] | [ĐIỀN SAU] |         |


