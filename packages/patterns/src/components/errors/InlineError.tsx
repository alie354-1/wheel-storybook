import { cn } from '@wheel/shared/utils/cn';
import React from 'react';

interface InlineErrorProps {
  message: string;
  fieldName?: string;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  icon?: boolean;
  animate?: boolean;
  className?: string;
}

const InlineError: React.FC<InlineErrorProps> = ({
  message,
  fieldName,
  context = 'neutral',
  icon = true,
  animate = true,
  className,
}) => {
  const contextClasses = {
    consultant: 'text-blue-600',
    client: 'text-green-600',
    admin: 'text-gray-600',
    neutral: 'text-red-600',
  };

  const errorClasses = cn(
    'text-sm',
    contextClasses[context],
    { 'transition-opacity duration-300 ease-in-out': animate },
    className
  );

  return (
    <div className={errorClasses} role="alert" aria-label={`Error for ${fieldName}`}>
      {icon && <span className="mr-1">!</span>}
      {message}
    </div>
  );
};

export { InlineError };
export type { InlineErrorProps };

