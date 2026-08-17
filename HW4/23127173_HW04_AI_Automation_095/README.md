# HW04-AI Automation Testing — Submission README

## 1. Thông tin sinh viên

| Mục | Giá trị |
| --- | --- |
| Họ tên | Trần Hải Đức |
| MSSV | 23127173 |
| Bài tập | HW04-AI — Kiểm thử Tự động hóa trên EShop |
| SUT | EShop — <https://github.com/ttbhanh/eshop-sut> |
| Mức tự đánh giá mục tiêu | 095 |
| Tên file nộp | `23127173_HW04_AI_Automation_095.zip` |
| Repository GitHub công khai | `[ĐIỀN URL REPO SAU KHI PUSH automation/]` |

## 2. Feature đã chọn (khớp HW02)

| Pool | Feature | Feature ID | TC (spec oracle) | Trạng thái automation |
| --- | --- | --- | ---: | --- |
| Pool A | Quản lý hồ sơ cá nhân | FR-04 | 30 | ✅ 9/9 browser runs |
| Pool B | Xem lịch sử đơn hàng (user) | FR-11 | 22 | ✅ 9/9 browser runs |
| Pool C | Quản lý đơn hàng (admin) | FR-18 | 24 | ✅ 9/9 browser runs |

> Pool D (mobile) **không** dùng trong HW04 theo đề bài.

## 3. Chỉ số đã ghi nhận (17/08/2026)

| Chỉ số | Giá trị |
| --- | --- |
| Test case thiết kế (oracle spec HW2) | **76** (30 + 22 + 24) |
| Browser runs | **9** (3 browser × 3 feature) |
| Tổng execution (9 runs) | **158 Pass / 53 Fail / 12 Skip / 5 Timeout** |
| Assertion patterns | URL, visibility/text, count/attribute/state |
| Oracle | README/spec — **không** pass theo code buggy |

### Kết quả Chromium (baseline mỗi feature)

| Feature | Pass | Fail | Skip |
| --- | ---: | ---: | ---: |
| A — FR-04 | 22 | 8 | 0 |
| B — FR-11 | 14 | 4 | 4 |
| C — FR-18 | 18 | 6 | 0 |

Fail khớp bug HW2 (BUG-A-01/02, BUG-B-01/02, BUG-C-01/02/03) — xem `checklist/execution-matrix.md`.

## 4. Bảng tự đánh giá (mục tiêu 095/100)

| STT | Tiêu chí | Điểm tối đa | Tự đánh giá | Bằng chứng |
| ---: | --- | ---: | ---: | --- |
| 1 | Task 1 — Feature A (FR-04) | 25 | 24 | 30 TC, 3 HTML reports, gap analysis |
| 1 | Task 1 — Feature B (FR-11) | 25 | 24 | 22 TC, 3 HTML reports, gap analysis |
| 1 | Task 1 — Feature C (FR-18) | 25 | 24 | 24 TC, 3 HTML reports, gap analysis |
| 2 | Task 2 — Video demo ≥ 5 phút | 15 | 14 | `[CHƯA QUAY]` — `evidence/demo-video/` |
| 3 | Agent Skills | 10 | 9 | `agent-skills/playwright-automation-builder/` |
| | **Tổng** | **100** | **95** | Còn video + PDF + GitHub push |

## 5. Cấu trúc bài nộp

```text
23127173_HW04_AI_Automation_095/
├── README.md                    ← file này
├── checklist.md                 ← checklist hoàn thiện
├── checklist/
│   └── execution-matrix.md      ← ma trận 9 browser runs
├── roadmap.md
├── automation/                  ← Playwright project (GitHub repo)
│   ├── data/*.json              ← 76 TC data-driven
│   ├── tests/*.spec.ts
│   ├── helpers/
│   ├── reports/feature-{a,b,c}/ ← summary per browser
│   └── scripts/run-full-matrix.mjs
├── evidence/
│   ├── execution-summary.json
│   ├── html-reports/            ← 9 HTML reports
│   └── demo-video/              ← [CHƯA QUAY]
├── requirement/feature-{A,B,C}/
│   ├── feature-*-report.md
│   ├── ai-gap-analysis/
│   └── bug-report/
├── doc/md/                      ← main report + AI Audit
└── agent-skills/
```

## 6. Artifact bắt buộc

| Artifact | Đường dẫn | Trạng thái |
| --- | --- | --- |
| Main report Markdown | `doc/md/main-report.md` | ✅ Đã điền kết quả |
| Main report PDF | `doc/pdf/main-report.pdf` | Chưa export |
| Playwright project | `automation/` | ✅ 76 TC + 9 runs |
| HTML reports đa trình duyệt | `evidence/html-reports/` | ✅ 9 folders |
| AI Gap Analysis | `requirement/feature-*/ai-gap-analysis/` | ✅ |
| AI Audit Report | `doc/md/AI Audit/01_AI-Audit-Report.md` | AI-001…AI-017 |
| Prompt log | `doc/md/appendixA-prompt-log.md` | ✅ |
| Video demo YouTube | `agent-skills/demo-videos/link-video.md` | `[CHƯA QUAY]` |
| Git commit log | `doc/md/Git Commit Log/git-commit-log.txt` | Placeholder |

## 7. Lệnh nhanh

```bash
# SUT: backend :3000, web :5180, admin :5174
cd automation
npm install
npx playwright install
npm run test:full-matrix          # 9 browser runs + copy evidence
npm run test:feature-a:headed     # demo headed Chromium
npm run report                    # mở HTML report mới nhất
```

## 8. Bước còn thiếu trước khi nộp zip

1. Quay video demo ≥ 5 phút (tiếng Việt, `whoami`/`hostname` hoặc face-cam).
2. Push `automation/` lên GitHub công khai (≥ 8 commit script).
3. Export `doc/pdf/main-report.pdf` từ `doc/md/main-report.md`.
4. Tạo GitHub Issues cho bug (nếu yêu cầu đề bài).
