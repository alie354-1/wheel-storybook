import { Button } from '@wheel/ui';
import React, { ReactNode } from 'react';
import { ErrorAction, ErrorInfo } from './types';
import { categorizeError } from './utils';

interface ErrorPageProps {
  error: Error | ErrorInfo;
  title?: string;
  description?: string;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  illustration?: ReactNode;
  actions?: ErrorAction[];
  showHomeButton?: boolean;
  showSupportContact?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  title,
  description,
  context = 'neutral',
  illustration,
  actions,
  showHomeButton = true,
  showSupportContact = true,
}) => {
  const normalizedError = error instanceof Error ? error : new Error('An error occurred');
  const category = categorizeError(normalizedError);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      {illustration}
      <h1 className="text-4xl font-bold mt-4">{title || category.userMessage}</h1>
      <p className="text-lg mt-2">{description || category.technicalMessage}</p>
      <div className="mt-6 space-x-4">
        {actions?.map((action, index) => (
          <Button key={index} onClick={action.action} variant={action.type}>
            {action.label}
          </Button>
        ))}
        {showHomeButton && <Button onClick={() => (window.location.href = '/')}>Go Home</Button>}
      </div>
      {showSupportContact && (
        <p className="mt-4 text-sm text-gray-600">
          If the problem persists, please contact support.
        </p>
      )}
    </div>
  );
};

export { ErrorPage };
export type { ErrorPageProps };

