/**
 * Stack Component
 *
 * A layout component for stacking elements vertically or horizontally.
 */

import { cn } from '@wheel/shared';
import React, { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';

export interface StackProps {
  direction?: 'vertical' | 'horizontal';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  context?: WorkspaceContext;
  align?: 'start' | 'end' | 'center' | 'stretch';
  separator?: ReactNode;
  responsive?: boolean;
  children: ReactNode;
  className?: string;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((
  {
    direction = 'vertical',
    spacing = 'md',
    context = 'neutral',
    align = 'stretch',
    separator,
    responsive = true,
    children,
    className,
    ...props
  },
  ref
) => {
  const spacingClasses = {
    none: 'space-y-0',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8',
  };

  const horizontalSpacingClasses = {
    none: 'space-x-0',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6',
    xl: 'space-x-8',
  };

  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
  };

  const getContextSpacingClasses = () => {
    switch (context) {
      case 'consultant': return direction === 'vertical' ? 'space-y-4' : 'space-x-4';
      case 'client': return direction === 'vertical' ? 'space-y-6' : 'space-x-6';
      case 'admin': return direction === 'vertical' ? 'space-y-8' : 'space-x-8';
      default: return direction === 'vertical' ? spacingClasses[spacing] : horizontalSpacingClasses[spacing];
    }
  };

  const getResponsiveClasses = () => {
    if (!responsive) return '';
    return `sm:${direction === 'vertical' ? 'flex-col' : 'flex-row'}`;
  };

  const stackClasses = cn(
    'flex',
    direction === 'vertical' ? 'flex-col' : 'flex-row',
    getContextSpacingClasses(),
    alignClasses[align],
    getResponsiveClasses(),
    className
  );

  const childrenWithSeparators = separator
    ? React.Children.toArray(children).flatMap((child, index) =>
        index < React.Children.count(children) - 1 ? [child, separator] : [child]
      )
    : children;

  return (
    <div ref={ref} className={stackClasses} {...props}>
      {childrenWithSeparators}
    </div>
  );
});

Stack.displayName = 'Stack';
