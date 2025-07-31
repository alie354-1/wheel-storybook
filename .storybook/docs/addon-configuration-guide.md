# Storybook Addon Configuration Guide

## Overview
This guide covers the configuration and usage of all Storybook addons implemented in THE WHEEL design system.

## Installed Addons

### Core Addons

#### @storybook/addon-a11y
**Purpose**: Accessibility testing and validation
**Configuration**: Configured in `main.ts`
```typescript
'@storybook/addon-a11y'
```

**Usage**:
- Automatically scans components for accessibility issues
- Displays violations in the Accessibility panel
- Provides detailed remediation suggestions

#### @storybook/addon-docs
**Purpose**: Auto-generated documentation from JSDoc comments and TypeScript types

**Configuration**: Configured in `main.ts`
```typescript
'@storybook/addon-docs'
```

**Usage**:
- Automatically extracts component props from TypeScript interfaces
- Generates documentation from JSDoc comments
- Creates interactive controls for component props
- Displays component source code and examples

#### @storybook/addon-themes
**Purpose**: Theme switching and management

**Configuration**: Configured in `main.ts`
```typescript
'@storybook/addon-themes'
```

**Usage**:
- Provides theme selector in toolbar
- Supports light, dark, and gradient themes
- Automatically applies theme CSS variables
- Persists theme selection across stories

### Custom Decorators

#### WorkspaceDecorator
**Purpose**: Workspace context simulation and switching

**Location**: `.storybook/decorators/WorkspaceDecorator.tsx`

**Features**:
- 6 workspace contexts (Consultant, Client, Admin, Expert, Tool Creator, Founder)
- Real-time context switching via toolbar
- User role simulation with permissions
- Context persistence across stories

**Usage**:
```typescript
// Applied globally in preview.ts
export const decorators = [WorkspaceDecorator];
```

#### ControlsDecorator
**Purpose**: Custom controls implementation

**Location**: `.storybook/decorators/ControlsDecorator.tsx`

**Features**:
- Custom control types for THE WHEEL components
- Enhanced prop controls with validation
- Workspace-aware control configurations

#### ViewportDecorator
**Purpose**: Responsive design testing

**Location**: `.storybook/decorators/ViewportDecorator.tsx`

**Features**:
- 4 viewport breakpoints (Mobile, Tablet, Desktop, Wide Desktop)
- Responsive design validation
- Device simulation

## Configuration Files

### main.ts
Primary Storybook configuration file containing:
- Addon registration
- Story discovery patterns
- TypeScript configuration
- Vite integration

### preview.ts
Preview configuration including:
- Global decorators
- Global types for toolbar controls
- Theme configuration
- Viewport settings

### theme.js
Custom THE WHEEL theme configuration:
- Brand colors and typography
- Logo and branding elements
- Professional styling

## Troubleshooting

### Common Issues

**Addon not loading**:
- Check addon is listed in `main.ts`
- Verify addon is installed in package.json
- Restart Storybook dev server

**Controls not working**:
- Ensure component props are properly typed
- Check TypeScript configuration
- Verify decorator order in preview.ts

**Theme not applying**:
- Check theme.js configuration
- Verify CSS variables are defined
- Ensure theme decorator is applied

### Performance Optimization

**Slow loading**:
- Check for unnecessary addon configurations
- Optimize story discovery patterns
- Use lazy loading for large components

**Memory issues**:
- Limit concurrent stories
- Optimize decorator implementations
