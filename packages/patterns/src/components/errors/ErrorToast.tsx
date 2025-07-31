import { ToastProps, useToast } from '@wheel/ui';
import { ErrorAction, ErrorInfo } from './types';
import { categorizeError } from './utils';

interface ErrorToastProps {
  error: Error | ErrorInfo;
  duration?: number;
  position?: 'top' | 'bottom' | 'top-right' | 'bottom-right';
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  action?: ErrorAction;
  onClose?: () => void;
}

export const useErrorToast = () => {
  const { show } = useToast();

  const showErrorToast = (props: ErrorToastProps) => {
    const normalizedError = props.error instanceof Error ? props.error : new Error('An error occurred');
    const category = categorizeError(normalizedError);

    const toastProps: ToastProps = {
      variant: 'error',
      title: category.userMessage,
      description: category.technicalMessage,
      duration: props.duration,
      context: props.context,
      actions: props.action ? [{ label: props.action.label, onClick: props.action.action }] : [],
    };

    show(toastProps);
  };

  return { showErrorToast };
};
