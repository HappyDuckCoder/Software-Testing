# Báo cáo Feature A — FR-04 Quản lý hồ sơ cá nhân (Automation)

## 1. Lựa chọn feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool A |
| Feature ID | FR-04 |
| Mô tả | Quản lý hồ sơ cá nhân |
| Nguồn HW2 | `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-A/` |
| Trạng thái automation | ✅ 30 TC — 9/9 browser runs (17/08/2026) |

## 2. Phạm vi automation

| Thành phần | Đường dẫn SUT |
| --- | --- |
| UI Profile | `Eshop/frontend-web/src/pages/Profile.jsx` |
| API | `PUT /api/users/me`, `GET /api/users/me` |
| Luồng | Login → `/profile` → sửa name/phone/address → lưu |

## 3. Coverage HW2 → automation

| Chỉ số | Giá trị |
| --- | --- |
| Test case thiết kế | **30** (18 Domain + 12 BVA) |
| Oracle | README/spec FR-04 — không pass theo code buggy |
| Data | `automation/data/feature-a-profile.json` |
| Spec | `automation/tests/feature-a-profile.spec.ts` |

## 4. Kết quả thực thi (9 browser runs)

| Browser | Pass | Fail | Skip | Report |
| --- | ---: | ---: | ---: | --- |
| Chromium | 22 | 8 | 0 | `evidence/html-reports/feature-a-chromium/index.html` |
| Firefox | 22 | 8 | 0 | `evidence/html-reports/feature-a-firefox/index.html` |
| WebKit | 22 | 8 | 0 | `evidence/html-reports/feature-a-webkit/index.html` |

**8 Fail ổn định** — BUG-A-01 (regex phone UI), BUG-A-02 (role escalation API). Chi tiết: `checklist/execution-matrix.md`, `bug-report/bug-report.md`.

## 5. AI review

- Gap analysis: `ai-gap-analysis/ai-gap-analysis.md`
- Bug report: `bug-report/bug-report.md`
- Human review: sửa `profileLocators.ts`, chuyển oracle từ code → spec (AI-014)
