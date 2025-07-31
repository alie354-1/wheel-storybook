import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a loading spinner with workspace context awareness.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Spinner context="consultant" />
      <Spinner context="client" />
      <Spinner context="admin" />
      <Spinner context="expert" />
      <Spinner context="toolCreator" />
      <Spinner context="founder" />
    </div>
  ),
};
