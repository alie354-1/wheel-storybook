import React from 'react';
import { cn } from '@wheel/shared';

export interface ExpertiseTagProps {
  tag: string;
  className?: string;
}

/**
 * ExpertiseTag component that displays an expertise tag.
 */
export const ExpertiseTag: React.FC<ExpertiseTagProps> = ({
  tag,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-800',
        className
      )}
    >
      {tag}
    </div>
  );
};

export default ExpertiseTag;
