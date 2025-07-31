import type { Meta, StoryObj } from "@storybook/react-vite";
import 'react-phone-number-input/style.css';
import { PhoneInput } from './phoneinput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/Form/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A specialized input component for international phone numbers with workspace context awareness.',
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
    value: { control: 'text' },
    defaultCountry: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    helperText: 'Enter your phone number with the country code.',
  },
};

export const UnitedKingdom: Story = {
  args: {
    label: 'Phone Number (UK)',
    defaultCountry: 'GB',
    value: '+447911123456',
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6">
      <PhoneInput
        label="Error State"
        validationState="error"
        errorMessage="This phone number is not valid."
        value="+11234567890"
      />
      <PhoneInput
        label="Warning State"
        validationState="warning"
        warningMessage="Please verify your phone number."
        value="+12025550102"
      />
      <PhoneInput
        label="Success State"
        validationState="success"
        successMessage="Phone number is valid."
        value="+12025550199"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Phone Input',
    value: '+12025550199',
    disabled: true,
  },
};
