import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from './button';
import { EmptyState } from './EmptyState';
import { Icon } from './icon';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying an empty state with a message and optional actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <Icon name="Search" size="xl" color="muted" />,
  },
};

export const WithActions: Story = {
  args: {
    ...WithIcon.args,
    actions: (
      <Button variant="primary">Create New Item</Button>
    ),
  },
};

export const Compact: Story = {
  args: {
    title: 'No items',
    className: 'p-4',
  },
};
