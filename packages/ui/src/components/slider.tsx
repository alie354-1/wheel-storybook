/**
 * Slider Component
 *
 * A range input component for numeric input with workspace context support.
 */

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { forwardRef, useState } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';

export interface SliderProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The current value of the slider */
  value?: number;
  /** Callback when the value changes */
  onChange?: (value: number) => void;
  /** The minimum value of the slider */
  min?: number;
  /** The maximum value of the slider */
  max?: number;
  /** The step value of the slider */
  step?: number;
  /** Label for the slider */
  label?: string;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Name attribute */
  name?: string;
  /** ID attribute */
  id?: string;
  /** Show tooltip with current value */
  withTooltip?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>((
  {
    context = 'neutral',
    value = 50,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    label,
    disabled = false,
    name,
    id,
    withTooltip = false,
  },
  ref
) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'accent-blue-600';
      case 'client': return 'accent-green-600';
      case 'admin': return 'accent-gray-600';
      case 'expert': return 'accent-purple-600';
      case 'toolCreator': return 'accent-indigo-600';
      case 'founder': return 'accent-orange-600';
      default: return 'accent-slate-600';
    }
  };

  const sliderClasses = [
    'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
    'disabled:cursor-not-allowed disabled:opacity-50',
    getContextClasses(),
  ].filter(Boolean).join(' ');

  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      {label && (
        <label htmlFor={sliderId} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <Tooltip
        placement="top"
        overlay={<span>{currentValue}</span>}
        visible={withTooltip}
      >
        <input
          id={sliderId}
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleOnChange}
          className={sliderClasses}
          disabled={disabled}
          ref={ref}
          name={name}
        />
      </Tooltip>
      {!withTooltip && (
        <div className="flex justify-between text-sm text-slate-500 mt-1">
          <span>{min}</span>
          <span>{currentValue}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
});

Slider.displayName = 'Slider';
