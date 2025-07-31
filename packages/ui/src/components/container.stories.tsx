import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from './container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A layout component for constraining the width of content and centering it.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    margin: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    fluid: { control: 'boolean' },
    centerContent: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const content = (
  <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg">
    Container Content
  </div>
);

export const Default: Story = {
  args: {
    children: content,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Container size="xs">{content}</Container>
      <Container size="sm">{content}</Container>
      <Container size="md">{content}</Container>
      <Container size="lg">{content}</Container>
      <Container size="xl">{content}</Container>
      <Container size="2xl">{content}</Container>
      <Container size="full">{content}</Container>
    </div>
  ),
};

export const Fluid: Story = {
  args: {
    children: content,
    fluid: true,
  },
};

export const NotCentered: Story = {
  args: {
    children: content,
    centerContent: false,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-4">
      <Container context="consultant">{content}</Container>
      <Container context="client">{content}</Container>
      <Container context="admin">{content}</Container>
    </div>
  ),
};
