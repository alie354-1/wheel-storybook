import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from './timepicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Form/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A specialized time input component with timezone support and workspace context awareness.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
      description: 'Workspace context for styling',
    },
    format: {
      control: 'radio',
      options: ['12h', '24h'],
      description: 'Time format',
    },
    validationState: {
      control: 'select',
      options: ['none', 'error', 'warning', 'success'],
      description: 'Validation state of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the time picker is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    warningMessage: { control: 'text' },
    successMessage: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    label: 'Select a time',
    helperText: 'This is a standard time picker.',
  },
};

export const Format12h: Story = {
  args: {
    label: '12-Hour Format',
    format: '12h',
    value: '14:30',
  },
};

export const Format24h: Story = {
  args: {
    label: '24-Hour Format',
    format: '24h',
    value: '14:30',
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <TimePicker
        label="Error State"
        validationState="error"
        errorMessage="Please select a valid time."
        value="10:00"
      />
      <TimePicker
        label="Warning State"
        validationState="warning"
        warningMessage="This time is outside of business hours."
        value="18:45"
      />
      <TimePicker
        label="Success State"
        validationState="success"
        successMessage="Time successfully selected."
        value="09:15"
      />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <TimePicker label="Consultant Context" context="consultant" />
      <TimePicker label="Client Context" context="client" />
      <TimePicker label="Admin Context" context="admin" />
      <TimePicker label="Expert Context" context="expert" />
      <TimePicker label="Tool Creator Context" context="toolCreator" />
      <TimePicker label="Founder Context" context="founder" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Time Picker',
    value: '12:00',
    disabled: true,
  },
};

export const WithDescription: Story = {
    args: {
      label: 'Meeting Time',
      description: 'All times are in your local timezone.',
      value: '15:00',
    },
  };
