---
title: "Báo cáo HW03 - GUI & Usability Testing on EMS"
author: "MSSV 23127173"
date: "04/08/2026"
lang: vi-VN
geometry: margin=2.2cm
fontsize: 11pt
---

# Tóm tắt

Báo cáo đánh giá giao diện và khả dụng của Event Management System (EMS) trong Scenario B - người dùng khám phá, đăng ký và theo dõi hoạt động đã đăng ký. Phạm vi thống nhất ở cả ba task gồm B1 Dashboard/danh sách sự kiện, B2 Event detail/registration và B4 Profile/My Registrations. Bài thực hiện checklist GUI, user testing với năm người dùng chính thức và một pilot ngoài lớp, cùng kiểm thử compatibility trên ba hệ điều hành, năm trình duyệt và ba loại thiết bị.

Kết quả GUI ghi nhận 117 PASS và 6 FAIL trên 123 lượt kiểm tra. User testing có tỉ lệ hoàn thành 5/5, UEQ-S trung bình 38,6/56 và ba vấn đề khả dụng nổi bật. Compatibility matrix có 13 PASS và 2 FAIL. Sáu finding đã được ghi log, có evidence tham chiếu và đã submit Google Form theo xác nhận của sinh viên.

# 1. Phạm vi và hệ thống được kiểm thử

| Nội dung | Thông tin |
| --- | --- |
| Sinh viên | 23127173 |
| Kịch bản | B - Người dùng đăng ký tham dự sự kiện |
| SUT | `https://prod-dev.ems-fitus.cloud` |
| B1 | Dashboard / danh sách sự kiện, tìm kiếm và lọc |
| B2 | Chi tiết sự kiện và khu vực đăng ký |
| B4 | Profile / My Registrations / ticket |

Ba màn hình được dùng xuyên suốt Task 1B, Task 2 và Task 3. Sinh viên xác nhận phạm vi này không trùng với thành viên khác trong nhóm.

# 2. Phương pháp thực hiện

## 2.1 GUI checklist

Checklist dùng chung gồm 41 mục, bao phủ IA-01 (chuẩn UI chung), IA-02 (form), IA-03 (navigation) và IA-04 (feedback/state). Checklist có nguồn tham khảo, prompt AI và giải thích cho IA01-11 - mục bổ sung về Reflow theo WCAG. Mỗi màn hình được kiểm tra 41 mục; các tiêu chí điều kiện được ghi PASS kèm ghi chú khi widget/trạng thái không xuất hiện trong lượt quan sát, thay vì suy diễn đó là lỗi.

## 2.2 User testing

Task scenario yêu cầu người tham gia chọn một sự kiện, đọc thông tin cần thiết, đăng ký khi có thể và tìm trạng thái/ticket. Pilot-01 là người ngoài lớp, tách biệt P1-P5 và chỉ dùng để kiểm tra task/luồng. Năm phiên chính thức đo kết quả tác vụ, thời gian, lỗi/do dự, UEQ-S và bốn câu hỏi mở; thông tin liên hệ đã che.

## 2.3 Compatibility testing

Mỗi màn hình được chạy trên Windows 11, Android 14 và iOS 17; các trình duyệt Chrome, Firefox, Safari, Edge và Opera; cùng desktop, tablet và điện thoại. Mỗi cell có screenshot tham chiếu theo matrix.

# 3. Kết quả

## 3.1 Task 1 - GUI checklist

| Màn hình | PASS | FAIL | Kết quả đáng chú ý |
| --- | ---: | ---: | --- |
| B1 Dashboard | 39 | 2 | Reflow 320 px gây cuộn ngang |
| B2 Event detail | 39 | 2 | Reflow 320 px gây cuộn ngang |
| B4 Profile | 39 | 2 | Reflow 320 px gây cuộn ngang |
| **Tổng** | **117** | **6** | **123 kết quả** |

Retest viewport 320 x 720 cho thấy B1/B2 có `scrollWidth` 342 px và B4 có `scrollWidth` 458 px, trong khi `clientWidth` là 305 px. Lỗi này được ghi là F-06; mỗi màn hình có screenshot evidence riêng. Các ảnh phản ánh đúng viewport hẹp nhưng độ phân giải nhỏ, vì vậy được giữ nguyên, không phóng to hoặc chỉnh sửa bằng AI.

## 3.2 Task 2 - Usability Report

| Chỉ số | Kết quả |
| --- | --- |
| Phiên chính thức | 5 |
| Tỉ lệ hoàn thành | 5/5 = 100% |
| Thời gian trung bình | 09:49 |
| Lỗi/do dự trung bình | 5,8 |
| UEQ-S trung bình | 38,6/56 |

Ba vấn đề khả dụng được tổng hợp từ phản hồi người dùng: phản hồi chưa rõ khi không thể đăng ký, xác nhận/ticket chưa nổi bật, và màu sắc/banner làm giảm tập trung. Chi tiết câu trả lời mở, bảng UEQ-S và evidence phiên nằm trong Usability Report.

\newpage

## 3.3 Task 3 - Compatibility matrix

| Màn hình | Cell đã chạy | PASS | FAIL |
| --- | ---: | ---: | ---: |
| B1 | 5 | 4 | 1 |
| B2 | 5 | 5 | 0 |
| B4 | 5 | 4 | 1 |
| **Tổng** | **15** | **13** | **2** |

Hai lỗi compatibility là F-04 (filter ngày và nút hủy filter trên iOS Safari) và F-05 (search activities chạm viền card trên iOS Safari). Các lỗi chưa được sửa/retest vì bài nộp không chứa source code hoặc quyền deploy EMS.

# 4. Findings và theo dõi báo cáo

| ID | Loại | Severity | Tóm tắt |
| --- | --- | ---: | --- |
| F-01 | Usability | 3 | Trạng thái không thể đăng ký chưa giải thích rõ. |
| F-02 | Usability | 3 | Xác nhận đăng ký và ticket chưa nổi bật. |
| F-03 | Usability | 1 | Màu sắc/banner làm giảm tập trung. |
| F-04 | Compatibility | 2 | Filter ngày/hủy filter chưa ổn định trên iOS Safari. |
| F-05 | Compatibility | 1 | Search activities chạm viền card trên iOS Safari. |
| F-06 | Reflow | 3 | B1/B2/B4 cuộn ngang ở 320 CSS px. |

Sáu finding đã có screenshot tham chiếu trong `requirement/scenario-B/findings-log.md`. Timestamp submit Google Form được ghi lần lượt từ 02:31:32 đến 02:36:32 UTC+7 ngày 04/08/2026 theo xác nhận của sinh viên.

# 5. AI, bảo mật và khả năng truy vết

AI chỉ hỗ trợ cấu trúc tài liệu, tạo/tinh chỉnh checklist, điều khiển browser để quan sát thật và rà soát nhất quán. AI không tạo dữ liệu participant, Pass/Fail, finding hoặc ảnh evidence từ suy diễn. AI Audit, AI Critique và privacy checklist lưu lịch sử sử dụng AI; không lưu mật khẩu, token hoặc cookie trong artefact bài nộp.

Agent Skill `gui-checklist-executor` hướng dẫn chạy checklist qua Chrome đang đăng nhập, không đọc cookie/local storage/password manager. Video demo: https://youtu.be/GKflcjtQ4_U.

\newpage

# 6. Đánh giá và việc còn lại

| Hạng mục | Điểm tự đánh giá |
| --- | ---: |
| Task 1A - Checklist nhóm | 15/15 |
| Task 1B - Thực thi checklist và bug report | 12/15 |
| Task 2 - User testing | 23/25 |
| Task 3 - Compatibility matrix | 25/25 |
| Findings Log + Google Form | 10/10 |
| Agent Skill + video demo | 10/10 |
| **Tổng** | **95/100** |

Đây là tự đánh giá theo evidence hiện có, không thay thế điểm giảng viên. F-04/F-05 là finding compatibility hợp lệ đã được kiểm thử, lưu evidence và submit Form; bài không yêu cầu sinh viên sửa EMS. Điểm còn lại được giữ thận trọng ở Task 1B do F-06 reflow 320 px và ở Task 2 do mức độ chi tiết của evidence quan sát/recording có thể được TA đối chiếu thêm.

# 7. Artefact tham chiếu

- Checklist, nguồn và prompt: `../../checklist/`.
- Kết quả GUI: `../../requirement/scenario-B/screens/`.
- Usability Report: `../../requirement/scenario-B/usability-report/usability-report.md`.
- Compatibility matrix: `../../requirement/scenario-B/compatibility-matrix/compatibility-matrix.md`.
- Findings Log: `../../requirement/scenario-B/findings-log.md`.
- AI Audit, AI Critique và privacy checklist: `AI Audit/`.
- Git history: `Git Commit Log/git-commit-log.txt`.
