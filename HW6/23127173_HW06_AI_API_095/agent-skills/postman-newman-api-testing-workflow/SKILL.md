---
name: postman-newman-api-testing-workflow
description: Prepare traceable Postman and Newman API-testing artifacts for EShop after the student has selected an endpoint and confirmed the local SUT.
---

# Postman + Newman API Testing Workflow

Use this skill for one selected HW06 EShop API at a time. Its role is to prepare a reviewed test workflow; it must not invent execution results, screenshots, bug reports, CI runs, or the student's self-drawn diagram.

## Inputs

- The selected endpoint, pool and feature.
- Verified behavior from `Eshop/api_specification.md` and the running SUT.
- Safe test identities/data and a reset/cleanup approach.

## Workflow

1. Read the HW06 requirement, the relevant HW2 feature artifacts, and the EShop API specification. Keep HW2 findings as hypotheses, not evidence for HW06.
2. Create a draft test matrix covering all request parameters, authentication/authorization, ownership/IDOR, security inputs, state transitions where applicable, and response schema. Aim for at least 35 AI-generated cases, then label every case `VALID`, `INVALID`, or `INCOMPLETE` after human review.
3. Add at least five student-originated cases that the AI missed; record the gap and rationale.
4. Build/update the Postman collection and environment. Apply `X-Student-Id: 23127173` to every request through a collection-level pre-request script. Capture a real Postman Console screenshot as evidence.
5. Execute the reviewed collection in Postman and through Newman. Preserve real raw output and HTML reports with hostname, command and timestamp.
6. Add the same collection to CI only after local execution works. Record one real passing run and one real failing run, each with link and screenshot.
7. Update the main report, test workbook, AI Audit and commit log. Create a GitHub Issue only for a reproducible genuine defect.

## Required human checks

- Compare all expected statuses, fields and state rules against the specification and actual SUT.
- Confirm that test data is owned by the intended actor and cleanup does not affect shared data.
- Do not treat a generated report, diagram, screenshot or inferred result as real evidence.

## Workflow reference

The student-provided workflow diagram is retained at [assets/hw6-api-testing-workflow.svg](assets/hw6-api-testing-workflow.svg). It is reference material for this skill, not an AI-generated replacement for the self-drawn submission diagram.
