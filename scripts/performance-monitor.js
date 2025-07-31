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

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatTime(ms) {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

function analyzeBundleSize() {
  log('\n🔍 Bundle Size Analysis:', colors.cyan);

  const distPaths = [
    'packages/ui/dist',
    'packages/themes/dist',
    'packages/workspace/dist',
    'packages/patterns/dist',
    'packages/layouts/dist',
    'packages/shared/dist'
  ];

  let totalSize = 0;
  const packageSizes = {};

  distPaths.forEach(distPath => {
    if (fs.existsSync(distPath)) {
      const packageName = path.basename(path.dirname(distPath));
      let packageSize = 0;

      function calculateDirSize(dirPath) {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const itemPath = path.join(dirPath, item);
          const stats = fs.statSync(itemPath);
          if (stats.isDirectory()) {
            calculateDirSize(itemPath);
          } else {
            packageSize += stats.size;
          }
        });
      }

      calculateDirSize(distPath);
      packageSizes[packageName] = packageSize;
      totalSize += packageSize;

      log(`  📦 ${packageName}: ${formatBytes(packageSize)}`, colors.white);
    }
  });

  log(`\n📊 Total Bundle Size: ${formatBytes(totalSize)}`, colors.yellow);

  // Analyze largest packages
  const sortedPackages = Object.entries(packageSizes)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  if (sortedPackages.length > 0) {
    log('\n🎯 Largest Packages:', colors.yellow);
    sortedPackages.forEach(([name, size]) => {
      const percentage = ((size / totalSize) * 100).toFixed(1);
      log(`  📈 ${name}: ${formatBytes(size)} (${percentage}%)`, colors.white);
    });
  }

  return { totalSize, packageSizes };
}

function measureBuildTime() {
  log('\n⏱️  Build Performance Test:', colors.cyan);

  const buildCommands = [
    { name: 'UI Package', command: 'cd packages/ui && npm run build' },
    { name: 'Themes Package', command: 'cd packages/themes && npm run build' },
    { name: 'Workspace Package', command: 'cd packages/workspace && npm run build' }
  ];

  const buildTimes = {};
  let totalBuildTime = 0;

  buildCommands.forEach(({ name, command }) => {
    try {
      const startTime = Date.now();
      execSync(command, { stdio: 'pipe' });
      const endTime = Date.now();
      const buildTime = endTime - startTime;

      buildTimes[name] = buildTime;
      totalBuildTime += buildTime;

      log(`  ✅ ${name}: ${formatTime(buildTime)}`, colors.green);
    } catch (error) {
      log(`  ❌ ${name}: Build failed`, colors.red);
      buildTimes[name] = -1;
    }
  });

  log(`\n📊 Total Build Time: ${formatTime(totalBuildTime)}`, colors.yellow);

  return { buildTimes, totalBuildTime };
}

function analyzeMemoryUsage() {
  log('\n🧠 Memory Usage Analysis:', colors.cyan);

  const memoryUsage = process.memoryUsage();

  log(`  📊 RSS: ${formatBytes(memoryUsage.rss)}`, colors.white);
  log(`  💾 Heap Used: ${formatBytes(memoryUsage.heapUsed)}`, colors.white);
  log(`  🔧 Heap Total: ${formatBytes(memoryUsage.heapTotal)}`, colors.white);
  log(`  🌍 External: ${formatBytes(memoryUsage.external)}`, colors.white);

  return memoryUsage;
}

function analyzeDependencies() {
  log('\n📦 Dependency Analysis:', colors.cyan);

  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    log(`  📋 Dependencies: ${Object.keys(dependencies).length}`, colors.white);
    log(`  🔧 Dev Dependencies: ${Object.keys(devDependencies).length}`, colors.white);

    // Check for outdated packages
    try {
      const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: 'pipe' });
      const outdated = JSON.parse(outdatedOutput);
      const outdatedCount = Object.keys(outdated).length;

      if (outdatedCount > 0) {
        log(`  ⚠️  Outdated packages: ${outdatedCount}`, colors.yellow);
      } else {
        log(`  ✅ All packages up to date`, colors.green);
      }
    } catch (error) {
      log(`  ⚠️  Could not check outdated packages`, colors.yellow);
    }

    return { dependencies, devDependencies };
  } catch (error) {
    log(`  ❌ Could not analyze dependencies`, colors.red);
    return null;
  }
}

function checkStorybookPerformance() {
  log('\n📖 Storybook Performance Analysis:', colors.cyan);

  try {
    const storybookBuildTime = Date.now();
    execSync('npx storybook build --quiet', { stdio: 'pipe' });
    const buildTime = Date.now() - storybookBuildTime;

    log(`  ⏱️  Storybook Build Time: ${formatTime(buildTime)}`, colors.white);

    // Check storybook-static size
    if (fs.existsSync('storybook-static')) {
      let storybookSize = 0;

      function calculateStorybookSize(dirPath) {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const itemPath = path.join(dirPath, item);
          const stats = fs.statSync(itemPath);
          if (stats.isDirectory()) {
            calculateStorybookSize(itemPath);
          } else {
            storybookSize += stats.size;
          }
        });
      }

      calculateStorybookSize('storybook-static');
      log(`  📦 Storybook Static Size: ${formatBytes(storybookSize)}`, colors.white);

      return { buildTime, storybookSize };
    }

    return { buildTime };
  } catch (error) {
    log(`  ❌ Storybook performance check failed`, colors.red);
    return null;
  }
}

function generatePerformanceReport() {
  const reportData = {
    timestamp: new Date().toISOString(),
    bundleAnalysis: null,
    buildPerformance: null,
    memoryUsage: null,
    dependencies: null,
    storybookPerformance: null
  };

  reportData.bundleAnalysis = analyzeBundleSize();
  reportData.buildPerformance = measureBuildTime();
  reportData.memoryUsage = analyzeMemoryUsage();
  reportData.dependencies = analyzeDependencies();
  reportData.storybookPerformance = checkStorybookPerformance();

  // Save report to file
  const reportPath = `performance-reports/performance-report-${Date.now()}.json`;

  try {
    if (!fs.existsSync('performance-reports')) {
      fs.mkdirSync('performance-reports', { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    log(`\n📊 Performance report saved to: ${reportPath}`, colors.green);
  } catch (error) {
    log(`\n❌ Could not save performance report`, colors.red);
  }

  return reportData;
}

function displayPerformanceRecommendations(reportData) {
  log('\n💡 Performance Recommendations:', colors.cyan);

  if (reportData.bundleAnalysis && reportData.bundleAnalysis.totalSize > 10 * 1024 * 1024) {
    log('  ⚠️  Bundle size is large (>10MB). Consider:', colors.yellow);
    log('     - Code splitting and lazy loading', colors.white);
    log('     - Tree shaking optimization', colors.white);
    log('     - Bundle analysis tools', colors.white);
  }

  if (reportData.buildPerformance && reportData.buildPerformance.totalBuildTime > 60000) {
    log('  ⚠️  Build time is slow (>1 minute). Consider:', colors.yellow);
    log('     - Parallel building', colors.white);
    log('     - Build caching', colors.white);
    log('     - Dependencies optimization', colors.white);
  }

  if (reportData.memoryUsage && reportData.memoryUsage.heapUsed > 500 * 1024 * 1024) {
    log('  ⚠️  High memory usage (>500MB). Consider:', colors.yellow);
    log('     - Memory profiling', colors.white);
    log('     - Garbage collection optimization', colors.white);
    log('     - Memory leak detection', colors.white);
  }

  if (reportData.dependencies && Object.keys(reportData.dependencies.dependencies).length > 50) {
    log('  ⚠️  Many dependencies. Consider:', colors.yellow);
    log('     - Dependency audit', colors.white);
    log('     - Unused dependency removal', colors.white);
    log('     - Dependency consolidation', colors.white);
  }
}

async function runPerformanceMonitor() {
  log('\n🚀 THE WHEEL Design System - Performance Monitor', colors.cyan);
  log('=' .repeat(60), colors.blue);

  const reportData = generatePerformanceReport();

  displayPerformanceRecommendations(reportData);

  log('\n' + '=' .repeat(60), colors.blue);
  log('🎉 Performance monitoring completed!', colors.green);
  log('📊 Check the performance-reports directory for detailed reports', colors.cyan);
}

// Run the performance monitor
runPerformanceMonitor().catch(error => {
  log(`\n❌ Performance monitoring failed with error: ${error.message}`, colors.red);
  process.exit(1);
});
