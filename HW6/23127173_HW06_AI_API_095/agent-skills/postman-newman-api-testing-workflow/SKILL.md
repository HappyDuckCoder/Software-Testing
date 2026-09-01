---
name: postman-newman-api-testing-workflow
description: Design, audit, execute, and report professional Postman/Newman API tests for one selected EShop HW06 endpoint, with traceability and real execution evidence.
metadata:
  short-description: Design and run auditable EShop API tests
---

# Professional Postman + Newman API Testing Workflow

Use this skill for **one selected HW06 API at a time**. It implements the required pipeline: AI generation, human audit, student extension, Postman/Newman execution, bug triage and CI/CD evidence. It prepares draft artifacts but never fabricates runtime output, screenshots, pipeline runs, GitHub Issues, or a self-drawn diagram.

## Required inputs

Before designing cases, obtain and record:

- Endpoint, HTTP method, feature ID and required pool (A, B, or C).
- Current `Eshop/api_specification.md`, relevant feature rules, and matching HW2 artifact. HW2 defects are hypotheses only, never HW06 evidence.
- Base URL, SUT version/commit, test date/time, test user/admin accounts, safe data IDs, reset/cleanup procedure and owner of mutable data.
- The response contract and an explicit oracle source for every expected status/body field. Where the specification is ambiguous, mark the case `INCOMPLETE`; do not guess an oracle.

Stop and ask for direction if the selected API duplicates a teammate's API, a destructive reset would affect shared data, or a required behavior cannot be established from the specification/running SUT.

## Required outputs per API

Produce linked, reviewable artifacts:

1. AI draft of at least **35 cases**, with every parameter/condition traceable to a source rule.
2. An audit verdict (`VALID`, `INVALID`, `INCOMPLETE`) and human correction for **every** AI-generated case.
3. At least **five student-originated** cases absent from the AI draft, with an explanation of the gap.
4. A Postman collection, safe environment/data files, and request/assertion implementation.
5. A real Postman run and a real Newman CLI/HTML report; record command, hostname, timestamp and run identifier.
6. A local bug-report update for reproducible defects; create a GitHub Issue only **after the user verifies and authorizes it**.
7. CI/CD evidence only for actual remote runs; if CI fails, diagnose/fix, commit and push a new revision before marking the pipeline healthy.

Use [references/test-case-contract.md](references/test-case-contract.md) for the case schema and coverage matrix. Use [references/postman-newman-and-ci.md](references/postman-newman-and-ci.md) while building or running the collection.

## Phase 1 - Model the API before prompting AI

Build a concise endpoint model containing:

- Request: path/query/header/body fields, type, requiredness, format, range/length/enum and field dependencies.
- Actor and boundary: anonymous, authenticated user, owner, other user, admin, expired/malformed/missing JWT.
- State: initial state, allowed transitions, forbidden transitions and terminal states for a stateful endpoint.
- Response: success and error status codes, required JSON fields/types, forbidden data disclosure, persistence/side-effect expectations.
- Risks: injection, IDOR/BOLA, broken function-level authorization, mass assignment, malformed JSON/content type, duplicate/replay, invalid identifiers and business-rule bypass.

For HW06's selected endpoints, explicitly model:

| Endpoint | Non-negotiable risk focus |
| --- | --- |
| `PUT /api/users/me` | JWT handling, self-only update, field validation, unintended role/account mutation, no password/token leakage. |
| `PUT /api/orders/:id/cancel` | Ownership/IDOR, no/invalid JWT, valid cancellation states, terminal-state handling, idempotency/replay. |
| `PUT /api/admin/orders/:id/status` | Admin-only authorization, user-token escalation, full order state machine, invalid enum/body/ID and terminal states. |

Do not claim SEC-01--SEC-07 coverage merely because a security test was generated. Map a case to a named security requirement only after its exact wording has been located and reviewed.

## Phase 2 - AI generation, audit and extension

Use staged prompts rather than one generic request:

1. Ask AI to extract the endpoint contract and list uncertainties.
2. Ask for domain partitions and boundary values for each input.
3. Ask separately for authentication/authorization, ownership/IDOR, state-transition and schema-negative cases.
4. Ask for a candidate matrix, then audit it row by row against the endpoint model.

Every generated case needs a deterministic ID, source prompt ID and `origin=AI`. Audit as follows:

- `VALID`: precondition, request and expected oracle agree with the specification and SUT behavior.
- `INVALID`: a stated expected result/assumption is wrong; preserve the original idea, write the correction and reason.
- `INCOMPLETE`: an oracle, precondition, reset method, expected schema or security rule is missing; resolve it before execution or explicitly exclude it.

Add at least five `origin=STUDENT` cases per API. They must be substantively new, not trivial duplicates. Prefer security and state cases AI tends to omit: two-user ownership, role escalation, terminal-state transitions, invalid content type, missing/extra field, duplicate request and response data exposure.

## Phase 3 - Design quality gate

Before implementing Postman, complete the coverage matrix in the test-case contract. It must show at least one meaningful case for every applicable category:

- valid and invalid partitions for each input;
- boundary/null/missing/type/format/enum combinations;
- missing, malformed, expired and valid authentication;
- user vs owner vs other user vs admin authorization boundary;
- valid, invalid, skipped and terminal state transitions;
- expected status, JSON type/required fields and no-sensitive-field schema checks;
- safe setup, data isolation and cleanup;
- traceability to feature/spec/security rule and audit evidence.

Reject weak cases that assert only `status === 200` when a response/body/state assertion is possible. Avoid combinatorial explosion: combine independent low-risk partitions deliberately, but never collapse a high-risk authorization or state transition into a generic happy-path case.

## Phase 4 - Implement Postman collection

Use one collection with folders per selected API and a naming pattern: `<API>-<TC-ID>-<short-purpose>`.

Collection/environment rules:

- Use variables for `baseUrl`, `userToken`, `otherUserToken`, `adminToken`, resource IDs and run identifiers; never commit passwords or live JWTs.
- Set `X-Student-Id: 23127173` at collection level so every request carries it. Capture a real Postman Console screenshot proving it.
- Authenticate/setup requests may be helper requests; clearly distinguish them from counted test cases.
- Set a fresh test-data prefix and cleanup only resources owned by that prefix. For stateful orders, seed/reset a known state before every mutable test.
- Use data files only when the case matrix identifies the changing data and expected result. Record the data file version and row count.

In every test script, assert what the oracle requires: status, content type, JSON parseability, schema/required fields, key business fields, security non-disclosure and state/persistence where observable. See the implementation reference for safe assertion patterns.

## Phase 5 - Execute and preserve evidence

Run the reviewed collection in Postman first. Then execute the same committed collection with Newman against the declared environment. Record the exact command, environment/data file, hostname, start/end time, collection revision and pass/fail totals.

Treat a run as invalid when its target URL, collection revision, student-ID header, required setup/data, or report cannot be identified. Do not edit JUnit/JSON/HTML/Newman output after execution.

If a test fails, first classify it as test defect, environment/data/setup problem, specification ambiguity, or probable SUT defect. Re-run a reproducible probable SUT defect with isolated data, update the local bug report, and **wait for user verification** before creating a GitHub Issue. Preserve actual request/response while redacting secrets.

## Phase 6 - CI/CD and reporting

Add CI only after a local Newman run succeeds. The pipeline must checkout the intended revision, provision/start the SUT, perform a health check, run Newman with the same collection/environment/data strategy, fail on assertion failure and upload reports/artifacts.

The required passing and failing CI examples must be real runs with commit hashes, workflow URLs and screenshots. The failing example must identify the intentional or observed failing test and must not be mislabeled as a product defect merely to satisfy the requirement. A failed CI run enters a fix-then-push loop: determine whether the failure is test, environment, workflow or SUT configuration; fix only authorized repository material; re-run locally where possible; commit/push; then record the next CI result.

Update the main report, Excel summary, AI Audit and text commit log after every material phase. Make separate commits for generation, audit, extension and execution of each API when practicable.

## Evidence integrity and stopping rules

- The generator design diagram submitted for HW06 is self-drawn by the student. The asset in this skill is only a user-provided workflow reference.
- Never invent report metrics, screenshots, a Newman hostname, CI workflow URL, Issue number, test result or bug.
- Treat GitHub Issue creation and repository push as external changes: after a reproducible defect is written locally, pause for user verification/authorization before creating the Issue; do not infer consent from a local bug report.
- Do not run destructive database resets, delete shared resources or publish/push without current authorization.
- If AI output conflicts with the specification or actual SUT, retain the discrepancy in the audit and use the verified oracle; do not silently rewrite history.

## Workflow reference

The student-provided workflow diagram is at [assets/hw6-api-testing-workflow.svg](assets/hw6-api-testing-workflow.svg).
