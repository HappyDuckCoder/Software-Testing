# AI Gap Analysis — Feature B (FR-11)

## 1. Oracle đã đổi (17/08/2026)

Automation **22 test case** map 1:1 HW2 (14 Domain + 8 BVA). Oracle = **README/spec FR-11 + FR-10**, không theo UI hiện tại.

| Lần chạy | Oracle | Kết quả Chromium headed |
| --- | --- | --- |
| Trước (AI-015) | 12 TC, hành vi code | 10 Pass, 2 Skip |
| Sau (AI-016) | Spec FR-11/FR-10 | **13/22 Pass, 5 Fail, 4 Skip** (~3.5 phút) |

## 2. 5 Fail = bug đã biết HW2

| Auto ID | HW2 ref | Nguyên nhân |
| --- | --- | --- |
| B-AUTO-09, 21 | B-DT-09, B-BVA-07 | Spec FR-10: shipping **không** được hủy — UI vẫn có nút «Hủy đơn» |
| B-AUTO-11 | B-DT-11 | Spec: canceled không có nút hủy — UI vẫn hiển thị |
| B-AUTO-13, 19 | B-DT-13, B-BVA-05 | Spec: `GET /api/orders/:id` phải từ chối cross-user — SUT trả **200** (BUG-B-01) |

## 3. 4 Skip (không phải fail giả)

| Auto ID | HW2 ref | Lý do |
| --- | --- | --- |
| B-AUTO-01, 15 | B-DT-01, B-BVA-01 | User `test@eshop.com` đã có đơn — empty-state cần DB sạch hoặc user riêng |
| B-AUTO-16 | B-BVA-02 | Boundary «đúng 1 đơn» — user hiện có nhiều đơn từ seed |
| B-AUTO-22 | B-BVA-08 | Không seed được status `returned` qua API công khai |

## 4. Prompt / artefact

- Data: `automation/data/feature-b-order-history.json` (22 rows)
- Helpers: `automation/helpers/orderSpec.ts`, `orderLocators.ts`, `api.ts` (`seedOrderFixtures`)
- Spec: `automation/tests/feature-b-order-history.spec.ts`
- Report: `automation/reports/html/index.html`

## 5. Verdict

Gap analysis **đạt**: automation spec-oracle tái hiện bug HW2 (shipping cancel, order detail leak); fail có screenshot/video trong `test-results/`.
