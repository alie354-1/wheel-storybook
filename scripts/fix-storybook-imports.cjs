#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all story files
const storyFiles = glob.sync('packages/**/*.stories.tsx', {
  ignore: ['**/node_modules/**']
});

console.log(`Found ${storyFiles.length} story files to check...`);

let updatedCount = 0;

storyFiles.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Replace imports from @storybook/react to @storybook/react-vite
  content = content.replace(
    /from\s+['"]@storybook\/react['"]/g,
    'from "@storybook/react-vite"'
  );

  // Also handle type imports
  content = content.replace(
    /import\s+type\s+\{([^}]+)\}\s+from\s+['"]@storybook\/react['"]/g,
    'import type {$1} from "@storybook/react-vite"'
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated: ${file}`);
    updatedCount++;
  }
});

console.log(`\n✨ Updated ${updatedCount} files`);
console.log('📝 All story files now use @storybook/react-vite imports');
