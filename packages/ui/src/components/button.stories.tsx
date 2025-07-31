/* eslint-disable react/react-in-jsx-scope -- Required for Storybook render functions */
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from 'react';
import { Button } from './button';

// Ensure React is available for Storybook
if (typeof window !== 'undefined' && !window.React) {
  window.React = React;
}

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'gradient-midnight', 'gradient-amber', 'ghost', 'outline', 'link', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    context: {
      control: { type: 'select' },
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    isLoading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

// Workspace Context Examples
export const ConsultantContext: Story = {
  args: {
    variant: 'primary',
    context: 'consultant',
    children: 'Consultant Button',
  },
};

export const ClientContext: Story = {
  args: {
    variant: 'primary',
    context: 'client',
    children: 'Client Button',
  },
};

export const AdminContext: Story = {
  args: {
    variant: 'primary',
    context: 'admin',
    children: 'Admin Button',
  },
};

export const ExpertContext: Story = {
  args: {
    variant: 'primary',
    context: 'expert',
    children: 'Expert Button',
  },
};

export const ToolCreatorContext: Story = {
  args: {
    variant: 'primary',
    context: 'toolCreator',
    children: 'Tool Creator Button',
  },
};

export const FounderContext: Story = {
  args: {
    variant: 'primary',
    context: 'founder',
    children: 'Founder Button',
  },
};

// Size Examples
export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="xs">Extra Small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="xl">Extra Large</Button>
    </div>
  ),
};

// Loading States
export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Loading...',
  },
};

export const LoadingWithCustomText: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    loadingText: 'Saving...',
    children: 'Save Changes',
  },
};

// Icon Examples
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    children: 'Add Item',
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'outline',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    iconPosition: 'right',
    children: 'Next',
  },
};

// Workspace Context Matrix
export const WorkspaceContextMatrix: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Consultant</h3>
        <Button {...args} context="consultant" variant="primary">Primary</Button>
        <Button {...args} context="consultant" variant="secondary">Secondary</Button>
        <Button {...args} context="consultant" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Client</h3>
        <Button {...args} context="client" variant="primary">Primary</Button>
        <Button {...args} context="client" variant="secondary">Secondary</Button>
        <Button {...args} context="client" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Admin</h3>
        <Button {...args} context="admin" variant="primary">Primary</Button>
        <Button {...args} context="admin" variant="secondary">Secondary</Button>
        <Button {...args} context="admin" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Expert</h3>
        <Button {...args} context="expert" variant="primary">Primary</Button>
        <Button {...args} context="expert" variant="secondary">Secondary</Button>
        <Button {...args} context="expert" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Tool Creator</h3>
        <Button {...args} context="toolCreator" variant="primary">Primary</Button>
        <Button {...args} context="toolCreator" variant="secondary">Secondary</Button>
        <Button {...args} context="toolCreator" variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Founder</h3>
        <Button {...args} context="founder" variant="primary">Primary</Button>
        <Button {...args} context="founder" variant="secondary">Secondary</Button>
        <Button {...args} context="founder" variant="outline">Outline</Button>
      </div>
    </div>
  ),
};

// Accessibility Examples
export const AccessibilityExample: Story = {
  args: {
    variant: 'primary',
    children: 'Accessible Button',
    'aria-label': 'This button performs an important action',
    'aria-describedby': 'button-description',
  },
  render: (args) => (
    <div>
      <Button {...args} />
      <p id="button-description" className="text-sm text-gray-600 mt-2">
        This button demonstrates proper ARIA attributes for accessibility
      </p>
    </div>
  ),
};

// Full Width Example
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// All States Example
export const AllStates: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div className="grid grid-cols-4 gap-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Normal</h3>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="outline">Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Loading</h3>
        <Button {...args} variant="primary" isLoading>Primary</Button>
        <Button {...args} variant="secondary" isLoading>Secondary</Button>
        <Button {...args} variant="outline" isLoading>Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Disabled</h3>
        <Button {...args} variant="primary" disabled>Primary</Button>
        <Button {...args} variant="secondary" disabled>Secondary</Button>
        <Button {...args} variant="outline" disabled>Outline</Button>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">With Icons</h3>
        <Button {...args} variant="primary" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        }>Primary</Button>
        <Button {...args} variant="secondary" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }>Secondary</Button>
        <Button {...args} variant="outline" icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        } iconPosition="right">Outline</Button>
      </div>
    </div>
  ),
};
