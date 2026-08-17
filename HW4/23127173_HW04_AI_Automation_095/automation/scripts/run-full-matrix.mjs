#!/usr/bin/env node
/**
 * Run 9 browser×feature matrix (Chromium/Firefox/WebKit × A/B/C),
 * copy HTML reports to evidence/, write execution-summary.json.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const automationRoot = path.resolve(__dirname, '..');
const submissionRoot = path.resolve(automationRoot, '..');
const evidenceRoot = path.join(submissionRoot, 'evidence', 'html-reports');

const features = [
  { key: 'a', spec: 'tests/feature-a-profile.spec.ts', label: 'FR-04 Profile', total: 30 },
  { key: 'b', spec: 'tests/feature-b-order-history.spec.ts', label: 'FR-11 Order history', total: 22 },
  { key: 'c', spec: 'tests/feature-c-admin-orders.spec.ts', label: 'FR-18 Admin orders', total: 24 },
];

const browsers = ['chromium', 'firefox', 'webkit'];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function parseSummary(summaryPath) {
  if (!fs.existsSync(summaryPath)) return null;
  const raw = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
  const suites = raw.suites ?? [];
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let timedOut = 0;

  function walk(suiteList) {
    for (const suite of suiteList) {
      for (const spec of suite.specs ?? []) {
        for (const test of spec.tests ?? []) {
          for (const result of test.results ?? []) {
            if (result.status === 'passed') passed += 1;
            else if (result.status === 'skipped') skipped += 1;
            else if (result.status === 'timedOut') timedOut += 1;
            else failed += 1;
          }
        }
      }
      if (suite.suites?.length) walk(suite.suites);
    }
  }
  walk(suites);

  return {
    runAt: raw.config?.metadata?.['Run at'] ?? raw.metadata?.['Run at'] ?? new Date().toISOString(),
    runBy: raw.config?.metadata?.['Run by'] ?? '23127173',
    passed,
    failed,
    skipped,
    timedOut,
    total: passed + failed + skipped + timedOut,
  };
}

const matrix = [];
const startedAt = new Date().toISOString();

for (const feature of features) {
  for (const browser of browsers) {
    const runId = `feature-${feature.key}-${browser}`;
    const destReport = path.join(evidenceRoot, runId);
    const featureReportDir = path.join(automationRoot, 'reports', `feature-${feature.key}`);
    fs.mkdirSync(featureReportDir, { recursive: true });

    console.log(`\n=== ${runId} (${feature.label}) ===`);
    const result = spawnSync(
      'npx',
      ['playwright', 'test', feature.spec, `--project=${browser}`],
      { cwd: automationRoot, stdio: 'inherit', shell: true },
    );

    const summaryPath = path.join(automationRoot, 'reports', 'summary.json');
    const stats = parseSummary(summaryPath) ?? {
      runAt: new Date().toISOString(),
      runBy: '23127173',
      passed: 0,
      failed: 0,
      skipped: 0,
      timedOut: 0,
      total: feature.total,
    };

    const htmlSrc = path.join(automationRoot, 'reports', 'html');
    if (fs.existsSync(htmlSrc)) {
      fs.rmSync(destReport, { recursive: true, force: true });
      copyDir(htmlSrc, destReport);
    }

    fs.copyFileSync(summaryPath, path.join(featureReportDir, `summary-${browser}.json`));

    matrix.push({
      runId,
      feature: feature.key.toUpperCase(),
      featureId: feature.label,
      browser,
      exitCode: result.status ?? 1,
      expectedTotal: feature.total,
      ...stats,
      reportPath: `evidence/html-reports/${runId}/index.html`,
    });
  }
}

const totals = matrix.reduce(
  (acc, row) => {
    acc.passed += row.passed;
    acc.failed += row.failed;
    acc.skipped += row.skipped;
    acc.timedOut += row.timedOut;
    acc.runs += 1;
    return acc;
  },
  { passed: 0, failed: 0, skipped: 0, timedOut: 0, runs: 0 },
);

const summary = {
  studentId: '23127173',
  course: 'CS423 HW04 Automation',
  startedAt,
  finishedAt: new Date().toISOString(),
  sut: {
    web: process.env.BASE_URL ?? 'http://localhost:5180',
    admin: process.env.ADMIN_URL ?? 'http://localhost:5174',
    api: process.env.API_URL ?? 'http://localhost:3000',
  },
  oracle: 'README/spec HW2 (Domain + BVA)',
  testDesign: { featureA: 30, featureB: 22, featureC: 24, total: 76 },
  browserRuns: matrix.length,
  matrix,
  totals,
  chromiumHeadedReference: {
    featureA: '22 pass / 8 fail',
    featureB: '13 pass / 5 fail / 4 skip',
    featureC: '18 pass / 6 fail',
    note: 'Headed Chromium runs on 17/08/2026 — spec-oracle baseline',
  },
};

const summaryOut = path.join(submissionRoot, 'evidence', 'execution-summary.json');
fs.mkdirSync(path.dirname(summaryOut), { recursive: true });
fs.writeFileSync(summaryOut, JSON.stringify(summary, null, 2));

console.log('\n=== Matrix complete ===');
console.log(JSON.stringify({ browserRuns: totals.runs, ...totals }, null, 2));
console.log(`Summary: ${summaryOut}`);

process.exit(matrix.some((r) => r.exitCode !== 0) ? 1 : 0);
