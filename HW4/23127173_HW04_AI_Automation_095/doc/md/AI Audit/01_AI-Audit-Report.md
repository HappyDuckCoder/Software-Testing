# AI Audit Report — HW04

## Khai báo

AI hỗ trợ dịch requirement, tạo cấu trúc thư mục, khung Playwright, sinh/sửa spec E2E (A/B/C: **30/22/24 TC** spec-oracle theo HW2), chạy headed Chromium trên SUT local. AI **chưa** chạy firefox/webkit, **chưa** quay video demo và **chưa** copy HTML report vào `evidence/html-reports/`.

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
| AI-016 | ~18:25 17/08/2026 (UTC+7) | Cursor (Composer) | «featureB và featureC bạn cũng phải sinh lại các test case để cover theo spec chứ, tham khảo HW2, cập nhật audit» | Mở rộng `feature-b-order-history.json` **22 TC** (B-DT-01…14 + B-BVA-01…08), `feature-c-admin-orders.json` **24 TC** (C-DT-01…16 + C-BVA-01…08); thêm `helpers/orderSpec.ts`, mở rộng `api.ts` (`seedOrderFixtures`); viết lại spec B/C **oracle README/spec**; chạy headed: B **13 pass / 5 fail / 4 skip**; C **18 pass / 6 fail**; cập nhật gap analysis B/C và audit. | VALID — PARTIAL | Fail khớp bug HW2 (B: shipping cancel, order leak; C: admin role, canceled→delivered, XSS, terminal UI). Skip B = empty/returned không seed được. |

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

## Tóm tắt execution thật (tính đến AI-016)

| Phạm vi | Kết quả | Ghi chú |
| --- | --- | --- |
| Feature A — Chromium headed (spec oracle) | 22/30 Pass, 8 Fail | BUG-A-01 UI phone + BUG-A-02 role |
| Feature B — Chromium headed (spec oracle) | 13/22 Pass, 5 Fail, 4 Skip | Fail: B-DT-09/11/13 (shipping cancel, order leak BUG-B-01); Skip: empty state + returned |
| Feature C — Chromium headed (spec oracle) | 18/24 Pass, 6 Fail | Fail: C-DT-04/12/15/16 (BUG-C-01 role, BUG-C-02 transition, BUG-C-03 XSS) |
| Multi-browser (firefox/webkit) | Chưa chạy | Cần `npx playwright install` nếu thiếu |
| HTML report | `automation/reports/html/` | Chưa copy sang `evidence/html-reports/` |
