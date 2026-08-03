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
| Task 1B | Có log 41 mục/màn hình: 117 PASS, 6 FAIL, 0 N/A; ba screenshot reflow lỗi. |
| Task 2 | Có Pilot-01 ngoài lớp và P1–P5, UEQ-S, câu trả lời mở và 3 finding; pilot không tính vào số liệu chính thức. |
| Task 3 | Có 15 cell và screenshot; sinh viên xác nhận URL, browser/OS/device và watermark đúng dạng email theo đề. |
| Findings Log / Google Form | Có 6 finding, timestamp cách nhau một phút và sinh viên xác nhận khớp Google Form. |
| Agent skill | Có `gui-checklist-executor` và video demo. |

## Chỉ số đã ghi nhận

| Chỉ số | Giá trị |
| --- | --- |
| Checklist dùng chung | 41 |
| Task 1B hiện có | B1/B2/B4 mỗi màn hình 39 PASS/2 FAIL; tổng 117 PASS/6 FAIL |
| User testing chính thức | 5 phiên; UEQ-S trung bình 38,6/56; 3 usability finding |
| Compatibility | 15 cell: 13 Pass, 2 Fail |

## Bước còn thiếu trước khi nộp

1. Sửa và retest lỗi reflow F-06 trên B1, B2, B4.

## Tự đánh giá bảo thủ theo bằng chứng hiện có

| Hạng mục | Điểm tạm tính | Lý do |
| --- | ---: | --- |
| Task 1A | 13/15 | 41 mục, nguồn/prompt rõ; IA01-11 vừa bổ sung. |
| Task 1B | 13/15 | Đủ 41 Passed/Failed và screenshot FAIL; cần retest sau khi sửa F-06. |
| Task 2 | 20/25 | Có Pilot-01 ngoài lớp, 5 phiên chính thức và số liệu; pilot không có ảnh/video vì chỉ kiểm tra task/luồng. |
| Task 3 | 20/25 | Có matrix 15 cell, ảnh tham chiếu và xác nhận metadata/watermark. |
| Findings / Google Form | 10/10 | Có 6 finding, screenshot, timestamp và xác nhận đã submit Form. |
| Agent skill | 10/10 | Có skill và video demo: https://youtu.be/GKflcjtQ4_U. |
| **Tổng** | **86/100** | Ước lượng bảo thủ, không thay thế điểm giảng viên. |

Các artefact chi tiết: `checklist/`, `requirement/scenario-B/`, `doc/md/AI Audit/` và `agent-skills/`.
