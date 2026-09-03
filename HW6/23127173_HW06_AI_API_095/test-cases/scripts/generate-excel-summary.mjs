import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testCasesRoot = path.resolve(__dirname, '..');
const hwRoot = path.resolve(testCasesRoot, '..');
const require = createRequire(path.join(hwRoot, 'api-testing/package.json'));
const XLSX = require('xlsx');
const dateTag = process.env.RUN_DATE_TAG || '20260903';

const oraclePath = path.join(testCasesRoot, 'oracle-execution.json');
const newmanPath = path.join(
  hwRoot,
  'api-testing/newman/raw-output/full-120-20260903.json'
);
const xlsxPath = path.join(testCasesRoot, `23127173_HW06_test-summary-${dateTag}.xlsx`);

const oracle = JSON.parse(fs.readFileSync(oraclePath, 'utf8'));
const newman = JSON.parse(fs.readFileSync(newmanPath, 'utf8'));
const executions = newman.run?.executions ?? [];

const TC_ID = /^([ABC]-\d{3})\b/;

/** @type {Map<string, { actual: number|string, pass: boolean, error?: string }>} */
const runById = new Map();

for (const ex of executions) {
  const name = ex.item?.name ?? '';
  const match = name.match(TC_ID);
  if (!match) continue;

  const id = match[1];
  const failed = (ex.assertions ?? []).some((a) => a.error);
  const err = (ex.assertions ?? []).find((a) => a.error)?.error?.message ?? '';
  runById.set(id, {
    actual: ex.response?.code ?? '',
    pass: !failed,
    error: err.replace(/\s+/g, ' ').trim(),
  });
}

const caseRows = oracle.map((tc) => {
  const expected = (tc.statusCodes ?? []).join(' / ');
  const run = runById.get(tc.id);
  const actual = run?.actual ?? 'N/A';
  const result = run ? (run.pass ? 'PASS' : 'FAIL') : 'NOT RUN';
  const note =
    result === 'FAIL'
      ? run?.error || 'Assertion fail — xem bug-report.md'
      : result === 'NOT RUN'
        ? 'Không tìm thấy trong Newman JSON'
        : '';

  return {
    ID: tc.id,
    Pool: tc.pool,
    Endpoint: tc.endpoint,
    'Mô tả test case': tc.title,
    'Nguồn': tc.source,
    'Oracle HTTP (kỳ vọng)': expected,
    'HTTP thực tế': actual,
    'Kết quả Newman': result,
    'Tham chiếu spec': tc.spec ?? '',
    'Ngày chạy': '03/09/2026',
    'Ghi chú': note,
  };
});

const pass = caseRows.filter((r) => r['Kết quả Newman'] === 'PASS').length;
const fail = caseRows.filter((r) => r['Kết quả Newman'] === 'FAIL').length;
const notRun = caseRows.filter((r) => r['Kết quả Newman'] === 'NOT RUN').length;

const poolStats = ['A', 'B', 'C'].map((pool) => {
  const rows = caseRows.filter((r) => r.Pool === pool);
  return {
    Pool: pool,
    'Tổng TC': rows.length,
    PASS: rows.filter((r) => r['Kết quả Newman'] === 'PASS').length,
    FAIL: rows.filter((r) => r['Kết quả Newman'] === 'FAIL').length,
    'NOT RUN': rows.filter((r) => r['Kết quả Newman'] === 'NOT RUN').length,
  };
});

const summaryRows = [
  { Mục: 'MSSV', 'Giá trị': '23127173' },
  { Mục: 'Họ tên', 'Giá trị': 'Trần Hải Đức' },
  { Mục: 'Bài tập', 'Giá trị': 'HW06-AI API Testing' },
  { Mục: 'SUT', 'Giá trị': 'http://127.0.0.1:3000' },
  { Mục: 'Ngày chạy Newman', 'Giá trị': '03/09/2026' },
  { Mục: 'Collection', 'Giá trị': '23127173_HW06_EShop_API.postman_collection.json' },
  { Mục: 'Raw Newman', 'Giá trị': 'api-testing/newman/raw-output/full-120-20260903.txt' },
  { Mục: 'Tổng TC (120)', 'Giá trị': caseRows.length },
  { Mục: 'PASS', 'Giá trị': pass },
  { Mục: 'FAIL', 'Giá trị': fail },
  { Mục: 'NOT RUN', 'Giá trị': notRun },
  { Mục: 'Setup requests (ngoài 120 TC)', 'Giá trị': '62 (không tính vào bảng TC)' },
  { Mục: 'Bug groups (spec)', 'Giá trị': '6 nhóm / 12 assertion fail' },
  { Mục: 'Oracle nguồn', 'Giá trị': 'api_specification.md + README FR/SEC' },
];

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(caseRows), 'Test Cases');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(summaryRows), 'Summary');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(poolStats), 'By Pool');

XLSX.writeFile(wb, xlsxPath);

console.log(`Wrote ${xlsxPath}`);
console.log(`PASS=${pass} FAIL=${fail} NOT RUN=${notRun}`);

if (notRun > 0) {
  console.warn('Warning: some TC IDs missing from Newman JSON');
  process.exitCode = 1;
}
