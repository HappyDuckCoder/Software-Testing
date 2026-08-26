# Mandatory AI Disclosure — HW04

## AI tools used

| AI Tool | Mục đích | Phần việc AI thực hiện | Phần việc sinh viên tự thực hiện |
| --- | --- | --- | --- |
| Cursor (Composer) | Dịch & đọc requirement | Dịch `requirement.pdf` → `requirement.md` (Lab/HW4). | Đối chiếu bản dịch với PDF gốc trên Moodle. |
| Cursor (Composer) | Khởi tạo khung HW04 | Cấu trúc thư mục, roadmap, checklist, template báo cáo, khung Playwright, map feature HW2, Agent Skill skeleton. | Review cấu trúc, điền nội dung báo cáo và evidence thật. |
| Cursor (Composer) | Task 1 — data & automation | 76 TC spec-oracle; **9 browser runs**; evidence copy; `execution-summary.json`; sửa locator/oracle sau review. | Review fail; chạy SUT; xác nhận bug khớp HW2. |
| Cursor (Composer) / Codex (GPT-5) | AI Audit & prompt log | Ghi AI-001…AI-028, appendix, disclosure, AI Critique, privacy checklist và trạng thái GitHub Issues. | Xác nhận prompt/kết quả; quay video; push source automation. |
| Cursor (Composer) | Rà soát nộp bài (26/08/2026) | Tóm tắt deliverables; hoàn thiện AI Critique; sửa docs stale. | Quyết định reorg; export PDF; nộp zip. |
| Cursor (Composer) | Relocate archive evidence (26/08/2026) | Move minh chứng `_archive` → `requirement/feature-*/automation/`; screenshot bug. | Xác nhận path trong báo cáo nộp. |
| Cursor (Composer) | Dọn media trùng (26/08/2026) | Xóa `html-reports/*/data/` trong feature automation pools (334 file); giữ index.html + summary JSON. | Attachment đầy đủ: `evidence/html-reports/*/data/`. |
| Cursor (Composer) | Bổ sung main report (26/08/2026) | Viết lại `main-report.md` §1–9: phương pháp, bug summary, evidence, tự đánh giá; AI-025. | Export PDF; điền URL GitHub/video sau. |
| Codex (GPT-5) + GitHub UI | GitHub Issues & đồng bộ tài liệu (26/08/2026) | Tạo 7 issue public #8–#14, chụp 7 ảnh xác nhận, cập nhật bug report, README, checklist, main report, consistency review và AI audit. | Xác nhận trước hành động tạo issue; kiểm tra URL/screenshot; còn push source automation, video và zip. |

## Tuyên bố giới hạn

AI không được dùng để làm giả:

- HTML reports (phải có `Run by: 23127173` và timestamp ISO từ lần chạy thật — 17/08/2026).
- Video demo (giọng thuyết minh của sinh viên; face-cam hoặc `whoami`/`hostname`).
- Pass/Fail, screenshot bug, hoặc số liệu test summary nếu chưa chạy SUT.

**Trạng thái hiện tại (26/08/2026):** 9 browser runs hoàn tất (158P/53F/12S/5T). Fail = bug SUT theo spec oracle. AI Critique, Privacy Checklist và 7 GitHub Issues (#8–#14) đã hoàn thiện. Còn video, bằng chứng push/commit source automation, tái export PDF nếu chốt bản MD mới và zip nộp.
