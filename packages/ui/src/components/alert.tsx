/**
 * Alert Component
 *
 * A component for displaying prominent messages and alerts to the user.
 */

import { cn } from '@wheel/shared';
import { X } from 'lucide-react';
import { forwardRef, ReactNode } from 'react';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type AlertVariant = 'success' | 'warning' | 'error' | 'info';
export type Urgency = 'low' | 'medium' | 'high' | 'critical';

export interface AlertProps {
  variant?: AlertVariant;
  urgency?: Urgency;
  context?: WorkspaceContext;
  title?: string;
  description?: string;
  actions?: ReactNode;
  dismissible?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((
  {
    variant = 'info',
    urgency = 'medium',
    context = 'neutral',
    title,
    description,
    actions,
    dismissible = false,
    onClose,
    className,
    children,
    ...props
  },
  ref
) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success': return 'bg-green-100 border-green-500 text-green-800';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'error': return 'bg-red-100 border-red-500 text-red-800';
      case 'info': return 'bg-sky-100 border-sky-500 text-sky-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getContextClasses = () => {
    if (variant !== 'info') return '';
    switch (context) {
      case 'consultant': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'client': return 'bg-green-100 border-green-500 text-green-800';
      case 'admin': return 'bg-gray-100 border-gray-500 text-gray-800';
      case 'expert': return 'bg-purple-100 border-purple-500 text-purple-800';
      case 'toolCreator': return 'bg-indigo-100 border-indigo-500 text-indigo-800';
      case 'founder': return 'bg-orange-100 border-orange-500 text-orange-800';
      default: return '';
    }
  };

  const alertClasses = cn(
    'p-4 border-l-4 rounded-r-lg',
    getContextClasses() || getVariantClasses(),
    className
  );

  return (
    <div ref={ref} className={alertClasses} role="alert" {...props}>
      <div className="flex">
        <div className="flex-shrink-0">
          {/* Icon can be added here based on variant */}
        </div>
        <div className="ml-3">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          <div className="mt-2 text-sm">
            {description && <p>{description}</p>}
            {children}
          </div>
          {actions && <div className="mt-4">{actions}</div>}
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

Alert.displayName = 'Alert';
