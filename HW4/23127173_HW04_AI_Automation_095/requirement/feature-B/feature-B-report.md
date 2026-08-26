# Báo cáo Feature B — FR-11 Lịch sử đơn hàng (Automation)

## 1. Thông tin feature (khớp HW02)

| Mục | Giá trị |
| --- | --- |
| Pool | Pool B |
| Feature ID | FR-11 |
| Nguồn HW2 | `Lab/HW2/23127173_HW02_AI_DomainTesting_095/requirement/feature-B/` |
| Trạng thái | ✅ 22 TC — 9/9 browser runs (17/08/2026) |

## 2. Phạm vi automation

- User đăng nhập → `/profile` → section lịch sử đơn hàng
- API: `GET /api/orders/my-orders`, `GET /api/orders/:id`, cancel khi pending/confirmed
- Oracle: README/spec FR-11 + FR-10

## 3. Coverage

| Chỉ số | Giá trị |
| --- | --- |
| Test case | **22** (14 Domain + 8 BVA) |
| Data | `automation/data/feature-b-order-history.json` |
| Spec | `automation/tests/feature-b-order-history.spec.ts` |

## 4. Kết quả thực thi

| Browser | Pass | Fail | Skip | Report |
| --- | ---: | ---: | ---: | --- |
| Chromium | 14 | 4 | 4 | `evidence/html-reports/feature-b-chromium/index.html` |
| Firefox | 14 | 4 | 4 | `evidence/html-reports/feature-b-firefox/index.html` |
| WebKit | 13 | 5 | 4 | `evidence/html-reports/feature-b-webkit/index.html` |

**Fail:** BUG-B-01 (order detail leak), BUG-B-02 (nút hủy trên shipping/canceled).  
**Skip:** empty-state / single-order boundary / status `returned` không seed được — xem gap analysis.

## 5. AI review

- Gap analysis: `ai-gap-analysis/ai-gap-analysis.md`
- Bug report: `bug-report/bug-report.md`
