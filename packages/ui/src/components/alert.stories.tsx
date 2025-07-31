import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from './alert';
import { Button } from './button';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying prominent messages and alerts to the user.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    urgency: {
      control: 'radio',
      options: ['low', 'medium', 'high', 'critical'],
    },
    dismissible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Heads up!',
    description: 'This is a default informational alert.',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="success" title="Success" description="Your profile has been updated." />
      <Alert variant="warning" title="Warning" description="Please check your input." />
      <Alert variant="error" title="Error" description="Something went wrong." />
      <Alert variant="info" title="Info" description="A new update is available." />
    </div>
  ),
};

export const WithActions: Story = {
  args: {
    title: 'Update Available',
    description: 'A new version of the application is available. Please update to the latest version.',
    actions: (
      <div className="space-x-2">
        <Button variant="primary">Update</Button>
        <Button variant="ghost">Dismiss</Button>
      </div>
    ),
  },
};

export const Dismissible: Story = {
  args: {
    title: 'Dismissible Alert',
    description: 'This alert can be closed by the user.',
    dismissible: true,
  },
};

export const WorkspaceContexts: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert context="consultant" title="Consultant Info" description="This is an informational alert for consultants." />
      <Alert context="client" title="Client Info" description="This is an informational alert for clients." />
      <Alert context="admin" title="Admin Info" description="This is an informational alert for admins." />
      <Alert context="expert" title="Expert Info" description="This is an informational alert for experts." />
      <Alert context="toolCreator" title="Tool Creator Info" description="This is an informational alert for tool creators." />
      <Alert context="founder" title="Founder Info" description="This is an informational alert for founders." />
    </div>
  ),
};
