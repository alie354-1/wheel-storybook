/**
 * Spinner Component
 *
 * A component for displaying a loading spinner with workspace context awareness.
 */

import { cn } from '@wheel/shared';
import { forwardRef } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  size?: SpinnerSize;
  context?: WorkspaceContext;
  className?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((
  {
    size = 'md',
    context = 'neutral',
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'border-blue-600';
      case 'client': return 'border-green-600';
      case 'admin': return 'border-gray-600';
      case 'expert': return 'border-purple-600';
      case 'toolCreator': return 'border-indigo-600';
      case 'founder': return 'border-orange-600';
      default: return 'border-slate-600';
    }
  };

  const spinnerClasses = cn(
    'animate-spin rounded-full border-t-transparent',
    sizeClasses[size],
    getContextClasses(),
    className
  );

  return (
    <div ref={ref} className={spinnerClasses} role="status" {...props}>
      <span className="sr-only">Loading...</span>
    </div>
  );
});

Spinner.displayName = 'Spinner';
