import React from 'react';
import { cn } from '@wheel/shared/utils/cn';
import { Card } from '@wheel/ui';
import { TimeIndicator } from '@wheel/ui';

export interface TimeCardProps {
  time: Date;
  className?: string;
}

/**
 * TimeCard component for displaying a time.
 */
export const TimeCard: React.FC<TimeCardProps> = ({
  time,
  className = '',
}) => {
  return (
    <Card className={cn('p-4', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Time</h3>
        <TimeIndicator time={time} />
      </div>
    </Card>
  );
};

export default TimeCard;
