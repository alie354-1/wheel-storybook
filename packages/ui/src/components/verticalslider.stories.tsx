import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerticalSlider } from './verticalslider';

const meta: Meta<typeof VerticalSlider> = {
  title: 'Components/Form/VerticalSlider',
  component: VerticalSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A vertical range input component for numeric input with workspace context support.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
      description: 'Workspace context for styling',
    },
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof VerticalSlider>;

export const Default: Story = {
  args: {
    label: 'Brightness',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const Stepped: Story = {
  args: {
    label: 'Temperature',
    value: 20,
    min: 0,
    max: 40,
    step: 2,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="flex space-x-8 h-48">
      <VerticalSlider label="Consultant" context="consultant" value={25} />
      <VerticalSlider label="Client" context="client" value={50} />
      <VerticalSlider label="Admin" context="admin" value={75} />
      <VerticalSlider label="Expert" context="expert" value={33} />
      <VerticalSlider label="Tool Creator" context="toolCreator" value={66} />
      <VerticalSlider label="Founder" context="founder" value={99} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Slider',
    value: 50,
    disabled: true,
  },
};
