const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/patterns',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/patterns',
};
