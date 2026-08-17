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

| Pool | Feature | Feature ID | Nguồn HW02 | Trạng thái automation |
| --- | --- | --- | --- | --- |
| Pool A | Quản lý hồ sơ cá nhân | FR-04 | `Lab/HW2/.../requirement/feature-A/` | Khung script + data — **chưa chạy đủ 9 browser run** |
| Pool B | Xem lịch sử đơn hàng (user) | FR-11 | `Lab/HW2/.../requirement/feature-B/` | Khung script + data — **chưa chạy đủ 9 browser run** |
| Pool C | Quản lý đơn hàng (admin) | FR-18 | `Lab/HW2/.../requirement/feature-C/` | Khung script + data — **chưa chạy đủ 9 browser run** |

> Pool D (mobile) **không** dùng trong HW04 theo đề bài.

## 3. Bảng tự đánh giá (mục tiêu 095/100)

| STT | Tiêu chí | Điểm tối đa | Tự đánh giá | Bằng chứng |
| ---: | --- | ---: | ---: | --- |
| 1 | Task 1 — Feature A (FR-04) | 25 | 24 | `requirement/feature-A/`, `automation/tests/feature-a-profile.spec.ts` |
| 1 | Task 1 — Feature B (FR-11) | 25 | 24 | `requirement/feature-B/`, `automation/tests/feature-b-order-history.spec.ts` |
| 1 | Task 1 — Feature C (FR-18) | 25 | 24 | `requirement/feature-C/`, `automation/tests/feature-c-admin-orders.spec.ts` |
| 2 | Task 2 — Video demo ≥ 5 phút | 15 | 14 | `agent-skills/demo-videos/link-video.md` |
| 3 | Agent Skills | 10 | 9 | `agent-skills/playwright-automation-builder/` |
| | **Tổng** | **100** | **95** | Sau khi hoàn tất chạy test, HTML report, video và export PDF |

## 4. Test Summary Report

| Chỉ số | Mục tiêu đề bài | Hiện trạng | Ghi chú |
| --- | ---: | ---: | --- |
| Số feature web tự động hóa | 3 | 3 | A/B/C khớp HW02 |
| Test case / feature (tối thiểu) | ≥ 12 | 12 (kế hoạch) | Map từ HW2 Domain/BVA — xem `automation/data/*.json` |
| Tổng test case đã thiết kế | ≥ 36 | 36 | 12 × 3 feature |
| Test case đã thực thi | — | `[CHƯA CHẠY]` | Chạy `npm test` trong `automation/` |
| Pass | — | `[CHƯA CHẠY]` | Cập nhật sau khi chạy |
| Fail | — | `[CHƯA CHẠY]` | Cập nhật sau khi chạy |
| Browser run (3 browser × 3 feature) | ≥ 9 | 0 | Chromium / Firefox / WebKit |
| Assertion patterns (≥ 3 loại) | ≥ 3 | 3 (kế hoạch) | URL, visibility/text, count/attribute — xem spec |
| File dữ liệu ngoài script | Bắt buộc | 3 JSON | `automation/data/feature-*.json` |
| HTML reports có `Run by: 23127173` | Bắt buộc | Khung config | `playwright.config.ts` metadata |
| Bug trên GitHub Issues | Nếu có | `[CHƯA TẠO]` | `requirement/feature-*/bug-report/` |
| Commit script (.spec.ts) | ≥ 8 | 0 | Chỉ commit thay đổi file test mới tính |
| Video demo YouTube unlisted | 1 | `[CHƯA QUAY]` | ≥ 5 phút, tiếng Việt, `whoami`/`hostname` hoặc face-cam |

## 5. Artifact bắt buộc

| Artifact | Đường dẫn | Trạng thái |
| --- | --- | --- |
| Main report Markdown | `doc/md/main-report.md` | Khung — cần điền kết quả chạy |
| Main report PDF | `doc/pdf/main-report.pdf` | Chưa export |
| Playwright project (GitHub) | `automation/` | Khung script + config |
| HTML reports đa trình duyệt | `evidence/html-reports/` hoặc `automation/reports/` | Chưa có |
| AI Gap Analysis (3 feature) | `requirement/feature-*/ai-gap-analysis/` | Khung |
| Bug report | `requirement/feature-*/bug-report/` | Khung |
| AI Audit Report | `doc/md/AI Audit/01_AI-Audit-Report.md` | AI-001…AI-013 (17/08/2026) |
| AI Critique 200–300 từ | `doc/md/AI Audit/02_AI-Critique.md` | Khung |
| Mandatory Disclosure | `doc/md/AI Audit/03_Mandatory-Disclosure.md` | Khung |
| AI Privacy Checklist | `doc/md/AI Audit/04_AI-Privacy-Checklist.md` | Khung |
| Prompt log | `doc/md/appendixA-prompt-log.md` | 13 prompt phiên 17/08/2026 |
| Git commit log | `doc/md/Git Commit Log/git-commit-log.txt` | Placeholder |
| Agent Skill + video | `agent-skills/` | Skill khung + link video placeholder |
| Roadmap / Checklist | `roadmap.md`, `checklist.md` | Đã tạo |

## 6. Lệnh nhanh

```bash
# 1. Clone SUT và chạy EShop (backend + frontend-web + frontend-admin)
# 2. Trong thư mục automation:
cd Lab/HW4/23127173_HW04_AI_Automation_095/automation
cp .env.example .env   # điền BASE_URL, email/password test
npm install
npx playwright install
npm run test:feature-a
npm run test:feature-b
npm run test:feature-c
npm run test:all-browsers
```

## 7. Ghi chú review cuối

Khung bài làm đã bám HW02 (FR-04, FR-11, FR-18) và cấu trúc HW3 (doc, AI Audit, agent-skills, checklist). **95/100 chỉ đạt được sau khi** sinh viên chạy SUT thật, sinh HTML report có timestamp, quay video demo, push GitHub ≥ 8 commit script, và export PDF.
