**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**

# Khai báo sử dụng AI — HW06

## 1. Thông tin

| Mục | Giá trị |
| --- | --- |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Bài tập | HW06-AI — Kiểm thử API EShop |
| Ngày | 03/09/2026 |
| Sinh viên | Trần Hải Đức — MSSV 23127173 |

**Tuyên bố:** *I use AI tools for the following tasks.*

## 2. Công cụ AI

| Công cụ | Việc AI làm | Việc sinh viên làm |
| --- | --- | --- |
| Codex (GPT-5) | Khung nộp, chọn API, collection/Newman/CI, skill, evidence 01/09 | Chạy SUT, cung cấp ảnh Postman/CI, xác nhận bug |
| Cursor (Composer 2.5) | Audit/disclosure FIT; ma trận 120 TC; oracle spec; script Excel; cập nhật báo cáo/PDF 03/09 | Duyệt 105 TC AI; 15 TC bổ sung; chụp Postman Desktop/Console; flowchart tự vẽ; ZIP nộp |

## 3. Prompt chính (đầy đủ ở `appendixA-prompt-log.md`)

1. Dịch đề, dựng khung HW6, chạy Newman/CI (Codex, 01/09).
2. Rà tiến độ, bổ sung AI Audit/Mandatory (Composer 2.5, 03/09 sáng).
3. Oracle spec, redesign 120 TC, Newman 12 fail (Composer 2.5, 03/09).
4. Postman Desktop 6 ảnh + Console `X-Student-Id` (Composer 2.5, 03/09 chiều).
5. Excel test summary + PDF + flowchart (Composer 2.5, 03/09).
6. Review toàn bộ doc + đồng bộ audit (Composer 2.5, 03/09).
7. Bổ sung báo cáo §6/§14: Postman features, self-assessment, link GitHub (Composer 2.5, 03/09).

## 4. Phần việc cụ thể

**AI đã hỗ trợ:** dịch requirement; 105 TC AI/pool; map oracle theo `api_specification.md` + README FR/SEC; collection có `X-Student-Id`; Newman full run; script `generate-excel-summary.mjs`; rà soát/tái cấu trúc tài liệu.

**Sinh viên tự làm / quyết định:** duyệt toàn bộ TC AI; 15 TC bổ sung; chụp Postman Desktop/Console; flowchart `hw6-api-testing-workflow.png`; xuất PDF bằng extension Markdown PDF; đóng ZIP.

**AI không làm:** ảnh Postman/CI gốc, GitHub Issue, flowchart tự vẽ, ZIP nộp Moodle.

## 5. Cách xác minh

- Oracle lấy từ đặc tả, **không** suy từ `server.js`.
- Newman final: **182 req / 182 assert / 12 fail** — khớp Excel `108 PASS / 12 FAIL`.
- Chỉ ghi Issue khi SV tạo trên GitHub thật.

## 6. Tuyên bố giới hạn

Không dùng AI tạo: ảnh console `X-Student-Id` giả, Newman output giả, flowchart AI-generated, Issue/screenshot bịa.

## 7. Trạng thái (03/09/2026)

| Hạng mục | Trạng thái |
| --- | --- |
| 120 TC + oracle spec + assert từng ID | ✅ |
| Newman / Postman evidence | ✅ |
| Excel test summary | ✅ `test-cases/23127173_HW06_test-summary-20260903.xlsx` |
| PDF (main + audit + critique) | ✅ `doc/pdf/` |
| Flowchart workflow (tự vẽ) | ✅ `doc/pdf/hw6-api-testing-workflow.png` |
| Git commit log | ✅ `doc/md/Git Commit Log/git-commit-log.txt` |
| CI remote pass (03/09) | ✅ [run #8](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307) · `ci-pass-01`…`03` |
| CI remote fail (03/09) | ✅ [run #7](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556) · `ci-fail-01`…`03` |
| GitHub Issues | ⏳ |
| ZIP nộp Moodle | SV tự đóng (không bắt buộc tiêu chí) |

## 8. Mandatory Disclosure (dán nguyên văn)

"Khung nộp bài, ma trận 120 test case, collection Postman/Newman, báo cáo và tài liệu audit được sinh với Codex (GPT-5) và Cursor (Composer 2.5); tôi đã duyệt toàn bộ 105 test case AI, tự bổ sung 15 test case sinh viên, thiết kế oracle theo đặc tả EShop (không theo code), cung cấp ảnh Postman Desktop/Console/CI gốc, Excel test summary (108 PASS / 12 FAIL), PDF báo cáo và flowchart workflow tự vẽ; sáu nhóm bug spec đã tái lập trên Newman (182 req / 12 fail); CI remote pass (#8) và fail (#7) đã chụp. GitHub Issues chưa xong. ZIP do tôi tự đóng gói. AI Audit Report đính kèm. Tôi cam đoan không dùng AI tạo artifact bị cấm."

## 9. Cam đoan

| Mục | Giá trị |
| --- | --- |
| Họ tên | TRẦN HẢI ĐỨC |
| MSSV | 23127173 |
| Ngày | 03/09/2026 |
| Chữ ký | Trần Hải Đức |
