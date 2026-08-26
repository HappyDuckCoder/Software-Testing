# HW04 Consistency & Coverage Review

Review date: **26/08/2026**  
Reviewer: Sinh viên 23127173 (rà soát sau 9 browser runs)

## 1. Đối chiếu requirement

| Yêu cầu HW04 | Trạng thái | Ghi chú |
| --- | --- | --- |
| 3 feature web khớp HW02 | ✅ | FR-04, FR-11, FR-18 |
| ≥ 12 TC / feature | ✅ | **76 TC** (30/22/24) |
| Data-driven (.json) | ✅ | `automation/data/feature-*.json` |
| ≥ 3 assertion patterns | ✅ | URL, visibility/text, count/attribute/state |
| 3 browser × 3 feature | ✅ | **9/9 runs** — 17/08/2026 |
| HTML `Run by: 23127173` | ✅ | `playwright.config.ts` + 9 reports |
| AI gap / human review | ✅ | 3 feature + locator/oracle fixes |
| AI Critique 200–300 từ | ✅ | `doc/md/AI Audit/02_AI-Critique.md` |
| AI Audit AI-001…AI-028 | ✅ | Bao gồm tạo issue và đồng bộ tài liệu |
| Bug report Markdown | ✅ | 3 feature; GitHub Issues [#8–#14](https://github.com/HappyDuckCoder/Software-Testing/issues) + 7 screenshot |
| Video ≥ 5 phút | ⏳ | Chưa quay |
| Git ≥ 8 commit .spec.ts | ⏳ | Chưa push GitHub |
| PDF export | ⏳ | `doc/pdf/main-report.pdf` |

## 2. Nhất quán HW2 ↔ HW4

| Feature | HW2 TC | HW4 automated | Coverage |
| --- | ---: | ---: | --- |
| FR-04 | 30 | 30 | 1:1 map Domain + BVA |
| FR-11 | 22 | 22 | 1:1; 4 skip có lý do |
| FR-18 | 24 | 24 | 1:1; fail khớp bug HW2 |

## 3. Execution tổng hợp

| Chỉ số | Giá trị |
| --- | --- |
| Browser runs | 9 |
| Pass / Fail / Skip / Timeout | 158 / 53 / 12 / 5 |
| Evidence | `evidence/execution-summary.json`, `evidence/html-reports/` |
| Ma trận chi tiết | `checklist/execution-matrix.md` |

## 4. Mục còn thiếu trước nộp (P0)

1. Quay video demo YouTube ≥ 5 phút.
2. Push `automation/` GitHub (≥ 8 commit `.spec.ts`) + git-commit-log.
3. Tái export PDF sau khi chốt tài liệu (nếu nộp bản PDF mới nhất).
4. Tạo zip `23127173_HW04_AI_Automation_095.zip`.

## 5. Tự đánh giá

| Hạng mục | Điểm mục tiêu |
| --- | ---: |
| Task 1 A/B/C | 72 |
| Task 2 Video | 14 (chưa quay) |
| Agent Skill | 9 |
| **Tổng** | **95** |
