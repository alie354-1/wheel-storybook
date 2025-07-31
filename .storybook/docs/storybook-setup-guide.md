# THE WHEEL Storybook Setup & Configuration Guide

## Overview

This guide covers the complete setup and configuration of Storybook 7.0+ for THE WHEEL design system monorepo, including workspace context integration, brand theming, and comprehensive component documentation.

## Architecture

### Monorepo Structure
```
packages/
├── ui/           # Core UI components
├── themes/       # Theme system
├── workspace/    # Workspace context
├── shared/       # Shared utilities
├── layouts/      # Layout components
└── patterns/     # Pattern components
```

### Storybook Configuration
- **Framework**: React + Vite
- **TypeScript**: Full support with React DocGen
- **Addons**: Essential, A11y, Interactions, Viewport, Docs, Themes
- **Static Files**: Brand assets and logos
- **Performance**: Optimized for monorepo

## Installation

### Prerequisites
- Node.js 18+
- npm 9+
- THE WHEEL monorepo setup (Epic 1.1)

### Setup Commands
```bash
# Install Storybook (already installed)
npx storybook@latest init

# Install required addons
npm install --save-dev @storybook/addon-essentials
npm install --save-dev @storybook/addon-a11y
npm install --save-dev @storybook/addon-interactions
npm install --save-dev @storybook/addon-viewport
npm install --save-dev @storybook/addon-docs
npm install --save-dev @storybook/addon-themes

# Start Storybook
npm run storybook
```

## Configuration Files

### Main Configuration (.storybook/main.ts)
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Story discovery across all packages
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/*/src/**/*.docs.mdx'
  ],
  
  // Essential addons for comprehensive testing
  addons: [
    '@storybook/addon-essentials',    // Controls, actions, docs
    '@storybook/addon-a11y',          // Accessibility testing
    '@storybook/addon-interactions',  // Interaction testing
    '@storybook/addon-viewport',      // Responsive testing
    '@storybook/addon-docs',          // Documentation generation
    '@storybook/addon-themes'         // Theme switching
  ],
  
  // Static file serving
  staticDirs: ['../branding', './public'],
  
  // TypeScript configuration
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  
  // Performance optimizations
  viteFinal: async (config) => {
    // Monorepo aliases
    config.resolve.alias = {
      '@wheel/ui': join(__dirname, '../packages/ui/src'),
      '@wheel/themes': join(__dirname, '../packages/themes/src'),
      '@wheel/workspace': join(__dirname, '../packages/workspace/src'),
      '@wheel/shared': join(__dirname, '../packages/shared/src'),
      '@wheel/layouts': join(__dirname, '../packages/layouts/src'),
      '@wheel/patterns': join(__dirname, '../packages/patterns/src'),
    };
    
    // Build optimizations
    config.build.rollupOptions = {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          storybook: ['@storybook/react'],
        },
      },
    };
    
    return config;
  },
};
```

### Preview Configuration (.storybook/preview.ts)
```typescript
import { withThemeByClassName } from "@storybook/addon-themes";
import { WorkspaceDecorator, globalTypes } from "./decorators/WorkspaceDecorator";
import "../packages/ui/src/globals.css";
import "./brand.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#0f0c29' },
        { name: 'gradient', value: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 25%, #312e81 50%, #d97706 75%, #f59e0b 100%)' },
      ],
    },
  },
  decorators: [
    WorkspaceDecorator,
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
        gradient: "gradient",
      },
      defaultTheme: "light",
    }),
  ],
  globalTypes: {
    ...globalTypes,
  },
  tags: ["autodocs"]
};
```

## Workspace Context System

### Global Types Configuration
The workspace system provides three main controls in the Storybook toolbar:

1. **Workspace Context** - Switch between 6 workspace types
2. **Theme** - Light, Dark, and Gradient themes
3. **User Role** - Simulate different user permissions

```typescript
export const globalTypes = {
  workspace: {
    name: 'Workspace Context',
    description: 'Select workspace context',
    defaultValue: 'consultant',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'consultant', title: 'Consultant' },
        { value: 'client', title: 'Client' },
        { value: 'admin', title: 'Admin' },
        { value: 'expert', title: 'Expert' },
        { value: 'toolCreator', title: 'Tool Creator' },
        { value: 'founder', title: 'Founder' },
      ],
      showName: true,
    },
  },
  // ... theme and userRole configs
};
```

## Brand Integration

### THE WHEEL Brand Assets
- **Primary Colors**: Midnight blue (#1e1b4b, #312e81, #3730a3)
- **Secondary Colors**: Amber (#f59e0b, #d97706, #b45309)
- **Gradients**: Sophisticated midnight-to-amber transitions
- **Typography**: Inter font family
- **Logos**: 14 logo variants in SVG format

### Brand CSS Variables
```css
:root {
  --primary-500: #1e1b4b;
  --primary-600: #312e81;
  --primary-700: #3730a3;
  --secondary-500: #f59e0b;
  --secondary-600: #d97706;
  --gradient-midnight: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%);
  --gradient-amber: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}
```

## Performance Optimizations

### Vite Configuration
- **Aliases**: Direct imports from monorepo packages
- **Code Splitting**: Vendor and Storybook chunks
- **Dependency Optimization**: Pre-bundled packages
- **Static Assets**: Efficient serving from multiple directories

### Build Performance
- **TypeScript**: Disabled checking for faster builds
- **React DocGen**: Optimized prop extraction
- **Rollup**: Manual chunk splitting for better caching

## Addon Configuration

### Essential Addons
- **Controls**: Interactive prop editing
- **Actions**: Event handler testing
- **Docs**: Auto-generated documentation
- **Viewport**: Responsive testing
- **A11y**: Accessibility validation
- **Interactions**: User interaction testing

### Custom Addons
- **Themes**: THE WHEEL theme switching
- **Workspace**: Context-aware component testing

## Development Workflow

### Starting Storybook
```bash
npm run storybook
```

### Building for Production
```bash
npm run build-storybook
```

### Testing
```bash
npm run test-storybook
```

## Troubleshooting

### Common Issues
1. **TypeScript Errors**: Ensure all packages are properly built
2. **Import Errors**: Check alias configuration in main.ts
3. **Theme Issues**: Verify CSS variables are loaded
4. **Performance**: Check chunk splitting configuration

### Debug Commands
```bash
# Check Storybook configuration
npx storybook info

# Validate TypeScript configuration
npx tsc --noEmit

# Check bundle analysis
npm run build-storybook -- --webpack-stats-json
```

## CI/CD Integration

### GitHub Actions
```yaml
name: Storybook Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build-storybook
      - run: npm run test-storybook
```

### Visual Testing
```bash
# Chromatic integration
npm install --save-dev chromatic
npx chromatic --project-token=<token>
```

## Resources

### Documentation
- [Storybook Documentation](https://storybook.js.org/docs)
- [THE WHEEL Brand Guide](../branding/THE%20WHEEL%20-%20Complete%20Brand%20Guide%20&%20Assets%20Package.pdf)
- [Workspace Context Guide](./workspace-context-guide.md)

### Support
- Storybook Discord: [discord.gg/storybook](https://discord.gg/storybook)
- THE WHEEL Team: Internal Slack #design-system

---

**Last Updated**: Epic 1.2.1 Implementation  
**Version**: Storybook 7.0+  
**Status**: Production Ready ✅
