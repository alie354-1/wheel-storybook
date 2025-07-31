import { Button } from '@wheel/ui';
import { Modal, ModalProps } from '@wheel/ui';
import React from 'react';
import { ErrorAction, ErrorInfo } from './types';
import { categorizeError } from './utils';

interface ErrorModalProps extends Omit<ModalProps, 'children'> {
  error: Error | ErrorInfo;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showDetails?: boolean;
  actions?: ErrorAction[];
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  error,
  context,
  showDetails,
  actions,
  severity,
  ...props
}) => {
  const normalizedError = error instanceof Error ? error : new Error('An error occurred');
  const category = categorizeError(normalizedError);

  return (
    <Modal {...props}>
      <div className="p-4">
        <h2 className="text-lg font-bold">{category.userMessage}</h2>
        {showDetails && (
          <details className="mt-2">
            <summary>Error Details</summary>
            <pre className="mt-2 text-sm bg-gray-100 p-2 rounded">
              {category.technicalMessage}
            </pre>
          </details>
        )}
        <div className="mt-4 space-x-2">
          {actions?.map((action, index) => (
            <Button key={index} onClick={action.action} variant={action.type}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export { ErrorModal };
export type { ErrorModalProps };

