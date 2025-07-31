import { Button } from '@wheel/ui';
import React from 'react';
import {
  BillingInfo,
  InvoiceData,
  PaymentData,
  ReportType,
  Workspace,
} from './types';

export interface BillingControlsProps {
  workspace: Workspace;
  billing: BillingInfo;
  onInvoiceGenerate: (data: InvoiceData) => void;
  onPaymentProcess: (payment: PaymentData) => void;
  onReportGenerate: (type: ReportType) => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showInvoicing?: boolean;
  showPayments?: boolean;
  showReports?: boolean;
  permissions?: string[];
  showAnalytics?: boolean;
}

export const BillingControls: React.FC<BillingControlsProps> = ({
  onInvoiceGenerate,
  onPaymentProcess,
  onReportGenerate,
  showAnalytics = false,
}) => {
  const handleGenerateInvoice = () => {
    const invoiceData: InvoiceData = {
      id: '1',
      amount: 1000,
      currency: 'USD',
      dueDate: new Date(),
    };
    onInvoiceGenerate(invoiceData);
  };

  const handleProcessPayment = () => {
    const paymentData: PaymentData = {
      id: '1',
      amount: 1000,
      currency: 'USD',
      date: new Date(),
    };
    onPaymentProcess(paymentData);
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
      <Button onClick={handleProcessPayment}>Process Payment</Button>
      <Button onClick={() => onReportGenerate('billing')}>
        Generate Billing Report
      </Button>
      {showAnalytics && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Revenue Analytics</h3>
          <p>Total Revenue: $10,000</p>
          <p>Monthly Recurring Revenue: $2,000</p>
        </div>
      )}
    </div>
  );
};
