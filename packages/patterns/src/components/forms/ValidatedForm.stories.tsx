import { Meta, StoryFn } from "@storybook/react-vite";
import { z } from 'zod';
import { FormFieldProps } from './FormField';
import ValidatedForm from './ValidatedForm';

export default {
  title: 'Patterns/Forms/ValidatedForm',
  component: ValidatedForm,
} as Meta;

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

const fields: FormFieldProps[] = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
  },
];

const Template: StoryFn<any> = (args) => <ValidatedForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  schema,
  fields,
  onSubmit: (data: any) => {
    alert(`Form submitted with data: ${JSON.stringify(data)}`);
  },
};
