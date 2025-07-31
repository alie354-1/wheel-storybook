import React from 'react';
import FormField from './FormField';

export interface FormProps {
  fields: any[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <FormField key={field.name} {...field} />
      ))}
      {children}
    </form>
  );
};

export default Form;
