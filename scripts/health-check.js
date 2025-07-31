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

function checkFileExists(filePath, description) {
  const exists = fs.existsSync(filePath);
  log(`  ${exists ? '✅' : '❌'} ${description}: ${filePath}`, exists ? colors.green : colors.red);
  return exists;
}

function checkCommand(command, description) {
  try {
    execSync(command, { stdio: 'pipe' });
    log(`  ✅ ${description}`, colors.green);
    return true;
  } catch (error) {
    log(`  ❌ ${description}`, colors.red);
    return false;
  }
}

function checkNodeVersion() {
  const nodeVersion = process.version;
  const requiredVersion = '18.0.0';
  const currentVersion = nodeVersion.slice(1); // Remove 'v' prefix

  const isValid = currentVersion >= requiredVersion;
  log(`  ${isValid ? '✅' : '❌'} Node.js version: ${nodeVersion} (required: >=v${requiredVersion})`,
      isValid ? colors.green : colors.red);
  return isValid;
}

function checkNpmVersion() {
  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    const requiredVersion = '8.0.0';

    // Parse version numbers for proper comparison
    const parseVersion = (version) => {
      return version.split('.').map(num => parseInt(num, 10));
    };

    const currentParts = parseVersion(npmVersion);
    const requiredParts = parseVersion(requiredVersion);

    let isValid = false;
    for (let i = 0; i < Math.max(currentParts.length, requiredParts.length); i++) {
      const current = currentParts[i] || 0;
      const required = requiredParts[i] || 0;

      if (current > required) {
        isValid = true;
        break;
      } else if (current < required) {
        isValid = false;
        break;
      }
      // If equal, continue to next part
    }

    // If all parts are equal, version is valid
    if (currentParts.length === requiredParts.length &&
        currentParts.every((part, i) => part === requiredParts[i])) {
      isValid = true;
    }

    log(`  ${isValid ? '✅' : '❌'} npm version: ${npmVersion} (required: >=${requiredVersion})`,
        isValid ? colors.green : colors.red);
    return isValid;
  } catch (error) {
    log(`  ❌ npm not found`, colors.red);
    return false;
  }
}

function checkPackageIntegrity() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const hasWorkspaces = packageJson.workspaces && packageJson.workspaces.length > 0;
    log(`  ${hasWorkspaces ? '✅' : '❌'} Package.json workspaces configured`,
        hasWorkspaces ? colors.green : colors.red);
    return hasWorkspaces;
  } catch (error) {
    log(`  ❌ Package.json not found or invalid`, colors.red);
    return false;
  }
}

function checkWorkspacePackages() {
  const packages = ['ui', 'themes', 'workspace', 'patterns', 'layouts', 'shared'];
  let allExist = true;

  packages.forEach(pkg => {
    const exists = fs.existsSync(path.join('packages', pkg, 'package.json'));
    log(`  ${exists ? '✅' : '❌'} Package @wheel/${pkg}`, exists ? colors.green : colors.red);
    if (!exists) allExist = false;
  });

  return allExist;
}

function checkEnvironmentFiles() {
  const files = [
    '.env.development',
    'docker-compose.yml',
    'Dockerfile.dev',
    '.eslintrc.js',
    '.prettierrc.js',
  ];

  let allExist = true;
  files.forEach(file => {
    const exists = checkFileExists(file, `Environment file`);
    if (!exists) allExist = false;
  });

  return allExist;
}

function checkVSCodeConfiguration() {
  const vscodeFiles = [
    '.vscode/settings.json',
    '.vscode/extensions.json'
  ];

  let allExist = true;
  vscodeFiles.forEach(file => {
    const exists = checkFileExists(file, `VS Code configuration`);
    if (!exists) allExist = false;
  });

  return allExist;
}

function checkStorybookConfiguration() {
  const storybookFiles = [
    '.storybook/main.ts',
    '.storybook/preview.ts',
    '.storybook/manager.js'
  ];

  let allExist = true;
  storybookFiles.forEach(file => {
    const exists = checkFileExists(file, `Storybook configuration`);
    if (!exists) allExist = false;
  });

  return allExist;
}

function checkDevelopmentServer() {
  const devServerExists = checkFileExists('dev-server.js', 'Development server');
  return devServerExists;
}

async function runHealthCheck() {
  log('\n🏥 THE WHEEL Design System - Environment Health Check', colors.cyan);
  log('=' .repeat(60), colors.blue);

  const checks = [
    { name: 'Node.js Version', check: checkNodeVersion },
    { name: 'npm Version', check: checkNpmVersion },
    { name: 'Package Integrity', check: checkPackageIntegrity },
    { name: 'Workspace Packages', check: checkWorkspacePackages },
    { name: 'Environment Files', check: checkEnvironmentFiles },
    { name: 'VS Code Configuration', check: checkVSCodeConfiguration },
    { name: 'Storybook Configuration', check: checkStorybookConfiguration },
    { name: 'Development Server', check: checkDevelopmentServer }
  ];

  let allPassed = true;

  for (const { name, check } of checks) {
    log(`\n🔍 ${name}:`, colors.yellow);
    const result = check();
    if (!result) allPassed = false;
  }

  log('\n' + '=' .repeat(60), colors.blue);

  if (allPassed) {
    log('🎉 All health checks passed!', colors.green);
    log('🚀 Your THE WHEEL development environment is ready!', colors.cyan);
    process.exit(0);
  } else {
    log('❌ Some health checks failed!', colors.red);
    log('🔧 Please address the issues above before continuing.', colors.yellow);
    process.exit(1);
  }
}

// Run the health check
runHealthCheck().catch(error => {
  log(`\n❌ Health check failed with error: ${error.message}`, colors.red);
  process.exit(1);
});
