/**
 * Toast Component
 *
 * A component for displaying toast notifications with workspace context awareness.
 */

import { cn } from '@wheel/shared';
import { Toaster, toast as showToast } from 'react-hot-toast';

export type WorkspaceContext = 'consultant' | 'client' | 'admin' | 'expert' | 'toolCreator' | 'founder' | 'neutral';
export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastProps {
  variant?: ToastVariant;
  context?: WorkspaceContext;
  title?: string;
  description?: string;
  duration?: number;
  persistent?: boolean;
  actions?: ToastAction[];
}

const getVariantClasses = (variant: ToastVariant, context: WorkspaceContext) => {
  if (context !== 'neutral') {
    switch (context) {
      case 'consultant': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'client': return 'bg-green-100 border-green-500 text-green-800';
      case 'admin': return 'bg-gray-100 border-gray-500 text-gray-800';
      case 'expert': return 'bg-purple-100 border-purple-500 text-purple-800';
      case 'toolCreator': return 'bg-indigo-100 border-indigo-500 text-indigo-800';
      case 'founder': return 'bg-orange-100 border-orange-500 text-orange-800';
    }
  }
  switch (variant) {
    case 'success': return 'bg-green-100 border-green-500 text-green-800';
    case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
    case 'error': return 'bg-red-100 border-red-500 text-red-800';
    case 'info': return 'bg-sky-100 border-sky-500 text-sky-800';
    default: return 'bg-gray-100 border-gray-500 text-gray-800';
  }
};

export const Toast = ({ variant = 'info', context = 'neutral', title, description, actions }: ToastProps) => (
  <div className={cn('p-4 border-l-4', getVariantClasses(variant, context))}>
    {title && <p className="font-bold">{title}</p>}
    {description && <p>{description}</p>}
    {actions && (
      <div className="mt-2 space-x-2">
        {actions.map((action, i) => (
          <button key={i} onClick={action.onClick} className="font-bold text-sm">
            {action.label}
          </button>
        ))}
      </div>
    )}
  </div>
);

export const useToast = () => {
  const show = (props: ToastProps) => {
    showToast.custom(
      (t) => (
        <div
          className={cn(
            'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5',
            t.visible ? 'animate-enter' : 'animate-leave'
          )}
        >
          <Toast {...props} />
        </div>
      ),
      {
        duration: props.persistent ? Infinity : props.duration || 4000,
      }
    );
  };

  return { show };
};

export const ToastProvider = () => <Toaster position="bottom-right" />;
