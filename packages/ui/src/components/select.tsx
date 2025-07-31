/**
 * Select Component
 *
 * An advanced select component with support for search, groups, and multi-select,
 * built on top of react-select.
 */

import { forwardRef } from 'react';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type GroupedOption = {
  label: string;
  options: SelectOption[];
};

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';
export type SelectSize = 'sm' | 'md' | 'lg';

export interface EnhancedSelectProps extends Props<SelectOption, boolean, GroupBase<SelectOption>> {
  context?: WorkspaceContext;
  validationState?: ValidationState;
  selectSize?: SelectSize;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  warningMessage?: string;
  successMessage?: string;
  required?: boolean;
}

const getContextColors = (context: WorkspaceContext) => {
  switch (context) {
    case 'consultant': return { primary: '#3B82F6', secondary: '#BFDBFE' };
    case 'client': return { primary: '#10B981', secondary: '#A7F3D0' };
    case 'admin': return { primary: '#6B7280', secondary: '#D1D5DB' };
    case 'expert': return { primary: '#8B5CF6', secondary: '#DDD6FE' };
    case 'toolCreator': return { primary: '#4F46E5', secondary: '#C7D2FE' };
    case 'founder': return { primary: '#F59E0B', secondary: '#FDE68A' };
    default: return { primary: '#64748B', secondary: '#E2E8F0' };
  }
};

const getValidationColors = (validationState: ValidationState) => {
  switch (validationState) {
    case 'error': return { primary: '#EF4444', secondary: '#FECACA' };
    case 'warning': return { primary: '#F97316', secondary: '#FED7AA' };
    case 'success': return { primary: '#22C55E', secondary: '#BBF7D0' };
    default: return null;
  }
};

export const EnhancedSelect = forwardRef<any, EnhancedSelectProps>((
  {
    context = 'neutral',
    validationState = 'none',
    selectSize = 'md',
    label,
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    required,
    ...props
  },
  ref
) => {
  const colors = getValidationColors(validationState) || getContextColors(context);

  const sizeStyles = {
    sm: {
      control: (base: any) => ({ ...base, minHeight: '32px' }),
      input: (base: any) => ({ ...base, margin: '0', padding: '0' }),
    },
    md: {
      control: (base: any) => ({ ...base, minHeight: '40px' }),
    },
    lg: {
      control: (base: any) => ({ ...base, minHeight: '48px' }),
    },
  };

  const customStyles: StylesConfig<SelectOption, boolean, GroupBase<SelectOption>> = {
    control: (base, state) => ({
      ...base,
      ...sizeStyles[selectSize].control(base),
      borderColor: state.isFocused ? colors.primary : colors.secondary,
      boxShadow: state.isFocused ? `0 0 0 1px ${colors.primary}` : 'none',
      '&:hover': {
        borderColor: colors.primary,
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? colors.primary : state.isFocused ? colors.secondary : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:active': {
        backgroundColor: colors.primary,
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: colors.secondary,
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: colors.primary,
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: colors.primary,
      '&:hover': {
        backgroundColor: colors.primary,
        color: 'white',
      },
    }),
  };

  const currentMessage = (() => {
    if (errorMessage && validationState === 'error') return { type: 'error', message: errorMessage };
    if (warningMessage && validationState === 'warning') return { type: 'warning', message: warningMessage };
    if (successMessage && validationState === 'success') return { type: 'success', message: successMessage };
    if (helperText) return { type: 'helper', message: helperText };
    return null;
  })();

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Select
        ref={ref}
        styles={customStyles}
        {...props}
      />
      {currentMessage && (
        <p
          className={`mt-1 text-sm ${
            currentMessage.type === 'error' ? 'text-red-600' :
            currentMessage.type === 'warning' ? 'text-yellow-600' :
            currentMessage.type === 'success' ? 'text-green-600' :
            'text-slate-600'
          }`}
        >
          {currentMessage.message}
        </p>
      )}
    </div>
  );
});

EnhancedSelect.displayName = 'EnhancedSelect';
