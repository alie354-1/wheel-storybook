import { Button } from '@wheel/ui';
import React from 'react';

interface RefreshPageProps {
  preserveState?: boolean;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  confirmBeforeRefresh?: boolean;
  customMessage?: string;
  onBeforeRefresh?: () => void;
}

const RefreshPage: React.FC<RefreshPageProps> = ({
  preserveState = false,
  confirmBeforeRefresh = false,
  customMessage = 'Are you sure you want to refresh the page?',
  onBeforeRefresh,
}) => {
  const handleRefresh = () => {
    if (confirmBeforeRefresh) {
      if (window.confirm(customMessage)) {
        if (onBeforeRefresh) {
          onBeforeRefresh();
        }
        if (!preserveState) {
          window.location.reload();
        }
      }
    } else {
      if (onBeforeRefresh) {
        onBeforeRefresh();
      }
      if (!preserveState) {
        window.location.reload();
      }
    }
  };

  return <Button onClick={handleRefresh}>Refresh Page</Button>;
};

export { RefreshPage };
export type { RefreshPageProps };

