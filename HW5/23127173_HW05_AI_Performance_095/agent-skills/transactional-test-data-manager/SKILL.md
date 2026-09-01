---
name: transactional-test-data-manager
description: Prepare and validate isolated test data for state-changing API performance workflows. Use when virtual users need independent accounts or records that must be seeded, reset, or excluded safely between runs.
---

# Transactional Test Data Manager

Prepare safe, repeatable data for workflows whose last step changes persistent state.

## Data rules

- Allocate one test account and enough eligible records for each concurrent virtual user and intended repetition; never make multiple users cancel the same order.
- For the HW5 workflow, seed or reset orders to `pending` or `confirmed` before a run. Exclude `canceled` orders from the cancel target selector.
- Store only non-production test identifiers in CSV. Keep passwords, JWTs, cookies, and other secrets out of committed files and screenshots.
- Track the seed/reset method, time, account/record counts, and any lockout reset. Preserve the actual procedure as evidence, but do not invent completion records.

## Pre-run validation

Confirm that login succeeds for every CSV row, `GET /api/orders/my-orders` returns an eligible order for each user, and cancellation is authorized only for that user. Stop and report the missing precondition rather than silently reusing a record.

## Boundary

This skill may design a seed/reset procedure, but it must not reset a live database or create accounts/orders without explicit authorization.
