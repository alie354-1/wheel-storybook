import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from './Avatar';
import { Badge } from './badge';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Media/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a user\'s avatar with presence indicators.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
    },
    presence: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'busy', 'away', 'inactive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    alt: 'User Avatar',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar size="xs" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="2xl" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar shape="circle" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar shape="square" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </div>
  ),
};

export const WithPresence: Story = {
  args: {
    ...Default.args,
    presence: 'online',
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: <Badge count={3} size="sm" />,
  },
};

export const Fallback: Story = {
  args: {
    alt: 'John Doe',
  },
};

export const CustomFallback: Story = {
  args: {
    alt: 'Jane Doe',
    fallback: 'JD',
  },
};
