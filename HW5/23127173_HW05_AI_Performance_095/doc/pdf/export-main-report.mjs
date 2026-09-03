import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../..');
const require = createRequire(path.join(__dirname, 'package.json'));
const mdToPdf = require('md-to-pdf').default ?? require('md-to-pdf');

const css = fs.readFileSync(path.join(__dirname, 'main-report.css'), 'utf8');

const { filename } = await mdToPdf(
  { path: path.join(hwRoot, 'doc/md/main-report.md') },
  {
    css,
    body_class: ['main-report'],
    launch_options: process.env.PUPPETEER_EXECUTABLE_PATH
      ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
      : undefined,
    pdf_options: {
      format: 'A4',
      printBackground: true,
      margin: { top: '22mm', right: '20mm', bottom: '24mm', left: '20mm' },
    },
    dest: path.join(__dirname, 'main-report.pdf'),
  }
);

console.log(`Wrote ${filename}`);
