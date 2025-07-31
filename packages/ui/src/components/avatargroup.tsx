/**
 * AvatarGroup Component
 *
 * A component for displaying a group of avatars.
 */

import { cn } from '@wheel/shared';
import React, { forwardRef, ReactNode } from 'react';

export interface AvatarGroupProps {
  children: ReactNode;
  max?: number;
  className?: string;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((
  {
    children,
    max = 3,
    className,
    ...props
  },
  ref
) => {
  const avatars = React.Children.toArray(children).slice(0, max);
  const remaining = React.Children.count(children) - max;

  return (
    <div ref={ref} className={cn('flex -space-x-4', className)} {...props}>
      {avatars}
      {remaining > 0 && (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-500 font-semibold ring-2 ring-white">
          +{remaining}
        </div>
      )}
    </div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';
