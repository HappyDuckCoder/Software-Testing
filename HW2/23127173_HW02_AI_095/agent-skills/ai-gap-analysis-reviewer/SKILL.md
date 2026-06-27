---
name: ai-gap-analysis-reviewer
description: Review AI-generated HW02 test artifacts against student observations and EShop behavior. Use when Codex needs to identify missed test cases, missed boundaries, weak assumptions, hallucinated rules, missing bugs, or incomplete reasoning in AI output, then write an AI Gap Analysis section aligned with G9.3 Analyse.
---

# AI Gap Analysis Reviewer

## Workflow

1. Compare the AI-generated output with:
   - verified SUT behavior,
   - source/UI/spec evidence,
   - executed test results,
   - student-found edge cases or bugs.
2. Classify each gap:
   - missed equivalence class,
   - missed boundary,
   - wrong expected result,
   - hallucinated rule,
   - missing role/state constraint,
   - missing negative case,
   - missing bug.
3. Explain why AI missed it:
   - prompt lacked context,
   - AI assumed generic e-commerce behavior,
   - rule was hidden in implementation,
   - feature state was complex,
   - test required execution evidence.
4. Write the student fix and link the corrected test case or bug report.

## Output Format

```markdown
# AI Gap Analysis - <Feature ID> <Feature Name>

| Gap ID | AI output | Missing / incorrect item | Why AI missed it | Student fix | Evidence |
| --- | --- | --- | --- | --- | --- |

## Summary
<Short paragraph connecting the gaps to G9.3 Analyse.>
```

## Guardrails

Do not fabricate AI mistakes. Only report gaps that can be shown from prompt logs, AI output, SUT execution, or student review.
