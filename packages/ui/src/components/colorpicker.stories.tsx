import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from './colorpicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/Form/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for selecting colors with support for various formats and workspace contexts.',
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
      options: ['hex', 'rgb', 'hsl'],
      description: 'The format of the color string',
    },
    validationState: {
      control: 'select',
      options: ['none', 'error', 'warning', 'success'],
      description: 'Validation state of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the color picker is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    allowCustom: {
      control: 'boolean',
      description: 'Allow users to select a custom color',
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    warningMessage: { control: 'text' },
    successMessage: { control: 'text' },
    value: { control: 'color' },
    presets: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    label: 'Theme Color',
    helperText: 'Select a color for the theme.',
    value: '#4F46E5',
  },
};

export const WithPresets: Story = {
  args: {
    label: 'Brand Colors',
    presets: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6'],
    value: '#10B981',
  },
};

export const NoCustomColor: Story = {
  args: {
    label: 'Primary Color (Presets Only)',
    allowCustom: false,
    presets: ['#DC2626', '#D97706', '#65A30D', '#059669', '#0891B2', '#2563EB'],
    value: '#059669',
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-6">
      <ColorPicker
        label="Error State"
        validationState="error"
        errorMessage="This color is not accessible."
        value="#777777"
      />
      <ColorPicker
        label="Warning State"
        validationState="warning"
        warningMessage="This color may clash with the background."
        value="#FBBF24"
      />
      <ColorPicker
        label="Success State"
        validationState="success"
        successMessage="Color is valid and accessible."
        value="#10B981"
      />
    </div>
  ),
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <ColorPicker label="Consultant Context" context="consultant" value="#3B82F6" />
      <ColorPicker label="Client Context" context="client" value="#10B981" />
      <ColorPicker label="Admin Context" context="admin" value="#6B7280" />
      <ColorPicker label="Expert Context" context="expert" value="#8B5CF6" />
      <ColorPicker label="Tool Creator Context" context="toolCreator" value="#4F46E5" />
      <ColorPicker label="Founder Context" context="founder" value="#F59E0B" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Color Picker',
    value: '#6B7280',
    disabled: true,
  },
};
