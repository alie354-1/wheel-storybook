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

function execCommand(command, description) {
  try {
    log(`🔄 ${description}...`, colors.yellow);
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed`, colors.green);
    return true;
  } catch (error) {
    log(`❌ ${description} failed`, colors.red);
    return false;
  }
}

function createDirectoryIfNotExists(dirPath, description) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      log(`✅ Created ${description}: ${dirPath}`, colors.green);
    } else {
      log(`ℹ️  ${description} already exists: ${dirPath}`, colors.cyan);
    }
    return true;
  } catch (error) {
    log(`❌ Failed to create ${description}: ${error.message}`, colors.red);
    return false;
  }
}

function copyEnvFile() {
  const envExample = '.env.development';
  const envLocal = '.env.local';

  if (fs.existsSync(envExample) && !fs.existsSync(envLocal)) {
    try {
      fs.copyFileSync(envExample, envLocal);
      log(`✅ Created ${envLocal} from ${envExample}`, colors.green);
      return true;
    } catch (error) {
      log(`❌ Failed to copy environment file: ${error.message}`, colors.red);
      return false;
    }
  } else {
    log(`ℹ️  Environment file ${envLocal} already exists or template not found`, colors.cyan);
    return true;
  }
}

function setupHusky() {
  try {
    if (fs.existsSync('.husky')) {
      log(`ℹ️  Husky already configured`, colors.cyan);
      return true;
    }

    execSync('npx husky install', { stdio: 'inherit' });

    // Make pre-commit hook executable
    const preCommitPath = '.husky/pre-commit';
    if (fs.existsSync(preCommitPath)) {
      execSync(`chmod +x ${preCommitPath}`, { stdio: 'pipe' });
      log(`✅ Husky pre-commit hook configured and made executable`, colors.green);
    }

    return true;
  } catch (error) {
    log(`❌ Failed to setup Husky: ${error.message}`, colors.red);
    return false;
  }
}

function setupWorkspacePackages() {
  const packages = ['ui', 'themes', 'workspace', 'patterns', 'layouts', 'shared'];
  let allSuccess = true;

  packages.forEach(pkg => {
    const pkgPath = path.join('packages', pkg);
    if (fs.existsSync(pkgPath)) {
      log(`ℹ️  Package @wheel/${pkg} already exists`, colors.cyan);
    } else {
      log(`❌ Package @wheel/${pkg} not found at ${pkgPath}`, colors.red);
      allSuccess = false;
    }
  });

  return allSuccess;
}

function setupVSCodeWorkspace() {
  const vscodeDir = '.vscode';
  if (!fs.existsSync(vscodeDir)) {
    createDirectoryIfNotExists(vscodeDir, 'VS Code workspace directory');
  }

  // Create workspace file
  const workspaceConfig = {
    folders: [
      { name: 'Root', path: '.' },
      { name: 'UI Package', path: './packages/ui' },
      { name: 'Themes Package', path: './packages/themes' },
      { name: 'Workspace Package', path: './packages/workspace' },
      { name: 'Patterns Package', path: './packages/patterns' },
      { name: 'Layouts Package', path: './packages/layouts' },
      { name: 'Shared Package', path: './packages/shared' },
      { name: 'Storybook', path: './.storybook' }
    ],
    settings: {
      'files.exclude': {
        '**/node_modules': true,
        '**/dist': true,
        '**/.next': true,
        '**/coverage': true,
        '**/.nyc_output': true
      }
    }
  };

  try {
    fs.writeFileSync('wheel-design-system.code-workspace', JSON.stringify(workspaceConfig, null, 2));
    log(`✅ Created VS Code workspace file`, colors.green);
    return true;
  } catch (error) {
    log(`❌ Failed to create VS Code workspace: ${error.message}`, colors.red);
    return false;
  }
}

function setupLintStaged() {
  const lintStagedConfig = {
    '*.{ts,tsx,js,jsx}': [
      'eslint --fix',
      'prettier --write'
    ],
    '*.{json,css,md}': [
      'prettier --write'
    ]
  };

  try {
    fs.writeFileSync('.lintstagedrc.json', JSON.stringify(lintStagedConfig, null, 2));
    log(`✅ Created lint-staged configuration`, colors.green);
    return true;
  } catch (error) {
    log(`❌ Failed to create lint-staged config: ${error.message}`, colors.red);
    return false;
  }
}

function setupGitignore() {
  const gitignoreContent = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
.nyc_output/

# Production builds
dist/
build/
.next/
out/

# Environment files
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/settings.json.bak
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# Storybook build outputs
storybook-static/

# Temporary folders
.tmp/
temp/

# Database
*.db
*.sqlite

# Cache
.cache/
.parcel-cache/
.eslintcache
.stylelintcache

# Docker
.dockerignore
`;

  try {
    if (!fs.existsSync('.gitignore')) {
      fs.writeFileSync('.gitignore', gitignoreContent);
      log(`✅ Created .gitignore file`, colors.green);
    } else {
      log(`ℹ️  .gitignore already exists`, colors.cyan);
    }
    return true;
  } catch (error) {
    log(`❌ Failed to create .gitignore: ${error.message}`, colors.red);
    return false;
  }
}

async function runSetup() {
  log('\n🚀 THE WHEEL Design System - Environment Setup', colors.cyan);
  log('='.repeat(60), colors.blue);

  const setupTasks = [
    { name: 'Copy Environment File', task: copyEnvFile },
    { name: 'Setup Workspace Packages', task: setupWorkspacePackages },
    { name: 'Setup VS Code Workspace', task: setupVSCodeWorkspace },
    { name: 'Setup Lint-Staged', task: setupLintStaged },
    { name: 'Setup Gitignore', task: setupGitignore },
    { name: 'Setup Husky', task: setupHusky }
  ];

  let allSuccess = true;

  for (const { name, task } of setupTasks) {
    log(`\n🔧 ${name}:`, colors.yellow);
    const result = task();
    if (!result) allSuccess = false;
  }

  log('\n' + '='.repeat(60), colors.blue);

  if (allSuccess) {
    log('🎉 Environment setup completed successfully!', colors.green);
    log('🚀 Your THE WHEEL development environment is ready!', colors.cyan);
    log('\n📋 Next steps:', colors.yellow);
    log('  1. Run "npm install" to install dependencies', colors.white);
    log('  2. Run "npm run health-check" to verify setup', colors.white);
    log('  3. Run "npm run dev:full" to start development environment', colors.white);
    process.exit(0);
  } else {
    log('❌ Some setup tasks failed!', colors.red);
    log('🔧 Please address the issues above before continuing.', colors.yellow);
    process.exit(1);
  }
}

// Run the setup
runSetup().catch(error => {
  log(`\n❌ Setup failed with error: ${error.message}`, colors.red);
  process.exit(1);
});
