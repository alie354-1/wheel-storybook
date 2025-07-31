# THE WHEEL Component Documentation Standards

## Overview

This document defines the comprehensive documentation standards for THE WHEEL design system components in Storybook. Every component must meet these standards to ensure consistent, accessible, and maintainable documentation.

## Component Documentation Structure

### Required Documentation Elements

#### 1. Component Description
```typescript
const meta: Meta<typeof Component> = {
  title: 'Category/ComponentName',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `
          # ComponentName
          
          Brief description of the component's purpose and functionality.
          
          ## Usage Guidelines
          - When to use this component
          - Best practices for implementation
          - Common use cases
          
          ## Accessibility
          - ARIA attributes supported
          - Keyboard navigation support
          - Screen reader compatibility
          
          ## Workspace Context
          - How the component adapts to different workspace contexts
          - Context-specific variations
        `,
      },
    },
  },
  tags: ['autodocs'],
};
```

#### 2. Prop Documentation
```typescript
argTypes: {
  // Required props
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
  
  // Optional props
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Size variant of the component',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'md' },
      category: 'Layout',
    },
  },
  
  // Boolean props
  disabled: {
    control: 'boolean',
    description: 'Whether the component is disabled',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'State',
    },
  },
  
  // Function props
  onClick: {
    action: 'clicked',
    description: 'Click handler function',
    table: {
      type: { summary: '(event: MouseEvent) => void' },
      category: 'Events',
    },
  },
  
  // Custom props
  className: {
    control: 'text',
    description: 'Additional CSS classes',
    table: {
      type: { summary: 'string' },
      category: 'Styling',
    },
  },
},
```

#### 3. Default Args
```typescript
args: {
  // Set sensible defaults
  variant: 'primary',
  size: 'md',
  disabled: false,
  // Mock functions for actions
  onClick: fn(),
  onSubmit: fn(),
  onChange: fn(),
},
```

## Required Stories

### 1. Default Story
```typescript
export const Default: Story = {
  args: {
    children: 'Default Component',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default configuration of the component.',
      },
    },
  },
};
```

### 2. All Variants
```typescript
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Component variant="primary">Primary</Component>
      <Component variant="secondary">Secondary</Component>
      <Component variant="accent">Accent</Component>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available variants of the component.',
      },
    },
  },
};
```

### 3. All Sizes (if applicable)
```typescript
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Component size="sm">Small</Component>
      <Component size="md">Medium</Component>
      <Component size="lg">Large</Component>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available sizes of the component.',
      },
    },
  },
};
```

### 4. Component States
```typescript
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2">Normal State</h4>
        <Component>Normal</Component>
      </div>
      <div>
        <h4 className="mb-2">Disabled State</h4>
        <Component disabled>Disabled</Component>
      </div>
      <div>
        <h4 className="mb-2">Loading State</h4>
        <Component loading>Loading</Component>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the component.',
      },
    },
  },
};
```

### 5. Workspace Context Variations
```typescript
export const WorkspaceVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Consultant Context</h3>
        <Component variant="primary">Consultant Action</Component>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Client Context</h3>
        <Component variant="secondary">Client Action</Component>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Admin Context</h3>
        <Component variant="accent">Admin Action</Component>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Component variations across different workspace contexts. Use the Workspace Context toolbar to switch between contexts.',
      },
    },
  },
};
```

### 6. Accessibility Examples
```typescript
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2">With ARIA Labels</h4>
        <Component aria-label="Close dialog">×</Component>
      </div>
      <div>
        <h4 className="mb-2">With Descriptions</h4>
        <Component aria-describedby="help-text">Submit</Component>
        <div id="help-text" className="text-sm text-gray-600">
          This will submit the form
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features and proper ARIA implementation.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'focusable-content',
            enabled: true,
          },
        ],
      },
    },
  },
};
```

## Category Organization

### Standard Categories
```typescript
// UI Components
title: 'UI/Button'
title: 'UI/Input'
title: 'UI/Badge'

// Layout Components
title: 'Layout/Container'
title: 'Layout/Grid'
title: 'Layout/Stack'

// Form Components
title: 'Forms/Input'
title: 'Forms/Select'
title: 'Forms/Checkbox'

// Pattern Components
title: 'Patterns/BillingCard'
title: 'Patterns/ClientCard'
title: 'Patterns/TimeCard'

// Theme Components
title: 'Themes/ThemeProvider'
title: 'Themes/ColorPalette'

// Workspace Components
title: 'Workspace/WorkspaceProvider'
title: 'Workspace/UserProvider'
```

## Quality Checklist

### Before Publishing Component Documentation:

#### ✅ Component Meta
- [ ] Descriptive title with proper category
- [ ] Comprehensive component description
- [ ] All required tags included
- [ ] Proper parameter configuration

#### ✅ Story Coverage
- [ ] Default story with basic usage
- [ ] All variants demonstrated
- [ ] All sizes shown (if applicable)
- [ ] All states covered
- [ ] Workspace context variations
- [ ] Accessibility examples

#### ✅ Prop Documentation
- [ ] All props have descriptions
- [ ] Proper control types assigned
- [ ] Default values specified
- [ ] Type information included
- [ ] Props categorized appropriately

#### ✅ Accessibility
- [ ] ARIA attributes documented
- [ ] Keyboard navigation tested
- [ ] Color contrast validated
- [ ] Screen reader compatibility verified
- [ ] Focus management implemented

#### ✅ Workspace Context
- [ ] Context decorator applied
- [ ] Workspace-specific variations shown
- [ ] Context switching tested
- [ ] Theme variations validated

#### ✅ Performance
- [ ] Component renders efficiently
- [ ] No unnecessary re-renders
- [ ] Proper prop memoization
- [ ] Optimal bundle size

## Best Practices

### Documentation Writing
- Use clear, concise language
- Include practical examples
- Explain when to use the component
- Provide implementation guidelines
- Document edge cases and limitations

### Code Examples
- Use realistic, meaningful content
- Show common use cases
- Include proper error handling
- Demonstrate best practices
- Use consistent formatting

### Accessibility
- Always include ARIA labels
- Test with screen readers
- Validate color contrast
- Ensure keyboard navigation
- Document accessibility features

### Workspace Context
- Test in all 6 workspace contexts
- Document context-specific behavior
- Show appropriate variations
- Validate theme consistency

## Common Mistakes to Avoid

### ❌ Poor Documentation
- Vague component descriptions
- Missing prop documentation
- No usage examples
- Inconsistent naming

### ❌ Incomplete Story Coverage
- Missing variant examples
- No accessibility stories
- No workspace context variations
- Limited state examples

### ❌ Accessibility Issues
- Missing ARIA attributes
- Poor color contrast
- No keyboard navigation
- Inaccessible form labels

### ❌ Performance Problems
- Unnecessary re-renders
- Large bundle sizes
- Inefficient prop updates
- Memory leaks

## Review Process

### Self-Review Checklist
1. Run all stories without errors
2. Test accessibility with screen reader
3. Validate in all workspace contexts
4. Check responsive behavior
5. Verify performance metrics

### Peer Review Requirements
- Documentation clarity
- Code quality
- Accessibility compliance
- Workspace context integration
- Performance optimization

---

**Last Updated**: Epic 1.2.1 Implementation  
**Version**: Storybook 7.0+  
**Status**: Production Ready ✅
