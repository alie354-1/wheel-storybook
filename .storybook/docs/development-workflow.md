# THE WHEEL Development Workflow with Storybook

## Overview

This guide outlines the complete development workflow for working with THE WHEEL design system using Storybook, from initial component creation to production deployment.

## Development Lifecycle

### Phase 1: Component Development

#### 1. Create Component Structure
```bash
# Create new component in appropriate package
mkdir packages/ui/src/components/NewComponent
cd packages/ui/src/components/NewComponent

# Create component files
touch NewComponent.tsx
touch NewComponent.stories.ts
touch NewComponent.test.tsx
touch index.ts
```

#### 2. Component Implementation
```typescript
// NewComponent.tsx
import React from 'react';
import { cn } from '@wheel/shared';
import { useWorkspace } from '@wheel/workspace';

interface NewComponentProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className,
  ...props
}) => {
  const { workspace } = useWorkspace();
  
  const baseClasses = 'component-base';
  const variantClasses = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-white',
    accent: 'bg-accent-600 text-white',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      data-workspace-type={workspace.type}
      {...props}
    >
      {children}
    </div>
  );
};

export default NewComponent;
```

#### 3. Export Component
```typescript
// index.ts
export { NewComponent } from './NewComponent';
export type { NewComponentProps } from './NewComponent';
```

### Phase 2: Story Development

#### 1. Create Comprehensive Stories
```typescript
// NewComponent.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { NewComponent } from './NewComponent';

const meta: Meta<typeof NewComponent> = {
  title: 'UI/NewComponent',
  component: NewComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          # NewComponent
          
          A versatile component for [specific use case].
          
          ## Usage Guidelines
          - Use for [specific scenarios]
          - Supports all workspace contexts
          - Fully accessible with ARIA support
          
          ## Accessibility
          - Proper ARIA attributes
          - Keyboard navigation support
          - Screen reader compatible
          
          ## Workspace Context
          - Adapts styling based on workspace type
          - Supports all 6 workspace contexts
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
      description: 'Visual variant of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Layout',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
  },
  args: {
    children: 'New Component',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Required stories
export const Default: Story = {
  args: {
    children: 'Default Component',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <NewComponent variant="primary">Primary</NewComponent>
      <NewComponent variant="secondary">Secondary</NewComponent>
      <NewComponent variant="accent">Accent</NewComponent>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <NewComponent size="sm">Small</NewComponent>
      <NewComponent size="md">Medium</NewComponent>
      <NewComponent size="lg">Large</NewComponent>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2">Normal State</h4>
        <NewComponent>Normal</NewComponent>
      </div>
      <div>
        <h4 className="mb-2">Disabled State</h4>
        <NewComponent disabled>Disabled</NewComponent>
      </div>
    </div>
  ),
};

export const WorkspaceVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Consultant Context</h3>
        <NewComponent variant="primary">Consultant Action</NewComponent>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Client Context</h3>
        <NewComponent variant="secondary">Client Action</NewComponent>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Admin Context</h3>
        <NewComponent variant="accent">Admin Action</NewComponent>
      </div>
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2">With ARIA Labels</h4>
        <NewComponent aria-label="Close dialog">×</NewComponent>
      </div>
      <div>
        <h4 className="mb-2">With Descriptions</h4>
        <NewComponent aria-describedby="help-text">Submit</NewComponent>
        <div id="help-text" className="text-sm text-gray-600">
          This will submit the form
        </div>
      </div>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};
```

### Phase 3: Testing

#### 1. Write Component Tests
```typescript
// NewComponent.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NewComponent } from './NewComponent';

describe('NewComponent', () => {
  it('renders children correctly', () => {
    render(<NewComponent>Test Content</NewComponent>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<NewComponent variant="primary">Primary</NewComponent>);
    expect(screen.getByText('Primary')).toHaveClass('bg-primary-600');
  });

  it('handles disabled state', () => {
    render(<NewComponent disabled>Disabled</NewComponent>);
    expect(screen.getByText('Disabled')).toHaveClass('opacity-50');
  });
});
```

#### 2. Run Tests
```bash
# Run component tests
npm test NewComponent

# Run Storybook tests
npm run test:storybook

# Run accessibility tests
npm run test:a11y
```

### Phase 4: Documentation

#### 1. Update Package Exports
```typescript
// packages/ui/src/index.ts
export { NewComponent } from './components/NewComponent';
export type { NewComponentProps } from './components/NewComponent';
```

#### 2. Create Documentation
```markdown
# NewComponent

## Overview
Brief description of the component.

## Usage
```tsx
import { NewComponent } from '@wheel/ui';

<NewComponent variant="primary" size="md">
  Content
</NewComponent>
```

## Props
- `variant`: Visual variant
- `size`: Size variant
- `disabled`: Disabled state
- `children`: Component content

## Accessibility
- Supports ARIA attributes
- Keyboard navigation
- Screen reader compatible
```

## Daily Development Workflow

### 1. Start Development Environment
```bash
# Start Storybook
npm run storybook

# Start tests in watch mode
npm run test:watch

# Start type checking
npm run type-check:watch
```

### 2. Development Process
1. **Create/modify component** in appropriate package
2. **Update/create stories** following guidelines
3. **Write/update tests** for new functionality
4. **Check accessibility** with Storybook a11y addon
5. **Test workspace contexts** using toolbar controls
6. **Validate responsive design** with viewport addon
7. **Document changes** in component docs

### 3. Quality Checks
```bash
# Run all tests
npm test

# Check TypeScript
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Build Storybook
npm run build-storybook
```

## Code Review Workflow

### 1. Pre-Review Checklist
- [ ] All tests pass
- [ ] TypeScript compiles without errors
- [ ] Storybook builds successfully
- [ ] All required stories created
- [ ] Accessibility tests pass
- [ ] Workspace context variations tested
- [ ] Documentation updated

### 2. Review Process
1. **Functional Review**: Does the component work as expected?
2. **Design Review**: Does it match design specifications?
3. **Code Review**: Is the code clean and maintainable?
4. **Accessibility Review**: Are accessibility standards met?
5. **Performance Review**: Does it meet performance requirements?

### 3. Approval Criteria
- [ ] All automated tests pass
- [ ] Code follows style guidelines
- [ ] Documentation is complete
- [ ] Accessibility requirements met
- [ ] Performance benchmarks met
- [ ] Design approval received

## Deployment Workflow

### 1. Staging Deployment
```bash
# Build for staging
npm run build-storybook

# Deploy to staging
npm run deploy:staging

# Run end-to-end tests
npm run test:e2e:staging
```

### 2. Production Deployment
```bash
# Final quality checks
npm run test:all
npm run build-storybook
npm run test:storybook:ci

# Deploy to production
npm run deploy:production

# Monitor deployment
npm run monitor:production
```

### 3. Post-Deployment
```bash
# Run smoke tests
npm run test:smoke:production

# Update documentation
npm run docs:update

# Notify team
npm run notify:deployment
```

## Troubleshooting Common Issues

### Storybook Build Errors
```bash
# Clear cache
npm run clean
rm -rf node_modules/.cache

# Reinstall dependencies
npm ci

# Check TypeScript
npm run type-check
```

### Story Loading Issues
```bash
# Check story discovery
npm run storybook:debug

# Validate story syntax
npm run lint:stories

# Check imports
npm run check-imports
```

### Performance Issues
```bash
# Analyze bundle
npm run analyze

# Check memory usage
npm run monitor:memory

# Optimize images
npm run optimize:images
```

## Best Practices

### Component Development
- Start with the simplest implementation
- Add complexity incrementally
- Test early and often
- Document as you go
- Consider accessibility from the start

### Story Development
- Write stories before implementing features
- Cover all possible states
- Include edge cases
- Test responsive behavior
- Validate accessibility

### Testing Strategy
- Unit tests for component logic
- Integration tests for component interactions
- Visual regression tests for UI changes
- Accessibility tests for compliance
- Performance tests for optimization

### Documentation
- Keep documentation up to date
- Include practical examples
- Explain design decisions
- Document known limitations
- Provide migration guides

## Tools and Resources

### Development Tools
- **Storybook**: Component development and documentation
- **Vitest**: Unit testing framework
- **Testing Library**: Component testing utilities
- **Chromatic**: Visual testing platform
- **Axe**: Accessibility testing

### IDE Extensions
- **Storybook for VSCode**: Story integration
- **ES7+ React/Redux/React-Native snippets**: Code snippets
- **Tailwind CSS IntelliSense**: CSS class completion
- **TypeScript Importer**: Auto import management

### External Resources
- [Storybook Documentation](https://storybook.js.org/docs)
- [Testing Library Documentation](https://testing-library.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [THE WHEEL Brand Guidelines](../branding/THE%20WHEEL%20-%20Complete%20Brand%20Guide%20&%20Assets%20Package.pdf)

## Getting Help

### Internal Resources
- **Design System Team**: Slack #design-system
- **Development Team**: Slack #development
- **Documentation**: `.storybook/docs/`
- **Examples**: Component story files

### External Resources
- **Storybook Discord**: [discord.gg/storybook](https://discord.gg/storybook)
- **GitHub Issues**: Create issues for bugs or feature requests
- **Stack Overflow**: Tagged with 'storybook' and 'react'

---

**Last Updated**: Epic 1.2.1 Implementation  
**Version**: Storybook 7.0+  
**Status**: Production Ready ✅
