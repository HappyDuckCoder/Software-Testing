# Appendix A - Prompt Log

| Time (ICT) | Tool | Prompt / Task | Output artifact |
| --- | --- | --- | --- |
| 2026-06-27 19:29 | Codex / ChatGPT | Lập roadmap HW02 10 điểm, tạo cấu trúc thư mục theo HW1, tạo audit entry đầu tiên. | `roadmap.md`, `README.md`, `checklist.md`, `doc/md/*`, khung `requirement/feature-*`, AI Audit entry. |
| 2026-06-27 19:43 | Codex / ChatGPT | Tìm và thêm Agent Skills vào `agent-skills`, theo chuẩn yêu cầu, cập nhật AI Audit. | 5 skill: `eshop-feature-inspector`, `domain-testing-designer`, `boundary-value-analysis-designer`, `ai-gap-analysis-reviewer`, `github-bug-report-writer`. |
| 2026-07-08 | Codex / ChatGPT | Dùng agent skills sinh test case Feature A - Pool A FR-04 Personal profile management. | Feature A report, Domain Testing, BVA, AI Gap Analysis, Bug Report draft. |
| 2026-07-08 | Codex / ChatGPT | Sửa Feature A để test case bám repo EShop thay vì generic e-commerce. | Feature A source-based test cases theo `README`, API spec, `Profile.jsx`, `server.js`. |
| 2026-07-08 | Codex / ChatGPT | Làm tương tự cho Feature B/C/D: FR-11, FR-18, FR-10; dùng agent skills và cập nhật audit. | Tạo/cập nhật artifacts cho Feature B, C, D. |
| 2026-07-08 | Codex / ChatGPT | Đổi toàn bộ kết quả trong `requirement` sang tiếng Việt có dấu, đối chiếu `HW2-requirement.md`. | Chuẩn hóa tiếng Việt trong Domain Testing, BVA, feature report, bug report, gap analysis. |
| 2026-07-08 | Codex / ChatGPT | Bổ sung cột điều kiện/class thỏa mãn, sửa skill để sinh test case tối ưu hơn. | Cập nhật skill Domain/BVA và các bảng test case A/B/C/D. |
| 2026-07-08 | Codex / ChatGPT | Hoàn thành Feature A report sau khi người dùng sửa Domain Testing/BVA; sửa ngôn ngữ A/B/C/D. | `feature-A-report.md`, cleanup ngôn ngữ Domain/BVA cho A/B/C/D. |
| 2026-07-08 | Codex / ChatGPT | Viết lại bug report A/B/C/D đầy đủ và chính xác hơn bằng tiếng Việt. | `bug-report/bug-report.md` cho A/B/C/D. |
| 2026-07-08 | Codex / ChatGPT | Viết lại AI Gap Analysis Feature A dựa trên lượng test case đã chạy. | `feature-A/ai-gap-analysis/ai-gap-analysis.md`. |
| 2026-07-08 | Codex / ChatGPT | Sau khi Feature B đã test xong, sửa Feature B bug report, feature report, AI gap analysis. | `feature-B-report.md`, `feature-B/bug-report/bug-report.md`, `feature-B/ai-gap-analysis/ai-gap-analysis.md`. |
| 2026-07-08 | Codex / ChatGPT | Đổi `BUG-B-02` thành `WARNING-B-01` vì lỗi thuộc FR-10 chứ không phải FR-11. | Cập nhật Feature B report/bug/gap và AI Audit. |
| 2026-07-08 | Codex / ChatGPT | Cung cấp các lệnh API/CMD để test Feature A/B/C/D trong quá trình chạy SUT. | Command guidance cho các test case A/B/C/D, ghi nhận trong AI Audit. |
| 2026-07-08 | Codex / ChatGPT | Sau khi Feature C đã test xong, viết lại Feature C report, bug report, AI gap analysis. | `feature-C-report.md`, `feature-C/bug-report/bug-report.md`, `feature-C/ai-gap-analysis/ai-gap-analysis.md`. |
| 2026-07-08 | Codex / ChatGPT | Review lại Feature D-mobile Domain Testing/BVA cho dễ hiểu hơn, một số test đã chạy. | Viết lại `feature-D-mobile/domain-testing/domain-testing.md` và `boundary-value-analysis.md`. |
| 2026-07-08 | Codex / ChatGPT | Copy/tái sử dụng ảnh minh chứng từ Feature C sang Feature D khi cùng rule FR-10. | Ảnh `D-DT-*`, `D-BVA-*`; cập nhật Feature D report. |
| 2026-07-08 | Codex / ChatGPT | Bổ sung BVA Feature D do một số case trùng Domain Testing; copy ảnh D-BVA; cập nhật toàn bộ API command audit. | Cập nhật Feature D BVA, evidence và AI Audit command appendix. |
| 2026-07-08 | Codex / ChatGPT | Viết lại Feature D-mobile report, bug report, AI gap analysis dựa trên kết quả Domain/BVA. | `feature-D-mobile-report.md`, `bug-report.md`, `ai-gap-analysis.md`. |
| 2026-07-08 | Codex / ChatGPT | Review consistency, coverage toàn bộ HW2 và đối chiếu với `HW2-requirement.md`. | `README.md`, `checklist.md`, `main-report.md`, `hw2-consistency-coverage-review.md`, AI Audit updates. |
| 2026-07-08 | Codex / ChatGPT | Chuẩn hóa cách trình bày Domain Testing/BVA của A/B/C/D và Feature D report. | Format consistency update cho 8 file Domain/BVA và `feature-D-mobile-report.md`. |
| 2026-07-08 | Codex / ChatGPT | Chuẩn hóa path ảnh minh chứng trong requirement docs. | Evidence paths chuyển về dạng `domain-testing/...`, `boundary-value-analysis/...`, `bug-report/screenshots/...`. |
| 2026-07-08 | Codex / ChatGPT | Sửa lỗi encoding/formatting ở Feature D-mobile Domain Testing/BVA. | Viết lại sạch UTF-8 hai file Feature D Domain/BVA. |
| 2026-07-09 | Codex / ChatGPT | Review lại sẵn sàng nộp, kiểm tra ảnh GitHub trong `bug-report/screenshots`, chấm lại mục tiêu 95/100. | Cập nhật `README.md`, `checklist.md`, `main-report.md`, bug-report screenshot notes, AI Audit. |
| 2026-07-09 | Codex / ChatGPT | Bỏ cột video demo trong test summary, thay bằng folder ảnh minh chứng; video skill sẽ tự bổ sung sau. | README/main-report/checklist trỏ tới thư mục ảnh minh chứng thay vì video demo. |
| 2026-07-09 | Codex / ChatGPT | Cập nhật prompt log và biến `main-report.md` thành bản kết hợp đầy đủ Feature A report, Feature B report, Feature C Domain Testing, Feature D report và toàn bộ AI Audit. | `appendixA-prompt-log.md`, `main-report.md`, AI Audit/Mandatory Disclosure cập nhật. |

Ghi chú: Prompt log này ghi lại các interaction chính đã ảnh hưởng trực tiếp đến artifact nộp bài. Các câu hỏi ngắn trong quá trình chạy test API được gom vào nhóm "command guidance" để tránh trùng lặp, còn chi tiết audit artifact nằm trong `doc/md/AI Audit/01_AI-Audit-Report.md`.
