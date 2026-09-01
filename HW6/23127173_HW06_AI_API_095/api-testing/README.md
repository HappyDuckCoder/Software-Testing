# API test artifacts

- `postman/collections/`: reviewed collection JSON.
- `postman/environments/`: scrubbed shareable environment; keep local secrets untracked.
- `data/`: safe data-driven inputs.
- `newman/raw-output/`: actual CLI output.
- `newman/html-reports/`: actual HTML reports.

The committed collection has a collection-level pre-request script that sends `X-Student-Id: 23127173` on every request. Local Newman output and remote CI evidence record this header; see `../evidence/newman-ui/` and `../evidence/ci-cd/`.
