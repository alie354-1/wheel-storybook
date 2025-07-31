/** @type {import('jest').Config} */
export default {
  displayName: 'THE WHEEL Design System',
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Module resolution
  moduleNameMapping: {
    '^@wheel/ui$': '<rootDir>/packages/ui/src',
    '^@wheel/themes$': '<rootDir>/packages/themes/src',
    '^@wheel/workspace$': '<rootDir>/packages/workspace/src',
    '^@wheel/patterns$': '<rootDir>/packages/patterns/src',
    '^@wheel/layouts$': '<rootDir>/packages/layouts/src',
    '^@wheel/shared$': '<rootDir>/packages/shared/src',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test-utils/fileMock.js'
  },

  // Test patterns
  testMatch: [
    '<rootDir>/packages/*/src/**/*.test.{ts,tsx}',
    '<rootDir>/packages/*/src/**/*.spec.{ts,tsx}',
    '<rootDir>/test-utils/**/*.test.{ts,tsx}'
  ],

  // Coverage configuration
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!packages/*/src/**/*.d.ts',
    '!packages/*/src/**/*.stories.{ts,tsx}',
    '!packages/*/src/**/index.{ts,tsx}',
    '!packages/*/src/**/*.test.{ts,tsx}',
    '!packages/*/src/**/*.spec.{ts,tsx}'
  ],

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // Transform configuration
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      useESM: true,
      tsconfig: {
        jsx: 'react-jsx'
      }
    }]
  },

  // Test environment options
  testEnvironmentOptions: {
    url: 'http://localhost'
  },

  // Verbose output
  verbose: true,

  // Projects for workspace testing
  projects: [
    {
      displayName: 'UI Components',
      testMatch: ['<rootDir>/packages/ui/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      displayName: 'Themes',
      testMatch: ['<rootDir>/packages/themes/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      displayName: 'Workspace',
      testMatch: ['<rootDir>/packages/workspace/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      displayName: 'Patterns',
      testMatch: ['<rootDir>/packages/patterns/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      displayName: 'Layouts',
      testMatch: ['<rootDir>/packages/layouts/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    },
    {
      displayName: 'Shared',
      testMatch: ['<rootDir>/packages/shared/src/**/*.test.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    }
  ]
};
