# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). Một job `newman` mỗi lần chạy — **`full-pass`** (observation, 0 fail) hoặc **`full-fail`** (oracle, ~12 fail), cùng full 120 TC (182 request).

## Evidence remote (03/09/2026)

| Run | GitHub Actions | Trạng thái job | Newman | Evidence |
| --- | --- | --- | --- | --- |
| **Fail #7** | [run 33739445556](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739445556) · `full-fail` | ❌ Failed (kỳ vọng) · 51s | oracle · ~12 fail | `ci-fail-01`…`ci-fail-03` |
| **Pass #8** | [run 33739588307](https://github.com/HappyDuckCoder/Software-Testing/actions/runs/33739588307) · `full-pass` | ✅ Success · 40s | observation · 0 fail | `ci-pass-01`…`ci-pass-03` |

Ảnh: `evidence/ci-cd/`. Artifacts: `hw6-newman-full-fail` (run #7), `hw6-newman-full-pass` (run #8).

## Local (chuẩn nộp bài)

| Run | Kết quả | Minh chứng |
| --- | --- | --- |
| **Full 120 TC oracle** | 182 req, 182 assert, **12 fail** | `api-testing/newman/raw-output/full-120-20260903.txt`, `evidence/newman-ui/` |

## Ghi chú

- Workflow trên nhánh `main` (Run workflow); push `homework6` auto chạy `full-pass`.
- Commit workflow trên `main`: `8a6b0cc`.
