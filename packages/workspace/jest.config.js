const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/workspace',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/workspace',
};
