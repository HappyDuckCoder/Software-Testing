# AI Gap Analysis — Feature C (FR-18)

## 1. Oracle đã đổi (17/08/2026)

Automation **24 test case** map 1:1 HW2 (16 Domain + 8 BVA). Oracle = **README/spec FR-18 + FR-10**, không theo backend/admin UI hiện tại.

| Lần chạy | Oracle | Kết quả Chromium headed |
| --- | --- | --- |
| Trước (AI-015) | 12 TC, hành vi code | 11 Pass, 1 Fail |
| Sau (AI-016) | Spec FR-18/FR-10 | **18/24 Pass, 6 Fail** (~2.7 phút) |

## 2. 6 Fail = bug đã biết HW2

| Auto ID | HW2 ref | Nguyên nhân |
| --- | --- | --- |
| C-AUTO-04 | C-DT-04 | Spec: user token không được `GET /api/admin/orders` — SUT trả **200** (BUG-C-01) |
| C-AUTO-12, 22 | C-DT-12, C-BVA-06 | Spec: `canceled → delivered` phải **400** — SUT cho phép (BUG-C-02) |
| C-AUTO-15, 24 | C-DT-15, C-BVA-08 | Spec: địa chỉ XSS phải escape — script `alert()` thực thi (BUG-C-03) |
| C-AUTO-16 | C-DT-16 | Spec: đơn canceled/delivered không có nút chuyển trạng thái — UI vẫn có «Đánh dấu Đã giao» |

## 3. Prompt / artefact

- Data: `automation/data/feature-c-admin-orders.json` (24 rows)
- Helpers: `automation/helpers/orderSpec.ts`, `orderLocators.ts`, `api.ts`
- Spec: `automation/tests/feature-c-admin-orders.spec.ts`
- Report: `automation/reports/html/index.html`

## 4. Verdict

Gap analysis **đạt**: automation spec-oracle tái hiện đủ bug HW2 (role admin API, state machine, XSS, terminal actions); fail có bằng chứng screenshot/video.
