# HW02 Submission Checklist

Review date: 2026-06-27  
Scope: roadmap, folder structure, AI audit bootstrap, and future HW02 deliverables.

## 1. Global Requirements

| Requirement | Status | Evidence | Note |
| --- | --- | --- | --- |
| 4 selected features, one per pool | Pending | `README.md` | Must confirm with group to avoid duplicate feature. |
| Domain Testing for each feature | Pending | `requirement/feature-*/domain-testing/` | Needs partitions, valid/invalid classes, representative values. |
| Boundary Value Analysis for each feature | Pending | `requirement/feature-*/boundary-value-analysis/` | Needs boundary values and BVA test cases. |
| AI Gap Analysis | Pending | `requirement/feature-*/ai-gap-analysis/` | Must explain missed tests/bugs and student fixes. |
| Bug reports in Markdown | Pending | `requirement/feature-*/bug-report/` | Must match GitHub Issues. |
| GitHub Issues with screenshots | Pending | `evidence/github-issues/` | Screenshots must show issue pages. |
| AI Audit Report | Started | `doc/md/AI Audit/01_AI-Audit-Report.md` | First prompt has been added. |
| Prompt log | Started | `doc/md/appendixA-prompt-log.md` | First prompt has been added. |
| AI Critique 200-300 words | Pending | `doc/md/AI Audit/02_AI-Critique.md` | Write near the end after observing AI failures. |
| Mandatory Disclosure | Pending | `doc/md/AI Audit/03_Mandatory-Disclosure.md` | Fill with actual AI contribution. |
| Privacy Checklist | Pending | `doc/md/AI Audit/04_AI-Privacy-Checklist.md` | Tick before submission. |
| Git commit log | Pending | `doc/md/Git Commit Log/git-commit-log.txt` | Export after final commits. |
| Agent Skill + demo | Pending | `agent-skills/` | Needed for up to 10 points. |
| Main report Markdown + PDF | Pending | `doc/md/main-report.md`, `doc/pdf/` | Export PDF before zip. |
| README self-assessment + test summary | Started | `README.md` | Update after test execution. |

## 2. Feature-Level Checklist

Repeat this table for Feature A, B, C, and D.

| Item | Feature A | Feature B | Feature C | Feature D |
| --- | --- | --- | --- | --- |
| Feature selected | [ ] | [ ] | [ ] | [ ] |
| Feature rule/source inspected | [ ] | [ ] | [ ] | [ ] |
| Domain variables listed | [ ] | [ ] | [ ] | [ ] |
| Valid/invalid partitions listed | [ ] | [ ] | [ ] | [ ] |
| Domain test cases written | [ ] | [ ] | [ ] | [ ] |
| Boundary values listed | [ ] | [ ] | [ ] | [ ] |
| BVA test cases written | [ ] | [ ] | [ ] | [ ] |
| Tests executed | [ ] | [ ] | [ ] | [ ] |
| Actual/Verdict updated | [ ] | [ ] | [ ] | [ ] |
| Bugs reported to GitHub | [ ] | [ ] | [ ] | [ ] |
| AI gap analysis written | [ ] | [ ] | [ ] | [ ] |
| Prompt/audit updated | [ ] | [ ] | [ ] | [ ] |
| Commit log updated | [ ] | [ ] | [ ] | [ ] |

## 3. High-Risk Items

| Risk | Mitigation |
| --- | --- |
| No actual execution evidence | Run the main happy path and selected negative/boundary cases for each feature. |
| AI Audit is incomplete | Add each major prompt immediately after using AI. |
| Bug reports are not real GitHub Issues | Create issues on GitHub and capture screenshots. |
| Agent Skill is too vague | Provide a reusable skill/rule and demo it on one full feature. |
| Feature D mobile cannot run | Document environment limitation and use an acceptable mobile/responsive execution path if approved. |
