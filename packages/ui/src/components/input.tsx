/**
 * Input Component
 *
 * A versatile input component for collecting user input with workspace context awareness.
 */

import React, { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { useValidation } from './validationcontext';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** Validation state of the input */
  validationState?: ValidationState;
  /** Helper text below the input */
  helperText?: string;
  /** Error message to display */
  errorMessage?: string;
  /** Warning message to display */
  warningMessage?: string;
  /** Success message to display */
  successMessage?: string;
  /** Label for the input */
  label?: string;
  /** Whether the label is required */
  required?: boolean;
  /** Size of the input */
  inputSize?: InputSize;
  /** Icon to display at the start of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display at the end of the input */
  rightIcon?: React.ReactNode;
  /** Whether the input takes up the full width of its container */
  fullWidth?: boolean;
  /** Whether the input is in a loading state */
  loading?: boolean;
  /** Custom loading text */
  loadingText?: string;
  /** Input masking pattern */
  mask?: string;
  /** Whether the input has an error (deprecated - use validationState) */
  hasError?: boolean;
  /** The name of the input field */
  name: string;
  /** Description for accessibility */
  description?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    context = 'neutral',
    validationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    inputSize = 'md',
    leftIcon,
    rightIcon,
    fullWidth = false,
    loading = false,
    loadingText,
    mask,
    hasError, // deprecated
    description,
    className = '',
    id,
    name,
    disabled,
    ...props
  },
  ref
) => {
  const validation = useValidation();

  // Handle legacy hasError prop
  const finalValidationState = hasError ? 'error' : validationState;

  // Get validation from context or props
  const contextError = validation ? validation.errors[name] : '';
  const finalErrorMessage = errorMessage || contextError;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (validation) {
      validation.validate(name, e.target.value);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Generate a unique ID for accessibility if none provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Workspace context classes - Enhanced visibility
  const getContextClasses = () => {
    const baseClasses = 'transition-colors duration-200';

    switch (context) {
      case 'consultant':
        return `${baseClasses} border-blue-400 focus:border-blue-600 focus:ring-blue-500 bg-blue-50 focus:bg-blue-100`;
      case 'client':
        return `${baseClasses} border-green-400 focus:border-green-600 focus:ring-green-500 bg-green-50 focus:bg-green-100`;
      case 'admin':
        return `${baseClasses} border-gray-400 focus:border-gray-600 focus:ring-gray-500 bg-gray-50 focus:bg-gray-100`;
      case 'expert':
        return `${baseClasses} border-purple-400 focus:border-purple-600 focus:ring-purple-500 bg-purple-50 focus:bg-purple-100`;
      case 'toolCreator':
        return `${baseClasses} border-indigo-400 focus:border-indigo-600 focus:ring-indigo-500 bg-indigo-50 focus:bg-indigo-100`;
      case 'founder':
        return `${baseClasses} border-orange-400 focus:border-orange-600 focus:ring-orange-500 bg-orange-50 focus:bg-orange-100`;
      default:
        return `${baseClasses} border-slate-300 focus:border-slate-500 focus:ring-slate-500 bg-white`;
    }
  };

  // Validation state classes
  const getValidationClasses = () => {
    switch (finalValidationState) {
      case 'error':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900 placeholder-red-300';
      case 'warning':
        return 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500';
      case 'success':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500';
      default:
        return '';
    }
  };

  // Size classes
  const getSizeClasses = () => {
    switch (inputSize) {
      case 'xs': return 'px-2 py-1 text-xs';
      case 'sm': return 'px-2.5 py-1.5 text-sm';
      case 'md': return 'px-3 py-2 text-base';
      case 'lg': return 'px-4 py-2.5 text-lg';
      case 'xl': return 'px-5 py-3 text-xl';
      default: return 'px-3 py-2 text-base';
    }
  };

  // Build input classes
  const inputClasses = [
    'flex w-full rounded-lg bg-white shadow-sm placeholder:text-slate-400',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'transition-colors duration-200',
    leftIcon ? (inputSize === 'xs' ? 'pl-7' : inputSize === 'sm' ? 'pl-8' : 'pl-10') : '',
    rightIcon || loading ? (inputSize === 'xs' ? 'pr-7' : inputSize === 'sm' ? 'pr-8' : 'pr-10') : '',
    getSizeClasses(),
    finalValidationState !== 'none' ? getValidationClasses() : getContextClasses(),
    className
  ].filter(Boolean).join(' ');

  // Get current message to display
  const getCurrentMessage = () => {
    if (finalErrorMessage) return { type: 'error', message: finalErrorMessage };
    if (warningMessage && finalValidationState === 'warning') return { type: 'warning', message: warningMessage };
    if (successMessage && finalValidationState === 'success') return { type: 'success', message: successMessage };
    if (helperText) return { type: 'helper', message: helperText };
    return null;
  };

  const currentMessage = getCurrentMessage();

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
  );

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <div className={inputSize === 'xs' ? 'w-3 h-3' : inputSize === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}>
              {leftIcon}
            </div>
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          className={inputClasses}
          disabled={disabled || loading}
          aria-invalid={finalValidationState === 'error' ? 'true' : 'false'}
          aria-describedby={
            [
              currentMessage ? `${inputId}-message` : '',
              description ? `${inputId}-description` : ''
            ].filter(Boolean).join(' ') || undefined
          }
          aria-required={required}
          onChange={handleChange}
          {...props}
        />

        {(rightIcon || loading) && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className={inputSize === 'xs' ? 'w-3 h-3' : inputSize === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}>
              {loading ? <LoadingSpinner /> : rightIcon}
            </div>
          </div>
        )}
      </div>

      {description && (
        <p id={`${inputId}-description`} className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      )}

      {currentMessage && (
        <p
          id={`${inputId}-message`}
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

      {loading && loadingText && (
        <p className="mt-1 text-sm text-slate-500">
          {loadingText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
