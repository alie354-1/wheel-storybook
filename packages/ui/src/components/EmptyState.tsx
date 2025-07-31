/**
 * EmptyState Component
 *
 * A component for displaying an empty state with a message and optional actions.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>((
  {
    title,
    description,
    icon,
    actions,
    className,
    ...props
  },
  ref
) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg',
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
      {actions && <div className="mt-6">{actions}</div>}
    </div>
  );
});

EmptyState.displayName = 'EmptyState';
