# Postman Desktop evidence

The student supplied and reviewed these five genuine Postman Desktop captures on 01/09/2026. They are the required evidence set; captions distinguish execution evidence from request/configuration traceability.

| No. | Capture | What it proves | Filename |
| --- | --- | --- |
| 1 | Runner configuration | The collection has the setup/API requests selected, one iteration, persistence and variable settings, and the Start run action. | `postman-runner-config-20260901.png` |
| 2 | Run summary | Runner executed one iteration using **New Environment** with **21 passed**, **0 failed**, **0 errors**, duration **1.669 s**, and average response **9 ms**. | `postman-run-results-20260901.png` |
| 3 | Run details / observed behavior | Detail view shows positive, negative and observed-defect cases: expected 404/401/400 checks pass, while the observed FR-10 and SEC-03 defects return 200 and are explicitly labeled. | `postman-run-details-negative-cases-20260901.png` |
| 4 | C-001 request body | Traceability for `PUT /api/admin/orders/{{adminOrderId}}/status` using `{ "status": "confirmed" }`. It is configuration evidence, not a sent-result capture. | `postman-c001-request-body-20260901.png` |
| 5 | C-001 request headers | Traceability for the same request with `Authorization: Bearer {{adminToken}}`. It is configuration evidence, not a sent-result capture. | `postman-c001-request-headers-20260901.png` |

All five original files supplied by the student are now stored in this directory under the filenames above. They are direct Postman Desktop captures, not recreated images.

## Redaction requirement

If a sent-result headers capture contains a live `Authorization: Bearer ...` JWT, redact only the token value. Keep the endpoint, `200 OK`, `X-Student-Id`, and relevant timing/status visible.

The earlier successful run (21 passed, 2.989 s, average 10 ms) remains consistent, but the newer run is preferred because it visibly uses the named environment that resolves setup variables. Screens 4 and 5 are deliberately retained as configuration traceability and are not interpreted as sent-result evidence.
