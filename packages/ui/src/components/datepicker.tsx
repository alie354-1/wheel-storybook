/**
 * DatePicker Component
 *
 * An enhanced date selection component with timezone support and workspace context awareness.
 */

import { format } from 'date-fns';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface DatePickerProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The currently selected date */
  value?: Date;
  /** Callback when a date is selected */
  onChange?: (date?: Date) => void;
  /** The timezone to use for date calculations */
  timezone?: string;
  /** The format to display the date in */
  format?: string;
  /** The minimum selectable date */
  minDate?: Date;
  /** The maximum selectable date */
  maxDate?: Date;
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
  /** Label for the date picker */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Name attribute */
  name?: string;
  /** ID attribute */
  id?: string;
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((
  {
    context = 'neutral',
    value,
    onChange,
    timezone,
    format: displayFormat = 'PPP',
    minDate,
    maxDate,
    validationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    disabled = false,
    placeholder = 'Select a date',
    name,
    id,
  },
  ref
) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const datePickerId = id || `datepicker-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  const handleDateSelect = (date?: Date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
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

  const currentMessage = (() => {
    if (errorMessage && validationState === 'error') return { type: 'error', message: errorMessage };
    if (warningMessage && validationState === 'warning') return { type: 'warning', message: warningMessage };
    if (successMessage && validationState === 'success') return { type: 'success', message: successMessage };
    if (helperText) return { type: 'helper', message: helperText };
    return null;
  })();

  const formatDate = (date: Date) => {
    // Note: date-fns format doesn't handle timezone directly in the format string.
    // For full timezone support, a library like date-fns-tz would be needed.
    // This implementation will format the date according to the user's local timezone.
    return format(date, displayFormat);
  };

  return (
    <div className="w-full" ref={ref}>
      {label && (
        <label htmlFor={datePickerId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <input
          type="text"
          id={datePickerId}
          name={name}
          className={inputClasses}
          value={selectedDate ? formatDate(selectedDate) : ''}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsOpen(true)}
          readOnly
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={validationState === 'error'}
          aria-describedby={currentMessage ? `${datePickerId}-message` : undefined}
        />
        {isOpen && (
          <div className="absolute z-10 mt-1 bg-white border border-slate-300 rounded-md shadow-lg">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              fromDate={minDate}
              toDate={maxDate}
              disabled={disabled}
              initialFocus
            />
          </div>
        )}
      </div>
      {currentMessage && (
        <p
          id={`${datePickerId}-message`}
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

DatePicker.displayName = 'DatePicker';
