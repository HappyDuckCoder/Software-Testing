# Mandatory AI Disclosure — HW04

## AI tools used

| AI Tool | Mục đích | Phần việc AI thực hiện | Phần việc sinh viên tự thực hiện |
| --- | --- | --- | --- |
| Cursor (Composer) | Dịch & đọc requirement | Dịch `requirement.pdf` → `requirement.md` (Lab/HW4). | Đối chiếu bản dịch với PDF gốc. |
| Cursor (Composer) | Khởi tạo khung HW04 | Cấu trúc thư mục, roadmap, checklist, template báo cáo, khung Playwright, map feature HW2, Agent Skill skeleton. | Review cấu trúc, điền nội dung báo cáo và evidence thật. |
| Cursor (Composer) | Task 1 — data & automation | Sinh/sửa JSON + spec A (30 TC), B (22 TC), C (24 TC) spec-oracle HW2; chạy headed Chromium: A 22/30, B 13+5F+4 skip, C 18/24. | Review fail/skip; multi-browser; copy report evidence. |
| Cursor (Composer) | AI Audit & prompt log | Ghi AI-001…AI-016, appendix prompt log, cập nhật disclosure. | Xác nhận prompt/kết quả; bổ sung phiên AI sau này. |

## Tuyên bố giới hạn

AI không được dùng để làm giả:

- HTML reports (phải có `Run by: 23127173` và timestamp ISO từ lần chạy thật).
- Video demo (giọng thuyết minh của sinh viên; face-cam hoặc `whoami`/`hostname`).
- Pass/Fail, screenshot bug, hoặc số liệu test summary nếu chưa chạy SUT.

**Trạng thái hiện tại (17/08/2026):** Feature A/B/C đã chạy headed Chromium thật (spec oracle HW2). Tổng: A 22P/8F, B 13P/5F/4 skip, C 18P/6F. Fail/skip gắn bug HW2 hoặc empty state cần DB sạch — không được ghi “all pass” trong báo cáo.
