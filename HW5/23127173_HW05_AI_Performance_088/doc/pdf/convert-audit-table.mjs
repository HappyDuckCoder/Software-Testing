import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mdPath = path.join(__dirname, '../md/AI Audit/01_AI-Audit-Report.md');
const text = fs.readFileSync(mdPath, 'utf8');

const start = text.indexOf('## 2. Nhật ký tương tác AI');
const end = text.indexOf('## 3. Quy tắc');
const before = text.slice(0, start);
const after = text.slice(end);

const tableBlock = text.slice(start, end);
const rows = tableBlock
  .split('\n')
  .filter((line) => line.startsWith('| AI-'));

const cards = rows.map((row) => {
  const cols = row
    .slice(1, -1)
    .split('|')
    .map((c) => c.trim());
  const [id, time, tool, prompt, output, verdict] = cols;
  return [
    `<div class="audit-entry">`,
    ``,
    `#### ${id} · ${time} · ${tool}`,
    ``,
    `| Trường | Nội dung |`,
    `| --- | --- |`,
    `| Prompt | ${prompt} |`,
    `| Output AI | ${output} |`,
    `| Verdict / SV | ${verdict} |`,
    ``,
    `</div>`,
    ``,
  ].join('\n');
});

const section2 = [
  '## 2. Nhật ký tương tác AI',
  '',
  ...cards,
].join('\n');

fs.writeFileSync(mdPath, before + section2 + '\n' + after, 'utf8');
console.log(`Converted ${rows.length} audit entries to card layout.`);
