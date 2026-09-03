import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dateTag = process.env.NEWMAN_DATE_TAG || '20260903';

const collection = 'postman/collections/23127173_HW06_EShop_API.postman_collection.json';
const environment = 'postman/environments/eshop.local.template.postman_environment.json';
const txtOut = path.join(root, `newman/raw-output/ci-full-pass-${dateTag}.txt`);
const jsonOut = path.join(root, `newman/raw-output/ci-full-pass-${dateTag}.json`);
const htmlOut = path.join(root, 'newman/html-reports/ci-full-pass/report.html');

const folders = [
  '--folder "00 Setup"',
  '--folder "A FR-04 Profile (40 TC)"',
  '--folder "C FR-18 Admin order status (40 TC)"',
  '--folder "B FR-10 Cancel order (40 TC)"',
];

const quote = (value) => `"${value.replace(/"/g, '\\"')}"`;

const command = [
  'npx newman run',
  quote(collection),
  '-e',
  quote(environment),
  ...folders,
  '--disable-unicode',
  '-r cli,json,htmlextra',
  `--reporter-json-export ${quote(jsonOut)}`,
  `--reporter-htmlextra-export ${quote(htmlOut)}`,
].join(' ');

fs.mkdirSync(path.dirname(txtOut), { recursive: true });
fs.mkdirSync(path.dirname(htmlOut), { recursive: true });

const output = execSync(command, {
  cwd: root,
  encoding: 'utf8',
  env: { ...process.env, NODE_NO_WARNINGS: '1' },
  maxBuffer: 64 * 1024 * 1024,
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true,
});

fs.writeFileSync(txtOut, output, { encoding: 'utf8' });
process.stdout.write(output);
console.log('\nCI full-pass finished — full 120 TC, expect 0 fail (no 5xx).');
