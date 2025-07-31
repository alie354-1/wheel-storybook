import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomCurrencyInput } from './currencyinput';

const meta: Meta<typeof CustomCurrencyInput> = {
  title: 'Components/Form/CurrencyInput',
  component: CustomCurrencyInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A specialized input component for currency values with workspace context awareness.',
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
      description: 'Whether the input is disabled',
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
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    decimalsLimit: { control: 'number' },
    intlConfig: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomCurrencyInput>;

export const Default: Story = {
  args: {
    label: 'Amount',
    helperText: 'Enter the total amount.',
    prefix: '$',
    placeholder: '1,000.00',
  },
};

export const Euro: Story = {
  args: {
    label: 'Price',
    intlConfig: { locale: 'de-DE', currency: 'EUR' },
    placeholder: '1.234,56 €',
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <CustomCurrencyInput
        label="Error State"
        validationState="error"
        errorMessage="Amount cannot be zero."
        defaultValue={0}
        prefix="$"
      />
      <CustomCurrencyInput
        label="Warning State"
        validationState="warning"
        warningMessage="Please double-check the amount."
        defaultValue={1000000}
        prefix="$"
      />
      <CustomCurrencyInput
        label="Success State"
        validationState="success"
        successMessage="Amount is valid."
        defaultValue={500}
        prefix="$"
      />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <CustomCurrencyInput label="Consultant Context" context="consultant" prefix="$" />
      <CustomCurrencyInput label="Client Context" context="client" prefix="$" />
      <CustomCurrencyInput label="Admin Context" context="admin" prefix="$" />
      <CustomCurrencyInput label="Expert Context" context="expert" prefix="$" />
      <CustomCurrencyInput label="Tool Creator Context" context="toolCreator" prefix="$" />
      <CustomCurrencyInput label="Founder Context" context="founder" prefix="$" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Currency Input',
    defaultValue: 1234.56,
    prefix: '$',
    disabled: true,
  },
};
