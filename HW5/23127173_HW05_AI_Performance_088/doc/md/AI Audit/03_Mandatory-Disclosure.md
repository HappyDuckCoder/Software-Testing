**Khoa Công nghệ Thông tin (FIT) — Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 — Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Khai báo sử dụng AI — HW05

## 1. Thông tin

| Mục | Giá trị |
| --- | --- |
| Môn học | CS423 / CSC13003 — Kiểm chứng Phần mềm |
| Bài tập | HW05-AI — Kiểm thử hiệu năng EShop |
| Ngày | 03/09/2026 |
| Sinh viên | Trần Hải Đức — MSSV 23127173 |

**Tuyên bố:** *I use AI tools for the following tasks.*

## 2. Công cụ AI

| Công cụ | Việc AI làm | Việc sinh viên làm |
| --- | --- | --- |
| Codex (GPT-5) | Khung nộp, chọn API, JMX/script, chạy JMeter, thu evidence, phân tích JTL, pipeline CI đề xuất (31/08) | Xác nhận chạy thật, kiểm tra JTL/HTML/ảnh, quyết định kết luận |
| Cursor (Composer) | Rà soát HW5, doc tiếng Việt, PDF, CI workflow, minh chứng Actions (03/09) | Duyệt số liệu, chạy workflow, chụp ảnh CI, quay video |

## 3. Prompt chính (chi tiết ở `appendixA-prompt-log.md`)

1. Dịch đề, dựng khung HW5, chọn workflow API (Codex, 31/08).
2. Reset/seed, smoke test, tạo JMX, chạy Load/Stress/Spike/Endurance (Codex, 31/08).
3. Thu ảnh monitor, DXDIAG, CLI/GUI JMeter; đo RAM endurance (Codex, 31/08).
4. Rà soát HW5, sửa doc, xuất PDF, sửa CI Load+Stress+Spike, cập nhật minh chứng Actions (Cursor, 03/09).

## 4. Phần việc cụ thể

**AI đã hỗ trợ:** dịch requirement; thiết kế workflow E2E; sinh/sửa JMX; script reset-seed; chạy JMeter và tạo JTL/HTML; phân tích JTL; đề xuất pipeline; viết báo cáo và audit; xuất PDF.

**Sinh viên tự làm / quyết định:** xác nhận endpoint và dữ liệu test; duyệt kế hoạch JMeter sau khi AI sửa listener; kiểm tra số liệu từ JTL thô; quyết định không báo bug khi không có lỗi thật; quay video tiếng Việt; đóng ZIP Moodle.

**AI không làm:** tạo hoặc làm giả file `.jtl`, báo cáo HTML, ảnh Task Manager/DXDIAG, số liệu RPS/latency, video minh họa, lịch sử Git commit.

## 5. Cách xác minh

- Mọi số liệu hiệu năng lấy từ JTL thô trong `performance/raw-jtl/`.
- Ảnh evidence có timestamp và khớp lần chạy ghi trong audit.
- Không ghi GitHub Issue khi không có defect thật.

## 6. Trạng thái (03/09/2026)

| Hạng mục | Trạng thái |
| --- | --- |
| 3 JMX Load/Stress/Spike + Endurance | ✅ |
| 3+ JTL thô + 3+ HTML report | ✅ |
| Ảnh monitor + DXDIAG + JMeter UI | ✅ |
| Endurance + mẫu RAM 61 điểm | ✅ |
| AI Audit + Critique + Mandatory | ✅ |
| PDF (`doc/pdf/`) | ✅ sau phiên Cursor 03/09 |
| Git commit log | ✅ `doc/md/Git Commit Log/git-commit-log.txt` |
| Video YouTube ≥ 6 phút | ✅ [HW5 video](https://youtu.be/TF93U3aXK9M) do sinh viên xác nhận đã nộp |
| Video demo Agent Skill | Không nộp riêng; Agent Skills tự chấm 2/10 |
| GitHub Issue | Không có bug thật |
| ZIP nộp Moodle | SV tự đóng: `23127173_HW05_AI_Performance_088.zip` |

## 7. Mandatory Disclosure (dán nguyên văn)

"Khung nộp bài, kế hoạch JMeter, script seed/reset, báo cáo hiệu năng và tài liệu audit được sinh với Codex (GPT-5) và Cursor (Composer); tôi đã rà soát JMX sau khi AI sửa listener, xác minh số liệu từ JTL thô, kiểm tra ảnh Task Manager/DXDIAG thật, và không tạo GitHub Issue vì không phát hiện lỗi thật. PDF báo cáo xuất bằng extension Markdown PDF / md-to-pdf. Video minh họa và ZIP do tôi tự hoàn thiện. Tôi cam đoan không dùng AI tạo artefact bị cấm."

## 8. Cam đoan

| Mục | Giá trị |
| --- | --- |
| Họ tên | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |
