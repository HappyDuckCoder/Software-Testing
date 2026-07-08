---
name: github-bug-report-writer
description: Write GitHub Issue-ready bug reports for HW02 EShop failed test cases. Use when Codex needs to convert executed failed test cases, screenshots, videos, logs, and observed actual results into concise Markdown bug reports with summary, environment, preconditions, reproduction steps, expected result, actual result, severity, priority, evidence, and issue link placeholders.
---

# GitHub Bug Report Writer

## Workflow

1. Start from a failed executed test case, not from an unverified suspicion.
2. Extract:
   - feature ID/name,
   - environment,
   - preconditions,
   - input data,
   - exact reproduction steps,
   - expected result,
   - actual result,
   - evidence path,
   - suspected severity and priority.
3. Produce:
   - local Markdown bug report,
   - GitHub Issue body,
   - one-line issue title.
4. Keep severity conservative if impact is uncertain.
5. Add a placeholder for the real GitHub Issue URL after the student creates it.

## Output Format

```markdown
# <Bug ID> - <Short Summary>

## Environment
<Browser/device/app version/database seed if known>

## Preconditions
<Required setup>

## Steps to Reproduce
1. ...

## Expected Result
...

## Actual Result
...

## Severity / Priority
Severity: ...
Priority: ...

## Evidence
Screenshot/video/log: ...

## GitHub Issue
URL: TBD
```

## Guardrails

Do not create bugs from tests that were not executed. Do not claim screenshots or videos exist unless the path or URL is provided.
