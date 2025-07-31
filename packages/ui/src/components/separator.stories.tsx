import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from './icon';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for visually separating content.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    className: 'w-96',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-24',
  },
};

export const WithText: Story = {
  args: {
    ...Default.args,
    text: 'OR',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <Icon name="Star" />,
  },
};
