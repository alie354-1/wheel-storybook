/**
 * Badge Component
 *
 * A component for displaying status, counts, or other small bits of information.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  context?: WorkspaceContext;
  count?: number;
  dot?: boolean;
  maxCount?: number;
  showZero?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((
  {
    variant = 'primary',
    size = 'md',
    context = 'neutral',
    count,
    dot = false,
    maxCount = 99,
    showZero = false,
    children,
    className,
    ...props
  },
  ref
) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary': return 'bg-blue-100 text-blue-800';
      case 'secondary': return 'bg-gray-100 text-gray-800';
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'info': return 'bg-sky-100 text-sky-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  const dotClasses = 'w-2 h-2 rounded-full';

  const getContextClasses = () => {
    if (variant !== 'primary') return '';
    switch (context) {
      case 'consultant': return 'bg-blue-100 text-blue-800';
      case 'client': return 'bg-green-100 text-green-800';
      case 'admin': return 'bg-gray-100 text-gray-800';
      case 'expert': return 'bg-purple-100 text-purple-800';
      case 'toolCreator': return 'bg-indigo-100 text-indigo-800';
      case 'founder': return 'bg-orange-100 text-orange-800';
      default: return '';
    }
  };

  const badgeClasses = cn(
    'inline-flex items-center font-semibold rounded-full',
    dot ? dotClasses : sizeClasses[size],
    getContextClasses() || getVariantClasses(),
    className
  );

  const displayCount = count !== undefined && (count > 0 || showZero);
  const content = displayCount ? (count > maxCount ? `${maxCount}+` : count) : children;

  return (
    <span ref={ref} className={badgeClasses} {...props}>
      {dot && !children && !displayCount ? null : content}
    </span>
  );
});

Badge.displayName = 'Badge';
