import { Button } from '@wheel/ui';
import React from 'react';
import { ErrorFallbackProps } from './ErrorBoundary';
import { categorizeError } from './utils';

const FallbackUI: React.FC<ErrorFallbackProps> = ({ error, resetError, context, level }) => {
  const category = categorizeError(error);

  return (
    <div role="alert">
      <h2>{category.userMessage}</h2>
      <p>Context: {context}</p>
      <p>Level: {level}</p>
      <details>
        <summary>Error Details</summary>
        <pre>{category.technicalMessage}</pre>
      </details>
      {category.suggestedActions.map((action, index) => (
        <Button key={index} onClick={action.action} variant={action.type}>
          {action.label}
        </Button>
      ))}
      <Button onClick={resetError}>Try again</Button>
    </div>
  );
};

export { FallbackUI };
