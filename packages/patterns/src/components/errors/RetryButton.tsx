import { Button } from '@wheel/ui';
import React, { useState } from 'react';

interface RetryButtonProps {
  onRetry: () => Promise<void>;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  maxRetries?: number;
  backoffMs?: number;
  exponential?: boolean;
  label?: string;
  loadingLabel?: string;
  failureLabel?: string;
}

const RetryButton: React.FC<RetryButtonProps> = ({
  onRetry,
  maxRetries = 3,
  backoffMs = 1000,
  exponential = true,
  label = 'Retry',
  loadingLabel = 'Retrying...',
  failureLabel = 'Failed',
}) => {
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(retryCount + 1);

    try {
      await onRetry();
      setIsRetrying(false);
      setRetryCount(0);
    } catch (error) {
      if (retryCount < maxRetries) {
        const delay = exponential ? backoffMs * 2 ** retryCount : backoffMs;
        setTimeout(handleRetry, delay);
      } else {
        setIsRetrying(false);
      }
    }
  };

  return (
    <Button onClick={handleRetry} disabled={isRetrying}>
      {isRetrying ? loadingLabel : retryCount > 0 ? `${label} (${retryCount})` : label}
    </Button>
  );
};

export { RetryButton };
export type { RetryButtonProps };

