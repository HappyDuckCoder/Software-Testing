---
name: gui-checklist-executor
description: Tự động hóa việc thực thi GUI checklist EMS bằng Playwright cho toàn bộ mục trong team-checklist.csv/gui-checklist.md. Dùng khi cần lập kế hoạch, tạo automation hoặc chạy kiểm thử thực tế có bằng chứng; không dùng để suy diễn Pass/Fail khi chưa truy cập EMS.
---

# GUI Checklist Executor

Chuẩn bị và thực thi tự động toàn bộ checklist GUI dùng chung của nhóm cho EMS. Tham khảo workflow của skill Playwright đã cài tại `C:/Users/Duck/.codex/skills/playwright`.

## Đầu vào bắt buộc trước khi chạy

- Base URL EMS, scenario/màn hình cần kiểm tra và môi trường được phép test.
- Tài khoản test hợp lệ hoặc xác nhận rằng màn hình công khai không cần đăng nhập.
- `checklist/team-checklist.csv` và `checklist/gui-checklist.md` hiện hành.
- Thư mục lưu artefact; mặc định dùng `evidence/automated-gui/` trong bài nộp.

Không tự sử dụng token, cookie, mật khẩu hay tài khoản cá nhân. Dừng và yêu cầu thông tin nếu thiếu quyền truy cập hoặc điều kiện dữ liệu cần để kiểm tra một mục.

## Quy trình tự động hóa

1. Đọc CSV, xác nhận có 40 checklist ID duy nhất, rồi tạo ma trận bao phủ gồm toàn bộ ID cho từng màn hình được chọn.
2. Phân loại từng mục thành kiểm tra DOM/URL, tương tác trình duyệt, kiểm tra bàn phím/focus, kiểm tra responsive hoặc kiểm tra trực quan. Mục có widget điều kiện (tab, breadcrumb, kéo-thả, dialog) phải được ghi `N/A` kèm lý do khi widget không hiện diện; không được ghi Fail chỉ vì widget không tồn tại.
3. Dùng Playwright để mở trình duyệt thật, snapshot trước khi dùng ref phần tử, snapshot lại sau điều hướng hoặc thay đổi UI lớn.
4. Thực thi lần lượt toàn bộ mục áp dụng, bao gồm điều hướng menu/sidebar, tab, breadcrumb, kéo-thả, Back/Cancel, Browser Back/Forward, deep link, dialog/focus, bàn phím, form, trạng thái và responsive theo checklist.
5. Chỉ ghi `Pass`, `Fail`, `N/A` hoặc `Blocked` từ quan sát/kiểm tra thật. Với `Fail` hoặc `Blocked`, lưu screenshot, URL, browser/OS/device, bước tái hiện và log lỗi; không tạo finding nếu chưa được yêu cầu.
6. Xuất bảng kết quả có các cột: Checklist ID, màn hình, trạng thái, lý do/quan sát, URL, artefact tham chiếu, thời điểm và môi trường. Đối chiếu lại để bảo đảm mọi mục CSV có đúng một kết quả trên mỗi màn hình.

## Guardrails

- Không chạy, tạo screenshot hay sửa Pass/Fail khi người dùng chỉ yêu cầu tạo skill hoặc kế hoạch.
- Không bỏ qua mục thất bại; ghi `Blocked` khi hạ tầng, quyền hoặc dữ liệu test ngăn cản việc kiểm tra.
- Không coi ảnh do AI tạo, dữ liệu mô phỏng hoặc kết quả suy diễn là bằng chứng GUI test.
- Chạy các thao tác có thay đổi dữ liệu chỉ trên môi trường/tài khoản test được người dùng cho phép; ưu tiên thao tác đọc hoặc dữ liệu có thể hoàn tác.
