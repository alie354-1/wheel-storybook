/**
 * PhoneInput Component
 *
 * A specialized input component for international phone numbers with workspace context awareness.
 */

import { forwardRef, useState } from 'react';
import PhoneInputWithCountry, {
  Country,
  isPossiblePhoneNumber
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface PhoneInputProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The current phone number value */
  value?: string;
  /** Callback when the phone number changes */
  onChange?: (value?: string) => void;
  /** Default country for the input */
  defaultCountry?: Country;
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
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Name attribute */
  name?: string;
  /** ID attribute */
  id?: string;
}

export const PhoneInput = forwardRef<any, PhoneInputProps>((
  {
    context = 'neutral',
    value,
    onChange,
    defaultCountry = 'US',
    validationState: initialValidationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    disabled = false,
    placeholder = 'Enter phone number',
    name,
    id,
  },
  ref
) => {
  const [validationState, setValidationState] = useState(initialValidationState);

  const handleOnChange = (newValue?: string) => {
    if (newValue && !isPossiblePhoneNumber(newValue)) {
      setValidationState('error');
    } else {
      setValidationState('success');
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const getContextClasses = () => {
    // This component uses a specific stylesheet, so we'll rely on that for now.
    // Custom styling can be added here if needed.
    return '';
  };

  const getValidationClasses = () => {
    switch (validationState) {
      case 'error': return 'PhoneInput--error';
      case 'warning': return 'PhoneInput--warning';
      case 'success': return 'PhoneInput--success';
      default: return '';
    }
  };

  const phoneInputId = id || `phoneinput-${Math.random().toString(36).substr(2, 9)}`;

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
        <label htmlFor={phoneInputId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <PhoneInputWithCountry
        id={phoneInputId}
        name={name}
        className={getValidationClasses()}
        defaultCountry={defaultCountry}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
        international
        countryCallingCodeEditable={false}
        ref={ref}
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

PhoneInput.displayName = 'PhoneInput';
