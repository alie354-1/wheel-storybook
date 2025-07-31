/**
 * ProgressIndicator Component
 *
 * A component for displaying a progress indicator.
 */

import { cn } from '@wheel/shared';
import { forwardRef } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ProgressIndicatorSize = 'sm' | 'md' | 'lg';

export interface ProgressIndicatorProps {
  value?: number;
  size?: ProgressIndicatorSize;
  context?: WorkspaceContext;
  className?: string;
}

export const ProgressIndicator = forwardRef<HTMLDivElement, ProgressIndicatorProps>((
  {
    value = 0,
    size = 'md',
    context = 'neutral',
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'bg-blue-600';
      case 'client': return 'bg-green-600';
      case 'admin': return 'bg-gray-600';
      case 'expert': return 'bg-purple-600';
      case 'toolCreator': return 'bg-indigo-600';
      case 'founder': return 'bg-orange-600';
      default: return 'bg-slate-600';
    }
  };

  const containerClasses = cn(
    'w-full bg-gray-200 rounded-full',
    sizeClasses[size],
    className
  );

  const progressClasses = cn(
    'h-full rounded-full',
    getContextClasses()
  );

  return (
    <div ref={ref} className={containerClasses} {...props}>
      <div
        className={progressClasses}
        style={{ width: `${value}%` }}
      />
    </div>
  );
});

ProgressIndicator.displayName = 'ProgressIndicator';
