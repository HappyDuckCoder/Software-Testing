# Test-case contract and coverage matrix

## Required fields

| Field | Meaning |
| --- | --- |
| `TC-ID` | Immutable unique ID, for example `A-PROFILE-001`. |
| API/feature/pool | Selected endpoint and requirement scope. |
| Origin | `AI` or `STUDENT`; student cases cannot be relabeled AI. |
| Prompt/audit link | AI prompt ID and audit verdict/correction, or rationale for student case. |
| Objective/risk | The rule and failure mode being tested. |
| Preconditions/data | Actor, token type, resource ownership/state, seed/reset and cleanup. |
| Request | Method, path, headers, query/body and content type. Never store a live secret. |
| Expected oracle | Source, HTTP status, response fields/schema and observable persistence/state. |
| Actual/result | Filled only after real execution, with report/evidence link. |
| Traceability | Feature, spec section and security/state rule. |

## Coverage matrix

Mark each row `N/A` only with a reason.

| Category | Required design question |
| --- | --- |
| Requiredness | What happens when each required input is missing, null or empty? |
| Type/format | What happens for wrong type, malformed JSON, invalid format and unexpected content type? |
| Boundary/domain | What are min/max/just-below/just-above values and valid equivalence partitions? |
| Enumeration | Which valid/invalid enum values and case/whitespace variants matter? |
| Cross-field | Which fields depend on each other or must remain consistent? |
| Authentication | Is missing, malformed, expired and valid JWT behavior specified? |
| Authorization | Can anonymous/user/other-user/admin access exactly the intended function/data? |
| Identifier/IDOR | Can zero, negative, nonnumeric, nonexistent and other-owned IDs bypass ownership? |
| State | What starts each state; what transitions are valid, skipped, forbidden and terminal? |
| Security input | Which injection/over-posting/replay inputs are safe and meaningful for this endpoint? |
| Response schema | Are content type, JSON shape, required fields/types and sensitive fields correct? |
| Side effect | Does the requested mutation persist exactly once and leave unrelated data unchanged? |
| Recovery | Can the case be repeated safely; how is its data reset/cleaned? |

## Audit record format

| TC-ID | AI proposal summary | Verdict | Human reasoning | Correction/decision | Reviewer/date |
| --- | --- | --- | --- | --- |

`INVALID` and `INCOMPLETE` rows stay in the audit trail. The final executable suite references the corrected approved case, not a hidden replacement.
