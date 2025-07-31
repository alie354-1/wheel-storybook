import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from './flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A layout component for creating flexbox-based layouts.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const content = (
  <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg">
    Flex Item
  </div>
);

export const Default: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>),
  },
};

export const Column: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
};

export const JustifyCenter: Story = {
  args: {
    ...Default.args,
    justify: 'center',
  },
};

export const AlignEnd: Story = {
  args: {
    ...Default.args,
    align: 'end',
    className: 'h-48',
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-8">
      <Flex context="consultant">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Flex>
      <Flex context="client">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Flex>
      <Flex context="admin">{Array.from({ length: 3 }, (_, i) => <div key={i}>{content}</div>)}</Flex>
    </div>
  ),
};
