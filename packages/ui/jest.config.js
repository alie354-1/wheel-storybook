const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/ui',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/ui',
};
