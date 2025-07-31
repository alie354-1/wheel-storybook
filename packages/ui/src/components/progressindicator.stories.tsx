import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressIndicator } from './progressindicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Components/Feedback/ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a progress indicator.',
      },
    },
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
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
type Story = StoryObj<typeof ProgressIndicator>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ProgressIndicator size="sm" value={30} />
      <ProgressIndicator size="md" value={50} />
      <ProgressIndicator size="lg" value={70} />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ProgressIndicator context="consultant" value={25} />
      <ProgressIndicator context="client" value={45} />
      <ProgressIndicator context="admin" value={65} />
      <ProgressIndicator context="expert" value={85} />
      <ProgressIndicator context="toolCreator" value={95} />
      <ProgressIndicator context="founder" value={100} />
    </div>
  ),
};
