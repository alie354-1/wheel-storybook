/**
 * Separator Component
 *
 * A component for visually separating content.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'tool-creator' | 'founder' | 'neutral';

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  context?: WorkspaceContext;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'dashed' | 'dotted';
  text?: string;
  icon?: ReactNode;
  decorative?: boolean;
  className?: string;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>((
  {
    orientation = 'horizontal',
    context = 'neutral',
    spacing = 'md',
    variant = 'solid',
    text,
    icon,
    decorative = true,
    className,
    ...props
  },
  ref
) => {
  const spacingClasses = {
    none: 'my-0',
    sm: 'my-2',
    md: 'my-4',
    lg: 'my-6',
    xl: 'my-8',
  };

  const verticalSpacingClasses = {
    none: 'mx-0',
    sm: 'mx-2',
    md: 'mx-4',
    lg: 'mx-6',
    xl: 'mx-8',
  };

  const variantClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant':
        return 'text-blue-600 border-blue-300';
      case 'client':
        return 'text-green-600 border-green-300';
      case 'admin':
        return 'text-gray-600 border-gray-300';
      case 'expert':
        return 'text-purple-600 border-purple-300';
      case 'tool-creator':
        return 'text-orange-600 border-orange-300';
      case 'founder':
        return 'text-amber-600 border-amber-300';
      default:
        return 'text-gray-500 border-gray-200';
    }
  };

  const getContextSpacing = () => {
    const baseSpacing = orientation === 'horizontal' ? spacingClasses[spacing] : verticalSpacingClasses[spacing];
    switch (context) {
      case 'consultant':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-5' : 'mx-5') : baseSpacing;
      case 'client':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-6' : 'mx-6') : baseSpacing;
      case 'admin':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-8' : 'mx-8') : baseSpacing;
      case 'expert':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-4' : 'mx-4') : baseSpacing;
      case 'tool-creator':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-3' : 'mx-3') : baseSpacing;
      case 'founder':
        return spacing === 'md' ? (orientation === 'horizontal' ? 'my-6' : 'mx-6') : baseSpacing;
      default:
        return baseSpacing;
    }
  };

  const separatorClasses = cn(
    'transition-colors duration-200',
    variantClasses[variant],
    orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
    getContextSpacing(),
    getContextClasses(),
    className
  );

  if (text || icon) {
    return (
      <div ref={ref} className={cn('flex items-center', orientation === 'horizontal' ? 'my-4' : 'mx-4')} {...props}>
        <div className={cn('flex-grow border-t', variantClasses[variant], getContextClasses())} />
        <span className={cn('mx-4 flex items-center text-sm', getContextClasses())}>
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </span>
        <div className={cn('flex-grow border-t', variantClasses[variant], getContextClasses())} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={separatorClasses}
      role={decorative ? 'none' : 'separator'}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';
