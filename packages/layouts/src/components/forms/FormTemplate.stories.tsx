import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormTemplate } from './FormTemplate';
import { FormTemplate as FormTemplateType } from './types';

const meta: Meta<typeof FormTemplate> = {
  title: 'Layouts/Forms/FormTemplate',
  component: FormTemplate,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A reusable form template organism for managing and sharing form configurations with workspace context support.'
      }
    }
  },
  argTypes: {
    context: {
      control: 'select',
      options: ['neutral', 'consultant', 'client', 'admin', 'expert', 'tool-creator', 'founder'],
      description: 'Workspace context for styling and behavior'
    },
    mode: {
      control: 'select',
      options: ['view', 'edit'],
      description: 'Template display mode'
    },
    autoSave: {
      control: 'boolean',
      description: 'Enable automatic saving of template changes'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire template'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FormTemplate>;

// Sample templates for stories
const basicTemplate: FormTemplateType = {
  id: 'basic-contact',
  metadata: {
    name: 'Basic Contact Form',
    description: 'A simple contact form template for general inquiries.',
    category: 'contact',
    version: '1.0.0',
    author: 'Design System Team',
    tags: ['contact', 'basic', 'inquiry'],
    estimatedTime: 3,
    isPublic: true,
    isShared: true,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-14')
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name',
      required: true
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      required: true,
      validation: [
        {
          type: 'email',
          message: 'Please enter a valid email address'
        }
      ]
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      required: false
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Enter your message',
      required: true
    }
  ]
};

const onboardingTemplate: FormTemplateType = {
  id: 'client-onboarding',
  metadata: {
    name: 'Client Onboarding Form',
    description: 'Comprehensive client onboarding template for new business relationships.',
    category: 'onboarding',
    version: '2.1.0',
    author: 'Business Development Team',
    tags: ['onboarding', 'client', 'business', 'comprehensive'],
    estimatedTime: 15,
    isPublic: false,
    isShared: true,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2025-01-10')
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      placeholder: 'Enter company name',
      required: true
    },
    {
      name: 'industry',
      type: 'select',
      label: 'Industry',
      required: true,
      options: [
        { value: 'technology', label: 'Technology' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'finance', label: 'Finance' },
        { value: 'retail', label: 'Retail' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'companySize',
      type: 'select',
      label: 'Company Size',
      required: true,
      options: [
        { value: '1-10', label: '1-10 employees' },
        { value: '11-50', label: '11-50 employees' },
        { value: '51-200', label: '51-200 employees' },
        { value: '201-1000', label: '201-1000 employees' },
        { value: '1000+', label: '1000+ employees' }
      ]
    },
    {
      name: 'primaryContact',
      type: 'text',
      label: 'Primary Contact Name',
      placeholder: 'Enter primary contact name',
      required: true
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Contact Email',
      placeholder: 'Enter contact email',
      required: true
    },
    {
      name: 'projectDescription',
      type: 'textarea',
      label: 'Project Description',
      placeholder: 'Describe your project requirements',
      required: true
    },
    {
      name: 'budget',
      type: 'select',
      label: 'Budget Range',
      required: false,
      options: [
        { value: 'under-10k', label: 'Under $10,000' },
        { value: '10k-50k', label: '$10,000 - $50,000' },
        { value: '50k-100k', label: '$50,000 - $100,000' },
        { value: '100k-500k', label: '$100,000 - $500,000' },
        { value: 'over-500k', label: 'Over $500,000' }
      ]
    },
    {
      name: 'timeline',
      type: 'select',
      label: 'Project Timeline',
      required: false,
      options: [
        { value: 'asap', label: 'ASAP' },
        { value: '1-3-months', label: '1-3 months' },
        { value: '3-6-months', label: '3-6 months' },
        { value: '6-12-months', label: '6-12 months' },
        { value: 'flexible', label: 'Flexible' }
      ]
    }
  ]
};

const surveyTemplate: FormTemplateType = {
  id: 'feedback-survey',
  metadata: {
    name: 'Customer Feedback Survey',
    description: 'Collect valuable feedback from customers about their experience.',
    category: 'survey',
    version: '1.5.0',
    author: 'Customer Success Team',
    tags: ['feedback', 'survey', 'customer', 'experience'],
    estimatedTime: 5,
    isPublic: true,
    isShared: false,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2025-01-05')
  },
  fields: [
    {
      name: 'overallSatisfaction',
      type: 'select',
      label: 'Overall Satisfaction',
      required: true,
      options: [
        { value: '5', label: 'Very Satisfied' },
        { value: '4', label: 'Satisfied' },
        { value: '3', label: 'Neutral' },
        { value: '2', label: 'Dissatisfied' },
        { value: '1', label: 'Very Dissatisfied' }
      ]
    },
    {
      name: 'recommendationLikelihood',
      type: 'number',
      label: 'How likely are you to recommend us? (0-10)',
      required: true,
      validation: [
        {
          type: 'number',
          message: 'Please enter a number between 0 and 10'
        }
      ]
    },
    {
      name: 'favoriteFeatures',
      type: 'textarea',
      label: 'What features do you like most?',
      placeholder: 'Tell us about your favorite features',
      required: false
    },
    {
      name: 'improvementSuggestions',
      type: 'textarea',
      label: 'What could we improve?',
      placeholder: 'Share your suggestions for improvement',
      required: false
    },
    {
      name: 'additionalComments',
      type: 'textarea',
      label: 'Additional Comments',
      placeholder: 'Any other feedback you\'d like to share',
      required: false
    }
  ]
};

export const Default: Story = {
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'view'
  }
};

export const EditMode: Story = {
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit'
  }
};

export const OnboardingTemplate: Story = {
  args: {
    template: onboardingTemplate,
    context: 'neutral',
    mode: 'view'
  }
};

export const SurveyTemplate: Story = {
  args: {
    template: surveyTemplate,
    context: 'neutral',
    mode: 'view'
  }
};

export const ClientContext: Story = {
  args: {
    template: basicTemplate,
    context: 'client',
    mode: 'view'
  }
};

export const ConsultantContext: Story = {
  args: {
    template: onboardingTemplate,
    context: 'consultant',
    mode: 'view'
  }
};

export const AdminContext: Story = {
  args: {
    template: surveyTemplate,
    context: 'admin',
    mode: 'edit'
  }
};

export const WithAutoSave: Story = {
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit',
    autoSave: true,
    autoSaveInterval: 1000
  }
};

export const Loading: Story = {
  args: {
    template: basicTemplate,
    context: 'neutral',
    loading: true
  }
};

export const Disabled: Story = {
  args: {
    template: basicTemplate,
    context: 'neutral',
    mode: 'edit',
    disabled: true
  }
};

export const NoTemplate: Story = {
  args: {
    template: null,
    context: 'neutral',
    mode: 'view'
  }
};

export const EmptyTemplate: Story = {
  args: {
    template: {
      id: 'empty-template',
      metadata: {
        name: 'Empty Template',
        description: 'A template with no fields',
        category: 'general',
        version: '1.0.0',
        tags: ['empty', 'template'],
        estimatedTime: 1,
        isPublic: false,
        isShared: false
      },
      fields: []
    },
    context: 'neutral',
    mode: 'view'
  }
};

// Interactive story with handlers
export const Interactive: Story = {
  args: {
    template: onboardingTemplate,
    context: 'neutral',
    mode: 'view',
    autoSave: true,
    onTemplateChange: (template: FormTemplateType) => {
      console.log('Template changed:', template);
    },
    onTemplateSave: (template: FormTemplateType) => {
      console.log('Template saved:', template);
      alert('Template saved successfully!');
    },
    onTemplateUse: (template: FormTemplateType) => {
      console.log('Template used:', template);
      alert(`Using template: ${template.metadata.name}`);
    },
    onTemplateShare: (template: FormTemplateType) => {
      console.log('Template shared:', template);
      alert(`Sharing template: ${template.metadata.name}`);
    },
    onTemplateDelete: (template: FormTemplateType) => {
      console.log('Template deleted:', template);
      if (confirm(`Are you sure you want to delete "${template.metadata.name}"?`)) {
        alert('Template deleted!');
      }
    }
  }
};

export const LongTemplate: Story = {
  args: {
    template: {
      id: 'comprehensive-application',
      metadata: {
        name: 'Comprehensive Job Application',
        description: 'A detailed job application form with multiple sections and field types.',
        category: 'application',
        version: '3.0.0',
        author: 'HR Department',
        tags: ['application', 'job', 'comprehensive', 'detailed'],
        estimatedTime: 25,
        isPublic: true,
        isShared: true,
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2025-01-12')
      },
      fields: [
        {
          name: 'personalInfo',
          type: 'section',
          label: 'Personal Information',
          required: false
        },
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          placeholder: 'Enter your email address',
          required: true
        },
        {
          name: 'phone',
          type: 'tel',
          label: 'Phone Number',
          placeholder: 'Enter your phone number',
          required: true
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
          placeholder: 'Enter your full address',
          required: true
        },
        {
          name: 'experience',
          type: 'section',
          label: 'Work Experience',
          required: false
        },
        {
          name: 'currentPosition',
          type: 'text',
          label: 'Current Position',
          placeholder: 'Enter your current job title',
          required: false
        },
        {
          name: 'yearsExperience',
          type: 'number',
          label: 'Years of Experience',
          placeholder: 'Enter years of experience',
          required: true
        },
        {
          name: 'previousEmployer',
          type: 'text',
          label: 'Previous Employer',
          placeholder: 'Enter previous employer name',
          required: false
        },
        {
          name: 'skills',
          type: 'textarea',
          label: 'Key Skills',
          placeholder: 'List your key skills and competencies',
          required: true
        },
        {
          name: 'education',
          type: 'section',
          label: 'Education',
          required: false
        },
        {
          name: 'degree',
          type: 'select',
          label: 'Highest Degree',
          required: true,
          options: [
            { value: 'high-school', label: 'High School' },
            { value: 'associate', label: 'Associate Degree' },
            { value: 'bachelor', label: 'Bachelor\'s Degree' },
            { value: 'master', label: 'Master\'s Degree' },
            { value: 'doctorate', label: 'Doctorate' }
          ]
        },
        {
          name: 'university',
          type: 'text',
          label: 'University/Institution',
          placeholder: 'Enter university or institution name',
          required: false
        },
        {
          name: 'graduationYear',
          type: 'number',
          label: 'Graduation Year',
          placeholder: 'Enter graduation year',
          required: false
        },
        {
          name: 'additional',
          type: 'section',
          label: 'Additional Information',
          required: false
        },
        {
          name: 'coverLetter',
          type: 'textarea',
          label: 'Cover Letter',
          placeholder: 'Write a brief cover letter',
          required: false
        },
        {
          name: 'availability',
          type: 'select',
          label: 'Availability',
          required: true,
          options: [
            { value: 'immediate', label: 'Immediate' },
            { value: '2-weeks', label: '2 weeks notice' },
            { value: '1-month', label: '1 month notice' },
            { value: 'flexible', label: 'Flexible' }
          ]
        },
        {
          name: 'salaryExpectation',
          type: 'text',
          label: 'Salary Expectation',
          placeholder: 'Enter expected salary range',
          required: false
        }
      ]
    },
    context: 'neutral',
    mode: 'view'
  }
};
