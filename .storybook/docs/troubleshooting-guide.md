# Storybook Troubleshooting Guide

## Overview
This guide provides solutions for common issues encountered when working with THE WHEEL design system Storybook implementation.

## Common Issues and Solutions

### Storybook Configuration Issues

#### Issue: Storybook fails to start
**Symptoms**: Error messages on startup, blank screen, or build failures

**Solutions**:
1. **Check Node.js version**: Ensure Node.js 16+ is installed
2. **Clear cache**: Run `npm run clean` or delete `node_modules` and reinstall
3. **Verify configuration**: Check `.storybook/main.ts` for syntax errors
4. **Check port conflicts**: Ensure port 6006 is available
5. **Restart development server**: Sometimes a simple restart fixes issues

**Commands**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Start with verbose logging
npm run storybook -- --verbose
```

#### Issue: Stories not loading
**Symptoms**: Empty sidebar, "No stories found" message

**Solutions**:
1. **Check story discovery patterns** in `main.ts`
2. **Verify story file extensions** (.stories.tsx, .stories.ts)
3. **Check story export format** (default export required)
4. **Validate TypeScript compilation**

**Story Pattern Check**:
```typescript
// main.ts
stories: [
  '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  '../packages/*/src/**/*.docs.mdx'
]
```

### Workspace Context Issues

#### Issue: Context switching not working
**Symptoms**: Workspace context doesn't change, toolbar not responsive

**Solutions**:
1. **Check decorator order** in `preview.ts`
2. **Verify global types configuration**
3. **Ensure WorkspaceDecorator is properly imported**
4. **Check console for JavaScript errors**
5. **Validate context provider implementation**

**Debug Steps**:
```typescript
// Check decorator configuration
export const decorators = [
  WorkspaceDecorator,
  ControlsDecorator,
  ViewportDecorator
];

// Verify global types
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
        { value: 'founder', title: 'Founder' }
      ]
    }
  }
};
```

#### Issue: Workspace context not persisting
**Symptoms**: Context resets between stories

**Solutions**:
1. **Check localStorage configuration**
2. **Verify URL parameter handling**
3. **Ensure context provider wraps all stories**
4. **Check for context reset in story navigation**

### Theme and Branding Issues

#### Issue: Brand assets not loading
**Symptoms**: Missing logos, incorrect colors, broken styles

**Solutions**:
1. **Check static directory configuration** in `main.ts`
2. **Verify asset paths** in `public/logos/`
3. **Ensure SVG files are valid**
4. **Check browser console for 404 errors**
5. **Validate theme configuration**

**Asset Path Check**:
```typescript
// main.ts
staticDirs: ['../branding', '../.storybook/public']
```

#### Issue: Theme not applying
**Symptoms**: Default Storybook theme instead of custom theme

**Solutions**:
1. **Check theme import** in `manager.js`
2. **Verify theme configuration syntax**
3. **Ensure theme.js exports correctly**
4. **Check for CSS conflicts**

**Theme Import Check**:
```javascript
// manager.js
import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme: theme,
});
```

### TypeScript Issues

#### Issue: TypeScript compilation errors
**Symptoms**: Build failures, type errors in decorators

**Solutions**:
1. **Check TypeScript configuration** in `tsconfig.json`
2. **Verify JSX settings**
3. **Ensure proper type imports**
4. **Check for missing type definitions**

**TypeScript Configuration**:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

### Performance Issues

#### Issue: Slow Storybook loading
**Symptoms**: Long startup times, slow story navigation

**Solutions**:
1. **Optimize story discovery patterns**
2. **Reduce bundle size** by code splitting
3. **Disable unnecessary addons**
4. **Use lazy loading** for components
5. **Check for memory leaks** in decorators

**Performance Configuration**:
```typescript
// main.ts - Optimize story discovery
stories: [
  '../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  '!../packages/ui/src/**/*.test.stories.@(js|jsx|ts|tsx)'
],

// Vite optimization
viteFinal: async (config) => {
  config.build = {
    ...config.build,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          storybook: ['@storybook/react', '@storybook/addon-essentials']
        }
      }
    }
  };
  return config;
}
```

### Addon Issues

#### Issue: Addon not functioning
**Symptoms**: Missing addon panels, functionality not working

**Solutions**:
1. **Check addon installation** in package.json
2. **Verify addon registration** in main.ts
3. **Ensure addon compatibility** with Storybook version
4. **Check for addon configuration**
5. **Restart Storybook** after addon changes

**Addon Debug Steps**:
```bash
# Check installed addons
npm list | grep storybook

# Reinstall specific addon
npm uninstall @storybook/addon-a11y
npm install @storybook/addon-a11y
```

### Build and Deployment Issues

#### Issue: Build failures
**Symptoms**: Production build fails, deployment errors

**Solutions**:
1. **Check build configuration** in main.ts
2. **Verify static asset paths**
3. **Ensure all dependencies are installed**
4. **Check for environment-specific issues**
5. **Validate TypeScript compilation**

**Build Commands**:
```bash
# Local build test
npm run build-storybook

# Build with verbose output
npm run build-storybook -- --verbose --debug-webpack

# Check build output
ls -la storybook-static/
```

## Debugging Tools

### Browser Developer Tools
1. **Console**: Check for JavaScript errors
2. **Network**: Monitor asset loading
3. **Elements**: Inspect DOM structure
4. **Sources**: Debug TypeScript/JavaScript
5. **Performance**: Analyze loading times

### Storybook Debugging
1. **Verbose mode**: `npm run storybook -- --verbose`
2. **Debug webpack**: `npm run storybook -- --debug-webpack`
3. **No-open**: `npm run storybook -- --no-open`
4. **Port specification**: `npm run storybook -- --port 6007`

### Logging and Monitoring
```typescript
// Add debugging to decorators
export const WorkspaceDecorator = (Story, context) => {
  console.log('WorkspaceDecorator context:', context);
  const { globals } = context;
  console.log('Workspace globals:', globals);
  
  // ... rest of decorator logic
};
```

## Emergency Fixes

### Quick Reset
```bash
# Complete reset
rm -rf node_modules package-lock.json .storybook-cache
npm install
npm run storybook
```

### Minimal Configuration
If nothing works, try a minimal `.storybook/main.ts`:
```typescript
module.exports = {
  stories: ['../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};
```

## Getting Help

### Resources
1. **Storybook Documentation**: https://storybook.js.org/docs
2. **GitHub Issues**: https://github.com/storybookjs/storybook/issues
3. **Community Discord**: https://discord.gg/storybook
4. **Stack Overflow**: Tag questions with 'storybook'

### Bug Reports
When reporting issues, include:
1. **Storybook version**: `npm list @storybook/react`
2. **Node.js version**: `node --version`
3. **Operating system**: macOS, Windows, Linux
4. **Browser and version**
5. **Error messages and stack traces**
6. **Minimal reproduction case**

### Internal Support
For THE WHEEL design system specific issues:
1. **Check documentation** in `.storybook/docs/`
2. **Review completion tracker** in `DOCS/epic-1.2-completion-tracker.md`
3. **Consult team members** familiar with the implementation
4. **Review git history** for recent changes

## Prevention

### Best Practices
1. **Keep dependencies updated** regularly
2. **Test configuration changes** in isolation
3. **Use version control** for all configuration files
4. **Document custom implementations**
5. **Monitor performance** regularly
6. **Follow TypeScript best practices**
7. **Use consistent naming conventions**
8. **Implement proper error handling**

### Regular Maintenance
1. **Weekly**: Check for addon updates
2. **Monthly**: Performance audit
3. **Quarterly**: Dependency updates
4. **Annually**: Major version upgrades

### Code Quality
1. **Linting**: ESLint configuration
2. **Formatting**: Prettier integration
3. **Type checking**: Strict TypeScript
4. **Testing**: Unit tests for decorators
5. **Documentation**: Keep docs updated

## Summary

This troubleshooting guide covers the most common issues encountered with THE WHEEL design system Storybook implementation. For issues not covered here, consult the official Storybook documentation or reach out to the development team.

Remember to:
- **Start with the simplest solution** first
- **Check the console** for error messages
- **Verify configuration** before making changes
- **Test in isolation** when debugging
- **Document solutions** for future reference

Keep this guide updated as new issues are discovered and resolved.
