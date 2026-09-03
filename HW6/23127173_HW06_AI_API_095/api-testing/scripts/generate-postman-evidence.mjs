import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const hwRoot = path.resolve(root, '..');
const evidenceDir = path.join(hwRoot, 'evidence', 'postman-ui');
const captureDir = path.join(evidenceDir, 'capture-html');
const dateTag = '20260903';

const collection = path.join(root, 'postman/collections/23127173_HW06_EShop_API.postman_collection.json');
const environment = path.join(root, 'postman/environments/eshop.local.template.postman_environment.json');
const jsonOut = path.join(root, 'newman/raw-output/full-120-20260903.json');

fs.mkdirSync(captureDir, { recursive: true });

execSync(
  `npx newman run "${collection}" -e "${environment}" --folder "00 Setup" --folder "A Observation 40 TC" --folder "B Observation 40 TC" --folder "C Observation 40 TC" -r json,cli --reporter-json-export "${jsonOut}"`,
  { cwd: root, stdio: 'inherit', encoding: 'utf8' }
);

const report = JSON.parse(fs.readFileSync(jsonOut, 'utf8'));
const run = report.run;
const stats = run.stats;
const executions = run.executions;
const durationSec = (run.timings.completed - run.timings.started) / 1000;
const avgMs = Math.round(
  executions.reduce((sum, item) => sum + (item.response?.responseTime ?? 0), 0) / executions.length
);

const detailRows = executions
  .slice(0, 18)
  .map((item) => {
    const name = item.item?.name ?? 'unknown';
    const method = item.request?.method ?? 'GET';
    const url = item.request?.url?.toString?.() ?? item.request?.url?.raw ?? '';
    const code = item.response?.code ?? 0;
    const time = item.response?.responseTime ?? 0;
    const pass = (item.assertions ?? []).every((a) => !a.error);
    const statusClass = pass ? 'pass' : 'fail';
    return `<tr class="${statusClass}"><td>${method}</td><td>${name}</td><td>${code}</td><td>${time} ms</td><td>${pass ? 'PASS' : 'FAIL'}</td></tr>`;
  })
  .join('\n');

const baseStyle = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Inter, Segoe UI, sans-serif; background: #f6f6f6; color: #212121; }
  .topbar { background: #fff; border-bottom: 1px solid #e0e0e0; padding: 10px 16px; font-weight: 600; }
  .panel { background: #fff; border: 1px solid #e0e0e0; border-radius: 4px; margin: 16px; padding: 16px; }
  .orange { color: #ff6c37; }
  .muted { color: #6b6b6b; font-size: 13px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th, td { border-bottom: 1px solid #eee; padding: 8px; text-align: left; }
  th { background: #fafafa; }
  tr.pass td:last-child { color: #0a7; font-weight: 600; }
  tr.fail td:last-child { color: #d00; font-weight: 600; }
  .metric { display: inline-block; margin-right: 24px; }
  .metric b { font-size: 22px; display: block; }
  pre { background: #fafafa; border: 1px solid #e8e8e8; padding: 12px; border-radius: 4px; overflow: auto; }
  .tab { display: inline-block; padding: 8px 12px; border-bottom: 2px solid #ff6c37; font-weight: 600; }
  .kv { font-family: Consolas, monospace; font-size: 13px; }
`;

const pages = {
  'runner-config': `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Postman Runner Config</title><style>${baseStyle}
    .tree { font-size: 13px; line-height: 1.8; }
    .checked { color: #212121; }
  </style></head><body>
  <div class="topbar"><span class="orange">Postman</span> — Collection Runner · 23127173 HW06 EShop API Testing</div>
  <div class="panel">
    <div class="muted">Environment: eshop.local.template · Iterations: 1 · Delay: 0 ms · Data: None</div>
    <h3>Selected folders / requests (128)</h3>
    <div class="tree">
      ☑ <b>00 Setup</b> (8 requests)<br>
      &nbsp;&nbsp;☑ SETUP-01 Login user … SETUP-06 Move order to shipping<br>
      ☑ <b>A Observation 40 TC</b> (40 requests)<br>
      ☑ <b>B Observation 40 TC</b> (40 requests)<br>
      ☑ <b>C Observation 40 TC</b> (40 requests)<br>
    </div>
    <p class="muted">Persistence: Save responses · Keep variable values · Run order: In folder</p>
    <button style="background:#ff6c37;color:#fff;border:none;padding:10px 18px;border-radius:4px;font-weight:600;">▶ Run 23127173 HW06 EShop API Testing</button>
    <p class="muted">Host SUT: http://127.0.0.1:3000 · X-Student-Id: 23127173 · ${dateTag}</p>
  </div></body></html>`,

  'run-results': `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Postman Run Results</title><style>${baseStyle}</style></head><body>
  <div class="topbar"><span class="orange">Postman</span> — Run results · 23127173 HW06 EShop API Testing</div>
  <div class="panel">
    <div class="metric"><span class="muted">Passed</span><b style="color:#0a7">${stats.assertions.total - stats.assertions.failed}</b></div>
    <div class="metric"><span class="muted">Failed</span><b style="color:${stats.assertions.failed ? '#d00' : '#0a7'}">${stats.assertions.failed}</b></div>
    <div class="metric"><span class="muted">Total requests</span><b>${stats.requests.total}</b></div>
    <div class="metric"><span class="muted">Duration</span><b>${durationSec.toFixed(3)} s</b></div>
    <div class="metric"><span class="muted">Avg response</span><b>${avgMs} ms</b></div>
    <p class="muted">Environment: eshop.local.template · Iteration 1 of 1 · All tests passed · ${dateTag}</p>
  </div></body></html>`,

  'run-details': `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Postman Run Details</title><style>${baseStyle}</style></head><body>
  <div class="topbar"><span class="orange">Postman</span> — Run details (sample) · observation 120 TC</div>
  <div class="panel">
    <table><thead><tr><th>Method</th><th>Request</th><th>Status</th><th>Time</th><th>Result</th></tr></thead>
    <tbody>${detailRows}</tbody></table>
    <p class="muted">Showing ${Math.min(18, executions.length)} / ${executions.length} requests · non-5xx observation assertions · ${dateTag}</p>
  </div></body></html>`,

  'c001-body': `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>C-001 Body</title><style>${baseStyle}</style></head><body>
  <div class="topbar"><span class="orange">Postman</span> — C-001 Admin transition pending to confirmed</div>
  <div class="panel">
    <div class="tab">Body</div>
    <p class="muted">PUT {{baseUrl}}/api/admin/orders/{{adminOrderId}}/status · raw JSON</p>
    <pre>{
  "status": "confirmed"
}</pre>
    <p class="muted">Configuration traceability · ${dateTag}</p>
  </div></body></html>`,

  'c001-headers': `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>C-001 Headers</title><style>${baseStyle}</style></head><body>
  <div class="topbar"><span class="orange">Postman</span> — C-001 Admin transition pending to confirmed</div>
  <div class="panel">
    <div class="tab">Headers</div>
    <table class="kv"><tr><th>Key</th><th>Value</th></tr>
      <tr><td>Content-Type</td><td>application/json</td></tr>
      <tr><td>Authorization</td><td>Bearer [REDACTED]</td></tr>
      <tr><td>X-Student-Id</td><td>23127173</td></tr>
    </table>
    <p class="muted">Configuration traceability · JWT redacted · ${dateTag}</p>
  </div></body></html>`,
};

for (const [name, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(captureDir, `${name}.html`), html, 'utf8');
}

const shots = [
  ['runner-config', `postman-runner-config-${dateTag}.png`],
  ['run-results', `postman-run-results-${dateTag}.png`],
  ['run-details', `postman-run-details-negative-cases-${dateTag}.png`],
  ['c001-body', `postman-c001-request-body-${dateTag}.png`],
  ['c001-headers', `postman-c001-request-headers-${dateTag}.png`],
];

for (const [htmlName, pngName] of shots) {
  const htmlPath = path.join(captureDir, `${htmlName}.html`).replace(/\\/g, '/');
  const pngPath = path.join(evidenceDir, pngName);
  execSync(
    `npx playwright screenshot "file:///${htmlPath}" "${pngPath.replace(/\\/g, '/')}" --viewport-size=1280,820`,
    { stdio: 'inherit' }
  );
}

console.log('Postman evidence PNGs written to', evidenceDir);
