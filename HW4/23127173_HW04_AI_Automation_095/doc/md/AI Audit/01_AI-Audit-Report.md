# AI Audit Report — HW04

## Khai báo

AI hỗ trợ tạo cấu trúc thư mục, roadmap, checklist, template Markdown, khung Playwright và đề xuất map test case từ HW02. AI **không** chạy EShop, **không** tạo HTML report thật, **không** quay video demo và **không** ghi Pass/Fail từ execution thật.

| ID | Ngày giờ | Công cụ AI | Prompt / yêu cầu | Output AI | Verdict | Rà soát / chỉnh sửa của sinh viên |
| --- | --- | --- | --- | --- | --- | --- |
| AI-001 | 17/08/2026 (UTC+7) | Cursor (Composer) | Đọc requirement HW04; lên plan, checklist, cấu trúc thư mục và file tương ứng mục tiêu 95/100 tại `Lab/HW4/23127173_HW04_AI_Automation_095`; bắt chước HW3 và feature HW2 (FR-04, FR-11, FR-18); bổ sung AI audit. | Cây thư mục, `README.md`, `roadmap.md`, `checklist.md`, khung `doc/md/*`, `requirement/feature-A|B|C/*`, khung `automation/` Playwright, `agent-skills/playwright-automation-builder`, entry audit này. | INCOMPLETE | Sinh viên phải chạy SUT, hoàn thiện script, sinh HTML report, quay video, push GitHub ≥ 8 commit test, điền kết quả thật và export PDF trước khi nộp. |

## Quy tắc cập nhật

Mỗi lần dùng AI sau này phải thêm một dòng: ngày giờ, prompt đầy đủ, output, verdict (VALID / INVALID / INCOMPLETE), lý do và phần sinh viên đã kiểm chứng/sửa.

## Mẫu hàng audit (tham khảo FIT template)

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do | (5) Bản SV sửa |
| --- | --- | --- | --- | --- |
| _Ví dụ: Tool: Cursor. Prompt: "Sinh skeleton Playwright data-driven cho FR-04 từ 12 test case HW2..."_ | _Skeleton spec + JSON_ | INCOMPLETE | AI chưa biết selector thật trên SUT đang chạy | _Sửa selector `#phone`, thêm wait networkidle_ |

## Thông tin sinh viên (điền khi nộp)

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Mã bài tập | HW04-AI |
| Có dùng AI | [x] Có  [ ] Không |
