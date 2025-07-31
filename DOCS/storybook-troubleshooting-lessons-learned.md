# Storybook Troubleshooting - Lessons Learned

## Date: January 15, 2025

## Overview
This document captures the complete troubleshooting journey for fixing critical Storybook issues in THE WHEEL Design System.

## Issues Encountered

### 1. React Import Errors
- **Problem**: "React isn't defined" errors throughout Storybook
- **Root Cause**: Vite configuration wasn't properly set up with React plugin
- **Impact**: Components couldn't render, making Storybook unusable

### 2. Missing Theme/Colors
- **Problem**: Components appeared unstyled with no brand colors
- **Root Cause**: CSS variables and theme configuration issues
- **Impact**: Visual feedback lost, difficult to validate component styling

### 3. Build Configuration Issues
- **Problem**: System appeared to run but was fundamentally broken
- **Root Cause**: Incomplete Vite/React integration in Storybook config
- **Impact**: False positive - system seemed operational but wasn't functional

## Solutions Applied

### 1. React Plugin Integration
```javascript
// In .storybook/main.mjs
viteFinal: async (config) => {
  const { default: react } = await import('@vitejs/plugin-react');

  config.plugins = [
    react(),
    ...config.plugins || [],
    // existing plugins...
  ];
}
```

### 2. React Injection Strategy
- Maintained custom plugin to inject React globally
- Ensured React available for all story files
- Configured automatic JSX transform

### 3. Cache Management
- Cleared node_modules/.cache to ensure fresh builds
- Essential after configuration changes

## Lessons Learned

### 1. **Visual Appearance ≠ Working System**
- Just because Storybook loads doesn't mean it's functioning
- Always check browser console for errors
- Test actual component functionality, not just appearance

### 2. **Vite + React + Storybook Integration**
- Vite requires explicit React plugin configuration
- Dynamic imports necessary for plugin loading in config
- Plugin order matters in the configuration array

### 3. **Debugging Approach**
- Start with simplest component (Button)
- Check console errors before assuming visual issues
- Work systematically through configuration layers

### 4. **Monorepo Considerations**
- Path aliases must be properly configured
- Package dependencies need explicit inclusion
- Build optimization crucial for performance

## Common Pitfalls to Avoid

1. **Assuming Storybook "just works"**
   - Modern build tools require explicit configuration
   - React isn't automatically available globally

2. **Ignoring Console Errors**
   - Browser console is primary debugging tool
   - Errors often reveal root cause immediately

3. **Not Clearing Cache**
   - Build caches can persist old configurations
   - Always clear after major config changes

4. **Incomplete Migration**
   - When upgrading Storybook versions, check all configs
   - Ensure all necessary plugins are installed and configured

## Error Patterns Recognized

### Pattern 1: React Not Defined
```
Uncaught ReferenceError: React is not defined
```
**Solution**: Add React plugin to Vite config

### Pattern 2: Missing Theme Variables
```
CSS variables undefined, components unstyled
```
**Solution**: Verify CSS imports and PostCSS configuration

### Pattern 3: Build Succeeds but Runtime Fails
```
Storybook builds without errors but components don't render
```
**Solution**: Check runtime configuration, not just build config

## Best Practices Established

1. **Configuration Validation**
   - Test configuration changes immediately
   - Verify in browser, not just terminal
   - Use incognito mode to avoid cache issues

2. **Systematic Debugging**
   - Check one issue at a time
   - Start with core functionality (React)
   - Move to styling/theme after basics work

3. **Documentation**
   - Document all configuration changes
   - Note why changes were necessary
   - Include error messages for future reference

## Future Recommendations

1. **Automated Testing**
   - Add tests for Storybook configuration
   - Verify React availability in test suite
   - Check theme variables load correctly

2. **CI/CD Integration**
   - Build Storybook in CI to catch issues early
   - Run visual regression tests
   - Validate all components render

3. **Configuration Management**
   - Keep Storybook config in version control
   - Document all custom configurations
   - Create setup scripts for consistency

## Commands for Verification

```bash
# Clear cache and start fresh
rm -rf node_modules/.cache
npm run storybook

# In browser console
console.log(window.React) // Should output React object

# Check for errors
// Open browser DevTools console
// Navigate to any component story
// Should see no React-related errors
```

## Summary

The core issue was incomplete Vite/React integration in Storybook's configuration. The solution required:
1. Properly importing and configuring the React plugin
2. Maintaining React injection for global availability
3. Clearing build caches for fresh compilation

This experience reinforces the importance of understanding the build toolchain and not assuming visual success equals functional success.
