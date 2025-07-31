import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast as showToast } from 'react-hot-toast';
import { Button } from './button';
import { ToastProvider, useToast } from './toast';

const meta: Meta = {
  title: 'Components/Feedback/Toast',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <div>
        <ToastProvider />
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying toast notifications. Use the `useToast` hook to trigger toasts.',
      },
    },
  },
};

export default meta;

const ToastExample = () => {
  const { show } = useToast();

  return (
    <div className="space-x-2">
      <Button onClick={() => show({ title: 'Success!', description: 'Your profile has been updated.', variant: 'success' })}>
        Show Success
      </Button>
      <Button onClick={() => show({ title: 'Warning', description: 'Please check your input.', variant: 'warning' })}>
        Show Warning
      </Button>
      <Button onClick={() => show({ title: 'Error', description: 'Something went wrong.', variant: 'error' })}>
        Show Error
      </Button>
      <Button onClick={() => show({ title: 'Info', description: 'A new update is available.', variant: 'info' })}>
        Show Info
      </Button>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => <ToastExample />,
};

const ToastWithActionsExample = () => {
  const { show } = useToast();

  return (
    <Button
      onClick={() =>
        show({
          title: 'Update Available',
          description: 'A new version of the application is available.',
          variant: 'info',
          persistent: true,
          actions: [
            {
              label: 'Update',
              onClick: () => console.log('Update clicked'),
            },
            {
              label: 'Dismiss',
              onClick: () => showToast.dismiss(),
            },
          ],
        })
      }
    >
      Show Toast with Actions
    </Button>
  );
};

export const WithActions: StoryObj = {
  render: () => <ToastWithActionsExample />,
};
