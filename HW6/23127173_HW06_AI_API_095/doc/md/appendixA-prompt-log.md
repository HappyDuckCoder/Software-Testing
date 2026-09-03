# Appendix A - Prompt log

Ghi prompt theo từng bước. File này **không** thay thế AI Audit: Audit phải có output, verdict và phần sinh viên kiểm tra/sửa. Chi tiết: `AI Audit/01_AI-Audit-Report.md`.

| ID | API/pha | Mục tiêu prompt | Link AI Audit |
| --- | --- | --- | --- |
| AI-001 | Setup | Dịch `requirement.pdf` → Markdown; dựng khung nộp, roadmap, checklist | `AI Audit/01_AI-Audit-Report.md` |
| AI-002 | Scope | Chọn 3 API A/B/C không trùng Vân | `AI Audit/01_AI-Audit-Report.md` |
| AI-003 | Scope | Thêm ý nghĩa nghiệp vụ từng API | `AI Audit/01_AI-Audit-Report.md` |
| AI-004 | Agent Skill | Lưu workflow SV và tạo skill Postman/Newman | `AI Audit/01_AI-Audit-Report.md` |
| AI-005 | Agent Skill | Nâng cấp SKILL theo requirement | `AI Audit/01_AI-Audit-Report.md` |
| AI-006 | Execution | Chạy EShop, collection, Newman, CI, docs | `AI Audit/01_AI-Audit-Report.md` |
| AI-007 | Agent Skill | Cập nhật gate Issue/CI fail | `AI Audit/01_AI-Audit-Report.md` |
| AI-008 | Repo | Cập nhật `.gitignore` | `AI Audit/01_AI-Audit-Report.md` |
| AI-009 | Evidence | Chụp Newman/Postman | `AI Audit/01_AI-Audit-Report.md` |
| AI-010 | Evidence | Review ảnh Postman do SV cung cấp | `AI Audit/01_AI-Audit-Report.md` |
| AI-011 | Evidence | Runner mới với environment | `AI Audit/01_AI-Audit-Report.md` |
| AI-012 | Evidence | Bắt buộc bộ 5 ảnh Postman | `AI Audit/01_AI-Audit-Report.md` |
| AI-013 | Evidence | Đổi tên 5 ảnh gốc SV; tự kiểm điểm | `AI Audit/01_AI-Audit-Report.md` |
| AI-014 | CI/CD | Dùng 5 ảnh GitHub Actions | `AI Audit/01_AI-Audit-Report.md` |
| AI-015 | Docs | Review/đồng bộ tài liệu với evidence | `AI Audit/01_AI-Audit-Report.md` |
| AI-016 | Generation | Ma trận 40 TC/API + observation 120 + Newman observation | `AI Audit/01_AI-Audit-Report.md` |
| AI-017 | Audit/Disclosure | Đối chiếu đề, tiến độ, bổ sung AI Audit và Mandatory Disclosure | `AI Audit/01_AI-Audit-Report.md` |

## Prompt nguyên văn phiên 03/09/2026 (AI-017)

```text
xem Lab\HW6
xem Lab\HW6\requirement\requirement.pdf
xem tôi làm đến đâu rồi, xem tôi còn thiếu những bước gì

bổ sung ai audit, ai mantory
```
