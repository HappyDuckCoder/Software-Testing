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
| 2026-08-17 ~18:25 | Cursor (Composer) | «featureB và featureC sinh lại test case cover spec HW2» | B: 22 TC; C: 24 TC; AI-016 |
| 2026-08-17 ~18:35 | Cursor (Composer) | «chạy full, cấu trúc lại bài nộp, cập nhật audit» | 9 browser runs; AI-017 |
| 2026-08-17 ~19:05 | Cursor (Composer) | «xem lại ignore» | gitignore webm; AI-018 |
| 2026-08-17 ~19:12 | Cursor (Composer) | «cập nhật audit, dọn dư, move thay vì xóa» | `_archive/` cleanup; AI-019 |
| 2026-08-26 ~20:10 | Cursor (Composer) | «đọc qua Lab\HW4\23127173_HW04_AI_Automation_095 và Lab\HW4\requirement\requirement.pdf để hiểu mình cần làm gì» | Tóm tắt đề + trạng thái bài; AI-020 |
| 2026-08-26 ~20:15 | Cursor (Composer) | «trừ video và github issue, zip thì bổ sung mục còn thiếu — sắp xếp lại thư mục cho chuyên nghiệp theo HW4» | Rà soát cấu trúc; đề xuất reorg; AI-021 |
| 2026-08-26 ~20:17 | Cursor (Composer) | «cập nhật AI audit» | AI Critique, Privacy Checklist, AI-020…022; AI-022 |
| 2026-08-26 ~20:25 | Cursor (Composer) | «đưa minh chứng _archive vào requirement/feature-*/automation — cập nhật AI audit» | Move HTML+media+test-results; AI-023 |
| 2026-08-26 ~20:29 | Cursor (Composer) | «xóa thư mục data trong automation các pool — cập nhật ai-audit» | Xóa 9× html-reports/data; AI-024 |
| 2026-08-26 ~20:40 | Cursor (Composer) | «bổ sung main report, cập nhật ai audit» | Viết lại main-report.md §1–9; AI-025 |
| 2026-08-26 ~20:43 | Cursor (Composer) | «dùng markdown pdf export» | Pandoc PDF main + AI Audit; AI-026 |
| 2026-08-26 ~20:55 | Codex (GPT-5) | «github issue và chụp hình minh chứng lại và bỏ vào thư mục cần thiết; cập nhật AI-audit» | 7 GitHub Issues #8–#14; 7 screenshot; AI-027 |
| 2026-08-26 ~21:00 | Codex (GPT-5) | «cập nhật md doc, main report và các tài liệu liên quan; cập nhật ai audit» | Đồng bộ README, checklist, main report, disclosure, consistency review; AI-028 |
