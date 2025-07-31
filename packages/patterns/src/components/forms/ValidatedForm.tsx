import { Button } from '@wheel/ui';
import React, { useState } from 'react';
import { z, ZodError } from 'zod';
import FormField from './FormField';

interface ValidatedFormProps {
  schema: z.ZodObject<any>;
  fields: any[];
  onSubmit: (data: any) => void;
}

const ValidatedForm: React.FC<ValidatedFormProps> = ({
  schema,
  fields,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = schema.parse(formData);
      setErrors({});
      onSubmit(data);
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: any = {};
        error.issues.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name] || ''}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ValidatedForm;
