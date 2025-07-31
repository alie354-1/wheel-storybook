const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/shared',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/shared',
};
