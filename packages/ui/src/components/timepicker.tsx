/**
 * TimePicker Component
 *
 * A specialized time input component with timezone support and workspace context awareness.
 */

import { forwardRef, useEffect, useRef, useState } from 'react';

export type TimeFormat = '12h' | '24h';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface TimePickerProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** Time format (12h or 24h) */
  format?: TimeFormat;
  /** Timezone for display */
  timezone?: string;
  /** Current time value (HH:MM format) */
  value?: string;
  /** Callback when time changes */
  onChange?: (value: string) => void;
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
  /** Description for accessibility */
  description?: string;
}

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>((
  {
    context = 'neutral',
    format = '12h',
    timezone,
    value = '',
    onChange,
    validationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    disabled = false,
    placeholder = 'Select time...',
    name,
    id,
    description,
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const timePickerId = id || `timepicker-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (value) {
      const [hours, minutes] = value.split(':').map(Number);
      setInputValue(formatDisplayTime(hours, minutes, format));
    } else {
      setInputValue('');
    }
  }, [value, format]);

  const formatDisplayTime = (hours: number, minutes: number, timeFormat: TimeFormat): string => {
    if (timeFormat === '12h') {
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
      return `${String(displayHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
    }
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

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
  ].filter(Boolean).join(' ');

  const generateTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        options.push({
          display: formatDisplayTime(h, m, format),
          value: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        });
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const handleTimeSelect = (timeValue: string, displayValue: string) => {
    setInputValue(displayValue);
    if (onChange) onChange(timeValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentMessage = (() => {
    if (errorMessage && validationState === 'error') return { type: 'error', message: errorMessage };
    if (warningMessage && validationState === 'warning') return { type: 'warning', message: warningMessage };
    if (successMessage && validationState === 'success') return { type: 'success', message: successMessage };
    if (helperText) return { type: 'helper', message: helperText };
    return null;
  })();

  return (
    <div className="w-full" ref={ref}>
      {label && (
        <label htmlFor={timePickerId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <input
          type="text"
          id={timePickerId}
          name={name}
          className={inputClasses}
          value={inputValue}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsOpen(true)}
          readOnly
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={validationState === 'error'}
          aria-describedby={currentMessage ? `${timePickerId}-message` : undefined}
        />
        {isOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {timeOptions.map((option) => (
              <li
                key={option.value}
                className="px-3 py-2 cursor-pointer hover:bg-slate-100"
                onClick={() => handleTimeSelect(option.value, option.display)}
              >
                {option.display}
              </li>
            ))}
          </ul>
        )}
      </div>
      {currentMessage && (
        <p
          id={`${timePickerId}-message`}
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
      {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
    </div>
  );
});

TimePicker.displayName = 'TimePicker';
