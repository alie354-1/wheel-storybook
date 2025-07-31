import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying status, counts, or other small bits of information.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    dot: { control: 'boolean' },
    count: { control: 'number' },
    maxCount: { control: 'number' },
    showZero: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex space-x-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithCount: Story = {
  args: {
    count: 5,
  },
};

export const MaxCount: Story = {
  args: {
    count: 120,
    maxCount: 99,
  },
};

export const Dot: Story = {
  args: {
    dot: true,
  },
};

export const DotWithText: Story = {
  args: {
    dot: true,
    children: 'Online',
  },
};
