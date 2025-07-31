import { Meta, StoryFn } from "@storybook/react-vite";
import { ErrorPage, ErrorPageProps } from './ErrorPage';

export default {
  title: 'Patterns/Errors/ErrorPage',
  component: ErrorPage,
  argTypes: {
    context: {
      control: {
        type: 'select',
        options: ['consultant', 'client', 'admin', 'neutral'],
      },
    },
  },
} as Meta;

const Template: StoryFn<ErrorPageProps> = (args) => <ErrorPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: new Error('This is a test error.'),
  title: 'Oops! Something went wrong.',
  description: 'We are sorry, but an unexpected error has occurred.',
};

export const NetworkError = Template.bind({});
NetworkError.args = {
  error: new Error('Network error: Failed to fetch data.'),
  title: 'Network Error',
  description: 'Please check your internet connection and try again.',
};

export const PermissionError = Template.bind({});
PermissionError.args = {
  error: new Error('Permission denied.'),
  title: 'Access Denied',
  description: "You don't have permission to view this page.",
};
