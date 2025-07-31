import { Meta, StoryFn } from "@storybook/react-vite";
import { InlineError, InlineErrorProps } from './InlineError';

export default {
  title: 'Patterns/Errors/InlineError',
  component: InlineError,
  argTypes: {
    context: {
      control: {
        type: 'select',
        options: ['consultant', 'client', 'admin', 'neutral'],
      },
    },
  },
} as Meta;

const Template: StoryFn<InlineErrorProps> = (args) => <InlineError {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is an inline error message.',
  fieldName: 'username',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  message: 'This is an inline error message without an icon.',
  fieldName: 'password',
  icon: false,
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
    message: 'This is an inline error message without an animation.',
    fieldName: 'email',
    animate: false,
};
