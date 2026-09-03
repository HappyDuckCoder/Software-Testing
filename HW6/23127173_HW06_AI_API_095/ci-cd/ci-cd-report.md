# CI/CD report

## Configuration

Workflow: [`.github/workflows/hw6-api-tests.yml`](../../../.github/workflows/hw6-api-tests.yml). Hai job **full 120 TC**: `full-pass` (observation, 0 fail) và `full-fail` (oracle, ~12 fail).

## Evidence remote

| Run | Trạng thái | Evidence |
| --- | --- | --- |
| **Pass** (03/09) | ✅ Có ảnh | `evidence/ci-cd/ci-06`…`ci-10` |
| **Fail** (`full-fail`) | ⏳ Chờ SV chụp | Run workflow → `full-fail` |

## Local (chuẩn nộp bài)

| Run | Kết quả | Minh chứng |
| --- | --- | --- |
| **Full 120 TC oracle** | 182 req, 182 assert, **12 fail** | `api-testing/newman/raw-output/full-120-20260903.txt`, `evidence/newman-ui/` |

## Ghi chú

- Ảnh `ci-01`…`ci-05` (baseline 01/09) đã xóa — suite cũ, không dùng.
- Fail CI phải từ job `oracle-fail` mới (182/12), không dùng run baseline lỗi trước đó.
