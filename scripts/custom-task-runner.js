/**
 * Custom Task Runner for Nx
 * This script provides a basic task runner to bypass issues with default Nx runners.
 */
const { execSync } = require('child_process');

function runTask(taskId, projectName, taskOptions) {
  console.log(`Running ${taskId} for ${projectName} with options:`, taskOptions);
  
  try {
    // Execute Jest directly on the project directory
    const projectRoot = getProjectRoot(projectName);
    if (!projectRoot) {
      throw new Error(`Project root not found for ${projectName}`);
    }
    const command = `npx jest --config=/Users/alexandracohen/Design-System/${projectRoot}/jest.config.js --rootDir=/Users/alexandracohen/Design-System/${projectRoot} --passWithNoTests`;
    console.log(`Executing command: ${command}`);
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    return { success: true };
  } catch (error) {
    console.error(`Error executing task ${taskId} for project ${projectName}:`, error.message);
    return { success: false };
  }
}

function getProjectRoot(projectName) {
  // Mapping project name to root directory
  const projectMap = {
    '@wheel/workspace': 'packages/workspace',
    '@wheel/patterns': 'packages/patterns',
    '@wheel/layouts': 'packages/layouts',
    '@wheel/shared': 'packages/shared',
    '@wheel/themes': 'packages/themes',
    '@wheel/ui': 'packages/ui'
  };
  return projectMap[projectName] || '';
}

module.exports = async function customTaskRunner(tasks, options, context) {
  console.log('Custom Task Runner invoked with tasks:', tasks);
  
  const results = [];
  
  for (const task of tasks) {
    const result = runTask(task.id, task.target.project, task.overrides);
    results.push({
      task: task.taskId,
      success: result.success,
    });
  }
  
  return { success: results.every(r => r.success) };
};
