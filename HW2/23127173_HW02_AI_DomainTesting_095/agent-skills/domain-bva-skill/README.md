# Domain + BVA Agent Skill Draft

## Goal

Create a reusable assistant rule/skill that helps apply Domain Testing and Boundary Value Analysis to an EShop feature.

This early draft is kept for continuity. For the final HW02 submission, prefer the dedicated skills one level above:

* `eshop-feature-inspector`
* `domain-testing-designer`
* `boundary-value-analysis-designer`
* `ai-gap-analysis-reviewer`
* `github-bug-report-writer`

## Input

The skill should receive:

* feature name and feature ID,
* actor/role,
* UI behavior or source/spec notes,
* input variables,
* known validation rules,
* state transitions,
* existing seed data,
* constraints or assumptions.

## Expected Output

The skill should produce:

1. feature understanding checklist,
2. input domain table,
3. equivalence classes,
4. Domain Testing test cases,
5. boundary inventory,
6. BVA test cases,
7. AI gap checklist,
8. bug report template.

## Demo Requirement

Record a short end-to-end video showing the skill used on one complete feature. Put the link in `../demo-videos/link-video.md`.

## Status

Draft. Implement after selecting and analyzing at least one real feature.
