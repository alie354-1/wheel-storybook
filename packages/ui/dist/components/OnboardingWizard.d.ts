import { default as React } from 'react';
interface OnboardingWizardProps {
    onClose?: () => void;
    onComplete?: (data: {
        role: string;
        stage?: string;
    }) => void;
}
/**
 * A simplified onboarding wizard for the UI
 * This is a standalone component that can be shown in a modal or dialog
 */
export declare const OnboardingWizard: React.FC<OnboardingWizardProps>;
export default OnboardingWizard;
//# sourceMappingURL=OnboardingWizard.d.ts.map