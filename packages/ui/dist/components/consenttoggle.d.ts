import { default as React } from 'react';
export interface ConsentToggleProps {
    onConsentChange: (consent: boolean) => void;
    className?: string;
    label: string;
    initialConsent?: boolean;
}
/**
 * ConsentToggle component that provides a toggle for user consent.
 */
export declare const ConsentToggle: React.FC<ConsentToggleProps>;
export default ConsentToggle;
//# sourceMappingURL=consenttoggle.d.ts.map