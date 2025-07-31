import { default as React } from 'react';
export type BillingStatusVariant = 'paid' | 'pending' | 'overdue' | 'draft';
export interface BillingStatusProps {
    status: BillingStatusVariant;
    className?: string;
}
/**
 * BillingStatus component that displays a billing status indicator.
 */
export declare const BillingStatus: React.FC<BillingStatusProps>;
export default BillingStatus;
//# sourceMappingURL=billingstatus.d.ts.map