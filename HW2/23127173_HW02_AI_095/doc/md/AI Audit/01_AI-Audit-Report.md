# AI Audit Report - HW02

## 1. Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Lớp / Khóa | Chưa điền |
| Mã bài tập | HW02-AI |
| Tên bài tập | Domain Testing on EShop |
| Ngày cập nhật | 2026-06-27 |
| Công cụ AI đã dùng | Codex / ChatGPT |
| Có dùng AI | Có |

## 2. Bảng Audit - 1 hàng / artifact

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do / đối chiếu | (5) Bản sinh viên sửa |
| --- | --- | --- | --- | --- |
| Tool: Codex / ChatGPT. Thời gian: 2026-06-27 19:29:25 +07:00. Prompt: "tôi muốn bạn làm 1 roadmap để hoàn thành HW này 1 cách 10 điểm vào Lab\\HW2\\23127173_HW02_AI_095\\roadmap.md ... AI template bạn xem trong Lab\\AI Templates\\md" | Tạo roadmap hoàn thành HW02, tạo cấu trúc thư mục/file tương ứng với HW1, tạo README/checklist/main-report skeleton, prompt log và AI Audit entry đầu tiên. | INCOMPLETE | AI chỉ hỗ trợ lập kế hoạch, tạo khung tài liệu và ánh xạ yêu cầu. Theo yêu cầu HW02, điểm chính đến từ việc sinh viên tự chọn feature, áp dụng Domain Testing/BVA, chạy SUT, cập nhật Actual/Verdict, tạo GitHub Issues thật, quay demo Agent Skill và export PDF. | Sinh viên cần chốt 4 feature với nhóm, chạy EShop, viết và thực thi test case thật, bổ sung bug evidence, cập nhật audit cho mọi prompt sau, hoàn thiện report/PDF và zip nộp bài. |
| Tool: Codex / ChatGPT. Thời gian: 2026-06-27 19:43:38 +07:00. Prompt: "Lab\\HW2\\23127173_HW02_AI_095\\agent-skills ... bạn tìm cho tôi các skills để thêm vô agents-skills theo chuẩn yêu cầu ... thêm vào AI-audit" | Tạo bộ 5 Agent Skills cho HW02: `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, `ai-gap-analysis-reviewer`, `github-bug-report-writer`; mỗi skill có `SKILL.md` và `agents/openai.yaml`, kèm `skill-catalog.md` và gợi ý demo flow. | INCOMPLETE | Các skill đáp ứng phần chuẩn artifact và có thể dùng để demo quy trình AI-first. Tuy nhiên, điểm Agent Skills chỉ chắc khi sinh viên thật sự dùng skill trên một feature, quay video demo end-to-end, và chứng minh output được review/chỉnh sửa bằng execution evidence. | Sinh viên cần tự chạy demo, ghi link video vào `agent-skills/demo-videos/link-video.md`, cập nhật report chính và dùng ít nhất một skill để tạo artifact thật cho feature đã chọn. |

## 3. Tổng kết độ chính xác AI

| Chỉ số | Số lượng | Tỉ lệ |
| --- | ---: | ---: |
| Tổng artifact AI sinh đã audit | 2 | 100% |
| VALID | 0 | 0% |
| INVALID | 0 | 0% |
| INCOMPLETE | 2 | 100% |

## 4. Kết luận - khi nào nên / không nên dùng AI?

Nên dùng AI để lập roadmap, tạo khung báo cáo, chuẩn hóa bảng test case, gợi ý phân vùng domain và nhắc các deliverable dễ thiếu. Không nên dùng AI để thay thế việc hiểu feature, chạy SUT, xác nhận actual result, tạo bug evidence, tạo GitHub Issues thật, hoặc quyết định feature đã đạt yêu cầu. Với HW02, AI phù hợp vai trò trợ lý có kiểm soát; sinh viên phải review, thực thi, sửa và chịu trách nhiệm cuối cùng.

## 5. Mandatory Disclosure draft

"The roadmap, report structure, checklist, prompt log, and initial AI Audit entry were generated with assistance from Codex / ChatGPT. I reviewed and will modify the feature selection, testing method, executed results, bug reports, AI gap analysis, Agent Skill, and final report. Actual test execution, screenshots, GitHub Issues, videos, and final judgments are verified by me. The detailed AI Audit Report is attached as Appendix A."

## 6. Chữ ký

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên | Trần Hải Đức |
| MSSV | 23127173 |
| Môn học | CS423 / CSC13003 - Kiểm chứng Phần mềm |
| Giảng viên / Trợ giảng | Dr. Lam Quang Vu; Dr. Tran Duy Hoang; MSc. Tran Thi Bich Hanh; MSc. Truong Phuoc Loc; MSc. Ho Tuan Thanh |
| Ngày | 2026-06-27 |
| Chữ ký | Trần Hải Đức |
