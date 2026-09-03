# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). Một job `newman` mỗi lần chạy — **`full-pass`** (observation, 0 fail) hoặc **`full-fail`** (oracle, ~12 fail), cùng full 120 TC (182 request).

## Evidence remote (03/09/2026)

| Run | GitHub Actions | Trạng thái job | Evidence |
| --- | --- | --- | --- |
| **Fail** | [#7](https://github.com/HappyDuckCoder/Software-Testing/actions) · `full-fail` | ❌ Failed (kỳ vọng) | `ci-fail-01`…`ci-fail-03` |
| **Pass** | [#8](https://github.com/HappyDuckCoder/Software-Testing/actions) · `full-pass` | ✅ Succeeded | `ci-pass-01`…`ci-pass-03` |

Tất cả ảnh trong `evidence/ci-cd/`. Artifact: `hw6-newman-full-fail.zip` (run fail).

## Local (chuẩn nộp bài)

| Run | Kết quả | Minh chứng |
| --- | --- | --- |
| **Full 120 TC oracle** | 182 req, 182 assert, **12 fail** | `api-testing/newman/raw-output/full-120-20260903.txt`, `evidence/newman-ui/` |

## Ghi chú

- Workflow trên nhánh `main` (Run workflow); push `homework6` auto chạy `full-pass`.
- Ảnh `ci-01`…`ci-10` đã xóa — thay bằng bộ pass/fail mới (run #7 / #8).
