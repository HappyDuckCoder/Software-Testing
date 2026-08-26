# AI Audit Report — HW04

## Khai báo

AI hỗ trợ dịch requirement, tạo cấu trúc thư mục, khung Playwright, sinh/sửa spec E2E (**76 TC** spec-oracle), chạy **9 browser runs** headed/headless trên SUT local. AI **chưa** quay video demo và **chưa** export PDF.

| ID | Ngày giờ | Công cụ AI | Prompt / yêu cầu | Output AI | Verdict | Rà soát / chỉnh sửa của sinh viên |
| --- | --- | --- | --- | --- | --- | --- |
| AI-001 | 16:50 17/08/2026 (UTC+7) | Cursor (Composer) | «đọc lại requirement và lên plan, soạn checklist, cấu trúc thư mục và tạo các file tương ứng để tôi được 95/100 điểm vào Lab\HW4\23127173_HW04_AI_Automation_095 — bắt chước cách cấu trúc thư mục của HW3 và các tính năng ở HW2 — bổ sung AI audit» | Cây thư mục, `README.md`, `roadmap.md`, `checklist.md`, khung `doc/md/*`, `requirement/feature-A\|B\|C/*`, khung `automation/` Playwright, `agent-skills/playwright-automation-builder`, entry audit ban đầu. | INCOMPLETE | Khung đúng hướng; sinh viên phải điền báo cáo, chạy SUT, hoàn thiện execution và nộp zip/PDF/video. |
| AI-002 | 16:44 17/08/2026 (UTC+7) | Cursor (Composer) | «đọc Lab\HW4\requirement\requirement.pdf — sau đó dịch lại bản tiếng việt vào Lab\HW4\requirement\requirement.md — làm tương tự như Lab\HW3\requirement» | `Lab/HW4/requirement/requirement.md` (17 mục, format tương tự HW3). | VALID | Sinh viên đối chiếu với PDF gốc trước khi dùng làm tài liệu chính thức. |
| AI-003 | 16:48 17/08/2026 (UTC+7) | Cursor (Composer) | «tôi phải đặt tên bài nộp của mình là gì» | Đề xuất tên zip: `23127173_HW04_AI_Automation_095.zip` theo MSSV + mã bài + mục tiêu điểm. | VALID | Sinh viên xác nhận MSSV 23127173 trước khi nộp. |
| AI-004 | 16:56 17/08/2026 (UTC+7) | Cursor (Composer) | «ok giờ tôi cần làm gì» | Hướng dẫn từng bước: khởi động EShop, cài dependency Playwright, chạy Task 1 theo skill, cập nhật báo cáo/audit, GitHub commit, video. | VALID | Chỉ là kế hoạch; thực thi do sinh viên/phiên sau. |
| AI-005 | 16:57 17/08/2026 (UTC+7) | Cursor (Composer) | «skill đang dùng để làm gì» | Giải thích `agent-skills/playwright-automation-builder`: quy trình sinh JSON data, spec Playwright, chạy 3 browser, gap analysis, evidence. | VALID | Không tạo artefact mới; làm rõ vai trò skill trước Task 1. |
| AI-006 | 17:08 17/08/2026 (UTC+7) | Cursor (Composer) | «dựa vào Lab\HW4\23127173_HW04_AI_Automation_095\agent-skills — hãy làm task 1 gồm sinh data và chạy e2e test — cập nhật AI audit» | Sinh 3 file data JSON (12 TC/feature), 3 spec Playwright, helpers (`auth`, `api`, `dialogs`, `loadTestData`), cấu hình `playwright.config.ts`, `.env.example`; bắt đầu chạy E2E (bị gián đoạn). | INCOMPLETE | Data/spec là khung có map HW2; selector ban đầu dùng `getByLabel` chưa khớp DOM EShop thật. |
| AI-007 | 17:17 17/08/2026 (UTC+7) | Cursor (Composer) | «không thấy chạy e2e, bạn đang làm gì» | Tiếp tục khởi động backend/frontend, `npm install`, sửa `loadTestData.ts` (khôi phục hàm bị xóa nhầm), thử chạy test đơn lẻ. | INCOMPLETE | Sinh viên cần giữ SUT chạy ổn định; AI không ghi Pass/Fail đầy đủ trong lượt này. |
| AI-008 | 17:21 17/08/2026 (UTC+7) | Cursor (Composer) | «tôi muốn Muốn nhìn Chromium chạy trực tiếp» | Thêm script `test:headed`, `test:feature-a:headed`, v.v.; cấu hình `slowMo` khi headed trong `playwright.config.ts`. | VALID | Headed chỉ hiển thị browser; kết quả vẫn phải lấy từ execution thật. |
| AI-009 | 17:22 17/08/2026 (UTC+7) | Cursor (Composer) | «port 5173 đang bị chiếm bởi web khác» | Đổi `BASE_URL` sang `http://localhost:5180` trong `.env`, `.env.example`, README/script liên quan; hướng dẫn Vite `--port 5180`. | VALID | Sinh viên xác nhận frontend EShop thực sự lắng nghe 5180 trước mỗi lần chạy. |
| AI-010 | 17:26 17/08/2026 (UTC+7) | Cursor (Composer) | «dựa vào skill Lab\HW4\23127173_HW04_AI_Automation_095\agent-skills hãy chạy test e2e» | Khởi động SUT, sửa login selector (`Login.jsx` không có `htmlFor`), chạy `A-AUTO-01` headed **Pass**; chạy full Feature A headed: **3 pass / 9 fail** (timeout `getByLabel` trên Profile). | INVALID — SELECTORS | Fail do giả định label ARIA; cần inspect `Profile.jsx` và sửa locator. |
| AI-011 | 17:28 17/08/2026 (UTC+7) | Cursor (Composer) | «tôi muốn Muốn nhìn Chromium chạy trực tiếp» (lần 2) | Chạy lại Feature A headed trong phiên tiếp theo; xác nhận headed hoạt động nhưng vẫn fail do locator profile. | INCOMPLETE | Không coi là pass; chỉ xác nhận cơ chế headed. |
| AI-012 | ~17:35 17/08/2026 (UTC+7) | Cursor (Composer) | (Tiếp nối phiên E2E sau thông báo task failed — sửa selector và assertion theo SUT thật) | Tạo `helpers/profileLocators.ts`; cập nhật `feature-a-profile.spec.ts` dùng locator label+input; sửa `A-AUTO-12` ghi nhận bug leo quyền HW2 + reset role; chạy `npm run test:feature-a:headed`: **12/12 pass** (~14s, Chromium headed). HTML report tại `automation/reports/html/`. | VALID — PARTIAL | Chỉ Feature A / Chromium; B/C và firefox/webkit chưa chạy. Sinh viên review assertion bug A-AUTO-12 và copy report vào evidence. |
| AI-013 | 17:42 17/08/2026 (UTC+7) | Cursor (Composer) | «cập nhật AI-audit các prompt tôi làm việc với bạn nãy giờ» | Cập nhật `01_AI-Audit-Report.md` (AI-001…AI-013), `appendixA-prompt-log.md`, `03_Mandatory-Disclosure.md`, checklist privacy. | VALID — DOCUMENT REVIEW | Không tạo dữ liệu test mới; ghi lại lịch sử prompt/output thật từ phiên Cursor. |
| AI-014 | ~18:00 17/08/2026 (UTC+7) | Cursor (Composer) | «trong HW2 featureA test tay sai nhiều — tại sao automation pass hết» → «so với spec không so code, sinh lại test coverage như HW2, sửa code, chạy lại full e2e headed» | Mở rộng `feature-a-profile.json` **30 TC** (A-DT-01…18 + A-BVA-01…12); thêm `helpers/profileSpec.ts`; viết lại spec **oracle README/spec**; chạy headed: **22 pass / 8 fail** (~1.3 phút); cập nhật `ai-gap-analysis.md`. | VALID — PARTIAL | 8 fail khớp BUG-A-01/A-02 HW2. |
| AI-015 | 18:10 17/08/2026 (UTC+7) | Cursor (Composer) | «cập nhật AI-audit — sau đó chạy feature B, C — cập nhật AI-audit tiếp» | Cập nhật audit AI-014; sửa `feature-b-order-history.spec.ts`, `feature-c-admin-orders.spec.ts`, `helpers/orderLocators.ts`, `api.ts`; chạy headed Feature B **10 pass / 2 skip**; Feature C **11 pass / 1 fail** (C-AUTO-08 = bug HW2 C-DT-12). | VALID — PARTIAL | 2 skip B do user đã có đơn (empty state); 1 fail C là bug canceled→delivered. **Superseded** bởi AI-016 (full HW2 coverage). |
| AI-016 | ~18:25 17/08/2026 (UTC+7) | Cursor (Composer) | «featureB và featureC sinh lại test case cover spec HW2, cập nhật audit» | B: 22 TC, C: 24 TC spec-oracle; chạy headed B 13P/5F/4S, C 18P/6F; gap analysis B/C. | VALID — PARTIAL | Fail khớp bug HW2. |
| AI-017 | ~18:35 17/08/2026 (UTC+7) | Cursor (Composer) | «có chạy full với cấu trúc lại bài nộp cho chuyên nghiệp, cập nhật audit» | Script `run-full-matrix.mjs`; **9 browser runs**; evidence + execution-summary; checklist/execution-matrix. **158P/53F/12S/5T**. | VALID | Còn video, PDF, GitHub. |
| AI-018 | ~19:05 17/08/2026 (UTC+7) | Cursor (Composer) | «xem lại ignore» → staged 359 file gồm 227 `.webm` | Sửa `Lab/.gitignore` + submission `.gitignore`; strip webm khỏi git; sửa dialog XSS C-AUTO-15; giải thích `reports/html` = run cuối. | VALID | Unstage media; không commit video. |
| AI-019 | ~19:12 17/08/2026 (UTC+7) | Cursor (Composer) | «cập nhật audit — dọn file/thư mục dư — move thay vì xóa» | **Move** (không xóa) → `_archive/2026-08-17-cleanup/`: `reports/runs`, `reports/html`, `test-results`, `summary.json`, 276 webm/png; cập nhật README, pack-submission, reports/README; `_archive/` gitignore. | VALID | Bản nộp gọn: `evidence/html-reports/` + JSON summaries. |
| AI-020 | ~20:10 26/08/2026 (UTC+7) | Cursor (Composer) | «đọc qua Lab\HW4\23127173_HW04_AI_Automation_095 và Lab\HW4\requirement\requirement.pdf để hiểu mình cần làm gì» | Tóm tắt đề HW04, trạng thái bài làm (76 TC, 9 runs ✅; thiếu video/PDF/GitHub/AI Critique); map feature FR-04/11/18; checklist còn thiếu. Không tìm thấy `requirement.pdf` — dùng `Lab/HW4/requirement/requirement.md`. | VALID — DOCUMENT REVIEW | Sinh viên xác nhận đối chiếu với PDF gốc trên Moodle nếu khác bản `.md`. |
| AI-021 | ~20:15 26/08/2026 (UTC+7) | Cursor (Composer) | «trừ video và github issue, zip thì hãy bổ sung các mục còn thiếu — cách chia thư mục quá rối — sắp xếp lại cho chuyên nghiệp theo requirement HW4» | Rà soát cấu trúc: `_archive/` (artefact dư, không zip), `requirement/feature-*/automation/` (README placeholder trùng `automation/`), `roadmap.md` (scaffold). Đề xuất gom deliverables theo đề: `doc/`, `evidence/`, `automation/`, `features/` hoặc giữ `requirement/feature-*` cho gap/bug. | INCOMPLETE | Reorg chưa merge — sinh viên quyết định trước khi đổi path tham chiếu trong báo cáo. |
| AI-022 | ~20:17 26/08/2026 (UTC+7) | Cursor (Composer) | «cập nhật AI audit» | Hoàn thiện `02_AI-Critique.md` (200–300 từ); cập nhật `03_Mandatory-Disclosure.md`, `04_AI-Privacy-Checklist.md`, `appendixA-prompt-log.md`; thêm AI-020…AI-022; đồng bộ `checklist.md` mục AI compliance. | VALID — DOCUMENT REVIEW | Không sinh số liệu test mới; critique dựa trên gap analysis và execution 17/08/2026. |
| AI-023 | ~20:25 26/08/2026 (UTC+7) | Cursor (Composer) | «đưa minh chứng `_archive` vào `requirement/feature-*/automation` — cập nhật AI audit» | **Move** 9 HTML report folders (+ media .webm/.png) → `requirement/feature-{A,B,C}/automation/html-reports/`; 24 WebKit test-results → `feature-C/automation/test-results/`; copy `summary-*.json`; copy fail PNG → `bug-report/screenshots/`; xóa duplicate `html-report-media/`; cập nhật README feature automation + `_archive/README.md`. | VALID | Bản nộp nhẹ vẫn dùng `evidence/html-reports/`; minh chứng đầy đủ per-feature trong `requirement/`. |
| AI-024 | ~20:29 26/08/2026 (UTC+7) | Cursor (Composer) | «trong các thư mục automation trong các pool, xóa thư mục data — cập nhật ai-audit» | **Xóa** 9 thư mục `html-reports/*/data/` (334 file .webm/.png/.md) trong `requirement/feature-{A,B,C}/automation/`; giữ `index.html` + `summary/` + screenshot đã copy; cập nhật README automation + audit. | VALID | Giảm dung lượng; attachment đầy đủ vẫn ở `evidence/html-reports/*/data/` và `feature-C/test-results/`. |

## Quy tắc cập nhật

Mỗi lần dùng AI sau này phải thêm một dòng: ngày giờ, prompt đầy đủ, output, verdict (VALID / INVALID / INCOMPLETE), lý do và phần sinh viên đã kiểm chứng/sửa.

## Mẫu hàng audit (tham khảo FIT template)

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do | (5) Bản SV sửa |
| --- | --- | --- | --- | --- |
| _Ví dụ: Tool: Cursor. Prompt: "Sinh skeleton Playwright data-driven cho FR-04 từ 12 test case HW2..."_ | _Skeleton spec + JSON_ | INCOMPLETE | AI chưa biết selector thật trên SUT đang chạy | _Sửa locator profile qua `profileLocators.ts`_ |

## Thông tin sinh viên (điền khi nộp)

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Mã bài tập | HW04-AI |
| Có dùng AI | [x] Có  [ ] Không |

## Tóm tắt execution thật (tính đến AI-024)

| Phạm vi | Kết quả | Ghi chú |
| --- | --- | --- |
| Feature A — 3 browsers (30 TC) | 22P / 8F mỗi browser | BUG-A-01/A-02 |
| Feature B — 3 browsers (22 TC) | 13–14P / 4–5F / 4S | BUG-B-01/02; skip empty |
| Feature C — 3 browsers (24 TC) | 15–18P / 4–6F / 0–5T | BUG-C-01/02/03 |
| **Tổng 9 runs** | **158P / 53F / 12S / 5T** | `evidence/execution-summary.json` |
| HTML reports (nộp) | 9 folders | `evidence/html-reports/` (index.html + data/*.md) |
| Archive (local) | `_archive/2026-08-17-cleanup/` | Chỉ còn html-last + summary-last — media đã move |
| Per-feature evidence | `requirement/feature-*/automation/` | index.html + summary; media ở `evidence/` + bug screenshots |
| AI Critique | ✅ Hoàn thiện | `02_AI-Critique.md` — phiên 26/08/2026 |
| Privacy Checklist | ✅ Đã tick thực tế | `04_AI-Privacy-Checklist.md` |
| Video / PDF / GitHub Issues / Zip | Chưa hoàn tất | Ngoài phạm vi phiên 26/08/2026 |
