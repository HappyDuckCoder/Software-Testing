**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Biểu mẫu Khai báo Sử dụng AI — HW06

*Đính kèm cho bài tập có dùng AI. Chi tiết từng tương tác nằm ở `01_AI-Audit-Report.md` và `../appendixA-prompt-log.md`.*

## 1. Thông tin môn học và sinh viên

| Mục | Giá trị |
| --- | --- |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Mã bài tập | HW06-AI |
| Tên bài tập | Kiểm thử API trên EShop |
| Cấp độ AI | Cấp 5 (AI-first; Bloom-AI G9.2–G9.5; chính sách mở) |
| Ngày | 03/09/2026 |
| Họ tên sinh viên | Trần Hải Đức |
| MSSV | 23127173 |

**Tuyên bố theo đề §9:** *I use AI tools for the following tasks.*

## 2. Câu hỏi khai báo

### 1. Công cụ AI đã dùng

Codex (GPT-5) — dịch đề, khung nộp, chọn API, Agent Skill, collection/Newman/CI, rà soát evidence 01/09/2026.

Cursor (Grok 4.6) — 03/09/2026: đối chiếu requirement với artefact, viết lại AI Audit theo mẫu FIT, điền Mandatory Disclosure và Privacy Checklist.

Không dùng ChatGPT web, Gemini, Copilot, Promptfoo, DeepEval hay ImageGen cho evidence thực thi.

### 2. Giai đoạn nào của bài tập có dùng AI

[x] brainstorm  [x] outline  [x] viết nháp  [x] phản hồi  [x] sửa chữa  [x] code  [ ] phân tích dữ liệu hiệu năng  [x] thiết kế đồ hoạ (chỉ SVG tham chiếu workflow; **không** vẽ sơ đồ generator nộp bài)  [x] khác: rà soát evidence do sinh viên chụp; sinh ma trận/observation draft.

Không dùng AI cho: chụp Postman Desktop, chụp GitHub Actions, tạo GitHub Issue, vẽ diagram nộp bài, xuất PDF/ZIP cuối.

### 3. Prompt / nhiệm vụ chính (2–3 prompt; đầy đủ ở Phụ lục A)

1. «đọc `Lab/HW6/requirement/requirement.pdf`, dịch sang Markdown; tạo khung nộp bài, roadmap, checklist, cập nhật audit và commit»
2. «Hoàn thành HW6: chạy EShop, tạo/running Postman-Newman suite, CI, docs và evidence»
3. «xem Lab\HW6 / xem Lab\HW6\requirement\requirement.pdf / xem tôi làm đến đâu rồi, xem tôi còn thiếu những bước gì / bổ sung ai audit, ai mantory»

Lưu ý: `requirement.pdf` không có trong workspace; đối chiếu dùng `Lab/HW6/requirement/requirement.md`.

### 4. Phần cụ thể AI đóng góp

AI đã: dịch requirement; dựng khung ZIP; chọn 3 API không trùng Vân; viết skill/pseudocode; tạo collection có pre-request `X-Student-Id: 23127173`; chạy Newman local; soạn CI workflow; đổi tên/rà soát ảnh SV; draft ma trận 40 TC/API và observation 120.

Sinh viên đã: xác nhận scope; chạy/cung cấp 5 ảnh Postman Desktop; cung cấp 5 ảnh GitHub Actions; giữ nguyên raw/HTML Newman.

AI **không** đóng góp: GitHub Issues thật, Excel workbook cuối, diagram generator tự vẽ, remote CI fail, PDF/ZIP, cột `Student Verify`.

### 5. Cách rà soát / chỉnh sửa / xác minh

- Đối chiếu endpoint với `Eshop/api_specification.md` và SUT `127.0.0.1:3000`.
- Baseline/compliance Newman: raw log + HTML; header `X-Student-Id` trên mọi request.
- Ảnh Postman/CI: chỉ nhận file gốc SV lưu vào `evidence/`; không dựng lại ảnh chat.
- Compliance: 3 fail = 3 bug local; chưa mở Issue khi chưa được ủy quyền.
- Ma trận 120 dòng: gắn `INCOMPLETE` ở mức coverage vì rationale khuôn mẫu và observation chỉ assert non-5xx.
- Redact JWT trên ảnh headers nếu lộ token.

### 6. Trích dẫn (IEEE)

Codex. (2026). *Codex (GPT-5)* [Large language model]. OpenAI / Cursor.

Cursor. (2026). *Grok 4.6* [Large language model]. SpaceXAI / Cursor.

Anthropic. (2025). *Building reliable AI test agents*.

ISTQB. *Foundation Level Syllabus* (latest version).

Hardman, P. (2025). *A Post-AI Learning Taxonomy*.

## 3. Công cụ và phần việc

| Công cụ | Mục đích | Phần việc AI thực hiện | Phần sinh viên phải thực hiện/xác minh |
| --- | --- | --- | --- |
| Codex (GPT-5) | Thiết kế, automation có kiểm soát, review evidence | Dịch đề; khung nộp; chọn API; skill; collection/Newman/CI; audit 01/09 | Chạy SUT; cung cấp ảnh Postman/CI; ủy quyền Issue; audit từng TC; Excel; diagram; PDF/ZIP |
| Cursor (Grok 4.6) | Audit/disclosure theo mẫu FIT | Viết lại Audit, Mandatory Disclosure, Privacy Checklist, prompt log (03/09) | Đọc và ký khai báo; đối chiếu PDF Moodle; không coi đây là hoàn tất bài |

## 4. Tuyên bố giới hạn (đề §11)

AI không được dùng để tạo hoặc làm giả:

- Ảnh console pre-request mang `X-Student-Id: 23127173`
- Output Newman có hostname không khớp lần chạy thật (`127.0.0.1` / `localhost` được chấp nhận khi đúng lần chạy)
- Sơ đồ test-generator nộp bài (phải tự vẽ)
- GitHub Issues, screenshot Issue, Excel kết quả, PDF/ZIP nếu chưa phát sinh từ thao tác thật

## 5. Đoạn Mandatory Disclosure (dán nguyên văn)

"Khung nộp bài, roadmap/checklist, lựa chọn API, Agent Skill, collection Postman/Newman, ma trận test/CSV, báo cáo chính và các bản rà soát tài liệu được sinh phiên bản đầu bởi Codex (GPT-5) và Cursor (Grok 4.6); tôi đã rà soát phạm vi ba API, cung cấp ảnh Postman Desktop và GitHub Actions gốc, xác nhận Newman local/CI baseline và ba defect compliance; tôi bổ sung nhóm test sinh viên A-036–A-040 / B-036–B-040 / C-036–C-040 nhưng chưa xác minh cột Student Verify; sơ đồ generator nộp bài, GitHub Issues, Excel, PDF và ZIP do tôi tự hoàn tất — các mục này hiện chưa xong nên không được tuyên bố đã nộp đủ. AI Audit Report chi tiết đính kèm. Tôi cam đoan không dùng AI để sinh artifact thuộc danh mục bị cấm: ảnh console `X-Student-Id` giả, Newman hostname giả, hay sơ đồ test-generator AI-generated."

## 6. Trạng thái deliverable liên quan AI (03/09/2026)

| Hạng mục | Trạng thái |
| --- | --- |
| AI Audit Report (mẫu 5 mục) | Đã bổ sung đến AI-017 |
| Mandatory Disclosure (biểu mẫu FIT) | Đã điền |
| AI Critique 200–300 từ | Có (`02_AI-Critique.md`) |
| Privacy Checklist | Có (`04_AI-Privacy-Checklist.md`) |
| Prompt log | Có (`appendixA-prompt-log.md`) |
| 3 API A/B/C không trùng Vân | Đã chọn |
| Core Postman + Newman + `X-Student-Id` | Có evidence thật |
| Remote CI baseline pass | Có (run 33500850638) |
| >=35 AI TC đã audit + >=5 SV mỗi API | Draft 40 dòng/API; Student Verify trống; observation ≠ oracle |
| GitHub Issues + screenshot | Chưa |
| Excel test cases / summary | Chưa |
| Remote CI fail có chủ đích | Chưa |
| Diagram generator tự vẽ | Chưa |
| PDF + git log + ZIP | Chưa |

## 7. Cam đoan trung thực

Bằng việc ký tên dưới đây, tôi cam đoan thông tin khai báo là chính xác và đầy đủ. Việc không khai báo hoặc khai báo sai về dùng AI bị coi là vi phạm liêm chính học thuật.

| Mục | Giá trị |
| --- | --- |
| Họ tên sinh viên (in hoa) | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Lớp / Khoá | Chưa điền |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Giảng viên | Chưa điền |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |
