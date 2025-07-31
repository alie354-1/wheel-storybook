/**
 * StatusDot Component
 *
 * A component for displaying a user's or system's status with a colored dot.
 */

import { cn } from '@wheel/shared';
import { forwardRef } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type Status = 'online' | 'offline' | 'busy' | 'away' | 'inactive';
export type StatusDotSize = 'sm' | 'md' | 'lg';

export interface StatusDotProps {
  status?: Status;
  size?: StatusDotSize;
  context?: WorkspaceContext;
  pulse?: boolean;
  label?: string;
  className?: string;
}

export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>((
  {
    status = 'offline',
    size = 'md',
    context = 'neutral',
    pulse = false,
    label,
    className,
    ...props
  },
  ref
) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-400';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-yellow-500';
      case 'inactive': return 'bg-slate-300';
      default: return 'bg-gray-400';
    }
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const dotClasses = cn(
    'rounded-full',
    sizeClasses[size],
    getStatusClasses(),
    { 'animate-pulse': pulse },
    className
  );

  return (
    <span className="inline-flex items-center" ref={ref} {...props}>
      <span className={dotClasses} />
      {label && <span className="ml-2 text-sm text-slate-700">{label}</span>}
    </span>
  );
});

StatusDot.displayName = 'StatusDot';
