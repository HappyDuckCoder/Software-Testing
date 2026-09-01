# CI/CD evidence

GitHub Actions baseline run: [run 33500850638 / job 99833592169](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33500850638/job/99833592169), succeeded in 21 seconds on 01/09/2026.

| File | Evidence |
| --- | --- |
| `ci-01-setup-node-20260901.png` | Workflow/job identity and Node setup log. |
| `ci-02-checkout-eshop-sut-20260901.png` | Public `ttbhanh/eshop-sut` checkout. |
| `ci-03-install-dependencies-20260901.png` | SUT and Newman dependency install. |
| `ci-04-newman-baseline-student-id-20260901.png` | Baseline Newman execution with `X-Student-Id: 23127173`. |
| `ci-05-workflow-succeeded-20260901.png` | Completed baseline job with all workflow steps green. |

The run reported dependency/deprecation warnings; these are documented in the CI report and did not fail the job.
