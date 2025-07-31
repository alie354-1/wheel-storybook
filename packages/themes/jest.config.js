const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/themes',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/themes',
};
