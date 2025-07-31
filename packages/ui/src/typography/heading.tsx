/**
 * Heading Component
 *
 * A component for rendering headings with support for different levels,
 * variants, and workspace contexts.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type HeadingWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: HeadingColor;
  context?: WorkspaceContext;
  truncate?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  responsive?: boolean;
  children: ReactNode;
  className?: string;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((
  {
    level,
    size,
    weight = 'bold',
    color = 'primary',
    context = 'neutral',
    truncate = false,
    align = 'left',
    responsive = false,
    children,
    className,
    ...props
  },
  ref
) => {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  const sizeClasses = {
    xs: 'text-lg',
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
    '3xl': 'text-6xl',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-slate-900',
    secondary: 'text-slate-700',
    muted: 'text-slate-500',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    success: 'text-green-600',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const getContextClasses = () => {
    if (color !== 'primary') return '';
    switch (context) {
      case 'consultant': return 'text-blue-800';
      case 'client': return 'text-green-800';
      case 'admin': return 'text-gray-800';
      case 'expert': return 'text-purple-800';
      case 'toolCreator': return 'text-indigo-800';
      case 'founder': return 'text-orange-800';
      default: return '';
    }
  };

  const responsiveClasses = {
    xs: 'sm:text-lg md:text-xl',
    sm: 'sm:text-xl md:text-2xl',
    md: 'sm:text-2xl md:text-3xl',
    lg: 'sm:text-3xl md:text-4xl',
    xl: 'sm:text-4xl md:text-5xl',
    '2xl': 'sm:text-5xl md:text-6xl',
    '3xl': 'sm:text-6xl md:text-7xl',
  };

  const headingClasses = cn(
    size ? sizeClasses[size] : sizeClasses[level === 1 ? '3xl' : level === 2 ? '2xl' : level === 3 ? 'xl' : level === 4 ? 'lg' : level === 5 ? 'md' : 'sm'],
    weightClasses[weight],
    getContextClasses() || colorClasses[color],
    alignClasses[align],
    { 'truncate': truncate },
    responsive ? (size ? responsiveClasses[size] : responsiveClasses[level === 1 ? '3xl' : level === 2 ? '2xl' : level === 3 ? 'xl' : level === 4 ? 'lg' : level === 5 ? 'md' : 'sm']) : '',
    className
  );

  return (
    <Component ref={ref} className={headingClasses} {...props}>
      {children}
    </Component>
  );
});

Heading.displayName = 'Heading';
