import { Meta, StoryFn } from "@storybook/react-vite";
import FormField, { FormFieldProps } from './FormField';

export default {
  title: 'Patterns/Forms/FormField',
  component: FormField,
} as Meta;

const Template: StoryFn<FormFieldProps> = (args) => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  name: 'name',
  placeholder: 'Enter your name',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  name: 'email',
  placeholder: 'Enter your email',
  error: 'Invalid email address',
};
