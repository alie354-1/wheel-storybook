/**
 * SkeletonLoader Component
 *
 * A component for displaying a skeleton loading state.
 */

import { cn } from '@wheel/shared';
import { forwardRef } from 'react';

export interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  circle?: boolean;
}

export const SkeletonLoader = forwardRef<HTMLDivElement, SkeletonLoaderProps>((
  {
    className,
    count = 1,
    circle = false,
    ...props
  },
  ref
) => {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={cn(
        'animate-pulse bg-gray-300',
        circle ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    />
  ));

  return (
    <div ref={ref} className="space-y-2">
      {skeletons}
    </div>
  );
});

SkeletonLoader.displayName = 'SkeletonLoader';
