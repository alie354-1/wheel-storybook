import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonLoader } from './skeletonloader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Components/Feedback/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying a skeleton loading state.',
      },
    },
  },
  argTypes: {
    count: { control: 'number' },
    circle: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Default: Story = {
  args: {
    className: 'h-4 w-64',
  },
};

export const MultipleLines: Story = {
  args: {
    count: 3,
    className: 'h-4 w-64',
  },
};

export const Circle: Story = {
  args: {
    circle: true,
    className: 'h-16 w-16',
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <SkeletonLoader circle className="h-12 w-12" />
        <div className="space-y-2">
          <SkeletonLoader className="h-4 w-32" />
          <SkeletonLoader className="h-4 w-24" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-5/6" />
      </div>
    </div>
  ),
};
