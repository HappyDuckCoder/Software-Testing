import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../..');
const require = createRequire(path.join(hwRoot, 'api-testing/package.json'));
const mdToPdf = require('md-to-pdf').default ?? require('md-to-pdf');

const css = fs.readFileSync(path.join(hwRoot, 'doc/pdf/main-report.css'), 'utf8');

const { filename } = await mdToPdf(
  { path: path.join(hwRoot, 'doc/md/main-report.md') },
  {
    css,
    body_class: ['main-report'],
    pdf_options: {
      format: 'A4',
      printBackground: true,
      margin: { top: '22mm', right: '20mm', bottom: '24mm', left: '20mm' },
    },
    dest: path.join(hwRoot, 'doc/pdf/main-report.pdf'),
  }
);

console.log(`Wrote ${filename}`);
