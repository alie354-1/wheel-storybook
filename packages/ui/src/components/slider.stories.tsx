import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Form/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A range input component for numeric input with workspace context support.',
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
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: 'Volume',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const Stepped: Story = {
  args: {
    label: 'Donation Amount',
    value: 25,
    min: 0,
    max: 100,
    step: 5,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Slider label="Consultant Context" context="consultant" value={25} />
      <Slider label="Client Context" context="client" value={50} />
      <Slider label="Admin Context" context="admin" value={75} />
      <Slider label="Expert Context" context="expert" value={33} />
      <Slider label="Tool Creator Context" context="toolCreator" value={66} />
      <Slider label="Founder Context" context="founder" value={99} />
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

export const WithTooltip: Story = {
  args: {
    label: 'Slider with Tooltip',
    value: 75,
    withTooltip: true,
  },
};
