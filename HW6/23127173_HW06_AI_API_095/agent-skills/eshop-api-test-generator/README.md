# EShop API Test Generator - design

## Input/output contract

Input: selected endpoint(s), API specification, security requirements, state model and constraints. Output: a draft test matrix with IDs, partitions, preconditions, request, expected HTTP/status/schema, traceability and an explicit `NEEDS_HUMAN_REVIEW` flag.

## Required self-drawn diagram

Create `generator-design.png` manually using a diagramming tool before submission. It should show: specification parser -> endpoint/parameter model -> coverage planner (domain/state/security/schema) -> test generator -> duplicate/risk check -> human audit -> Postman export. Do not generate the final diagram with AI.

## Pseudocode

```text
parse specification into endpoints, parameters, schemas, roles and states
for each selected endpoint:
    derive valid and invalid partitions for every parameter
    derive allowed and forbidden transitions when stateful
    derive authentication, authorization, injection and IDOR threats
    combine partitions with risk-based pairwise/full boundary coverage
    create test cases with expected status and response-schema assertions
    tag each case with source requirement and NEEDS_HUMAN_REVIEW
deduplicate cases and expose coverage gaps
human reviews every case, corrects oracle/preconditions, and approves export
export only approved cases to Postman/Excel format
```

The pseudocode is a draft design aid; validate every endpoint and rule against EShop before implementation/demo.
