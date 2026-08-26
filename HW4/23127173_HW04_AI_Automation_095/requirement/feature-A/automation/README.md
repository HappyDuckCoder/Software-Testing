# Automation evidence — Feature A (FR-04)

Playwright source: **`../../../automation/`** (push GitHub từ thư mục đó).

Minh chứng execution (17/08/2026):

| Thư mục | Nội dung |
| --- | --- |
| `html-reports/feature-a-{chromium,firefox,webkit}/index.html` | HTML report (metadata `Run by: 23127173`) — **không** kèm `data/` media |
| `summary/summary-*.json` | Pass/Fail/Skip per browser |

| Artifact | Path |
| --- | --- |
| Test data (30 TC) | `automation/data/feature-a-profile.json` |
| Spec | `automation/tests/feature-a-profile.spec.ts` |
| Screenshot fail | `../bug-report/screenshots/` |
| Report + attachment nhẹ | `evidence/html-reports/feature-a-*/` |

Mở report: `html-reports/feature-a-chromium/index.html`
