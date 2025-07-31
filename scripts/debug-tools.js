#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

function log(message, color = colors.white) {
  console.log(`${color}${message}${colors.reset}`);
}

function analyzeTypeScriptErrors() {
  log('\n🔍 TypeScript Error Analysis:', colors.cyan);

  try {
    const result = execSync('npx tsc --noEmit --pretty false', { encoding: 'utf8' });
    log('  ✅ No TypeScript errors found', colors.green);
    return { errors: [], hasErrors: false };
  } catch (error) {
    const errorOutput = error.stdout || error.stderr || '';
    const errors = errorOutput.split('\n').filter(line => line.trim() && !line.includes('Found'));

    log(`  ❌ Found ${errors.length} TypeScript errors`, colors.red);
    errors.slice(0, 10).forEach(error => {
      log(`    ${error}`, colors.white);
    });

    if (errors.length > 10) {
      log(`    ... and ${errors.length - 10} more errors`, colors.yellow);
    }

    return { errors, hasErrors: true };
  }
}

function analyzeLintErrors() {
  log('\n🔍 ESLint Error Analysis:', colors.cyan);

  try {
    const result = execSync('npx eslint packages/**/*.{ts,tsx} --format json', { encoding: 'utf8' });
    const lintResults = JSON.parse(result);

    let totalErrors = 0;
    let totalWarnings = 0;

    lintResults.forEach(file => {
      totalErrors += file.errorCount;
      totalWarnings += file.warningCount;
    });

    if (totalErrors === 0 && totalWarnings === 0) {
      log('  ✅ No ESLint errors or warnings found', colors.green);
    } else {
      log(`  ⚠️  Found ${totalErrors} errors and ${totalWarnings} warnings`, colors.yellow);

      // Show most problematic files
      const problematicFiles = lintResults
        .filter(file => file.errorCount > 0 || file.warningCount > 0)
        .sort((a, b) => (b.errorCount + b.warningCount) - (a.errorCount + a.warningCount))
        .slice(0, 5);

      problematicFiles.forEach(file => {
        log(`    📄 ${file.filePath}: ${file.errorCount} errors, ${file.warningCount} warnings`, colors.white);
      });
    }

    return { lintResults, totalErrors, totalWarnings };
  } catch (error) {
    log('  ❌ ESLint analysis failed', colors.red);
    return { lintResults: [], totalErrors: 0, totalWarnings: 0 };
  }
}

function analyzeImportIssues() {
  log('\n🔍 Import/Export Analysis:', colors.cyan);

  const packages = ['ui', 'themes', 'workspace', 'patterns', 'layouts', 'shared'];
  const importIssues = [];

  packages.forEach(pkg => {
    const pkgPath = path.join('packages', pkg);
    const indexPath = path.join(pkgPath, 'src', 'index.ts');

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      const exports = content.match(/export\s+.*\s+from\s+['"]([^'"]+)['"]/g) || [];

      exports.forEach(exportLine => {
        const match = exportLine.match(/from\s+['"]([^'"]+)['"]/);
        if (match) {
          const importPath = match[1];
          const fullPath = path.resolve(pkgPath, 'src', importPath);

          if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.ts') && !fs.existsSync(fullPath + '.tsx')) {
            importIssues.push({
              package: pkg,
              file: indexPath,
              missingImport: importPath
            });
          }
        }
      });
    }
  });

  if (importIssues.length === 0) {
    log('  ✅ No import/export issues found', colors.green);
  } else {
    log(`  ⚠️  Found ${importIssues.length} import/export issues`, colors.yellow);
    importIssues.forEach(issue => {
      log(`    📦 ${issue.package}: Missing ${issue.missingImport}`, colors.white);
    });
  }

  return importIssues;
}

function analyzeUnusedDependencies() {
  log('\n🔍 Unused Dependencies Analysis:', colors.cyan);

  try {
    const result = execSync('npx depcheck --json', { encoding: 'utf8' });
    const depcheckResults = JSON.parse(result);

    const unusedDependencies = depcheckResults.dependencies || [];
    const unusedDevDependencies = depcheckResults.devDependencies || [];
    const missingDependencies = Object.keys(depcheckResults.missing || {});

    if (unusedDependencies.length === 0 && unusedDevDependencies.length === 0 && missingDependencies.length === 0) {
      log('  ✅ No dependency issues found', colors.green);
    } else {
      if (unusedDependencies.length > 0) {
        log(`  ⚠️  Unused dependencies: ${unusedDependencies.join(', ')}`, colors.yellow);
      }
      if (unusedDevDependencies.length > 0) {
        log(`  ⚠️  Unused dev dependencies: ${unusedDevDependencies.join(', ')}`, colors.yellow);
      }
      if (missingDependencies.length > 0) {
        log(`  ❌ Missing dependencies: ${missingDependencies.join(', ')}`, colors.red);
      }
    }

    return { unusedDependencies, unusedDevDependencies, missingDependencies };
  } catch (error) {
    log('  ❌ Dependency analysis failed', colors.red);
    return { unusedDependencies: [], unusedDevDependencies: [], missingDependencies: [] };
  }
}

function analyzeStorybookIssues() {
  log('\n🔍 Storybook Configuration Analysis:', colors.cyan);

  const storybookFiles = [
    '.storybook/main.ts',
    '.storybook/preview.ts',
    '.storybook/manager.js'
  ];

  const issues = [];

  storybookFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      issues.push(`Missing file: ${file}`);
    } else {
      try {
        const content = fs.readFileSync(file, 'utf8');

        // Check for common issues
        if (file.includes('main.ts') && !content.includes('stories')) {
          issues.push('main.ts: Missing stories configuration');
        }
        if (file.includes('preview.ts') && !content.includes('parameters')) {
          issues.push('preview.ts: Missing parameters configuration');
        }
      } catch (error) {
        issues.push(`Unable to read ${file}: ${error.message}`);
      }
    }
  });

  if (issues.length === 0) {
    log('  ✅ No Storybook configuration issues found', colors.green);
  } else {
    log(`  ⚠️  Found ${issues.length} Storybook issues`, colors.yellow);
    issues.forEach(issue => {
      log(`    🔧 ${issue}`, colors.white);
    });
  }

  return issues;
}

function generateDebugReport() {
  const debugData = {
    timestamp: new Date().toISOString(),
    typeScriptErrors: null,
    lintErrors: null,
    importIssues: null,
    dependencyIssues: null,
    storybookIssues: null
  };

  debugData.typeScriptErrors = analyzeTypeScriptErrors();
  debugData.lintErrors = analyzeLintErrors();
  debugData.importIssues = analyzeImportIssues();
  debugData.dependencyIssues = analyzeUnusedDependencies();
  debugData.storybookIssues = analyzeStorybookIssues();

  // Save debug report
  const reportPath = `debug-reports/debug-report-${Date.now()}.json`;

  try {
    if (!fs.existsSync('debug-reports')) {
      fs.mkdirSync('debug-reports', { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(debugData, null, 2));
    log(`\n📊 Debug report saved to: ${reportPath}`, colors.green);
  } catch (error) {
    log(`\n❌ Could not save debug report`, colors.red);
  }

  return debugData;
}

function displayDebugSummary(debugData) {
  log('\n📋 Debug Summary:', colors.cyan);

  let totalIssues = 0;

  if (debugData.typeScriptErrors?.hasErrors) {
    totalIssues += debugData.typeScriptErrors.errors.length;
  }

  if (debugData.lintErrors) {
    totalIssues += debugData.lintErrors.totalErrors + debugData.lintErrors.totalWarnings;
  }

  if (debugData.importIssues) {
    totalIssues += debugData.importIssues.length;
  }

  if (debugData.dependencyIssues) {
    totalIssues += debugData.dependencyIssues.unusedDependencies.length +
                   debugData.dependencyIssues.unusedDevDependencies.length +
                   debugData.dependencyIssues.missingDependencies.length;
  }

  if (debugData.storybookIssues) {
    totalIssues += debugData.storybookIssues.length;
  }

  if (totalIssues === 0) {
    log('  🎉 No issues found! Your codebase is clean.', colors.green);
  } else {
    log(`  ⚠️  Total issues found: ${totalIssues}`, colors.yellow);

    // Provide fix suggestions
    log('\n💡 Fix Suggestions:', colors.cyan);

    if (debugData.typeScriptErrors?.hasErrors) {
      log('  🔧 Run "npx tsc --noEmit" to see detailed TypeScript errors', colors.white);
    }

    if (debugData.lintErrors?.totalErrors > 0) {
      log('  🔧 Run "npm run lint:fix" to auto-fix ESLint issues', colors.white);
    }

    if (debugData.importIssues?.length > 0) {
      log('  🔧 Check and fix import/export statements in index.ts files', colors.white);
    }

    if (debugData.dependencyIssues?.unusedDependencies.length > 0) {
      log('  🔧 Consider removing unused dependencies to reduce bundle size', colors.white);
    }

    if (debugData.storybookIssues?.length > 0) {
      log('  🔧 Check Storybook configuration files for completeness', colors.white);
    }
  }
}

async function runDebugTools() {
  log('\n🔧 THE WHEEL Design System - Debug Tools', colors.cyan);
  log('=' .repeat(60), colors.blue);

  const debugData = generateDebugReport();

  displayDebugSummary(debugData);

  log('\n' + '=' .repeat(60), colors.blue);
  log('🎯 Debug analysis completed!', colors.green);
  log('📊 Check the debug-reports directory for detailed reports', colors.cyan);
}

// Run the debug tools
runDebugTools().catch(error => {
  log(`\n❌ Debug analysis failed with error: ${error.message}`, colors.red);
  process.exit(1);
});
