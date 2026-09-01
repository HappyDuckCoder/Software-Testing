# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). It checks out this repository and the public EShop SUT, installs Node dependencies, starts the backend, polls `GET /api/products`, runs the baseline Newman suite, then uploads the raw/HTML reports even when a later step fails.

The workflow deliberately uses `mode=baseline`: it verifies the reproducible collection flow against the current SUT. The compliance mode is executed separately because it retains requirement-based oracles for the known defects and is expected to fail until those defects are fixed.

## Evidence

| Run | Commit | Result | Workflow link | Screenshot |
| --- | --- | --- | --- | --- |
| Local baseline | Pending commit | 20 requests, 21 assertions, 0 failures | N/A - local Newman | `api-testing/newman/html-reports/baseline/` |
| Local compliance | Pending commit | 20 requests, 21 assertions, 3 expected failures | N/A - local Newman | `api-testing/newman/html-reports/compliance/` |
| Remote baseline | `de7f6e7` | **Succeeded** in 21 s | [run 33500850638 / job 99833592169](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638/job/99833592169) | `evidence/ci-cd/ci-01` to `ci-05` |

## Remote run verification

The student supplied five original GitHub Actions captures. They show all configured stages: setup Node, checkout EShop SUT, install dependencies, run the baseline Newman suite with `X-Student-Id: 23127173`, artifact-ready cleanup, and a green `baseline` job.

The logs include a Node 20 deprecation notice because GitHub Actions defaults to Node 24 and downloads Node 20 for the workflow. Dependency-install warnings report vulnerabilities in the SUT/dependency trees. Neither warning failed the baseline job; they remain maintenance risks, not a passing-test claim.

There is no remote failing run evidence in this submission. The intentionally failing compliance suite remains documented as a local requirement-oracle run rather than being misrepresented as a healthy CI baseline.
