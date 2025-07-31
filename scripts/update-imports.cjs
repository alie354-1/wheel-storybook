const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, '../packages');

const packageNames = fs.readdirSync(packagesDir).filter(name => {
  const packagePath = path.join(packagesDir, name);
  return fs.statSync(packagePath).isDirectory();
});

const packageMap = packageNames.reduce((acc, name) => {
  acc[`@wheel/${name}`] = path.join(packagesDir, name, 'src');
  return acc;
}, {});

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;

  Object.entries(packageMap).forEach(([packageName, packagePath]) => {
    const regex = new RegExp(`from '(\\.\\./)+lib/`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `from '${packageName}/`);
      updated = true;
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated imports in ${filePath}`);
  }
}

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      updateImportsInFile(fullPath);
    }
  });
}

packageNames.forEach(name => {
  const packageSrcDir = path.join(packagesDir, name, 'src');
  if (fs.existsSync(packageSrcDir)) {
    traverseDir(packageSrcDir);
  }
});
