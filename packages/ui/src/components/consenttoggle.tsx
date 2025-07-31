import React, { useState } from 'react';
import { cn } from '@wheel/shared';

export interface ConsentToggleProps {
  onConsentChange: (consent: boolean) => void;
  className?: string;
  label: string;
  initialConsent?: boolean;
}

/**
 * ConsentToggle component that provides a toggle for user consent.
 */
export const ConsentToggle: React.FC<ConsentToggleProps> = ({
  onConsentChange,
  className = '',
  label,
  initialConsent = false,
}) => {
  const [consent, setConsent] = useState(initialConsent);

  const handleToggle = () => {
    const newConsent = !consent;
    setConsent(newConsent);
    onConsentChange(newConsent);
  };

  return (
    <div className={cn('flex items-center', className)}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          consent ? 'bg-indigo-600' : 'bg-gray-200'
        )}
        aria-pressed={consent}
      >
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            consent ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
      <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
};

export default ConsentToggle;
