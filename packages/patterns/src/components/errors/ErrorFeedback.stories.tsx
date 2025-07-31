import { Meta, StoryFn } from "@storybook/react-vite";
import { ErrorFeedback, ErrorFeedbackProps } from './ErrorFeedback';

export default {
  title: 'Patterns/Errors/ErrorFeedback',
  component: ErrorFeedback,
} as Meta;

const Template: StoryFn<ErrorFeedbackProps> = (args) => <ErrorFeedback {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: new Error('This is a test error.'),
  onSubmit: async (feedback) => {
    console.log('Feedback submitted:', feedback);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const AllFields = Template.bind({});
AllFields.args = {
  error: new Error('This is a test error.'),
  onSubmit: async (feedback) => {
    console.log('Feedback submitted:', feedback);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
  fields: ['description', 'steps', 'impact', 'frequency', 'contactInfo'],
};
