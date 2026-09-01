# Postman Desktop evidence

The student supplied and reviewed these genuine Postman Desktop captures on 01/09/2026:

| Capture | What it proves | Required filename when copied into this folder |
| --- | --- | --- |
| Runner configuration | The collection has the setup and API requests selected, one manual iteration, and the run controls. | `postman-runner-config-20260901.png` |
| Run results | Runner executed one iteration using **New Environment** with **21 passed tests**, **0 failed**, **0 errors**, duration **1.604 s**, and average response time **9 ms**. The selected `SETUP-04 Create shipping order` response is `200` with `Checkout successful` and `orderId: 34`. | `postman-run-results-20260901.png` |
| Request headers | A live request to `http://127.0.0.1:3000/api/checkout` returned `200 OK`; it includes `X-Student-Id: 23127173`. | `postman-request-headers-student-id-20260901.png` |
| Response body | The checkout setup request returned `Checkout successful` and an `orderId`. | `postman-checkout-response-20260901.png` |

The attached chat images are not addressable as local files by this workspace, so their original files must be exported/copied here before packaging the submission. Do not recreate, edit, or claim synthetic screenshots as execution evidence.

## Redaction requirement

The headers capture contains a live `Authorization: Bearer ...` JWT. Before committing or submitting that image, redact only the token value. Keep the endpoint, `200 OK`, `X-Student-Id`, and relevant timing/status visible.

The earlier successful run (21 passed, 2.989 s, average 10 ms) remains consistent, but this newer capture is preferred because it visibly uses the named environment that resolves setup variables. Screens showing an unsent request, request-body editor, or test-script editor are useful design review material but are not execution evidence and are intentionally not retained here.
