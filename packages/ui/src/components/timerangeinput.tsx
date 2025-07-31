import React, { useState } from 'react';
import { cn } from '@wheel/shared';
import { TimePicker } from './timepicker';

export interface TimeRangeInputProps {
  value?: {
    start: string;
    end: string;
  };
  onChange?: (value: { start: string; end: string }) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * TimeRangeInput component for selecting a time range.
 */
export const TimeRangeInput: React.FC<TimeRangeInputProps> = ({
  value = { start: '09:00:00', end: '17:00:00' },
  onChange,
  disabled = false,
  className = '',
}) => {
  const [range, setRange] = useState(value);

  const handleChange = (part: 'start' | 'end', time: string) => {
    const newRange = { ...range, [part]: time };
    setRange(newRange);
    if (onChange) {
      onChange(newRange);
    }
  };

  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <TimePicker
        value={range.start}
        onChange={(time) => handleChange('start', time)}
        disabled={disabled}
      />
      <span>to</span>
      <TimePicker
        value={range.end}
        onChange={(time) => handleChange('end', time)}
        disabled={disabled}
      />
    </div>
  );
};

export default TimeRangeInput;
