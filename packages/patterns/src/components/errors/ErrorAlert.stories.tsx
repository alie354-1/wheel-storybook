import { Meta, StoryFn } from "@storybook/react-vite";
import { ErrorAlert, ErrorAlertProps } from './ErrorAlert';

export default {
  title: 'Patterns/Errors/ErrorAlert',
  component: ErrorAlert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['low', 'medium', 'high', 'critical'],
      },
    },
    context: {
      control: {
        type: 'select',
        options: ['consultant', 'client', 'admin', 'neutral'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ErrorAlertProps> = (args) => <ErrorAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: new Error('This is a test error.'),
  showDetails: true,
};

export const NetworkError = Template.bind({});
NetworkError.args = {
  error: new Error('Network error: Failed to fetch data.'),
  showDetails: true,
};

export const PermissionError = Template.bind({});
PermissionError.args = {
  error: new Error('Permission denied.'),
  showDetails: true,
};
