# THE WHEEL Story Writing Guidelines & Templates

## Overview

This guide provides comprehensive standards and templates for writing Storybook stories in THE WHEEL design system. Follow these guidelines to ensure consistency, accessibility, and comprehensive documentation.

## Story File Structure

### Standard Story File Template
```typescript
// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Button component provides interactive elements for user actions. Supports multiple variants, sizes, and states with full accessibility compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'danger', 'ghost', 'outline', 'link'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Variant showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button variations across different workspace contexts. Use the Workspace Context toolbar to switch between contexts.',
      },
    },
  },
};

// Accessibility story
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <Button>Accessible Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button aria-label="Close dialog">×</Button>
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

// Interaction story
export const Interactions: Story = {
  args: {
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.click(button);
    await expect(button).toHaveClass('active');
  },
};
```

## Naming Conventions

### Story Titles
- Use PascalCase for component names
- Use descriptive, hierarchical titles
- Group related components logically

```typescript
// ✅ Good
title: 'UI/Button'
title: 'Forms/Input'
title: 'Layout/Container'
title: 'Patterns/BillingCard'

// ❌ Avoid
title: 'button'
title: 'MyButton'
title: 'Components/Button'
```

### Story Names
- Use PascalCase for story names
- Be descriptive and specific
- Use consistent naming patterns

```typescript
// ✅ Good
export const Primary: Story = {};
export const AllVariants: Story = {};
export const WithIcon: Story = {};
export const LoadingState: Story = {};

// ❌ Avoid
export const story1: Story = {};
export const test: Story = {};
export const buttonVariant: Story = {};
```

## Required Stories

### Every Component Must Include:
1. **Default** - Basic usage example
2. **AllVariants** - All available variants
3. **AllSizes** - All available sizes (if applicable)
4. **States** - Different states (disabled, loading, etc.)
5. **WorkspaceVariations** - Context-specific variations
6. **Accessibility** - Accessibility focused examples

### Optional Stories:
- **Interactions** - User interaction testing
- **Responsive** - Responsive behavior
- **CustomTheme** - Custom theme variations
- **EdgeCases** - Edge case scenarios

## ArgTypes Standards

### Common ArgTypes Patterns
```typescript
// Boolean controls
disabled: {
  control: 'boolean',
  description: 'Whether the component is disabled',
},

// Select controls
variant: {
  control: 'select',
  options: ['primary', 'secondary', 'accent'],
  description: 'Visual variant of the component',
},

// Text controls
label: {
  control: 'text',
  description: 'Label text for the component',
},

// Number controls
count: {
  control: { type: 'number', min: 0, max: 100 },
  description: 'Number of items',
},

// Color controls
color: {
  control: 'color',
  description: 'Custom color override',
},

// Action controls
onClick: {
  action: 'clicked',
  description: 'Click handler function',
},
```

## Parameters Standards

### Layout Parameters
```typescript
parameters: {
  layout: 'centered',     // For small components
  layout: 'fullscreen',   // For page-level components
  layout: 'padded',       // For components needing padding
},
```

### Documentation Parameters
```typescript
parameters: {
  docs: {
    description: {
      component: 'Comprehensive component description with usage guidelines.',
      story: 'Specific story description explaining the example.',
    },
  },
},
```

### Accessibility Parameters
```typescript
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
```

## Workspace Context Integration

### Required Workspace Stories
Every UI component should include workspace context examples:

```typescript
export const WorkspaceVariations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Consultant Context</h3>
        <Component variant="primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Client Context</h3>
        <Component variant="secondary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Admin Context</h3>
        <Component variant="accent" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Component variations across different workspace contexts. Use the Workspace Context toolbar to test different contexts.',
      },
    },
  },
};
```

### Global Decorator Usage
All stories automatically receive workspace context via
      description: {
        story: 'All available button variants with THE WHEEL brand colors.',
      },
    },
  },
};

// Size showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// State showcase
export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

// Workspace context story
export const WorkspaceVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2">Consultant Context</h3>
        <Button variant="primary">Consultant Action</Button>
      </div>
      <div>
        <h3 className="mb-2">Client Context</h3>
        <Button variant="secondary">Client Action</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
