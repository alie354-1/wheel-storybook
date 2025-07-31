#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Map of old imports to new imports
const importMap = {
  '@wheel/ui/components/button': '@wheel/ui',
  '@wheel/ui/components/card': '@wheel/ui',
  '@wheel/ui/components/Avatar': '@wheel/ui',
  '@wheel/ui/components/badge': '@wheel/ui',
  '@wheel/ui/components/alert': '@wheel/ui',
  '@wheel/ui/components/input': '@wheel/ui',
  '@wheel/ui/components/label': '@wheel/ui',
  '@wheel/ui/components/textarea': '@wheel/ui',
  '@wheel/ui/components/modal': '@wheel/ui',
  '@wheel/ui/components/toast': '@wheel/ui',
  '@wheel/ui/components/dropdown-menu': '@wheel/ui',
  '@wheel/ui/components/icon': '@wheel/ui',
  '@wheel/ui/components/icons': '@wheel/ui',
  '@wheel/ui/components/progressindicator': '@wheel/ui',
  '@wheel/ui/components/StatusDot': '@wheel/ui',
  '@wheel/ui/lib/utils': '@wheel/ui',
  '@wheel/shared/hooks/use-progress': '@wheel/shared',
  '@wheel/shared/hooks/use-interval': '@wheel/shared'
};

function fixImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let hasChanges = false;

  for (const [oldImport, newImport] of Object.entries(importMap)) {
    const regex = new RegExp(`from ['"]${oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
    if (regex.test(updatedContent)) {
      updatedContent = updatedContent.replace(regex, `from '${newImport}'`);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Fixed imports in: ${filePath}`);
  }
}

// Find all TypeScript and JavaScript files in patterns package
const files = glob.sync('packages/patterns/src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['**/*.stories.*', '**/node_modules/**']
});

console.log(`Found ${files.length} files to process...`);

files.forEach(fixImportsInFile);

console.log('Import fixing complete!');
