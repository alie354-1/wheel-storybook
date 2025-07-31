/**
 * ColorPicker Component
 *
 * A component for selecting colors with support for various formats and workspace contexts.
 */

import { forwardRef, useEffect, useRef, useState } from 'react';

export type ColorFormat = 'hex' | 'rgb' | 'hsl';
export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ValidationState = 'error' | 'warning' | 'success' | 'none';

export interface ColorPickerProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The current color value */
  value?: string;
  /** Callback when the color changes */
  onChange?: (color: string) => void;
  /** The format of the color string */
  format?: ColorFormat;
  /** A list of preset colors to display */
  presets?: string[];
  /** Allow users to select a custom color */
  allowCustom?: boolean;
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
  /** Label for the color picker */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the color picker is disabled */
  disabled?: boolean;
  /** Name attribute */
  name?: string;
  /** ID attribute */
  id?: string;
}

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>((
  {
    context = 'neutral',
    value = '#000000',
    onChange,
    format = 'hex',
    presets = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'],
    allowCustom = true,
    validationState = 'none',
    helperText,
    errorMessage,
    warningMessage,
    successMessage,
    label,
    required = false,
    disabled = false,
    name,
    id,
  },
  ref
) => {
  const [selectedColor, setSelectedColor] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const colorPickerId = id || `colorpicker-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    setSelectedColor(value);
  }, [value]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  const handlePresetSelect = (preset: string) => {
    handleColorChange(preset);
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
      case 'consultant': return 'border-blue-400 focus-within:ring-blue-500';
      case 'client': return 'border-green-400 focus-within:ring-green-500';
      case 'admin': return 'border-gray-400 focus-within:ring-gray-500';
      case 'expert': return 'border-purple-400 focus-within:ring-purple-500';
      case 'toolCreator': return 'border-indigo-400 focus-within:ring-indigo-500';
      case 'founder': return 'border-orange-400 focus-within:ring-orange-500';
      default: return 'border-slate-300 focus-within:ring-slate-500';
    }
  };

  const getValidationClasses = () => {
    switch (validationState) {
      case 'error': return 'border-red-500 focus-within:ring-red-500';
      case 'warning': return 'border-yellow-500 focus-within:ring-yellow-500';
      case 'success': return 'border-green-500 focus-within:ring-green-500';
      default: return '';
    }
  };

  const containerClasses = [
    'relative inline-flex items-center p-1 border rounded-lg shadow-sm',
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

  return (
    <div ref={ref}>
      {label && (
        <label htmlFor={colorPickerId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className={containerClasses} ref={dropdownRef}>
        <button
          type="button"
          id={colorPickerId}
          className="w-8 h-8 rounded-md border border-slate-300"
          style={{ backgroundColor: selectedColor }}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          aria-haspopup="true"
          aria-expanded={isOpen}
        />
        <input
          type="text"
          className="ml-2 p-1 w-32 border-none focus:ring-0"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          disabled={disabled}
        />
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 p-4 bg-white border rounded-lg shadow-lg z-10">
            <div className="grid grid-cols-6 gap-2 mb-4">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className="w-8 h-8 rounded-full border"
                  style={{ backgroundColor: preset }}
                  onClick={() => handlePresetSelect(preset)}
                />
              ))}
            </div>
            {allowCustom && (
              <input
                type="color"
                className="w-full h-10 p-0 border-none cursor-pointer"
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
              />
            )}
          </div>
        )}
      </div>
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

ColorPicker.displayName = 'ColorPicker';
