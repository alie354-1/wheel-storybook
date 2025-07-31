import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    context: {
      control: { type: 'select' },
      options: ['consultant', 'client', 'admin', 'expert', 'toolCreator', 'founder', 'neutral'],
    },
    validationState: {
      control: { type: 'select' },
      options: ['error', 'warning', 'success', 'none'],
    },
    inputSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    warningMessage: { control: 'text' },
    successMessage: { control: 'text' },
    loadingText: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    name: 'default-input',
    placeholder: 'Enter text here...',
  },
};

export const WithLabel: Story = {
  args: {
    name: 'labeled-input',
    label: 'Email Address',
    placeholder: 'example@email.com',
  },
};

export const Required: Story = {
  args: {
    name: 'required-input',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'helper-input',
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Must be 3-20 characters long',
  },
};

export const WithDescription: Story = {
  args: {
    name: 'description-input',
    label: 'API Key',
    placeholder: 'Enter your API key',
    description: 'You can find your API key in your account settings',
  },
};

// Validation State Examples
export const ValidationError: Story = {
  args: {
    name: 'error-input',
    label: 'Email',
    placeholder: 'Enter your email',
    validationState: 'error',
    errorMessage: 'Please enter a valid email address',
  },
};

export const ValidationWarning: Story = {
  args: {
    name: 'warning-input',
    label: 'Password',
    placeholder: 'Enter your password',
    validationState: 'warning',
    warningMessage: 'Password should be at least 8 characters',
  },
};

export const ValidationSuccess: Story = {
  args: {
    name: 'success-input',
    label: 'Username',
    placeholder: 'Enter your username',
    validationState: 'success',
    successMessage: 'Username is available',
  },
};

// Legacy Support
export const LegacyError: Story = {
  args: {
    name: 'legacy-input',
    label: 'Legacy Error Support',
    placeholder: 'This uses the old hasError prop',
    hasError: true,
    errorMessage: 'This field has an error',
  },
};

// Size Examples
export const Sizes: Story = {
  args: {
    name: 'size-input',
    label: 'Input Sizes',
    placeholder: 'Size example',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Extra Small (xs)</label>
        <Input {...args} name="xs-input" inputSize="xs" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Small (sm)</label>
        <Input {...args} name="sm-input" inputSize="sm" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Medium (md) - Default</label>
        <Input {...args} name="md-input" inputSize="md" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Large (lg)</label>
        <Input {...args} name="lg-input" inputSize="lg" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Extra Large (xl)</label>
        <Input {...args} name="xl-input" inputSize="xl" />
      </div>
    </div>
  ),
};

// Workspace Context Examples
export const ConsultantContext: Story = {
  args: {
    name: 'consultant-input',
    label: 'Consultant Input',
    placeholder: 'Consultant workspace styling',
    context: 'consultant',
  },
};

export const ClientContext: Story = {
  args: {
    name: 'client-input',
    label: 'Client Input',
    placeholder: 'Client workspace styling',
    context: 'client',
  },
};

export const AdminContext: Story = {
  args: {
    name: 'admin-input',
    label: 'Admin Input',
    placeholder: 'Admin workspace styling',
    context: 'admin',
  },
};

export const ExpertContext: Story = {
  args: {
    name: 'expert-input',
    label: 'Expert Input',
    placeholder: 'Expert workspace styling',
    context: 'expert',
  },
};

export const ToolCreatorContext: Story = {
  args: {
    name: 'toolCreator-input',
    label: 'Tool Creator Input',
    placeholder: 'Tool Creator workspace styling',
    context: 'toolCreator',
  },
};

export const FounderContext: Story = {
  args: {
    name: 'founder-input',
    label: 'Founder Input',
    placeholder: 'Founder workspace styling',
    context: 'founder',
  },
};

// Loading States
export const Loading: Story = {
  args: {
    name: 'loading-input',
    label: 'Loading Input',
    placeholder: 'Processing...',
    loading: true,
  },
};

export const LoadingWithCustomText: Story = {
  args: {
    name: 'loading-custom-input',
    label: 'Saving Changes',
    placeholder: 'Enter data to save',
    loading: true,
    loadingText: 'Saving your changes...',
  },
};

// Icon Examples
export const WithLeftIcon: Story = {
  args: {
    name: 'left-icon-input',
    label: 'Search',
    placeholder: 'Search for items...',
    leftIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    name: 'right-icon-input',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    rightIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    name: 'both-icons-input',
    label: 'Amount',
    placeholder: '0.00',
    leftIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    rightIcon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
};

// Full Width Example
export const FullWidth: Story = {
  args: {
    name: 'full-width-input',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    name: 'disabled-input',
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

// Workspace Context Matrix
export const WorkspaceContextMatrix: Story = {
  args: {
    name: 'context-matrix-input',
    placeholder: 'Context example',
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Consultant Context</h3>
        <Input {...args} name="consultant-normal" context="consultant" label="Normal" />
        <Input {...args} name="consultant-error" context="consultant" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="consultant-success" context="consultant" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Client Context</h3>
        <Input {...args} name="client-normal" context="client" label="Normal" />
        <Input {...args} name="client-error" context="client" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="client-success" context="client" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Admin Context</h3>
        <Input {...args} name="admin-normal" context="admin" label="Normal" />
        <Input {...args} name="admin-error" context="admin" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="admin-success" context="admin" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Expert Context</h3>
        <Input {...args} name="expert-normal" context="expert" label="Normal" />
        <Input {...args} name="expert-error" context="expert" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="expert-success" context="expert" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Tool Creator Context</h3>
        <Input {...args} name="toolCreator-normal" context="toolCreator" label="Normal" />
        <Input {...args} name="toolCreator-error" context="toolCreator" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="toolCreator-success" context="toolCreator" label="Success" validationState="success" successMessage="Success message" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Founder Context</h3>
        <Input {...args} name="founder-normal" context="founder" label="Normal" />
        <Input {...args} name="founder-error" context="founder" label="Error" validationState="error" errorMessage="Error message" />
        <Input {...args} name="founder-success" context="founder" label="Success" validationState="success" successMessage="Success message" />
      </div>
    </div>
  ),
};

// Validation States Overview
export const ValidationStates: Story = {
  args: {
    name: 'validation-input',
    label: 'Validation Example',
    placeholder: 'Enter text to see validation',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Normal State</h3>
        <Input {...args} name="normal-state" helperText="This is helper text" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Error State</h3>
        <Input {...args} name="error-state" validationState="error" errorMessage="This field has an error" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Warning State</h3>
        <Input {...args} name="warning-state" validationState="warning" warningMessage="This field has a warning" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Success State</h3>
        <Input {...args} name="success-state" validationState="success" successMessage="This field is valid" />
      </div>
    </div>
  ),
};

// Message Priority Demo
export const MessagePriority: Story = {
  args: {
    name: 'priority-input',
    label: 'Message Priority Demo',
    placeholder: 'All message types provided',
    helperText: 'Helper text (lowest priority)',
    successMessage: 'Success message (medium priority)',
    warningMessage: 'Warning message (high priority)',
    errorMessage: 'Error message (highest priority)',
    validationState: 'error',
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Error Priority (Highest)</h3>
        <Input {...args} name="error-priority" validationState="error" />
        <p className="text-sm text-gray-600 mt-1">Shows error message, hides others</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Warning Priority</h3>
        <Input {...args} name="warning-priority" validationState="warning" errorMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows warning message when no error</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Success Priority</h3>
        <Input {...args} name="success-priority" validationState="success" errorMessage="" warningMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows success message when no error or warning</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Helper Text Priority (Lowest)</h3>
        <Input {...args} name="helper-priority" validationState="none" errorMessage="" warningMessage="" successMessage="" />
        <p className="text-sm text-gray-600 mt-1">Shows helper text when no other messages</p>
      </div>
    </div>
  ),
};

// Accessibility Example
export const AccessibilityExample: Story = {
  args: {
    name: 'accessibility-input',
    label: 'Accessible Input',
    placeholder: 'Enter your name',
    description: 'This input demonstrates proper accessibility features',
    helperText: 'Please enter your full name',
    required: true,
    'aria-label': 'User full name input field',
  },
  render: (args) => (
    <div>
      <Input {...args} />
      <p className="text-sm text-gray-600 mt-2">
        This input includes proper ARIA attributes, labels, and descriptions for screen readers
      </p>
    </div>
  ),
};

// All States Demo
export const AllStates: Story = {
  args: {
    name: 'all-states-input',
    label: 'All States Demo',
    placeholder: 'Example input',
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Basic States</h3>
        <Input {...args} name="normal-basic" label="Normal" />
        <Input {...args} name="disabled-basic" label="Disabled" disabled />
        <Input {...args} name="loading-basic" label="Loading" loading />
        <Input {...args} name="required-basic" label="Required" required />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">With Icons</h3>
        <Input {...args} name="left-icon-basic" label="Left Icon" leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        } />
        <Input {...args} name="right-icon-basic" label="Right Icon" rightIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        } />
        <Input {...args} name="both-icons-basic" label="Both Icons"
          leftIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          }
        />
        <Input {...args} name="loading-icon-basic" label="Loading with Icon" loading rightIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        } />
      </div>
    </div>
  ),
};
