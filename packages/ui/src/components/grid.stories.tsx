import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from './grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A layout component for creating grid-based layouts.',
      },
    },
  },
  argTypes: {
    columns: { control: 'text' },
    rows: { control: 'text' },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const content = (
  <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg text-center">
    Grid Item
  </div>
);

export const Default: Story = {
  args: {
    children: Array.from({ length: 6 }, (_, i) => <div key={i}>{content}</div>),
  },
};

export const CustomColumns: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(150px, 1fr))',
    children: Array.from({ length: 8 }, (_, i) => <div key={i}>{content}</div>),
  },
};

export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-8">
      <Grid gap="sm">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="md">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="lg">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid gap="xl">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-8">
      <Grid context="consultant">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid context="client">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
      <Grid context="admin">{Array.from({ length: 4 }, (_, i) => <div key={i}>{content}</div>)}</Grid>
    </div>
  ),
};
