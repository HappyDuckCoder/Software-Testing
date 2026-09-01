# HW06 Test-case matrix and human audit

Each API has 40 cases: 35 AI-generated and 5 student-added. `Student Verify` is deliberately blank for the student to confirm each case before final execution/export.

| ID | API | Endpoint | Test case | Source | Audit verdict | Audit rationale/correction | Student Verify |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A-001 | A | PUT /api/users/me | Valid full profile update | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-002 | A | PUT /api/users/me | Name minimum length | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-003 | A | PUT /api/users/me | Name maximum supported length | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-004 | A | PUT /api/users/me | Unicode Vietnamese name | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-005 | A | PUT /api/users/me | Name contains leading/trailing spaces | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-006 | A | PUT /api/users/me | Name omitted | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-007 | A | PUT /api/users/me | Name null | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-008 | A | PUT /api/users/me | Name numeric value | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-009 | A | PUT /api/users/me | Name SQL injection payload | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-010 | A | PUT /api/users/me | Name XSS payload | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-011 | A | PUT /api/users/me | Address normal Vietnamese format | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-012 | A | PUT /api/users/me | Address empty string | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-013 | A | PUT /api/users/me | Address omitted | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-014 | A | PUT /api/users/me | Address null | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-015 | A | PUT /api/users/me | Address very long value | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-016 | A | PUT /api/users/me | Address SQL injection payload | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-017 | A | PUT /api/users/me | Address XSS payload | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-018 | A | PUT /api/users/me | Phone valid 10 digits | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-019 | A | PUT /api/users/me | Phone valid 11 digits | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-020 | A | PUT /api/users/me | Phone begins with zero | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-021 | A | PUT /api/users/me | Phone too short | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-022 | A | PUT /api/users/me | Phone too long | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-023 | A | PUT /api/users/me | Phone alphabetic | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-024 | A | PUT /api/users/me | Phone special characters | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-025 | A | PUT /api/users/me | Phone whitespace | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-026 | A | PUT /api/users/me | Phone null | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-027 | A | PUT /api/users/me | Missing JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-028 | A | PUT /api/users/me | Malformed JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-029 | A | PUT /api/users/me | Expired JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-030 | A | PUT /api/users/me | Foreign token cannot alter another user | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| A-031 | A | PUT /api/users/me | Role mass assignment | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| A-032 | A | PUT /api/users/me | isAdmin mass assignment | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| A-033 | A | PUT /api/users/me | Unknown extra field | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| A-034 | A | PUT /api/users/me | Content-Type missing | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| A-035 | A | PUT /api/users/me | Response schema/message contract | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| A-036 | A | PUT /api/users/me | Student: simultaneous profile requests | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| A-037 | A | PUT /api/users/me | Student: empty JSON object | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| A-038 | A | PUT /api/users/me | Student: duplicate update idempotency | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| A-039 | A | PUT /api/users/me | Student: emoji name | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| A-040 | A | PUT /api/users/me | Student: phone international prefix | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| B-001 | B | PUT /api/orders/:id/cancel | Cancel own pending order | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-002 | B | PUT /api/orders/:id/cancel | Cancel same order twice | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-003 | B | PUT /api/orders/:id/cancel | Cancel own confirmed order | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-004 | B | PUT /api/orders/:id/cancel | Cancel own shipping order | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-005 | B | PUT /api/orders/:id/cancel | Cancel delivered order | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-006 | B | PUT /api/orders/:id/cancel | Cancel canceled order | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-007 | B | PUT /api/orders/:id/cancel | Cancel pending order immediately after checkout | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-008 | B | PUT /api/orders/:id/cancel | Cancel with numeric ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-009 | B | PUT /api/orders/:id/cancel | Cancel ID zero | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-010 | B | PUT /api/orders/:id/cancel | Cancel negative ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-011 | B | PUT /api/orders/:id/cancel | Cancel decimal ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-012 | B | PUT /api/orders/:id/cancel | Cancel alphabetic ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-013 | B | PUT /api/orders/:id/cancel | Cancel SQL injection ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-014 | B | PUT /api/orders/:id/cancel | Cancel XSS ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-015 | B | PUT /api/orders/:id/cancel | Cancel very large ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-016 | B | PUT /api/orders/:id/cancel | Cancel nonexistent ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-017 | B | PUT /api/orders/:id/cancel | Cancel missing path ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-018 | B | PUT /api/orders/:id/cancel | Cancel with query-string noise | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-019 | B | PUT /api/orders/:id/cancel | Cancel with trailing slash | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-020 | B | PUT /api/orders/:id/cancel | Cancel missing JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-021 | B | PUT /api/orders/:id/cancel | Cancel malformed JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-022 | B | PUT /api/orders/:id/cancel | Cancel expired JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-023 | B | PUT /api/orders/:id/cancel | Cancel another user order IDOR | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-024 | B | PUT /api/orders/:id/cancel | Cancel using admin token | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-025 | B | PUT /api/orders/:id/cancel | Authorization header lowercase variation | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-026 | B | PUT /api/orders/:id/cancel | Authorization missing Bearer prefix | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-027 | B | PUT /api/orders/:id/cancel | Empty Bearer token | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-028 | B | PUT /api/orders/:id/cancel | Method GET rejected | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-029 | B | PUT /api/orders/:id/cancel | Unexpected request body | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-030 | B | PUT /api/orders/:id/cancel | Response success schema | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| B-031 | B | PUT /api/orders/:id/cancel | State persisted as canceled | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| B-032 | B | PUT /api/orders/:id/cancel | History reflects cancellation | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| B-033 | B | PUT /api/orders/:id/cancel | Concurrent cancel race | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| B-034 | B | PUT /api/orders/:id/cancel | Cancel after admin confirmation | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| B-035 | B | PUT /api/orders/:id/cancel | Cancel after admin shipping | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| B-036 | B | PUT /api/orders/:id/cancel | Student: cancel response time boundary | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| B-037 | B | PUT /api/orders/:id/cancel | Student: repeated cancel after network retry | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| B-038 | B | PUT /api/orders/:id/cancel | Student: owner token with whitespace | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| B-039 | B | PUT /api/orders/:id/cancel | Student: unicode path input | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| B-040 | B | PUT /api/orders/:id/cancel | Student: cancel seeded fixture only | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| C-001 | C | PUT /api/admin/orders/:id/status | Admin pending to confirmed | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-002 | C | PUT /api/admin/orders/:id/status | Admin confirmed to shipping | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-003 | C | PUT /api/admin/orders/:id/status | Admin shipping to delivered | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-004 | C | PUT /api/admin/orders/:id/status | Admin pending to canceled | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-005 | C | PUT /api/admin/orders/:id/status | Admin confirmed to canceled | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-006 | C | PUT /api/admin/orders/:id/status | Admin shipping to canceled rejected | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-007 | C | PUT /api/admin/orders/:id/status | Admin delivered to canceled rejected | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-008 | C | PUT /api/admin/orders/:id/status | Admin canceled to pending rejected | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-009 | C | PUT /api/admin/orders/:id/status | Admin delivered to confirmed rejected | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-010 | C | PUT /api/admin/orders/:id/status | Admin invalid returned status | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-011 | C | PUT /api/admin/orders/:id/status | Admin status missing | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-012 | C | PUT /api/admin/orders/:id/status | Admin status null | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-013 | C | PUT /api/admin/orders/:id/status | Admin status empty string | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-014 | C | PUT /api/admin/orders/:id/status | Admin status numeric | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-015 | C | PUT /api/admin/orders/:id/status | Admin status mixed case | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-016 | C | PUT /api/admin/orders/:id/status | Admin status whitespace | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-017 | C | PUT /api/admin/orders/:id/status | Admin status SQL injection | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-018 | C | PUT /api/admin/orders/:id/status | Admin status XSS payload | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-019 | C | PUT /api/admin/orders/:id/status | Admin unknown extra field | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-020 | C | PUT /api/admin/orders/:id/status | Admin missing JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-021 | C | PUT /api/admin/orders/:id/status | Admin malformed JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-022 | C | PUT /api/admin/orders/:id/status | Admin expired JWT | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-023 | C | PUT /api/admin/orders/:id/status | User token denied | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-024 | C | PUT /api/admin/orders/:id/status | Another non-admin token denied | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-025 | C | PUT /api/admin/orders/:id/status | Admin order ID zero | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-026 | C | PUT /api/admin/orders/:id/status | Admin order negative ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-027 | C | PUT /api/admin/orders/:id/status | Admin decimal ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-028 | C | PUT /api/admin/orders/:id/status | Admin alphabetic ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-029 | C | PUT /api/admin/orders/:id/status | Admin SQL injection ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-030 | C | PUT /api/admin/orders/:id/status | Admin nonexistent ID | AI-generated | VALID | Traceable to specification/security rule; executable after isolated setup. |  |
| C-031 | C | PUT /api/admin/orders/:id/status | Admin missing path ID | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| C-032 | C | PUT /api/admin/orders/:id/status | Admin GET method rejected | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| C-033 | C | PUT /api/admin/orders/:id/status | Admin response schema/message | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| C-034 | C | PUT /api/admin/orders/:id/status | Transition persists in order detail | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| C-035 | C | PUT /api/admin/orders/:id/status | Concurrent status update race | AI-generated | INCOMPLETE | Exact validation/status is ambiguous in specification; student must verify oracle and record correction. |  |
| C-036 | C | PUT /api/admin/orders/:id/status | Student: duplicate confirmed transition | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| C-037 | C | PUT /api/admin/orders/:id/status | Student: admin token whitespace | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| C-038 | C | PUT /api/admin/orders/:id/status | Student: JSON array body | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| C-039 | C | PUT /api/admin/orders/:id/status | Student: oversized status string | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |
| C-040 | C | PUT /api/admin/orders/:id/status | Student: state transition after checkout fixture | Student-added | VALID | Student-added gap case; verify precondition and expected status before final execution. |  |

## Audit notes

- `VALID`: oracle is traceable to API specification/security rule and can be executed with isolated setup.
- `INCOMPLETE`: exact validation/status/schema is not fully specified; student must verify against SUT/spec before treating it as an executable assertion.
- Student-added cases are the final five rows of each API and target retry, concurrency, encoding, idempotency, or fixture-control gaps.