# Continuous Performance Testing proposal

![Pipeline workflow](workflow.png)

The proposed GitHub Actions workflow runs only for pull requests that change the backend or database. It resets data, runs a JMeter smoke test, compares p95 and error rate against an approved baseline, and uploads JTL/HTML evidence.

Suggested gate: flag regression when p95 increases by more than 20% or error rate exceeds 1%. Selective path triggers reduce CI cost but can miss indirect changes; thresholds that are too strict produce false alarms.

This is a proposal for Task 3, not an enabled production CI workflow. The package now includes a reviewable baseline and comparison script; before enabling it, the team must approve/rebaseline the values under comparable runner conditions and place the workflow in the target repository's `.github/workflows/` directory.
