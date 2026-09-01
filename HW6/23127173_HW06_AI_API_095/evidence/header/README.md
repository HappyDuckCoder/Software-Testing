# Header evidence

The collection-level script injects `X-Student-Id: 23127173` on every request.
The header is verified by actual Newman output in
`../newman-ui/newman-baseline-terminal-20260901.png` and by GitHub Actions
evidence `../ci-cd/ci-04-newman-baseline-student-id-20260901.png`. The
Postman C-001 header image is retained under `../postman-ui/` as request
configuration traceability; it is not mislabeled as the student-ID execution proof.
