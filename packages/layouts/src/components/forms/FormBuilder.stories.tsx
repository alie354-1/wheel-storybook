/**
 * FormBuilder Stories
 * Comprehensive stories for the FormBuilder organism component
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormBuilder } from './FormBuilder';
import { FormSchema } from './types';

// Simple action function for stories
const action = (name: string) => (...args: any[]) => {
  console.log(`${name}:`, ...args);
};

const meta: Meta<typeof FormBuilder> = {
  title: 'Layouts/Forms/FormBuilder',
  component: FormBuilder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Advanced form builder organism with workspace context, auto-save, and collaborative editing capabilities.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder', 'neutral'],
      description: 'Workspace context for styling and behavior'
    },
    autoSave: {
      control: 'boolean',
      description: 'Enable auto-save functionality'
    },
    autoSaveInterval: {
      control: 'number',
      description: 'Auto-save interval in milliseconds'
    },
    collaborative: {
      control: 'boolean',
      description: 'Enable collaborative editing indicators'
    },
    readonly: {
      control: 'boolean',
      description: 'Make form read-only'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable form interactions'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

// Sample form schemas
const basicSchema: FormSchema = {
  metadata: {
    title: 'Basic Contact Form',
    description: 'A simple contact form with basic validation'
  },
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
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number'
    },
    {
      name: 'message',
      label: 'Message',
      type: 'text',
      placeholder: 'Enter your message'
    }
  ],
  layout: {
    type: 'single-column',
    spacing: 'normal'
  }
};

const advancedSchema: FormSchema = {
  metadata: {
    title: 'Project Setup Form',
    description: 'Advanced form for setting up a new project with multiple field types'
  },
  fields: [
    {
      name: 'projectName',
      label: 'Project Name',
      type: 'text',
      required: true,
      placeholder: 'Enter project name'
    },
    {
      name: 'projectType',
      label: 'Project Type',
      type: 'text',
      required: true,
      placeholder: 'Select project type'
    },
    {
      name: 'budget',
      label: 'Budget',
      type: 'number',
      placeholder: 'Enter budget amount'
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'date',
      required: true
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: 'date'
    },
    {
      name: 'description',
      label: 'Project Description',
      type: 'text',
      placeholder: 'Describe your project'
    }
  ],
  layout: {
    type: 'two-column',
    spacing: 'normal'
  }
};

const workspaceSchema: FormSchema = {
  metadata: {
    title: 'Workspace Configuration',
    description: 'Configure your workspace settings and preferences'
  },
  fields: [
    {
      name: 'workspaceName',
      label: 'Workspace Name',
      type: 'text',
      required: true,
      placeholder: 'Enter workspace name'
    },
    {
      name: 'industry',
      label: 'Industry',
      type: 'text',
      placeholder: 'Select your industry'
    },
    {
      name: 'teamSize',
      label: 'Team Size',
      type: 'number',
      placeholder: 'Number of team members'
    },
    {
      name: 'timezone',
      label: 'Timezone',
      type: 'text',
      placeholder: 'Select timezone'
    },
    {
      name: 'notifications',
      label: 'Enable Notifications',
      type: 'checkbox'
    },
    {
      name: 'publicProfile',
      label: 'Public Profile',
      type: 'checkbox'
    }
  ],
  layout: {
    type: 'grid',
    columns: 2,
    spacing: 'relaxed'
  }
};

// Default story
export const Default: Story = {
  args: {
    context: 'neutral',
    schema: basicSchema,
    initialData: {},
    onSubmit: action('form-submitted'),
    onChange: action('form-changed'),
    onValidationChange: action('validation-changed')
  }
};

// Workspace contexts
export const ConsultantContext: Story = {
  args: {
    ...Default.args,
    context: 'consultant',
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Consultant Contact Form',
        description: 'Contact form styled for consultant workspace'
      }
    }
  }
};

export const ClientContext: Story = {
  args: {
    ...Default.args,
    context: 'client',
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Client Information Form',
        description: 'Client information form with client workspace styling'
      }
    }
  }
};

export const AdminContext: Story = {
  args: {
    ...Default.args,
    context: 'admin',
    schema: workspaceSchema
  }
};

// Advanced layouts
export const TwoColumnLayout: Story = {
  args: {
    ...Default.args,
    schema: advancedSchema
  }
};

export const GridLayout: Story = {
  args: {
    ...Default.args,
    schema: workspaceSchema
  }
};

// Auto-save functionality
export const WithAutoSave: Story = {
  args: {
    ...Default.args,
    autoSave: true,
    autoSaveInterval: 1000,
    schema: {
      ...basicSchema,
      metadata: {
        title: 'Auto-Save Form',
        description: 'Form with auto-save functionality enabled'
      }
    }
  }
};

// Collaborative editing
export const CollaborativeForm: Story = {
  args: {
    ...Default.args,
    collaborative: true,
    autoSave: true,
    schema: {
      ...advancedSchema,
      metadata: {
        title: 'Collaborative Project Form',
        description: 'Form with collaborative editing indicators'
      }
    }
  }
};

// Form states
export const WithInitialData: Story = {
  args: {
    ...Default.args,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567'
    }
  }
};

export const ReadOnlyForm: Story = {
  args: {
    ...Default.args,
    readonly: true,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      message: 'This is a read-only form example.'
    }
  }
};

export const DisabledForm: Story = {
  args: {
    ...Default.args,
    disabled: true,
    initialData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    }
  }
};

export const LoadingForm: Story = {
  args: {
    ...Default.args,
    loading: true
  }
};

// Complex form with all features
export const ComplexForm: Story = {
  args: {
    context: 'founder',
    schema: {
      metadata: {
        title: 'Complete Project Setup',
        description: 'Comprehensive form with all features enabled'
      },
      fields: [
        {
          name: 'projectName',
          label: 'Project Name',
          type: 'text',
          required: true,
          placeholder: 'Enter project name'
        },
        {
          name: 'clientName',
          label: 'Client Name',
          type: 'text',
          required: true,
          placeholder: 'Enter client name'
        },
        {
          name: 'projectType',
          label: 'Project Type',
          type: 'text',
          required: true,
          placeholder: 'Select project type'
        },
        {
          name: 'priority',
          label: 'Priority Level',
          type: 'text',
          placeholder: 'Select priority'
        },
        {
          name: 'budget',
          label: 'Budget ($)',
          type: 'number',
          placeholder: 'Enter budget amount'
        },
        {
          name: 'currency',
          label: 'Currency',
          type: 'text',
          placeholder: 'Select currency'
        },
        {
          name: 'startDate',
          label: 'Start Date',
          type: 'date',
          required: true
        },
        {
          name: 'endDate',
          label: 'End Date',
          type: 'date'
        },
        {
          name: 'description',
          label: 'Project Description',
          type: 'text',
          placeholder: 'Describe your project in detail'
        },
        {
          name: 'requirements',
          label: 'Special Requirements',
          type: 'text',
          placeholder: 'Any special requirements or notes'
        }
      ],
      layout: {
        type: 'grid',
        columns: 2,
        spacing: 'normal'
      }
    },
    initialData: {
      projectName: 'New Website Design',
      clientName: 'Acme Corporation'
    },
    autoSave: true,
    autoSaveInterval: 2000,
    collaborative: true,
    workspaceId: 'workspace-123',
    onSubmit: action('complex-form-submitted'),
    onChange: action('complex-form-changed'),
    onValidationChange: action('complex-validation-changed')
  }
};

// Error states
export const WithValidationErrors: Story = {
  args: {
    ...Default.args,
    initialData: {
      firstName: '',
      lastName: '',
      email: 'invalid-email'
    }
  }
};

// Compact layout
export const CompactLayout: Story = {
  args: {
    ...Default.args,
    schema: {
      ...basicSchema,
      layout: {
        type: 'single-column',
        spacing: 'compact'
      }
    }
  }
};

// Relaxed layout
export const RelaxedLayout: Story = {
  args: {
    ...Default.args,
    schema: {
      ...basicSchema,
      layout: {
        type: 'single-column',
        spacing: 'relaxed'
      }
    }
  }
};
