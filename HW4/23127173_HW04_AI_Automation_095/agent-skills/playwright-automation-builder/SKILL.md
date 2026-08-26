---
name: playwright-automation-builder
description: Build data-driven Playwright automation for EShop HW04 from HW2 domain/BVA test cases — JSON data, multi-browser runs, AI gap review.
---

# Playwright Automation Builder (HW04 / EShop)

## When to use

- Automating FR-04, FR-11, or FR-18 for CS423 HW04.
- Converting HW2 manual test cases into Playwright scripts.
- Maintaining scripts after AI-generated first draft.

## Inputs required

1. Feature ID and HW2 report path.
2. EShop running locally (`BASE_URL`, `ADMIN_BASE_URL`).
3. Test credentials in `.env` (never commit `.env`).
4. List of ≥ 12 test cases to automate (IDs from HW2).

## Workflow (AI-first, step by step)

### Step 1 — Select test cases

From HW2 Domain/BVA tables, pick ≥ 12 cases mixing positive, negative, edge.

Output: table `Auto ID | HW2 ref | type | assertion pattern`.

### Step 2 — Design data file

Create `automation/data/feature-*.json`:

```json
{
  "featureId": "FR-04",
  "tests": [
    {
      "id": "A-AUTO-01",
      "hw2Ref": "A-DT-01",
      "type": "positive",
      "description": "...",
      "assertionPattern": "url",
      "input": {},
      "expected": {}
    }
  ]
}
```

**Rule:** No inline test arrays inside `.spec.ts`.

### Step 3 — Generate spec skeleton

- Use `helpers/auth.ts` for login.
- Loop `loadTestData()` rows into `test()` blocks.
- Use ≥ 3 assertion types: URL, visibility/text, count/attribute/state.

### Step 4 — Human review checklist

- [ ] Selectors match real DOM (inspect Profile.jsx / admin App.jsx).
- [ ] Waits use `expect` not fixed `sleep`.
- [ ] Skipped cases documented with reason.
- [ ] `.env.example` updated, secrets not in repo.

### Step 5 — Multi-browser + report

```bash
npm run test:feature-a -- --project=chromium
npm run test:feature-a -- --project=firefox
npm run test:feature-a -- --project=webkit
```

Verify HTML report shows `Run by: 23127173` in metadata.

### Step 6 — AI gap analysis

Document: fragile selectors, missing edge cases, wrong assumptions, flaky waits.

## Guardrails

- Do NOT fabricate Pass/Fail or HTML reports.
- Do NOT commit passwords or JWT tokens.
- Do NOT use one generic prompt for entire suite — follow steps above.
- Commits for grading: only `.spec.ts` changes count toward 8-commit minimum.

## Output artifacts

| Artifact | Path |
| --- | --- |
| Data | `automation/data/` |
| Specs | `automation/tests/` |
| Reports | `evidence/html-reports/` |
| Gap analysis | `requirement/feature-*/ai-gap-analysis/` |
| Audit | `doc/md/AI Audit/01_AI-Audit-Report.md` |
