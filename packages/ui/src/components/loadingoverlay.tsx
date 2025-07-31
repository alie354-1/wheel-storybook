/**
 * LoadingOverlay Component
 *
 * A component for displaying a loading overlay on top of other content.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';
import { Spinner } from './spinner';

export interface LoadingOverlayProps {
  isLoading: boolean;
  children: ReactNode;
  className?: string;
}

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>((
  {
    isLoading,
    children,
    className,
    ...props
  },
  ref
) => {
  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-75">
          <Spinner />
        </div>
      )}
      {children}
    </div>
  );
});

LoadingOverlay.displayName = 'LoadingOverlay';
