// CRA only injects REACT_APP_-prefixed vars into process.env at build time.
// This mirrors NEXT_PUBLIC_API_URL from .env into REACT_APP_API_URL in .env.local
// so NEXT_PUBLIC_API_URL can stay the single source of truth developers edit.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_VAR = 'NEXT_PUBLIC_API_URL';
const TARGET_VAR = 'REACT_APP_API_URL';

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const result = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const value = (match[2] || '').trim().replace(/^(['"])(.*)\1$/, '$2');
    result[match[1]] = value;
  }
  return result;
}

const envValues = parseEnvFile(path.join(ROOT, '.env'));
const localPath = path.join(ROOT, '.env.local');
const localValues = parseEnvFile(localPath);
const sourceValue = localValues[SOURCE_VAR] || envValues[SOURCE_VAR];

if (!sourceValue) {
  console.warn(`[sync-env] ${SOURCE_VAR} not found in .env — skipping ${TARGET_VAR} sync.`);
  process.exit(0);
}

const existingLocal = fs.existsSync(localPath) ? fs.readFileSync(localPath, 'utf8') : '';
const remainingLines = existingLocal
  .split('\n')
  .filter((line) => line.trim() && !line.startsWith(`${TARGET_VAR}=`));

remainingLines.push(`${TARGET_VAR}=${sourceValue}`);
fs.writeFileSync(localPath, remainingLines.join('\n') + '\n');

console.log(`[sync-env] ${TARGET_VAR} synced from ${SOURCE_VAR} into .env.local`);
