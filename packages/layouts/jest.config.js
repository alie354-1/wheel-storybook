const baseConfig = require('../../jest.config.cjs');

module.exports = {
  ...baseConfig,
  displayName: '@wheel/layouts',
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/packages/layouts',
};
