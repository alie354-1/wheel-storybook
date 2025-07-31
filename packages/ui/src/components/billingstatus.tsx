import React from 'react';
import { cn } from '@wheel/shared';

export type BillingStatusVariant = 'paid' | 'pending' | 'overdue' | 'draft';

export interface BillingStatusProps {
  status: BillingStatusVariant;
  className?: string;
}

/**
 * BillingStatus component that displays a billing status indicator.
 */
export const BillingStatus: React.FC<BillingStatusProps> = ({
  status,
  className = '',
}) => {
  const statusStyles: Record<BillingStatusVariant, string> = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800',
    draft: 'bg-gray-100 text-gray-800',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
        statusStyles[status],
        className
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default BillingStatus;
