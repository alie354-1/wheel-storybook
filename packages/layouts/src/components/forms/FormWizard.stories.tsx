import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormWizard } from './FormWizard';
import { FormWizardStep } from './types';

const meta: Meta<typeof FormWizard> = {
  title: 'Layouts/Forms/FormWizard',
  component: FormWizard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A multi-step form wizard organism for complex data collection workflows with workspace context support.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['neutral', 'consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder'],
      description: 'Workspace context for styling and behavior'
    },
    autoSave: {
      control: 'boolean',
      description: 'Enable automatic saving of form data'
    },
    showProgress: {
      control: 'boolean',
      description: 'Show progress indicator'
    },
    allowStepSkip: {
      control: 'boolean',
      description: 'Allow users to skip steps'
    },
    allowStepBack: {
      control: 'boolean',
      description: 'Allow users to go back to previous steps'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire wizard'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FormWizard>;

// Sample steps for stories
const basicSteps: FormWizardStep[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Please provide your basic personal information.',
    estimatedTime: 3,
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your first name'
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        placeholder: 'Enter your last name'
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'Enter your email address'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact Details',
    description: 'How can we reach you?',
    estimatedTime: 2,
    fields: [
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: false,
        placeholder: 'Enter your phone number'
      },
      {
        name: 'address',
        label: 'Address',
        type: 'text',
        required: false,
        placeholder: 'Enter your address'
      }
    ]
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Tell us about your preferences.',
    estimatedTime: 2,
    fields: [
      {
        name: 'newsletter',
        label: 'Subscribe to Newsletter',
        type: 'checkbox',
        required: false
      },
      {
        name: 'notifications',
        label: 'Enable Notifications',
        type: 'checkbox',
        required: false
      }
    ]
  }
];

const workspaceSteps: FormWizardStep[] = [
  {
    id: 'workspace-setup',
    title: 'Workspace Setup',
    description: 'Configure your workspace settings.',
    estimatedTime: 5,
    fields: [
      {
        name: 'workspaceName',
        label: 'Workspace Name',
        type: 'text',
        required: true,
        placeholder: 'Enter workspace name'
      },
      {
        name: 'workspaceType',
        label: 'Workspace Type',
        type: 'select',
        required: true,
        options: [
          { value: 'personal', label: 'Personal' },
          { value: 'team', label: 'Team' },
          { value: 'enterprise', label: 'Enterprise' }
        ]
      }
    ]
  },
  {
    id: 'team-members',
    title: 'Team Members',
    description: 'Add team members to your workspace.',
    estimatedTime: 3,
    fields: [
      {
        name: 'teamSize',
        label: 'Expected Team Size',
        type: 'number',
        required: true,
        placeholder: 'Number of team members'
      },
      {
        name: 'inviteEmails',
        label: 'Invite Team Members',
        type: 'textarea',
        required: false,
        placeholder: 'Enter email addresses, one per line'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing Information',
    description: 'Set up your billing preferences.',
    estimatedTime: 4,
    fields: [
      {
        name: 'billingEmail',
        label: 'Billing Email',
        type: 'email',
        required: true,
        placeholder: 'Enter billing email'
      },
      {
        name: 'paymentMethod',
        label: 'Payment Method',
        type: 'select',
        required: true,
        options: [
          { value: 'credit-card', label: 'Credit Card' },
          { value: 'bank-transfer', label: 'Bank Transfer' },
          { value: 'invoice', label: 'Invoice' }
        ]
      }
    ]
  }
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: false
  }
};

export const WithAutoSave: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: true,
    autoSaveInterval: 1000
  }
};

export const WorkspaceContext: Story = {
  args: {
    steps: workspaceSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false,
    autoSave: true
  }
};

export const ClientContext: Story = {
  args: {
    steps: basicSteps,
    context: 'client',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false
  }
};

export const ConsultantContext: Story = {
  args: {
    steps: basicSteps,
    context: 'consultant',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: false
  }
};

export const WithSkipping: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    allowStepSkip: true
  }
};

export const NoProgress: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: false,
    allowStepBack: true,
    allowStepSkip: false
  }
};

export const LinearFlow: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: false,
    allowStepSkip: false
  }
};

export const Loading: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    loading: true
  }
};

export const Disabled: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    disabled: true
  }
};

export const WithInitialData: Story = {
  args: {
    steps: basicSteps,
    context: 'neutral',
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    },
    showProgress: true,
    allowStepBack: true
  }
};

export const LongForm: Story = {
  args: {
    steps: [
      ...basicSteps,
      {
        id: 'additional',
        title: 'Additional Information',
        description: 'Please provide additional details.',
        estimatedTime: 5,
        fields: [
          {
            name: 'company',
            label: 'Company',
            type: 'text',
            required: false,
            placeholder: 'Enter your company name'
          },
          {
            name: 'position',
            label: 'Position',
            type: 'text',
            required: false,
            placeholder: 'Enter your position'
          },
          {
            name: 'experience',
            label: 'Years of Experience',
            type: 'number',
            required: false,
            placeholder: 'Enter years of experience'
          }
        ]
      },
      {
        id: 'final',
        title: 'Review & Submit',
        description: 'Please review your information before submitting.',
        estimatedTime: 2,
        fields: [
          {
            name: 'terms',
            label: 'I agree to the terms and conditions',
            type: 'checkbox',
            required: true
          },
          {
            name: 'marketing',
            label: 'I agree to receive marketing communications',
            type: 'checkbox',
            required: false
          }
        ]
      }
    ],
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    autoSave: true
  }
};

// Interactive story with handlers
export const Interactive: Story = {
  args: {
    steps: workspaceSteps,
    context: 'neutral',
    showProgress: true,
    allowStepBack: true,
    autoSave: true,
    onStepChange: (step: number, data: Record<string, any>) => {
      console.log('Step changed:', step, data);
    },
    onComplete: (data: Record<string, any>) => {
      console.log('Form completed:', data);
      alert('Form submitted successfully!');
    },
    onCancel: () => {
      console.log('Form cancelled');
      alert('Form cancelled');
    }
  }
};
