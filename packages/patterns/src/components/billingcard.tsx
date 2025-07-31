import { Button } from '@wheel/ui';
import { Card } from '@wheel/ui';
import React from 'react';
import { BillingInfo, Invoice } from './types';

export interface BillingCardProps {
  billing: BillingInfo;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showPaymentHistory?: boolean;
  showInvoices?: boolean;
  showActions?: boolean;
  onBillingClick?: (billing: BillingInfo) => void;
  onInvoiceClick?: (invoice: Invoice) => void;
  onActionClick?: (action: string, billing: BillingInfo) => void;
  permissions?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const BillingCard: React.FC<BillingCardProps> = ({
  billing,
  context = 'neutral',
  showPaymentHistory = false,
  showInvoices = false,
  showActions = false,
  onBillingClick,
  onInvoiceClick,
  onActionClick,
  permissions = [],
  size = 'md',
}) => {
  return (
    <Card
      className={`billing-card--${context} billing-card--${size}`}
      onClick={() => onBillingClick?.(billing)}
    >
      <div className="text-lg font-bold">{billing.name}</div>
      {showPaymentHistory && (
        <div className="mt-4">
          <h4 className="font-bold">Payment History</h4>
          {billing.paymentHistory?.map((payment) => (
            <div key={payment.id}>
              {payment.amount} on {payment.date.toLocaleDateString()}
            </div>
          ))}
        </div>
      )}
      {showInvoices && (
        <div className="mt-4">
          <h4 className="font-bold">Invoices</h4>
          {billing.invoices?.map((invoice) => (
            <div key={invoice.id} onClick={() => onInvoiceClick?.(invoice)}>
              {invoice.amount} due on {invoice.dueDate.toLocaleDateString()}
            </div>
          ))}
        </div>
      )}
      {showActions && (
        <div className="mt-4">
          {permissions.includes('edit') && (
            <Button onClick={() => onActionClick?.('edit', billing)}>
              Edit
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
