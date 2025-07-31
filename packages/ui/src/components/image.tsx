/**
 * Image Component
 *
 * An enhanced image component with support for lazy loading, placeholders, and error fallbacks.
 */

import { cn } from '@wheel/shared';
import { forwardRef, ReactNode, useState } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  context?: WorkspaceContext;
  aspectRatio?: string;
  fit?: 'cover' | 'contain' | 'fill';
  lazy?: boolean;
  placeholder?: string | ReactNode;
  error?: string | ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>((
  {
    src,
    alt,
    context = 'neutral',
    aspectRatio,
    fit = 'cover',
    lazy = true,
    placeholder,
    error,
    className,
    onLoad,
    onError,
    ...props
  },
  ref
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  const fitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  };

  const imageClasses = cn(
    'w-full h-full',
    fitClasses[fit],
    { 'opacity-0': isLoading || hasError },
    className
  );

  return (
    <div
      className={cn('relative bg-gray-200', aspectRatio)}
      style={{ aspectRatio: aspectRatio ? undefined : '16 / 9' }}
    >
      {(isLoading || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          {hasError ? error : placeholder}
        </div>
      )}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        className={imageClasses}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
});

Image.displayName = 'Image';
