---
name: performance-testing-and-log-analysis
description: Plan and review repeatable API performance tests for EShop-style workflows, including raw JTL evidence and AI-analysis verification. Use for performance-test preparation or result review, not to fabricate execution evidence.
---

# Performance Testing and Log Analysis

Use this skill when preparing or reviewing a complete Load, Stress, Spike, or endurance workflow. It preserves the distinction between AI-authored plans and student-generated execution evidence.

## Workflow

1. Confirm the real API method, route, authorization, request/response fields, and mutable-state preconditions from source or a live SUT.
2. Map the workflow to auth-heavy, read-heavy, and transactional endpoint groups. Preserve token and response-variable extraction between steps.
3. Design Load, Stress, and Spike separately, with distinct report/listener views and defensible ramp-up, think-time, users, assertions, and termination conditions.
4. Require CSV-driven test accounts and sufficient independent mutable records per virtual user. Do not reuse a one-time transaction target without a reset/seed plan.
5. After an authorized real run, preserve raw `.jtl`, generated HTML report, tool/resource-monitor screenshot, hardware evidence, and the commands used to reset test state.
6. When AI analyses a result, compare every threshold, latency, throughput, and error-rate claim against raw logs. Record errors and feasibility of proposed optimizations in the AI Audit.

## Evidence boundary

Never generate, alter, summarize as raw, or infer actual performance results, `.jtl` files, HTML reports, monitor screenshots, hardware measurements, or video evidence. Label unexecuted content as a plan or template.

## HW5 workflow note

For this submission, the selected workflow is `POST /api/login` -> `GET /api/orders/my-orders` -> `PUT /api/orders/:id/cancel`. Read [the API selection](../../doc/md/api-selection.md) before preparing the plan.
