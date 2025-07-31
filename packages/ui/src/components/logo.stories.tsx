import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Media/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying workspace-specific logos.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'mark', 'wordmark'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    context: 'neutral',
    variant: 'full',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <Logo variant="full" />
      <Logo variant="mark" />
      <Logo variant="wordmark" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-8">
      <Logo size="xs" />
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <Logo context="consultant" />
      <Logo context="client" />
      <Logo context="admin" />
      <Logo context="expert" />
      <Logo context="toolCreator" />
      <Logo context="founder" />
    </div>
  ),
};
