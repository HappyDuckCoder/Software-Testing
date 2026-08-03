# HW03 — GUI & Usability Testing on EMS

| Nội dung | Giá trị |
| --- | --- |
| Mã sinh viên | 23127173 |
| Kịch bản | B — Người dùng đăng ký tham dự sự kiện |
| SUT hiện hành | `https://prod-dev.ems-fitus.cloud` |
| Ba màn hình | B1 Dashboard; B2 Event detail/registration; B4 Profile/My Registrations |
| Trạng thái rà soát | Có artefact và bằng chứng, nhưng **chưa đủ điều kiện xem là hoàn tất toàn bộ**. |

## Artefact và tình trạng thực tế

| Artefact | Tình trạng |
| --- | --- |
| Checklist dùng chung | 41 mục, đủ IA-01…IA-04; IA01-11 là mục nhóm bổ sung, chưa chạy trên 3 màn hình. |
| Task 1B | Có log 40 mục/màn hình; các dòng `N/A` không khớp yêu cầu chỉ dùng Passed/Failed. |
| Task 2 | Có Pilot và P1–P5, UEQ-S, câu trả lời mở và 3 finding; sinh viên xác nhận 5 người tham gia ngoài lớp. Pilot trùng P1 theo quyết định sinh viên. |
| Task 3 | Có 15 cell và screenshot; sinh viên xác nhận URL, browser/OS/device và watermark đúng dạng email theo đề. |
| Findings Log / Google Form | Chưa có finding đã gửi form hoặc timestamp, nên chưa hoàn tất. |
| Agent skill | Có `gui-checklist-executor`; chưa có video demo. |

## Chỉ số đã ghi nhận

| Chỉ số | Giá trị |
| --- | --- |
| Checklist dùng chung | 41 |
| Task 1B hiện có | B1 15 PASS/25 N/A; B2 25 PASS/15 N/A; B4 17 PASS/23 N/A (mỗi màn hình chưa có IA01-11) |
| User testing chính thức | 5 phiên; UEQ-S trung bình 38,6/56; 3 usability finding |
| Compatibility | 15 cell: 13 Pass, 2 Fail |

## Bước còn thiếu trước khi nộp

1. Chạy và ghi kết quả thật cho IA01-11 trên B1, B2, B4; quyết định cách xử lý các tiêu chí không áp dụng theo rubric Passed/Failed.
2. Thay Pilot bằng một người bổ sung thực sự (hoặc cung cấp bằng chứng pilot hiện có là người khác P1).
3. Gửi các finding đã xác minh qua Google Form và ghi timestamp vào Findings Log.
4. Ghi video demo cho skill.

## Tự đánh giá bảo thủ theo bằng chứng hiện có

| Hạng mục | Điểm tạm tính | Lý do |
| --- | ---: | --- |
| Task 1A | 13/15 | 41 mục, nguồn/prompt rõ; IA01-11 vừa bổ sung. |
| Task 1B | 7/15 | Có log nhưng thiếu IA01-11 và trạng thái `N/A` không khớp rubric. |
| Task 2 | 17/25 | Có 5 phiên, số liệu và xác nhận ngoài lớp; Pilot vẫn trùng P1. |
| Task 3 | 20/25 | Có matrix 15 cell, ảnh tham chiếu và xác nhận metadata/watermark. |
| Findings / Google Form | 0/10 | Chưa có bản ghi gửi form và timestamp. |
| Agent skill | 5/10 | Có skill hoạt động; chưa có video demo. |
| **Tổng** | **62/100** | Ước lượng bảo thủ, không thay thế điểm giảng viên. |

Các artefact chi tiết: `checklist/`, `requirement/scenario-B/`, `doc/md/AI Audit/` và `agent-skills/`.
