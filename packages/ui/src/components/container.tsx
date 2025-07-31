/**
 * Container Component
 *
 * A layout component for constraining the width of content and centering it.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';
export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ResponsiveConfig {
  sm?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
  md?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
  lg?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
  xl?: Partial<Pick<ContainerProps, 'size' | 'padding' | 'margin'>>;
}

export interface ContainerProps {
  size?: ContainerSize;
  context?: WorkspaceContext;
  responsive?: boolean | ResponsiveConfig;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fluid?: boolean;
  centerContent?: boolean;
  children: ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((
  {
    size = 'md',
    context = 'neutral',
    responsive = true,
    padding = 'md',
    margin = 'md',
    fluid = false,
    centerContent = true,
    children,
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  const marginClasses = {
    none: 'm-0',
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
    xl: 'my-8',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant':
        return 'bg-blue-50 border-blue-100 shadow-blue-100/50';
      case 'client':
        return 'bg-green-50 border-green-100 shadow-green-100/50';
      case 'admin':
        return 'bg-gray-50 border-gray-100 shadow-gray-100/50';
      case 'expert':
        return 'bg-purple-50 border-purple-100 shadow-purple-100/50';
      case 'tool-creator':
        return 'bg-orange-50 border-orange-100 shadow-orange-100/50';
      case 'founder':
        return 'bg-amber-50 border-amber-100 shadow-amber-100/50';
      default:
        return '';
    }
  };

  const getContextPadding = () => {
    const basePadding = paddingClasses[padding];
    switch (context) {
      case 'consultant':
        return padding === 'md' ? 'p-5' : basePadding;
      case 'client':
        return padding === 'md' ? 'p-6' : basePadding;
      case 'admin':
        return padding === 'md' ? 'p-8' : basePadding;
      case 'expert':
        return padding === 'md' ? 'p-4' : basePadding;
      case 'tool-creator':
        return padding === 'md' ? 'p-4' : basePadding;
      case 'founder':
        return padding === 'md' ? 'p-6' : basePadding;
      default:
        return basePadding;
    }
  };

  const responsiveClasses = {
    xs: 'sm:max-w-sm md:max-w-md lg:max-w-lg',
    sm: 'sm:max-w-md md:max-w-lg lg:max-w-xl',
    md: 'sm:max-w-lg md:max-w-xl lg:max-w-2xl',
    lg: 'sm:max-w-xl md:max-w-2xl lg:max-w-3xl',
    xl: 'sm:max-w-2xl md:max-w-3xl lg:max-w-4xl',
    '2xl': 'sm:max-w-3xl md:max-w-4xl lg:max-w-5xl',
    full: 'max-w-full',
  };

  const getResponsiveClasses = () => {
    if (typeof responsive === 'object') {
      // Advanced responsive configuration
      const classes = [];
      if (responsive.sm?.size) classes.push(`sm:${sizeClasses[responsive.sm.size]}`);
      if (responsive.md?.size) classes.push(`md:${sizeClasses[responsive.md.size]}`);
      if (responsive.lg?.size) classes.push(`lg:${sizeClasses[responsive.lg.size]}`);
      if (responsive.xl?.size) classes.push(`xl:${sizeClasses[responsive.xl.size]}`);

      if (responsive.sm?.padding) classes.push(`sm:${paddingClasses[responsive.sm.padding]}`);
      if (responsive.md?.padding) classes.push(`md:${paddingClasses[responsive.md.padding]}`);
      if (responsive.lg?.padding) classes.push(`lg:${paddingClasses[responsive.lg.padding]}`);
      if (responsive.xl?.padding) classes.push(`xl:${paddingClasses[responsive.xl.padding]}`);

      return classes.join(' ');
    }

    return responsive === true ? responsiveClasses[size] : '';
  };

  const containerClasses = cn(
    'w-full transition-all duration-200',
    fluid ? 'max-w-full' : sizeClasses[size],
    centerContent ? 'mx-auto' : '',
    typeof responsive === 'object' ? paddingClasses[padding] : getContextPadding(),
    marginClasses[margin],
    getContextClasses(),
    getResponsiveClasses(),
    className
  );

  return (
    <div ref={ref} className={containerClasses} {...props}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';
