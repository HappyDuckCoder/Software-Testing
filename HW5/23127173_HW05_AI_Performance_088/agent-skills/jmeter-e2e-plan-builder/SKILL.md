---
name: jmeter-e2e-plan-builder
description: Design a JMeter end-to-end API test plan with CSV data, token extraction, response-driven variables, assertions, and scenario-specific load settings. Use for creating or reviewing test plans, not for running or inventing their evidence.
---

# JMeter E2E Plan Builder

Create a reviewable JMeter plan for an API workflow after endpoint details have been verified.

## Required design decisions

- Keep authentication, read, and transactional samplers in one E2E thread workflow.
- Configure CSV Data Set Config for non-secret test credentials. Extract the JWT from login and pass it as a Bearer header to protected samplers.
- Extract the target identifier from a prior response. Do not hard-code a shared mutable ID when the final request changes state.
- Give every sampler a response assertion appropriate to its expected status and key response field. Add a transaction controller or equivalent timing boundary around the workflow.
- Build separate Load, Stress, and Spike plans with separately justified users, ramp-up, hold duration, think-time, and stop rule. Use a different listener/report type per scenario.
- Save the plan with `{StudentID}_{ScenarioType}_{YYYYMMDD}` and configure it to write a raw `.jtl` file outside the plan source file.

## Review checklist

Before execution, flag missing authorization propagation, shared order collisions, insufficient data rows, unrealistic timing, weak success-only assertions, and unhandled login lockout. Document every correction in the report and AI Audit.

## Boundary

Do not claim a plan ran successfully until the student supplies run evidence. Do not create synthetic `.jtl`, HTML report, or screenshot artifacts.
