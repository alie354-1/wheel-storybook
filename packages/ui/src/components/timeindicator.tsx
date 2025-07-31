import React from 'react';
import { cn } from '@wheel/shared';

export interface TimeIndicatorProps {
  time: Date;
  className?: string;
}

/**
 * TimeIndicator component that displays a formatted time.
 */
export const TimeIndicator: React.FC<TimeIndicatorProps> = ({
  time,
  className = '',
}) => {
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className={cn(
        'inline-flex items-center text-sm font-semibold text-gray-600',
        className
      )}
    >
      {formattedTime}
    </div>
  );
};

export default TimeIndicator;
