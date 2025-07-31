/**
 * Logo Component
 *
 * A component for displaying workspace-specific logos.
 */

import { cn } from '@wheel/shared';
import { forwardRef } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type LogoVariant = 'full' | 'mark' | 'wordmark';
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  context?: WorkspaceContext;
  theme?: 'light' | 'dark';
  responsive?: boolean;
  onClick?: () => void;
  className?: string;
}

// In a real application, these would be actual image URLs from a CDN or asset pipeline.
// For now, we'll use placeholder paths.
const logos = {
  consultant: {
    full: '/logos/consultant-full.svg',
    mark: '/logos/consultant-mark.svg',
    wordmark: '/logos/consultant-wordmark.svg',
  },
  client: {
    full: '/logos/client-full.svg',
    mark: '/logos/client-mark.svg',
    wordmark: '/logos/client-wordmark.svg',
  },
  admin: {
    full: '/logos/admin-full.svg',
    mark: '/logos/admin-mark.svg',
    wordmark: '/logos/admin-wordmark.svg',
  },
  expert: {
    full: '/logos/expert-full.svg',
    mark: '/logos/expert-mark.svg',
    wordmark: '/logos/expert-wordmark.svg',
  },
  toolCreator: {
    full: '/logos/toolCreator-full.svg',
    mark: '/logos/toolCreator-mark.svg',
    wordmark: '/logos/toolCreator-wordmark.svg',
  },
  founder: {
    full: '/logos/founder-full.svg',
    mark: '/logos/founder-mark.svg',
    wordmark: '/logos/founder-wordmark.svg',
  },
  neutral: {
    full: '/logos/wheel_logo_primary.svg',
    mark: '/logos/wheel_logo_icon_only.svg',
    wordmark: '/logos/wheel_logo_wordmark.svg',
  },
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>((
  {
    variant = 'full',
    size = 'md',
    context = 'neutral',
    theme = 'light',
    responsive = false,
    onClick,
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  const logoSrc = logos[context]?.[variant] || logos.neutral.full;

  return (
    <div ref={ref} className={cn('inline-block', className)} onClick={onClick} {...props}>
      <img
        src={logoSrc}
        alt={`${context} ${variant} logo`}
        className={cn(sizeClasses[size], { 'dark:hidden': theme === 'light', 'hidden dark:block': theme === 'dark' })}
      />
    </div>
  );
});

Logo.displayName = 'Logo';
