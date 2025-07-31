/**
 * Text Component
 *
 * A versatile text component with support for different semantic elements,
 * variants, and workspace contexts.
 */

import { cn } from '@wheel/shared';
import { ElementType, forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';

export interface TextProps {
  as?: ElementType;
  variant?: 'body' | 'caption' | 'overline' | 'subtitle1' | 'subtitle2';
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  context?: WorkspaceContext;
  truncate?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  responsive?: boolean;
  children: ReactNode;
  className?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>((
  {
    as: Component = 'p',
    variant = 'body',
    size = 'md',
    weight = 'normal',
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
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
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
    xs: 'sm:text-sm md:text-base',
    sm: 'sm:text-base md:text-lg',
    md: 'sm:text-lg md:text-xl',
    lg: 'sm:text-xl md:text-2xl',
    xl: 'sm:text-2xl md:text-3xl',
  };

  const textClasses = cn(
    sizeClasses[size],
    weightClasses[weight],
    getContextClasses() || colorClasses[color],
    alignClasses[align],
    { 'truncate': truncate },
    responsive ? responsiveClasses[size] : '',
    className
  );

  return (
    <Component ref={ref} className={textClasses} {...props}>
      {children}
    </Component>
  );
});

Text.displayName = 'Text';
