import React from 'react';

export interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

/**
 * Skeleton component for loading states
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  animation = 'pulse',
  width,
  height,
  style = {},
}) => {
  // Get variant classes
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'rounded h-4 w-full';
      case 'rectangular':
      default:
        return 'rounded';
    }
  };

  // Get animation classes
  const getAnimationClasses = (): string => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'wave':
        return 'skeleton-wave';
      case 'none':
      default:
        return '';
    }
  };

  const variantClasses = getVariantClasses();
  const animationClasses = getAnimationClasses();

  return (
    <div
      className={`
        bg-neutral-200 dark:bg-neutral-700
        ${variantClasses}
        ${animationClasses}
        ${className}
      `}
      style={{
        width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        ...style,
      }}
      aria-hidden="true"
    />
  );
};

/**
 * SkeletonText component for text loading states
 */
export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
  lastLineWidth?: string | number;
}> = ({
  lines = 3,
  className = '',
  animation = 'pulse',
  lastLineWidth = '80%',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          animation={animation}
          width={index === lines - 1 && lastLineWidth !== '100%' ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
};

export default Skeleton;
