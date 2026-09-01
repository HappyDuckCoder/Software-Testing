# API test artifacts

- `postman/collections/`: reviewed collection JSON.
- `postman/environments/`: scrubbed shareable environment; keep local secrets untracked.
- `data/`: safe data-driven inputs.
- `newman/raw-output/`: actual CLI output.
- `newman/html-reports/`: actual HTML reports.

Before executing, set a collection-level pre-request script that sends `X-Student-Id: 23127173` on every request and record a real console screenshot in `../evidence/header/`.
