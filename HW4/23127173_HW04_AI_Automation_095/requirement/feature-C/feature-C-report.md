# Báo cáo Feature C — FR-18 Quản lý đơn hàng admin (Automation)

## 1. Thông tin feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool C |
| Feature ID | FR-18 |
| Nguồn HW2 | `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-C/` |
| Actor | Admin (`admin@eshop.com`) |
| Trạng thái | ✅ 24 TC — 9/9 browser runs (17/08/2026) |

## 2. Phạm vi automation

- Admin login → Orders list → đổi trạng thái đơn
- API: `GET /api/admin/orders`, `PUT /api/admin/orders/:id/status`
- Oracle: README/spec FR-18 + FR-10

## 3. Coverage

| Chỉ số | Giá trị |
| --- | --- |
| Test case | **24** (16 Domain + 8 BVA) |
| Data | `automation/data/feature-c-admin-orders.json` |
| Spec | `automation/tests/feature-c-admin-orders.spec.ts` |

## 4. Kết quả thực thi

| Browser | Pass | Fail | Skip | Timeout | Report |
| --- | ---: | ---: | ---: | ---: | --- |
| Chromium | 18 | 6 | 0 | 0 | `evidence/html-reports/feature-c-chromium/index.html` |
| Firefox | 15 | 4 | 0 | 5 | `evidence/html-reports/feature-c-firefox/index.html` |
| WebKit | 18 | 6 | 0 | 0 | `evidence/html-reports/feature-c-webkit/index.html` |

**Fail:** BUG-C-01 (user token admin API), BUG-C-02 (canceled→delivered), BUG-C-03 (XSS địa chỉ).

## 5. AI review

- Gap analysis: `ai-gap-analysis/ai-gap-analysis.md`
- Bug report: `bug-report/bug-report.md`
