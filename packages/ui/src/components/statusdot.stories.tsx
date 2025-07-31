import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusDot } from './StatusDot';

const meta: Meta<typeof StatusDot> = {
  title: 'Components/Feedback/StatusDot',
  component: StatusDot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a user\'s or system\'s status with a colored dot.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away', 'inactive'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    pulse: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Default: Story = {
  args: {
    status: 'online',
  },
};

export const WithLabel: Story = {
  args: {
    status: 'online',
    label: 'Online',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="space-y-4">
      <StatusDot status="online" label="Online" />
      <StatusDot status="offline" label="Offline" />
      <StatusDot status="busy" label="Busy" />
      <StatusDot status="away" label="Away" />
      <StatusDot status="inactive" label="Inactive" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <StatusDot size="sm" status="online" label="Small" />
      <StatusDot size="md" status="online" label="Medium" />
      <StatusDot size="lg" status="online" label="Large" />
    </div>
  ),
};

export const Pulsing: Story = {
  args: {
    status: 'online',
    pulse: true,
    label: 'Pulsing',
  },
};
