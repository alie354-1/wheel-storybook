import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for rendering headings with support for different levels, variants, and workspace contexts.',
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
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
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'This is a Level 1 Heading',
  },
};

export const Levels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1} size="xs">X-Small Heading</Heading>
      <Heading level={1} size="sm">Small Heading</Heading>
      <Heading level={1} size="md">Medium Heading</Heading>
      <Heading level={1} size="lg">Large Heading</Heading>
      <Heading level={1} size="xl">X-Large Heading</Heading>
      <Heading level={1} size="2xl">2X-Large Heading</Heading>
      <Heading level={1} size="3xl">3X-Large Heading</Heading>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading level={2} color="primary">Primary Color</Heading>
      <Heading level={2} color="secondary">Secondary Color</Heading>
      <Heading level={2} color="muted">Muted Color</Heading>
      <Heading level={2} color="success">Success Color</Heading>
      <Heading level={2} color="warning">Warning Color</Heading>
      <Heading level={2} color="error">Error Color</Heading>
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    level: 1,
    children: 'This heading is responsive.',
    responsive: true,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading level={2} context="consultant">Consultant Context</Heading>
      <Heading level={2} context="client">Client Context</Heading>
      <Heading level={2} context="admin">Admin Context</Heading>
      <Heading level={2} context="expert">Expert Context</Heading>
      <Heading level={2} context="toolCreator">Tool Creator Context</Heading>
      <Heading level={2} context="founder">Founder Context</Heading>
    </div>
  ),
};
