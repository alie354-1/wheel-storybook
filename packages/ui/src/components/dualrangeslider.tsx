/**
 * DualRangeSlider Component
 *
 * A range input component for selecting a minimum and maximum value with workspace context support.
 */

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { forwardRef, useCallback, useState } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';

export interface DualRangeSliderProps {
  /** Workspace context for styling */
  context?: WorkspaceContext;
  /** The current values of the slider */
  values?: [number, number];
  /** Callback when the values change */
  onChange?: (values: [number, number]) => void;
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
  /** Show tooltips with current values */
  withTooltip?: boolean;
}

export const DualRangeSlider = forwardRef<HTMLDivElement, DualRangeSliderProps>((
  {
    context = 'neutral',
    values = [25, 75],
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
  const [minVal, setMinVal] = useState(values[0]);
  const [maxVal, setMaxVal] = useState(values[1]);

  const handleMinChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxVal - step);
    setMinVal(value);
    if (onChange) {
      onChange([value, maxVal]);
    }
  }, [maxVal, step, onChange]);

  const handleMaxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minVal + step);
    setMaxVal(value);
    if (onChange) {
      onChange([minVal, value]);
    }
  }, [minVal, step, onChange]);

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

  const sliderId = id || `dual-range-slider-${Math.random().toString(36).substr(2, 9)}`;
  const minInputId = `${sliderId}-min`;
  const maxInputId = `${sliderId}-max`;

  return (
    <div ref={ref}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative h-10">
        <Tooltip
          placement="top"
          overlay={<span>{minVal}</span>}
          visible={withTooltip}
        >
          <input
            id={minInputId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={handleMinChange}
            className={`absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-10 ${getContextClasses()}`}
            disabled={disabled}
          />
        </Tooltip>
        <Tooltip
          placement="top"
          overlay={<span>{maxVal}</span>}
          visible={withTooltip}
        >
          <input
            id={maxInputId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-10"
            disabled={disabled}
          />
        </Tooltip>
        <div className="relative h-2">
          <div className="absolute w-full h-2 bg-gray-200 rounded-lg" />
          <div
            className={`absolute h-2 rounded-lg ${getContextClasses().replace('accent', 'bg')}`}
            style={{ left: `${(minVal / max) * 100}%`, right: `${100 - (maxVal / max) * 100}%` }}
          />
        </div>
      </div>
      {!withTooltip && (
        <div className="flex justify-between text-sm text-slate-500 mt-1">
          <span>{minVal}</span>
          <span>{maxVal}</span>
        </div>
      )}
    </div>
  );
});

DualRangeSlider.displayName = 'DualRangeSlider';
