/**
 * Avatar Component
 *
 * A component for displaying a user's avatar with presence indicators.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode } from 'react';
import { Status, StatusDot } from './StatusDot';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  context?: WorkspaceContext;
  presence?: Status;
  shape?: AvatarShape;
  fallback?: string | ReactNode;
  badge?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((
  {
    src,
    alt = 'User avatar',
    size = 'md',
    context = 'neutral',
    presence,
    shape = 'circle',
    fallback,
    badge,
    onClick,
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-md',
  };

  const getContextClasses = () => {
    switch (context) {
      case 'consultant': return 'ring-blue-500';
      case 'client': return 'ring-green-500';
      case 'admin': return 'ring-gray-500';
      case 'expert': return 'ring-purple-500';
      case 'toolCreator': return 'ring-indigo-500';
      case 'founder': return 'ring-orange-500';
      default: return 'ring-transparent';
    }
  };

  const containerClasses = cn(
    'relative inline-block ring-2 ring-offset-2 ring-offset-white',
    getContextClasses(),
    sizeClasses[size],
    shapeClasses[shape],
    className
  );

  const fallbackClasses = cn(
    'flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 font-semibold',
    shapeClasses[shape]
  );

  return (
    <div ref={ref} className={containerClasses} onClick={onClick} {...props}>
      {src ? (
        <img src={src} alt={alt} className={cn('w-full h-full object-cover', shapeClasses[shape])} />
      ) : (
        <div className={fallbackClasses}>
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
      {presence && (
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <StatusDot status={presence} size="sm" context={context} />
        </div>
      )}
      {badge && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
          {badge}
        </div>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';
