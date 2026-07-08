# HW02 Agent Skills Catalog

Use these skills for the HW02 EShop workflow. Each skill is intentionally scoped so the demo can show disciplined AI-first testing instead of one generic prompt.

| Skill | Purpose | Suggested demo step |
| --- | --- | --- |
| `eshop-feature-inspector` | Inspect one EShop feature and extract actors, flows, inputs, states, constraints, and assumptions. | Start from a selected feature and produce a feature brief. |
| `domain-testing-designer` | Convert the feature brief into input domains, equivalence classes, and Domain Testing test cases. | Generate partitions and domain test cases. |
| `boundary-value-analysis-designer` | Identify numeric/text/date/state boundaries and produce BVA test cases. | Generate boundary inventory and BVA cases. |
| `ai-gap-analysis-reviewer` | Compare AI-generated tests with student review and explain missed cases/bugs. | Show AI missed cases and student fixes. |
| `github-bug-report-writer` | Convert failed test evidence into GitHub Issue-ready bug reports. | Draft bug reports after execution. |

## Recommended Demo Flow

1. Use `eshop-feature-inspector` on one selected feature.
2. Use `domain-testing-designer` to produce domain partitions and test cases.
3. Use `boundary-value-analysis-designer` to produce boundary cases.
4. Execute selected tests manually on EShop.
5. Use `github-bug-report-writer` for failed cases.
6. Use `ai-gap-analysis-reviewer` to document what AI missed.

Record this end-to-end flow and put the video link in `demo-videos/link-video.md`.
