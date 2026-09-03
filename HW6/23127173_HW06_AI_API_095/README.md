# HW06-AI — Kiểm thử API EShop

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| SUT | EShop — `http://127.0.0.1:3000` |
| Repository | https://github.com/HappyDuckCoder/Software-Testing/tree/homework6/HW6/23127173_HW06_AI_API_095 |
| ZIP nộp | `23127173_HW06_AI_API_095.zip` |
| Tự đánh giá | **095 / 100** |

## Bảng tự đánh giá (đề §14)

| Hạng mục | Nội dung | Điểm tối đa | Tự chấm |
| --- | --- | ---: | ---: |
| API 1 — Profile | 40 TC, oracle spec, Newman/Postman, 4 bug có GitHub Issue | 30 | 29 |
| API 2 — Hủy đơn | 40 TC, oracle FR-10, 2 bug có GitHub Issue | 30 | 29 |
| API 3 — Admin status | 40 TC, oracle FR-18/SEC, 2 bug có GitHub Issue | 30 | 28 |
| Agent Skill — test generator | Skill + flowchart + pseudocode | 10 | 9 |
| **Tổng** | | **100** | **95** |

**Số liệu tổng hợp:** 3 API · 120 test case (105 AI + 15 SV) · 6 nhóm bug (12 assertion fail local) · Newman 182 request · CI [pass #8](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307) + [fail #7](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556).

Tự chấm 95 để phản ánh các giới hạn đã audit; tên ZIP `_095` khớp mức tự chấm.

## Trạng thái nhanh

| Đã xong | Chưa xong |
| --- | --- |
| 120 TC oracle spec, Newman 12 fail, Postman 6 ảnh | ZIP Moodle (SV tự đóng) |
| Excel summary, main report PDF, CI pass + fail (6 ảnh) | |
| AI Audit / Mandatory / Critique + 6 GitHub Issues/screenshot | |

Chi tiết: `checklist.md`, `doc/md/main-report.md`.

## Ba API

| Pool | Endpoint | Ý nghĩa |
| --- | --- | --- |
| A | `PUT /api/users/me` | Cập nhật hồ sơ user (FR-04) |
| B | `PUT /api/orders/:id/cancel` | Hủy đơn (FR-10) |
| C | `PUT /api/admin/orders/:id/status` | Admin đổi trạng thái (FR-18) |

Không trùng Vân: `/register`, `/api/products/:id`, `POST /api/checkout`.

## Tài liệu chính

| File | Mô tả |
| --- | --- |
| `doc/md/main-report.md` | Báo cáo chính (+ PDF `doc/pdf/main-report.pdf`) |
| `doc/md/AI Audit/` | AI Audit, Mandatory Disclosure, Privacy Checklist |
| `doc/md/AI Audit/02_AI-Critique.md` | AI Critique 200–300 từ |
| `test-cases/test-case-matrix.md` | Ma trận 120 TC |
| `issues/bug-report.md` | 6 nhóm bug spec |
| `ci-cd/ci-cd-report.md` | CI/CD evidence |

Evidence thật (Newman, ảnh Postman/CI) không được thay bằng nội dung AI sinh.

## Cấu trúc thư mục

```text
23127173_HW06_AI_API_095/
├── api-testing/      # Postman, Newman
├── ci-cd/
├── doc/md/           # báo cáo, AI audit
├── doc/pdf/          # main-report.pdf, flowchart
├── evidence/
├── issues/
├── test-cases/
├── agent-skills/
├── checklist.md
└── roadmap.md
```
