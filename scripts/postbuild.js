import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const target = resolve('dist/index.html');

if (!existsSync(target)) {
  console.warn('[postbuild] dist/index.html not found, skipping crossorigin cleanup.');
  process.exit(0);
}

const html = readFileSync(target, 'utf8');
const cleaned = html.replace(/\s+crossorigin(="[^"]*")?/gi, '');

if (html !== cleaned) {
  writeFileSync(target, cleaned, 'utf8');
  console.log('[postbuild] Removed crossorigin attributes for file:// compatibility.');
} else {
  console.log('[postbuild] No crossorigin attributes found to remove.');
}
