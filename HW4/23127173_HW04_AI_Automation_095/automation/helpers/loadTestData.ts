import fs from 'fs';
import path from 'path';

export type TestRow = {
  id: string;
  hw2Ref: string;
  type: 'positive' | 'negative' | 'edge' | 'boundary';
  description: string;
  assertionPattern: 'url' | 'visibility' | 'text' | 'attribute' | 'count' | 'state';
  skip?: boolean;
  skipReason?: string;
  input?: Record<string, string>;
  expected?: Record<string, string>;
};

export function loadTestData(filename: string): TestRow[] {
  const filePath = path.join(__dirname, '..', 'data', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw) as { tests: TestRow[] };
  return parsed.tests;
}
