#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

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

function formatTime(ms) {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

function runTests(options = {}) {
  log('\n🧪 THE WHEEL Design System - Test Runner', colors.cyan);
  log('=' .repeat(60), colors.blue);

  const {
    coverage = false,
    watch = false,
    verbose = false,
    packages = [],
    updateSnapshots = false,
    maxWorkers = 4,
    testNamePattern = '',
    testPathPattern = '',
    bail = false,
    silent = false,
    detectOpenHandles = false,
    forceExit = false,
    passWithNoTests = true,
    onlyChanged = false,
    onlyFailures = false,
    clearCache = false,
    runInBand = false,
    collectCoverageFrom = [],
    coverageThreshold = {},
    setupFilesAfterEnv = ['<rootDir>/jest.setup.js'],
    testEnvironment = 'jsdom',
    transform = {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapping = {
      '^@wheel/ui$': '<rootDir>/packages/ui/src',
      '^@wheel/themes$': '<rootDir>/packages/themes/src',
      '^@wheel/workspace$': '<rootDir>/packages/workspace/src',
      '^@wheel/patterns$': '<rootDir>/packages/patterns/src',
      '^@wheel/layouts$': '<rootDir>/packages/layouts/src',
      '^@wheel/shared$': '<rootDir>/packages/shared/src',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test-utils/fileMock.js'
    }
  } = options;

  const startTime = Date.now();

  try {
    // Build Jest command
    let jestCommand = 'npx jest';

    // Add configuration
    jestCommand += ' --config jest.config.root.js';

    // Add options
    if (coverage) {
      jestCommand += ' --coverage';
      if (collectCoverageFrom.length > 0) {
        jestCommand += ` --collectCoverageFrom="${collectCoverageFrom.join(',')}"`;
      }
    }

    if (watch) {
      jestCommand += ' --watch';
    }

    if (verbose) {
      jestCommand += ' --verbose';
    }

    if (updateSnapshots) {
      jestCommand += ' --updateSnapshot';
    }

    if (maxWorkers) {
      jestCommand += ` --maxWorkers=${maxWorkers}`;
    }

    if (testNamePattern) {
      jestCommand += ` --testNamePattern="${testNamePattern}"`;
    }

    if (testPathPattern) {
      jestCommand += ` --testPathPattern="${testPathPattern}"`;
    }

    if (bail) {
      jestCommand += ' --bail';
    }

    if (silent) {
      jestCommand += ' --silent';
    }

    if (detectOpenHandles) {
      jestCommand += ' --detectOpenHandles';
    }

    if (forceExit) {
      jestCommand += ' --forceExit';
    }

    if (passWithNoTests) {
      jestCommand += ' --passWithNoTests';
    }

    if (onlyChanged) {
      jestCommand += ' --onlyChanged';
    }

    if (onlyFailures) {
      jestCommand += ' --onlyFailures';
    }

    if (clearCache) {
      jestCommand += ' --clearCache';
    }

    if (runInBand) {
      jestCommand += ' --runInBand';
    }

    // Add package filters
    if (packages.length > 0) {
      const packagePaths = packages.map(pkg => `packages/${pkg}/src`);
      jestCommand += ` --testPathPattern="${packagePaths.join('|')}"`;
    }

    log(`\n🔄 Running tests...`, colors.yellow);
    log(`Command: ${jestCommand}`, colors.white);

    // Execute Jest command
    execSync(jestCommand, { stdio: 'inherit' });

    const testTime = Date.now() - startTime;
    log(`\n✅ Tests completed in ${formatTime(testTime)}`, colors.green);

    // Generate test report
    generateTestReport({
      testTime,
      coverage,
      packages,
      options
    });

    return {
      success: true,
      testTime,
      coverage,
      packages
    };

  } catch (error) {
    const testTime = Date.now() - startTime;
    log(`\n❌ Tests failed after ${formatTime(testTime)}`, colors.red);
    log(`Error: ${error.message}`, colors.red);

    return {
      success: false,
      testTime,
      error: error.message
    };
  }
}

function generateTestReport(data) {
  log('\n📊 Generating test report...', colors.cyan);

  const reportData = {
    timestamp: new Date().toISOString(),
    testTime: data.testTime,
    coverage: data.coverage,
    packages: data.packages,
    options: data.options,
    success: true
  };

  const reportPath = `test-reports/test-report-${Date.now()}.json`;

  try {
    if (!fs.existsSync('test-reports')) {
      fs.mkdirSync('test-reports', { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    log(`📊 Test report saved to: ${reportPath}`, colors.green);
  } catch (error) {
    log(`❌ Could not save test report: ${error.message}`, colors.red);
  }
}

function runTestSuite(suiteName, options = {}) {
  log(`\n🎯 Running ${suiteName} test suite...`, colors.cyan);

  const suiteOptions = {
    ...options,
    testNamePattern: suiteName,
    verbose: true
  };

  return runTests(suiteOptions);
}

function runPackageTests(packageName, options = {}) {
  log(`\n📦 Running tests for ${packageName} package...`, colors.cyan);

  const packageOptions = {
    ...options,
    packages: [packageName],
    verbose: true
  };

  return runTests(packageOptions);
}

function runCoverageReport(options = {}) {
  log('\n📊 Generating coverage report...', colors.cyan);

  const coverageOptions = {
    ...options,
    coverage: true,
    verbose: true,
    collectCoverageFrom: [
      'packages/*/src/**/*.{ts,tsx}',
      '!packages/*/src/**/*.d.ts',
      '!packages/*/src/**/*.stories.{ts,tsx}',
      '!packages/*/src/**/index.{ts,tsx}',
      '!packages/*/src/**/*.test.{ts,tsx}',
      '!packages/*/src/**/*.spec.{ts,tsx}'
    ]
  };

  return runTests(coverageOptions);
}

function runWatchMode(options = {}) {
  log('\n👀 Starting watch mode...', colors.cyan);

  const watchOptions = {
    ...options,
    watch: true,
    verbose: true
  };

  return runTests(watchOptions);
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];
const flags = args.slice(1);

const parseFlags = (flags) => {
  const options = {};

  flags.forEach(flag => {
    if (flag.startsWith('--')) {
      const [key, value] = flag.slice(2).split('=');
      if (value) {
        options[key] = value;
      } else {
        options[key] = true;
      }
    }
  });

  return options;
};

const options = parseFlags(flags);

switch (command) {
  case 'suite':
    if (options.name) {
      runTestSuite(options.name, options);
    } else {
      log('❌ Please provide a suite name with --name=<suite-name>', colors.red);
    }
    break;

  case 'package':
    if (options.name) {
      runPackageTests(options.name, options);
    } else {
      log('❌ Please provide a package name with --name=<package-name>', colors.red);
    }
    break;

  case 'coverage':
    runCoverageReport(options);
    break;

  case 'watch':
    runWatchMode(options);
    break;

  case 'all':
  default:
    runTests(options);
    break;
}
