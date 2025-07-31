import React, { ReactNode, useState } from 'react';

interface FallbackContentProps {
  primaryContent: ReactNode;
  fallbackContent: ReactNode;
  error?: Error;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showError?: boolean;
  onContentSwitch?: (isFallback: boolean) => void;
}

const FallbackContent: React.FC<FallbackContentProps> = ({
  primaryContent,
  fallbackContent,
  error,
  showError = false,
  onContentSwitch,
}) => {
  const [showFallback, setShowFallback] = useState(!!error);

  const handleSwitch = () => {
    const newShowFallback = !showFallback;
    setShowFallback(newShowFallback);
    if (onContentSwitch) {
      onContentSwitch(newShowFallback);
    }
  };

  return (
    <div>
      {showFallback ? fallbackContent : primaryContent}
      {showError && error && (
        <button onClick={handleSwitch} className="text-sm text-blue-500 mt-2">
          {showFallback ? 'Show Primary Content' : 'Show Fallback Content'}
        </button>
      )}
    </div>
  );
};

export { FallbackContent };
export type { FallbackContentProps };

