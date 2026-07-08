# Feature D Mobile Report - Pool D

## 1. Feature Selection

| Field | Value |
| --- | --- |
| Pool | Pool D - Mobile App |
| Selected feature | Order state machine |
| Feature ID | FR-10 |
| Reason for selection | FR-10 is a cross-platform order workflow used by user/mobile cancellation and admin transitions, with clear valid/invalid state edges. |
| Status | Source-based test design completed; execution pending on EShop SUT/mobile flow |

## 2. Feature Understanding From EShop Repo

| Item | Notes |
| --- | --- |
| Actor/role | User/mobile user can cancel own order only while `pending` or `confirmed`; admin can advance/cancel orders through admin API. |
| Device/emulator/browser | Mobile app or mobile-equivalent user flow; backend API is shared with web. |
| Preconditions | Orders exist; user/admin tokens available; order statuses can be prepared through checkout/admin API. |
| Main flow | Order starts at `pending`; admin can move `pending -> confirmed -> shipping -> delivered`; user/admin can cancel `pending` or `confirmed`. |
| Alternative flows | Invalid transitions, final-state transitions, user cancel after shipping, non-owned cancel, missing token. |
| Input variables | Current status, target status, actor role, token, order id, ownership. |
| Output/result | Valid transition updates `orders.status`; invalid transition returns error and preserves status. |
| Mobile-specific risks | Mobile cancel button/action must respect same FR-10 rule; small-screen status/action visibility must not expose invalid action. |
| Source evidence | `Eshop/README.md` FR-10 and mobile FR-20, `Eshop/backend/server.js`, `Eshop/frontend-web/src/pages/Profile.jsx`, `Eshop/frontend-admin/src/App.jsx`. |

## 3. Feature Brief - FR-10 Order State Machine

### 3.1 Scope

| Item | Value |
| --- | --- |
| Pool | Pool D / shared order workflow |
| Feature ID | FR-10 |
| Actor | User/mobile user and Admin |
| Environment | EShop backend API; user/mobile history flow; admin order flow |

### 3.2 Flow Analysis

| Flow | Steps | Expected result | Evidence |
| --- | --- | --- | --- |
| Create order | User checkout | New order status is `pending` | `server.js` checkout route |
| Admin progression | Admin updates status pending -> confirmed -> shipping -> delivered | Valid forward chain accepted | README FR-10; `server.js` |
| User cancel | User cancels own pending/confirmed order | Status becomes `canceled` | README FR-10/FR-20 |
| Invalid user cancel | User cancels shipping/delivered/canceled order | Should be rejected | README FR-10; backend currently rejects only delivered/canceled |
| Final state protection | Try any transition from delivered/canceled | Should be rejected | README FR-10; backend allows canceled -> delivered |

### 3.3 Input / Output Inventory

| Variable | Type | Source | Rule |
| --- | --- | --- | --- |
| Current status | Enum | DB/API | One of `pending`, `confirmed`, `shipping`, `delivered`, `canceled`. |
| Target status | Enum | Admin API | Must follow valid edge graph. |
| Actor role | State | User/admin token | User cancel limited to own `pending`/`confirmed`; admin controls admin transitions. |
| Order ownership | State | User cancel route | User cancel query includes `WHERE id=? AND user_id=?`. |
| Token | Header | API | User/admin actions require valid token. |

## 4. Linked Reports

* Domain Testing: `domain-testing/domain-testing.md`
* Boundary Value Analysis: `boundary-value-analysis/boundary-value-analysis.md`
* Bug Report: `bug-report/bug-report.md`
* AI Gap Analysis: `ai-gap-analysis/ai-gap-analysis.md`

## 5. Execution Summary

| Designed | Executed | Passed | Failed | Not executed | Bugs |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 24 | 0 | 0 | 0 | 24 | 2 |
