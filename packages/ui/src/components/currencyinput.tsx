/**
 * CurrencyInput Component
 *
 * A specialized input component for currency values with workspace context awareness.
 */

import { forwardRef } from 'react';
import CurrencyInput, { CurrencyInputProps as ReactCurrencyInputProps } from 'react-currency-input-field';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface CurrencyInputProps extends ReactCurrencyInputProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** Validation state */
  validationState?: ValidationState;
  /** Helper text */
  helperText?: string;
  /** Error message */
  errorMessage?: string;
  /** Warning message */
  warningMessage?: string;
  /** Success message */
  successMessage?: string;
  /** Label for the input */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
}

export const CustomCurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>((
  {
    context = 'neutral',
    validationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    className = '',
    ...props
  },
  ref
) => {
  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'border-blue-400 focus:border-blue-600 focus:ring-blue-500 bg-blue-50';
      case 'client': return 'border-green-400 focus:border-green-600 focus:ring-green-500 bg-green-50';
      case 'admin': return 'border-gray-400 focus:border-gray-600 focus:ring-gray-500 bg-gray-50';
      case 'expert': return 'border-purple-400 focus:border-purple-600 focus:ring-purple-500 bg-purple-50';
      case 'toolCreator': return 'border-indigo-400 focus:border-indigo-600 focus:ring-indigo-500 bg-indigo-50';
      case 'founder': return 'border-orange-400 focus:border-orange-600 focus:ring-orange-500 bg-orange-50';
      default: return 'border-slate-300 focus:border-slate-500 focus:ring-slate-500 bg-white';
    }
  };

  const getValidationClasses = () => {
    switch (validationState) {
      case 'error': return 'border-red-500 focus:border-red-500 focus:ring-red-500';
      case 'warning': return 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500';
      case 'success': return 'border-green-500 focus:border-green-500 focus:ring-green-500';
      default: return '';
    }
  };

  const inputClasses = [
    'w-full px-3 py-2 text-base rounded-lg shadow-sm placeholder:text-slate-400',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
    validationState !== 'none' ? getValidationClasses() : getContextClasses(),
    className,
  ].filter(Boolean).join(' ');

  const currentMessage = (() => {
    if (errorMessage && validationState === 'error') return { type: 'error', message: errorMessage };
    if (warningMessage && validationState === 'warning') return { type: 'warning', message: warningMessage };
    if (successMessage && validationState === 'success') return { type: 'success', message: successMessage };
    if (helperText) return { type: 'helper', message: helperText };
    return null;
  })();

  const inputId = props.id || `currency-input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <CurrencyInput
        id={inputId}
        className={inputClasses}
        ref={ref}
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

CustomCurrencyInput.displayName = 'CurrencyInput';
