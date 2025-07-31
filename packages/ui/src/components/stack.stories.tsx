import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from '../components/separator';
import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A layout component for stacking elements vertically or horizontally.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const content = (
  <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg">
    Stack Item
  </div>
);

export const Default: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>),
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    direction: 'horizontal',
  },
};

export const WithSeparator: Story = {
  args: {
    ...Default.args,
    separator: <Separator />,
  },
};

export const AlignCenter: Story = {
  args: {
    ...Default.args,
    align: 'center',
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-8">
      <Stack context="consultant">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Stack>
      <Stack context="client">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Stack>
      <Stack context="admin">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Stack>
    </div>
  ),
};
