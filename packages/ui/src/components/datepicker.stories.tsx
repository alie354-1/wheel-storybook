import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from './datepicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Form/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An enhanced date selection component with timezone support and workspace context awareness.',
      },
    },
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
      description: 'Workspace context for styling',
    },
    validationState: {
      control: 'select',
      options: ['none', 'error', 'warning', 'success'],
      description: 'Validation state of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
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
    value: { control: 'date' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    format: { control: 'text' },
    timezone: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Select a date',
    helperText: 'This is a standard date picker.',
    value: new Date(),
  },
};

export const WithMinAndMaxDates: Story = {
  args: {
    label: 'Select a date within a range',
    value: new Date(),
    minDate: new Date(new Date().setDate(new Date().getDate() - 10)),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 10)),
  },
};

export const CustomFormat: Story = {
  args: {
    label: 'Custom Date Format (yyyy-MM-dd)',
    value: new Date(),
    format: 'yyyy-MM-dd',
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <DatePicker
        label="Error State"
        validationState="error"
        errorMessage="This date is not available."
        value={new Date()}
      />
      <DatePicker
        label="Warning State"
        validationState="warning"
        warningMessage="This date is a national holiday."
        value={new Date()}
      />
      <DatePicker
        label="Success State"
        validationState="success"
        successMessage="Date is available."
        value={new Date()}
      />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <DatePicker label="Consultant Context" context="consultant" value={new Date()} />
      <DatePicker label="Client Context" context="client" value={new Date()} />
      <DatePicker label="Admin Context" context="admin" value={new Date()} />
      <DatePicker label="Expert Context" context="expert" value={new Date()} />
      <DatePicker label="Tool Creator Context" context="toolCreator" value={new Date()} />
      <DatePicker label="Founder Context" context="founder" value={new Date()} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    value: new Date(),
    disabled: true,
  },
};
