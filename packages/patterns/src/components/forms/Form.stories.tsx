import { Meta, StoryFn } from "@storybook/react-vite";
import { Button } from '@wheel/ui/components/button';
import React from 'react';
import Form, { FormProps } from './Form';
import { FormFieldProps } from './FormField';

export default {
  title: 'Patterns/Forms/Form',
  component: Form,
} as Meta;

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

const Template: StoryFn<FormProps> = (args) => (
  <Form {...args}>
    <Button type="submit">Submit</Button>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  fields,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted');
  },
};
