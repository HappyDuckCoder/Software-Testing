import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mdPath = path.join(__dirname, '../md/AI Audit/01_AI-Audit-Report.md');
const text = fs.readFileSync(mdPath, 'utf8');

const start = text.indexOf('## 3. Bảng Audit');
const end = text.indexOf('## 4. Tổng kết');
const before = text.slice(0, start);
const after = text.slice(end);

const tableBlock = text.slice(start, end);
const rows = tableBlock
  .split('\n')
  .filter((line) => line.startsWith('| **AI-'));

const cards = rows.map((row) => {
  const cols = row
    .slice(1, -1)
    .split('|')
    .map((c) => c.trim());
  const header = cols[0];
  const id = header.match(/\*\*AI-\d+\*\*/)?.[0]?.replace(/\*\*/g, '') ?? 'AI-???';
  return [
    `<div class="audit-entry">`,
    ``,
    `#### ${header}`,
    ``,
    `| Trường | Nội dung |`,
    `| --- | --- |`,
    `| Output AI | ${cols[1]} |`,
    `| Verdict | **${cols[2]}** |`,
    `| Lý do | ${cols[3]} |`,
    `| SV phải làm | ${cols[4]} |`,
    ``,
    `</div>`,
    ``,
  ].join('\n');
});

const section3 = [
  '## 3. Nhật ký Audit — từng artifact',
  '',
  'Mỗi mục ghi đủ prompt, output, verdict, lý do và phần sinh viên phải kiểm tra.',
  '',
  ...cards,
].join('\n');

fs.writeFileSync(mdPath, before + section3 + '\n' + after, 'utf8');
console.log(`Converted ${rows.length} audit entries to card layout.`);
