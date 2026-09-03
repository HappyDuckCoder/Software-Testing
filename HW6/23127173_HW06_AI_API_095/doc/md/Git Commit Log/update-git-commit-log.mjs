import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hwRoot = path.resolve(__dirname, '../../..');
const outPath = path.join(hwRoot, 'doc/md/Git Commit Log/git-commit-log.txt');

const raw = execSync('git log --oneline -- HW6/23127173_HW06_AI_API_095', {
  cwd: path.resolve(hwRoot, '../..'),
  encoding: 'utf8',
});

const header = `# Git commit log — HW06 (23127173_HW06_AI_API_095)

Nguồn: \`git log --oneline -- HW6/23127173_HW06_AI_API_095\` · cập nhật 03/09/2026.

`;

fs.writeFileSync(outPath, header + raw.trimEnd() + '\n', 'utf8');
console.log(`Updated ${outPath}`);
