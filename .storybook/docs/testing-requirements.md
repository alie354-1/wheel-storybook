# THE WHEEL Storybook Testing Requirements

## Overview

This document outlines the comprehensive testing requirements for THE WHEEL Storybook configuration, ensuring reliability, accessibility, and performance across all components and contexts.

## Testing Categories

### 1. Storybook Build Validation Tests

#### Build Configuration Tests
```bash
# Test Storybook build process
npm run build-storybook

# Validate build output
test -d "storybook-static" || exit 1
test -f "storybook-static/index.html" || exit 1
test -f "storybook-static/main.*.js" || exit 1
```

#### Configuration Validation
```typescript
// tests/storybook-config.test.ts
import { describe, it, expect } from 'vitest';
import config from '../.storybook/main';

describe('Storybook Configuration', () => {
  it('should have required addons', () => {
    expect(config.addons).toContain('@storybook/addon-essentials');
    expect(config.addons).toContain('@storybook/addon-a11y');
    expect(config.addons).toContain('@storybook/addon-interactions');
    expect(config.addons).toContain('@storybook/addon-viewport');
    expect(config.addons).toContain('@storybook/addon-docs');
  });

  it('should have proper story discovery', () => {
    expect(config.stories).toContain('../packages/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)');
    expect(config.stories).toContain('../packages/*/src/**/*.docs.mdx');
  });

  it('should have static directories configured', () => {
    expect(config.staticDirs).toContain('../branding');
    expect(config.staticDirs).toContain('./public');
  });

  it('should have TypeScript configuration', () => {
    expect(config.typescript).toBeDefined();
    expect(config.typescript.reactDocgen).toBe('react-docgen-typescript');
  });
});
```

### 2. Story Compilation Tests

#### Story Loading Tests
```typescript
// tests/story-compilation.test.ts
import { describe, it, expect } from 'vitest';
import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from '../packages/ui/src/components/Button/Button.stories';

describe('Story Compilation', () => {
  const composedStories = composeStories(ButtonStories);

  it('should compile all Button stories', () => {
    expect(composedStories.Primary).toBeDefined();
    expect(composedStories.AllVariants).toBeDefined();
    expect(composedStories.AllSizes).toBeDefined();
    expect(composedStories.States).toBeDefined();
    expect(composedStories.WorkspaceVariations).toBeDefined();
  });

  it('should render stories without errors', () => {
    expect(() => composedStories.Primary()).not.toThrow();
    expect(() => composedStories.AllVariants()).not.toThrow();
  });
});
```

#### Monorepo Package Discovery
```typescript
// tests/package-discovery.test.ts
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import glob from 'glob';

describe('Package Discovery', () => {
  it('should find stories in all packages', async () => {
    const storyFiles = glob.sync('../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)');
    
    // Verify we have stories in each package
    expect(storyFiles.length).toBeGreaterThan(0);
    
    // Verify stories exist in key packages
    const uiStories = storyFiles.filter(file => file.includes('packages/ui/'));
    const layoutStories = storyFiles.filter(file => file.includes('packages/layouts/'));
    const patternStories = storyFiles.filter(file => file.includes('packages/patterns/'));
    
    expect(uiStories.length).toBeGreaterThan(0);
    expect(layoutStories.length).toBeGreaterThan(0);
    expect(patternStories.length).toBeGreaterThan(0);
  });
});
```

### 3. Addon Functionality Tests

#### Accessibility Addon Tests
```typescript
// tests/a11y-addon.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from '../packages/ui/src/components/Button/Button.stories';

describe('Accessibility Addon', () => {
  const { Primary, Accessibility } = composeStories(ButtonStories);

  it('should have accessibility story', () => {
    expect(Accessibility).toBeDefined();
  });

  it('should render accessible components', () => {
    const { container } = render(<Primary />);
    const button = container.querySelector('button');
    
    expect(button).toHaveAttribute('type');
    expect(button).toBeEnabled();
  });
});
```

#### Interactions Addon Tests
```typescript
// tests/interactions-addon.test.ts
import { describe, it, expect } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from '../packages/ui/src/components/Button/Button.stories';

describe('Interactions Addon', () => {
  const { Interactions } = composeStories(ButtonStories);

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    render(<Interactions />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Verify interaction occurred
    expect(button).toHaveBeenClicked();
  });
});
```

### 4. Workspace Context Switching Tests

#### Context Decorator Tests
```typescript
// tests/workspace-context.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WorkspaceDecorator } from '../.storybook/decorators/WorkspaceDecorator';
import { Button } from '../packages/ui/src/components/Button/Button';

describe('Workspace Context', () => {
  const StoryComponent = () => <Button>Test Button</Button>;

  it('should apply workspace context to stories', () => {
    const context = {
      globals: {
        workspace: 'consultant',
        theme: 'light',
        userRole: 'admin'
      }
    };

    const DecoratedStory = WorkspaceDecorator(StoryComponent, context);
    const { container } = render(<DecoratedStory />);
    
    expect(container.querySelector('[data-workspace-type="consultant"]')).toBeInTheDocument();
  });

  it('should handle all workspace types', () => {
    const workspaceTypes = ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder'];
    
    workspaceTypes.forEach(workspace => {
      const context = { globals: { workspace, theme: 'light', userRole: 'admin' } };
      const DecoratedStory = WorkspaceDecorator(StoryComponent, context);
      
      expect(() => render(<DecoratedStory />)).not.toThrow();
    });
  });
});
```

### 5. TypeScript Integration Tests

#### Type Checking Tests
```typescript
// tests/typescript-integration.test.ts
import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

describe('TypeScript Integration', () => {
  it('should compile TypeScript without errors', () => {
    expect(() => {
      execSync('npx tsc --noEmit --project .storybook/tsconfig.json', { 
        stdio: 'pipe' 
      });
    }).not.toThrow();
  });

  it('should generate proper component documentation', () => {
    // Test that React DocGen TypeScript is working
    const result = execSync('npx react-docgen-typescript packages/ui/src/components/Button/Button.tsx', {
      encoding: 'utf-8'
    });
    
    expect(result).toContain('variant');
    expect(result).toContain('size');
    expect(result).toContain('disabled');
  });
});
```

### 6. Performance Tests

#### Story Loading Performance
```typescript
// tests/performance.test.ts
import { describe, it, expect } from 'vitest';
import { performance } from 'perf_hooks';
import { composeStories } from '@storybook/testing-react';
import * as ButtonStories from '../packages/ui/src/components/Button/Button.stories';

describe('Performance', () => {
  it('should load stories within acceptable time', async () => {
    const start = performance.now();
    const composedStories = composeStories(ButtonStories);
    const end = performance.now();
    
    const loadTime = end - start;
    expect(loadTime).toBeLessThan(1000); // Should load within 1 second
  });

  it('should render stories efficiently', () => {
    const { Primary } = composeStories(ButtonStories);
    
    const start = performance.now();
    Primary();
    const end = performance.now();
    
    const renderTime = end - start;
    expect(renderTime).toBeLessThan(100); // Should render within 100ms
  });
});
```

#### Bundle Size Tests
```bash
# Bundle size analysis
npm run build-storybook
npx bundlesize

# Expected bundle sizes
echo "main.*.js should be < 1MB"
echo "vendors.*.js should be < 2MB"
echo "Total bundle should be < 5MB"
```

## Test Implementation

### Package.json Scripts
```json
{
  "scripts": {
    "test:storybook": "test-storybook",
    "test:storybook:ci": "test-storybook --ci",
    "test:build": "npm run build-storybook && npm run test:storybook:ci",
    "test:a11y": "npm run storybook -- --quiet & npx wait-on http://localhost:6006 && npx axe-storybook",
    "test:performance": "npm run build-storybook && npx lighthouse-ci",
    "test:visual": "npx chromatic --project-token=$CHROMATIC_TOKEN"
  }
}
```

### Test Configuration
```typescript
// .storybook/test-runner.ts
import { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preRender(page) {
    // Set up any global test prerequisites
    await page.setViewport({ width: 1280, height: 720 });
  },
  
  async postRender(page, context) {
    // Run accessibility tests
    if (context.name !== 'Docs') {
      await page.waitForLoadState('networkidle');
      
      // Test accessibility
      const accessibilityReport = await page.accessibility.snapshot();
      expect(accessibilityReport).toBeDefined();
    }
  },
  
  // Custom test timeouts
  testTimeout: 60000,
  
  // Custom jest configuration
  jestConfig: {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/.storybook/test-setup.ts'],
  },
};

export default config;
```

### CI/CD Integration Tests

#### GitHub Actions Workflow
```yaml
# .github/workflows/storybook-tests.yml
name: Storybook Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build Storybook
      run: npm run build-storybook
    
    - name: Run Storybook tests
      run: npm run test:storybook:ci
    
    - name: Run accessibility tests
      run: npm run test:a11y
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
        flags: storybook
        name: storybook-coverage
```

## Test Execution

### Local Development Testing
```bash
# Run all tests
npm test

# Run Storybook-specific tests
npm run test:storybook

# Run accessibility tests
npm run test:a11y

# Run performance tests
npm run test:performance

# Run visual regression tests
npm run test:visual
```

### Continuous Integration Testing
```bash
# CI pipeline commands
npm run build-storybook
npm run test:storybook:ci
npm run test:a11y
npm run test:performance
```

## Test Coverage Requirements

### Minimum Coverage Targets
- **Component Stories**: 100% of components must have stories
- **Story Types**: 90% of components must have all required story types
- **Accessibility**: 100% of interactive components must pass a11y tests
- **Workspace Context**: 100% of UI components must support workspace context
- **TypeScript**: 100% type coverage for all component props

### Coverage Reporting
```typescript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
    '!**/*.test.{ts,tsx}',
    '!**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
```

## Test Data and Mocks

### Mock Data Setup
```typescript
// .storybook/test-setup.ts
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock global functions
global.fetch = vi.fn();
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock workspace context
vi.mock('@wheel/workspace', () => ({
  WorkspaceProvider: ({ children }: { children: React.ReactNode }) => children,
  useWorkspace: () => ({
    workspace: 'consultant',
    theme: 'light',
    user: { role: 'admin' },
  }),
}));
```

### Test Utilities
```typescript
// .storybook/test-utils.ts
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { WorkspaceProvider } from '@wheel/workspace';
import { ThemeProvider } from '@wheel/themes';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <WorkspaceProvider workspace={{ type: 'consultant', theme: 'light' }}>
      <ThemeProvider theme="light">
        {children}
      </ThemeProvider>
    </WorkspaceProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

## Success Criteria

### Story 1.2.1 Testing Requirements Met When:
- [ ] All configuration tests pass
- [ ] All story compilation tests pass  
- [ ] All addon functionality tests pass
- [ ] All workspace context tests pass
- [ ] All TypeScript integration tests pass
- [ ] All performance tests pass
- [ ] CI/CD pipeline runs successfully
- [ ] Coverage targets are met
- [ ] All documentation is complete

---

**Last Updated**: Epic 1.2.1 Implementation  
**Version**: Storybook 7.0+
