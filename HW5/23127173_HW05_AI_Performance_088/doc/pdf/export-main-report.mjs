import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../..');
const mdPath = path.join(hwRoot, 'doc/md/main-report.md');
const assetsDir = path.join(hwRoot, 'doc/md/assets');
const workflowSrc = path.join(hwRoot, 'continuous-performance-testing/workflow.png');
const workflowDest = path.join(assetsDir, 'workflow.png');
const require = createRequire(path.join(__dirname, 'package.json'));
const mdToPdf = require('md-to-pdf').default ?? require('md-to-pdf');

fs.mkdirSync(assetsDir, { recursive: true });
if (fs.existsSync(workflowSrc)) {
  fs.copyFileSync(workflowSrc, workflowDest);
}

const css = fs.readFileSync(path.join(__dirname, 'main-report.css'), 'utf8');

const { filename } = await mdToPdf(
  { path: mdPath },
  {
    css,
    basedir: path.join(hwRoot, 'doc/md'),
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
