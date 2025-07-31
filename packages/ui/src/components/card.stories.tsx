import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from './button';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component for displaying content in a structured way.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    elevation: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is the content of the card.',
    className: 'w-80',
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    ...Default.args,
    header: <h3>Card Header</h3>,
    footer: <Button>Learn More</Button>,
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
    interactive: true,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card context="consultant" variant="outlined">{Default.args?.children}</Card>
      <Card context="client" variant="outlined">{Default.args?.children}</Card>
      <Card context="admin" variant="outlined">{Default.args?.children}</Card>
    </div>
  ),
};
