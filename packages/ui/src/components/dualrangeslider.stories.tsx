import type { Meta, StoryObj } from "@storybook/react-vite";
import { DualRangeSlider } from './dualrangeslider';

const meta: Meta<typeof DualRangeSlider> = {
  title: 'Components/Form/DualRangeSlider',
  component: DualRangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A range input component for selecting a minimum and maximum value with workspace context support.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
      description: 'Workspace context for styling',
    },
    values: { control: 'object' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DualRangeSlider>;

export const Default: Story = {
  args: {
    label: 'Price Range',
    values: [25, 75],
    min: 0,
    max: 100,
  },
};

export const Stepped: Story = {
  args: {
    label: 'Age Range',
    values: [30, 60],
    min: 18,
    max: 100,
    step: 1,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <DualRangeSlider label="Consultant Context" context="consultant" values={[20, 80]} />
      <DualRangeSlider label="Client Context" context="client" values={[30, 70]} />
      <DualRangeSlider label="Admin Context" context="admin" values={[40, 60]} />
      <DualRangeSlider label="Expert Context" context="expert" values={[10, 90]} />
      <DualRangeSlider label="Tool Creator Context" context="toolCreator" values={[25, 75]} />
      <DualRangeSlider label="Founder Context" context="founder" values={[35, 65]} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dual Range Slider',
    values: [25, 75],
    disabled: true,
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'Dual Range Slider with Tooltip',
    values: [30, 70],
    withTooltip: true,
  },
};
