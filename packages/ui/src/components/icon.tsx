/**
 * Icon Component
 *
 * A component for displaying icons with workspace context awareness.
 */

import * as LucideIcons from 'lucide-react';
import { ElementType, forwardRef } from 'react';
import { cn } from '@wheel/shared';

type IconType = ElementType;
export type LucideIconName = keyof typeof LucideIcons;

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'primary' | 'secondary' | 'muted' | 'error' | 'warning' | 'success';

export interface IconProps {
  name?: LucideIconName;
  as?: ElementType;
  size?: IconSize;
  color?: IconColor;
  context?: WorkspaceContext;
  rotation?: 0 | 90 | 180 | 270;
  title?: string;
  className?: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>((
  {
    name,
    as,
    size = 'md',
    color = 'primary',
    context = 'neutral',
    rotation = 0,
    title,
    className,
    ...props
  },
  ref
) => {
  const LucideIcon = as || (name ? (LucideIcons[name] as IconType) : null);

  if (!LucideIcon) {
    return null;
  }

  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const getContextClasses = () => {
    if (color !== 'primary') return '';
    switch (context) {
      case 'consultant': return 'text-blue-600';
      case 'client': return 'text-green-600';
      case 'admin': return 'text-gray-600';
      case 'expert': return 'text-purple-600';
      case 'toolCreator': return 'text-indigo-600';
      case 'founder': return 'text-orange-600';
      default: return '';
    }
  };

  const colorClasses = {
    primary: 'text-slate-900',
    secondary: 'text-slate-700',
    muted: 'text-slate-500',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    success: 'text-green-600',
  };

  const rotationClasses = {
    0: 'rotate-0',
    90: 'rotate-90',
    180: 'rotate-180',
    270: 'rotate-270',
  };

  const iconClasses = cn(
    sizeClasses[size],
    getContextClasses() || colorClasses[color],
    rotationClasses[rotation],
    className
  );

  const iconProps = {
    className: iconClasses,
    ...props,
  };

  return <LucideIcon {...iconProps} ref={ref} />;
});

Icon.displayName = 'Icon';
