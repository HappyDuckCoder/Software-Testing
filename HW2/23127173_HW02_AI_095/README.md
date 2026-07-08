# HW02-AI Domain Testing - Submission README

## 1. Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW02-AI - Domain Testing trên EShop |
| SUT | EShop |
| Mức tự đánh giá mục tiêu | 095 |
| Tên file nộp | `23127173_HW02_AI_DomainTesting_095.zip` |

## 2. Feature đã chọn

| Pool | Feature đã chọn | Owner | Trạng thái |
| --- | --- | --- | --- |
| Pool A | FR-04 - Quản lý hồ sơ cá nhân | 23127173 | Đã thiết kế, đã chạy và đã báo cáo |
| Pool B | FR-11 - Xem lịch sử đơn hàng của người dùng | 23127173 | Đã thiết kế, đã chạy và đã báo cáo |
| Pool C | FR-18 - Quản lý đơn hàng của admin | 23127173 | Đã thiết kế, đã chạy và đã báo cáo |
| Pool D - Mobile | FR-10 - Máy trạng thái đơn hàng | 23127173 | Đã thiết kế, đã chạy và đã báo cáo bằng API/web flow đại diện |

## 3. Bảng tự đánh giá

| No. | Tiêu chí | Điểm tối đa | Tự đánh giá | Bằng chứng |
| --- | --- | ---: | ---: | --- |
| 1 | Feature A - Domain Testing + BVA | 25 | 24 | `requirement/feature-A/` |
| 2 | Feature B - Domain Testing + BVA | 25 | 24 | `requirement/feature-B/` |
| 3 | Feature C - Domain Testing + BVA | 25 | 24 | `requirement/feature-C/` |
| 4 | Feature D Mobile - Domain Testing + BVA | 15 | 14 | `requirement/feature-D-mobile/` |
| 5 | Agent Skills | 10 | 9 | `agent-skills/` |
| | **Tổng** | **100** | **95** | Mức tự đánh giá sau khi đã bổ sung test evidence và screenshot bug/GitHub trong các thư mục ảnh minh chứng; PDF sẽ export khi đóng gói |

## 4. Test Summary Report

| Feature | Đã thiết kế | Đã chạy | Pass | Fail | Warning | Chưa chạy | Bug/Warning chính | Thư mục ảnh minh chứng |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Feature A - FR-04 | 30 | 30 | 10 | 14 | 6 | 0 | 2 bug | `requirement/feature-A/domain-testing/`, `boundary-value-analysis/`, `bug-report/screenshots/` |
| Feature B - FR-11 | 22 | 22 | 18 | 2 | 2 | 0 | 1 bug, 1 warning | `requirement/feature-B/domain-testing/`, `boundary-value-analysis/`, `bug-report/screenshots/` |
| Feature C - FR-18 | 24 | 24 | 18 | 6 | 0 | 0 | 3 bug | `requirement/feature-C/domain-testing/`, `boundary-value-analysis/`, `bug-report/screenshots/` |
| Feature D - FR-10 | 25 | 25 | 21 | 4 | 0 | 0 | 2 bug | `requirement/feature-D-mobile/domain-testing/`, `boundary-value-analysis/`, `bug-report/screenshots/` |
| **Tổng** | **101** | **101** | **67** | **26** | **8** | **0** | **9 bug/warning** | Đã có ảnh minh chứng cho các test đã chạy |

## 5. Artifact bắt buộc

| Artifact | Đường dẫn | Trạng thái |
| --- | --- | --- |
| Main report Markdown | `doc/md/main-report.md` | Đã cập nhật nội dung tổng hợp |
| Main report PDF | `doc/pdf/main-report.pdf` | Đã export |
| Domain Testing report | `requirement/feature-*/domain-testing/domain-testing.md` | Đã có cho 4 feature |
| Boundary Value Analysis report | `requirement/feature-*/boundary-value-analysis/boundary-value-analysis.md` | Đã có cho 4 feature |
| Bug report Markdown | `requirement/feature-*/bug-report/bug-report.md` | Đã có cho 4 feature |
| GitHub Issues + screenshot issue page | `requirement/feature-*/bug-report/screenshots/` và dòng ghi chú trong từng bug report | Đã có screenshot; nếu giảng viên yêu cầu URL issue thật thì gắn thêm link |
| AI Gap Analysis | `requirement/feature-*/ai-gap-analysis/ai-gap-analysis.md` | Đã có cho 4 feature |
| AI Audit Report | `doc/md/AI Audit/01_AI-Audit-Report.md` | Đã cập nhật |
| AI Critique | `doc/md/AI Audit/02_AI-Critique.md` | Đã viết bản 200-300 từ |
| Mandatory Disclosure | `doc/md/AI Audit/03_Mandatory-Disclosure.md` | Đã cập nhật |
| AI Privacy Checklist | `doc/md/AI Audit/04_AI-Privacy-Checklist.md` | Đã cập nhật |
| Prompt log | `doc/md/appendixA-prompt-log.md` | Cần bổ sung đủ các prompt nếu muốn khớp audit chi tiết |
| Git commit log | `doc/md/Git Commit Log/git-commit-log.txt` | Đã paste commit log thật của nhánh `homework2`; nên cập nhật lại sau commit cuối |
| Agent Skills | `agent-skills/` | Đã có skill source và link demo tại `agent-skills/demo-videos/link-video.md` |

## 6. Ghi chú review cuối

Các feature đã khớp với yêu cầu chính của HW2: mỗi pool có một feature, mỗi feature có Domain Testing, Boundary Value Analysis, Bug Report và AI Gap Analysis. Bài hiện mạnh ở số lượng test case, kết quả thực thi, hệ thống ảnh minh chứng và đã có link demo Agent Skill. Việc còn lại trước khi nộp là kiểm tra PDF sau khi export và nếu giảng viên yêu cầu URL GitHub Issue thật thì gắn thêm link vào bug report.
