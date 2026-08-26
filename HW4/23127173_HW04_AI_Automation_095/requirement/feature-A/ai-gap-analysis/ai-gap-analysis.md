# AI Gap Analysis — Feature A (FR-04)

## 1. Oracle đã đổi (17/08/2026)

Automation **30 test case** map 1:1 HW2 (18 Domain + 12 BVA). Oracle = **README/spec FR-04**, không theo regex UI hiện tại.

| Lần chạy | Oracle | Kết quả Chromium headed |
| --- | --- | --- |
| Trước | Hành vi code (`Profile.jsx`) | 12/12 Pass |
| Sau | Spec FR-04 | **22/30 Pass, 8 Fail** (~1.3 phút) |

## 2. 8 Fail = bug đã biết HW2 (BUG-A-01, BUG-A-02)

| Auto ID | HW2 ref | Nguyên nhân |
| --- | --- | --- |
| A-AUTO-06, 20, 23 | A-DT-06, A-BVA-02, A-BVA-05 | Spec chấp nhận `091…` / `098…` — UI từ chối (regex sai) |
| A-AUTO-12, 21 | A-DT-12, A-BVA-03 | Spec chấp nhận 11 số — UI từ chối |
| A-AUTO-08, 24 | A-DT-08, A-BVA-06 | Spec từ chối số không bắt đầu 0 — UI **chấp nhận** |
| A-AUTO-17 | A-DT-17 | Spec: role giữ `user` — API cho leo quyền admin |

## 3. Vì sao Pass nhiều hơn HW2 tay (22 vs 10)

- **API path** (A-DT-05, BVA name/address qua API): backend không validate phone như UI → Pass theo spec.
- **Warning HW2** (A-DT-09–11): spec = reject — UI có alert lỗi → automation **Pass** dù message sai wording.
- **Case trùng** (A-DT-09 ≈ A-BVA-01): cùng kết quả.

## 4. Prompt / artefact

- Data: `automation/data/feature-a-profile.json` (30 rows, field `action` + `expected.outcome`)
- Helpers: `automation/helpers/profileSpec.ts`
- Spec: `automation/tests/feature-a-profile.spec.ts`
- Report (đầy đủ media): `requirement/feature-A/automation/html-reports/feature-a-chromium/index.html`
- Report (nộp nhẹ): `evidence/html-reports/feature-a-chromium/index.html`

## 5. Verdict

Gap analysis **đạt**: automation spec-oracle tái hiện được bug HW2; fail có bằng chứng trong `evidence/html-reports/feature-a-*/data/*.md` và `bug-report/screenshots/`.
