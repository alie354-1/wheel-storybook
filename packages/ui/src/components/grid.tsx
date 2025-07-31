/**
 * Grid Component
 *
 * A layout component for creating grid-based layouts.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

export interface GridProps {
  columns?: number | string;
  rows?: number | string;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  context?: WorkspaceContext;
  responsive?: boolean;
  autoFit?: boolean;
  autoFill?: boolean;
  templateAreas?: string;
  children: ReactNode;
  className?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>((
  {
    columns = 3,
    rows,
    gap = 'md',
    context = 'neutral',
    responsive = true,
    autoFit = false,
    autoFill = false,
    templateAreas,
    children,
    className,
    ...props
  },
  ref
) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const getContextGapClasses = () => {
    switch (context) {
      case 'consultant':
        return gap === 'md' ? 'gap-4' : gapClasses[gap];
      case 'client':
        return gap === 'md' ? 'gap-6' : gapClasses[gap];
      case 'admin':
        return gap === 'md' ? 'gap-8' : gapClasses[gap];
      case 'expert':
        return gap === 'md' ? 'gap-3' : gapClasses[gap];
      case 'tool-creator':
        return gap === 'md' ? 'gap-2' : gapClasses[gap];
      case 'founder':
        return gap === 'md' ? 'gap-5' : gapClasses[gap];
      default:
        return gapClasses[gap];
    }
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant':
        return 'bg-blue-50/30 border border-blue-100 rounded-lg p-2';
      case 'client':
        return 'bg-green-50/30 border border-green-100 rounded-lg p-2';
      case 'admin':
        return 'bg-gray-50/30 border border-gray-100 rounded-lg p-2';
      case 'expert':
        return 'bg-purple-50/30 border border-purple-100 rounded-lg p-2';
      case 'tool-creator':
        return 'bg-orange-50/30 border border-orange-100 rounded-lg p-2';
      case 'founder':
        return 'bg-amber-50/30 border border-amber-100 rounded-lg p-2';
      default:
        return '';
    }
  };

  const getResponsiveClasses = () => {
    if (!responsive) return '';
    if (autoFit) return `grid-cols-[repeat(auto-fit,minmax(0,1fr))]`;
    if (autoFill) return `grid-cols-[repeat(auto-fill,minmax(0,1fr))]`;
    return '';
  };

  const style = {
    gridTemplateColumns: responsive ? undefined : (typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns),
    gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, minmax(0, 1fr))` : rows,
    gridTemplateAreas: templateAreas,
  };

  const gridClasses = cn(
    'grid transition-all duration-200',
    getContextGapClasses(),
    getResponsiveClasses(),
    getContextClasses(),
    className
  );

  return (
    <div ref={ref} className={gridClasses} style={style} {...props}>
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';
