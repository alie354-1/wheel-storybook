import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile text component with support for different semantic elements, variants, and workspace contexts.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'caption'],
    },
    variant: {
      control: 'select',
      options: ['body', 'caption', 'overline', 'subtitle1', 'subtitle2'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'error', 'warning', 'success'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right', 'justify'],
    },
    truncate: { control: 'boolean' },
    responsive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default body text.',
  },
};

export const AsSpan: Story = {
  args: {
    as: 'span',
    children: 'This text is rendered as a span.',
    size: 'lg',
    weight: 'bold',
    color: 'primary',
  },
};

export const Truncated: Story = {
  args: {
    children: 'This is a very long text that will be truncated if it exceeds the container width.',
    truncate: true,
    className: 'w-64',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Text color="primary">Primary Color</Text>
      <Text color="secondary">Secondary Color</Text>
      <Text color="muted">Muted Color</Text>
      <Text color="success">Success Color</Text>
      <Text color="warning">Warning Color</Text>
      <Text color="error">Error Color</Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="md">Medium (md)</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light</Text>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="bold">Bold</Text>
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    children: 'This text is responsive.',
    responsive: true,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-2">
      <Text context="consultant">Consultant Context</Text>
      <Text context="client">Client Context</Text>
      <Text context="admin">Admin Context</Text>
      <Text context="expert">Expert Context</Text>
      <Text context="toolCreator">Tool Creator Context</Text>
      <Text context="founder">Founder Context</Text>
    </div>
  ),
};
