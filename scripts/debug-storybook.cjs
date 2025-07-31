#!/usr/bin/env node

/**
 * Storybook Debug Script
 * Helps diagnose story rendering issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Storybook Debug Script\n');

// Check Storybook version
console.log('📦 Checking Storybook versions...');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const storybookDeps = Object.entries({
    ...packageJson.dependencies || {},
    ...packageJson.devDependencies || {}
  }).filter(([key]) => key.includes('storybook'));

  storybookDeps.forEach(([pkg, version]) => {
    console.log(`  ${pkg}: ${version}`);
  });
} catch (e) {
  console.error('❌ Error reading package.json:', e.message);
}

console.log('\n📁 Checking Storybook configuration files...');
const configFiles = [
  '.storybook/main.mjs',
  '.storybook/preview.ts',
  '.storybook/preview-bare.ts',
  '.storybook/preview-debug.ts',
  '.storybook/manager.js',
  '.storybook/tsconfig.json'
];

configFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, '..', file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🔧 Checking test story files...');
const testStories = [
  'packages/ui/src/components/minimal-test.stories.tsx',
  'packages/ui/src/components/html-test.stories.tsx',
  'packages/ui/src/components/MinimalTest.tsx'
];

testStories.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  const exists = fs.existsSync(fullPath);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);

  if (exists) {
    const content = fs.readFileSync(fullPath, 'utf8');
    // Check for common issues
    if (file.endsWith('.stories.tsx')) {
      const hasDefaultExport = content.includes('export default');
      const hasNamedExports = content.includes('export const');
      console.log(`    - Default export: ${hasDefaultExport ? '✅' : '❌'}`);
      console.log(`    - Named exports: ${hasNamedExports ? '✅' : '❌'}`);
    }
  }
});

console.log('\n🌐 Checking Vite/React configuration...');
const viteConfig = path.join(__dirname, '../packages/ui/vite.config.ts');
if (fs.existsSync(viteConfig)) {
  console.log('  ✅ Vite config exists');
  const content = fs.readFileSync(viteConfig, 'utf8');
  const hasReactPlugin = content.includes('@vitejs/plugin-react');
  console.log(`  ${hasReactPlugin ? '✅' : '❌'} React plugin configured`);
} else {
  console.log('  ❌ Vite config not found');
}

console.log('\n🔍 Checking for common issues...');

// Check if stories pattern in main.mjs matches actual file locations
const mainConfig = path.join(__dirname, '../.storybook/main.mjs');
if (fs.existsSync(mainConfig)) {
  const content = fs.readFileSync(mainConfig, 'utf8');
  const storiesMatch = content.match(/stories:\s*\[(.*?)\]/s);
  if (storiesMatch) {
    console.log('  Story patterns in main.mjs:');
    const patterns = storiesMatch[1].match(/['"`](.*?)['"`]/g);
    if (patterns) {
      patterns.forEach(pattern => {
        console.log(`    - ${pattern}`);
      });
    }
  }
}

// Check for CSS/PostCSS issues
console.log('\n🎨 Checking CSS configuration...');
const cssFiles = [
  'postcss.config.js',
  'packages/ui/postcss.config.js',
  'tailwind.config.js',
  '.storybook/brand.css'
];

cssFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, '..', file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Create a test HTML file to verify basic rendering
console.log('\n📝 Creating test HTML file...');
const testHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Storybook Test</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f0f0f0;
    }
    .test-component {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="test-component">
    <h1>Storybook Rendering Test</h1>
    <p>If you can see this, basic HTML rendering works.</p>
    <button onclick="alert('Button clicked!')">Test Button</button>
  </div>
  <script>
    console.log('Test HTML loaded successfully');
  </script>
</body>
</html>
`;

const testFilePath = path.join(__dirname, '../storybook-test.html');
fs.writeFileSync(testFilePath, testHtml);
console.log(`  ✅ Test HTML file created at: ${testFilePath}`);

console.log('\n📊 Summary:');
console.log('  - If stories are discovered but not rendering, check:');
console.log('    1. Preview configuration (decorators, globals)');
console.log('    2. Build errors in terminal');
console.log('    3. Browser console for runtime errors');
console.log('    4. Network tab for failed resource loads');
console.log('    5. Story component exports match expected format');

console.log('\n💡 Next steps:');
console.log('  1. Check terminal output when starting Storybook');
console.log('  2. Open browser DevTools and check for errors');
console.log('  3. Try the test HTML file to verify basic rendering');
console.log('  4. Simplify preview configuration further if needed');
