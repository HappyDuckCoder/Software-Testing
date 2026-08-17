# Appendix A — Prompt Log (HW04)

Ghi **nguyên văn** prompt (hoặc paraphrase tối thiểu nếu prompt hệ thống). Chi tiết verdict từng artifact: `doc/md/AI Audit/01_AI-Audit-Report.md`.

| Time (ICT) | Tool | Prompt / Task (nguyên văn hoặc tóm tắt sát nghĩa) | Output artifact |
| --- | --- | --- | --- |
| 2026-08-17 16:44 | Cursor (Composer) | «đọc Lab\HW4\requirement\requirement.pdf — sau đó dịch lại bản tiếng việt vào Lab\HW4\requirement\requirement.md — làm tương tự như Lab\HW3\requirement» | `Lab/HW4/requirement/requirement.md` |
| 2026-08-17 16:48 | Cursor (Composer) | «tôi phải đặt tên bài nộp của mình là gì» | Tên zip `23127173_HW04_AI_Automation_095.zip` (tư vấn) |
| 2026-08-17 16:50 | Cursor (Composer) | «đọc lại requirement và lên plan, soạn checklist, cấu trúc thư mục và tạo các file tương ứng để tôi được 95/100 điểm vào Lab\HW4\23127173_HW04_AI_Automation_095 — bắt chước cách cấu trúc thư mục của HW3 và các tính năng ở HW2 — bổ sung AI audit» | Toàn bộ scaffold `23127173_HW04_AI_Automation_095/`; AI Audit AI-001 |
| 2026-08-17 16:56 | Cursor (Composer) | «ok giờ tôi cần làm gì» | Roadmap hành động (chat) |
| 2026-08-17 16:57 | Cursor (Composer) | «skill đang dùng để làm gì» | Giải thích `playwright-automation-builder` (chat) |
| 2026-08-17 17:08 | Cursor (Composer) | «dựa vào Lab\HW4\23127173_HW04_AI_Automation_095\agent-skills — hãy làm task 1 gồm sinh data và chạy e2e test — cập nhật AI audit» | `automation/data/*.json`, `automation/tests/*.spec.ts`, helpers, config |
| 2026-08-17 17:17 | Cursor (Composer) | «không thấy chạy e2e, bạn đang làm gì» | Sửa `loadTestData.ts`, thử chạy test |
| 2026-08-17 17:21 | Cursor (Composer) | «tôi muốn Muốn nhìn Chromium chạy trực tiếp» | Scripts `test:headed`, `test:feature-*:headed`; `playwright.config.ts` |
| 2026-08-17 17:22 | Cursor (Composer) | «port 5173 đang bị chiếm bởi web khác» | `BASE_URL=http://localhost:5180` |
| 2026-08-17 17:26 | Cursor (Composer) | «dựa vào skill Lab\HW4\23127173_HW04_AI_Automation_095\agent-skills hãy chạy test e2e» | Sửa `auth.ts`; A-AUTO-01 pass; Feature A 3/12 pass (locator profile sai) |
| 2026-08-17 17:28 | Cursor (Composer) | «tôi muốn Muốn nhìn Chromium chạy trực tiếp» (lặp) | Chạy lại headed Feature A (vẫn fail locator) |
| 2026-08-17 ~17:35 | Cursor (Composer) | (Follow-up sau task failed — sửa E2E Feature A) | `profileLocators.ts`, cập nhật `feature-a-profile.spec.ts`; Feature A **12/12 pass** headed |
| 2026-08-17 17:42 | Cursor (Composer) | «cập nhật AI-audit các prompt tôi làm việc với bạn nãy giờ» | AI Audit AI-002…AI-013, prompt log, disclosure |
| 2026-08-17 ~18:00 | Cursor (Composer) | «HW2 featureA test tay sai nhiều — tại sao automation pass» → «so spec không so code, coverage như HW2, chạy lại e2e headed» | Feature A 30 TC spec-oracle; **22/30 pass** headed |
| 2026-08-17 18:10 | Cursor (Composer) | «cập nhật AI-audit — chạy feature B, C — cập nhật AI-audit tiếp» | B: 10P/2 skip; C: 11P/1F; AI-015 |
| 2026-08-17 ~18:25 | Cursor (Composer) | «featureB và featureC sinh lại test case cover spec HW2, cập nhật audit» | B: 22 TC spec-oracle 13P/5F/4 skip; C: 24 TC 18P/6F; AI-016 |
