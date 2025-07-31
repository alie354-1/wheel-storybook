import { Alert, AlertProps } from '@wheel/ui';
import { Button } from '@wheel/ui';
import React from 'react';
import { ErrorAction, ErrorInfo } from './types';
import { categorizeError } from './utils';

interface ErrorAlertProps extends Omit<AlertProps, 'variant' | 'title' | 'description' | 'actions'> {
  error: Error | ErrorInfo;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  showDetails?: boolean;
  showErrorCode?: boolean;
  actions?: ErrorAction[];
  onDismiss?: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  error,
  severity,
  context,
  dismissible,
  onDismiss,
  showDetails,
  showErrorCode,
  actions,
  ...props
}) => {
  const normalizedError = error instanceof Error ? error : new Error('An error occurred');
  const category = categorizeError(normalizedError);

  const alertVariant = {
    low: 'info',
    medium: 'warning',
    high: 'error',
    critical: 'error',
  }[severity || category.severity] as AlertProps['variant'];

  return (
    <Alert
      variant={alertVariant}
      title={category.userMessage}
      context={context}
      dismissible={dismissible}
      onClose={onDismiss}
      {...props}
    >
      {showDetails && (
        <details>
          <summary>Error Details</summary>
          <pre>{category.technicalMessage}</pre>
        </details>
      )}
      {showErrorCode && <code>Error Code: {normalizedError.name}</code>}
      <div>
        {actions?.map((action, index) => (
          <Button key={index} onClick={action.action} variant={action.type}>
            {action.label}
          </Button>
        ))}
      </div>
    </Alert>
  );
};

export { ErrorAlert };
export type { ErrorAlertProps };

