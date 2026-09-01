# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). It checks out this repository and the public EShop SUT, installs Node dependencies, starts the backend, polls `GET /api/products`, runs the baseline Newman suite, then uploads the raw/HTML reports even when a later step fails.

The workflow deliberately uses `mode=baseline`: it verifies the reproducible collection flow against the current SUT. The compliance mode is executed separately because it retains requirement-based oracles for the known defects and is expected to fail until those defects are fixed.

## Evidence

| Run | Commit | Result | Workflow link | Screenshot |
| --- | --- | --- | --- | --- |
| Local baseline | Pending commit | 20 requests, 21 assertions, 0 failures | N/A - local Newman | `api-testing/newman/html-reports/baseline/` |
| Local compliance | Pending commit | 20 requests, 21 assertions, 3 expected failures | N/A - local Newman | `api-testing/newman/html-reports/compliance/` |
| Remote passing run | Pending push | Not yet triggered | Pending | Pending |
| Remote failing run | Pending push | Not yet triggered | Pending | Pending |

Remote run URLs/screenshots are intentionally left pending until the workflow is pushed and executed; no CI evidence has been fabricated.
