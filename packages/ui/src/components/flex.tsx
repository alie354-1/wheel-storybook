/**
 * Flex Component
 *
 * A layout component for creating flexbox-based layouts.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'neutral';

export interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  context?: WorkspaceContext;
  responsive?: boolean;
  children: ReactNode;
  className?: string;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((
  {
    direction = 'row',
    wrap = 'nowrap',
    justify = 'start',
    align = 'stretch',
    gap = 'md',
    context = 'neutral',
    responsive = true,
    children,
    className,
    ...props
  },
  ref
) => {
  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'column-reverse': 'flex-col-reverse',
  };

  const wrapClasses = {
    nowrap: 'flex-nowrap',
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  const justifyClasses = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const getContextGapClasses = () => {
    switch (context) {
      case 'consultant': return 'gap-4';
      case 'client': return 'gap-6';
      case 'admin': return 'gap-8';
      default: return gapClasses[gap];
    }
  };

  const getResponsiveClasses = () => {
    if (!responsive) return '';
    return `sm:${directionClasses[direction]} md:${directionClasses[direction]}`;
  };

  const flexClasses = cn(
    'flex',
    directionClasses[direction],
    wrapClasses[wrap],
    justifyClasses[justify],
    alignClasses[align],
    getContextGapClasses(),
    getResponsiveClasses(),
    className
  );

  return (
    <div ref={ref} className={flexClasses} {...props}>
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
