import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from './button';
import { Panel } from './panel';

const meta: Meta<typeof Panel> = {
  title: 'Layout/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collapsible and resizable panel for displaying content.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    collapsible: { control: 'boolean' },
    defaultCollapsed: { control: 'boolean' },
    resizable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    header: <h3>Panel Header</h3>,
    children: 'This is the content of the panel.',
    className: 'w-96',
  },
};

export const Collapsible: Story = {
  args: {
    ...Default.args,
    collapsible: true,
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: <Button size="sm">View All</Button>,
  },
};
