import React, { createContext, useContext, useState } from 'react';

export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export interface ValidationContextProps {
  rules: ValidationRule[];
  errors: Record<string, string>;
  validate: (name: string, value: string) => void;
}

const ValidationContext = createContext<ValidationContextProps | undefined>(undefined);

export const ValidationProvider: React.FC<{ rules: ValidationRule[], children: React.ReactNode }> = ({ rules, children }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (name: string, value: string) => {
    for (const rule of rules) {
      if (!rule.validate(value)) {
        setErrors((prev) => ({ ...prev, [name]: rule.message }));
        return;
      }
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <ValidationContext.Provider value={{ rules, errors, validate }}>
      {children}
    </ValidationContext.Provider>
  );
};

export const useValidation = () => {
  const context = useContext(ValidationContext);
  // Return null if no ValidationProvider is available
  // This allows components to work with or without validation context
  return context || null;
};
