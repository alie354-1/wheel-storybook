import { UserRoleType, CompanyStageType } from '../types/enhanced-profile.types';
export interface EnhancedOnboardingData {
    primaryRole?: UserRoleType;
    additionalRoles?: UserRoleType[];
    companyStage?: CompanyStageType;
    inviteCode?: string;
    serviceCategories?: string[];
    expertise?: string[];
    industryCategory?: string;
    skillLevel?: string;
    goals?: string[];
    preferredTheme?: string;
    notificationPreferences?: Record<string, boolean>;
}
export interface OnboardingStep {
    key: string;
    title: string;
    description?: string;
    isRequired?: boolean;
    roles?: UserRoleType[];
}
declare class EnhancedOnboardingService {
    private steps;
    /**
     * Get all onboarding steps
     * If role is provided, filter steps by role
     */
    getOnboardingSteps(role?: UserRoleType): OnboardingStep[];
    /**
     * Get the next step based on the current step and user role
     */
    getNextStep(currentStep: string, role?: UserRoleType): OnboardingStep | null;
    /**
     * Get the previous step based on the current step and user role
     */
    getPreviousStep(currentStep: string, role?: UserRoleType): OnboardingStep | null;
    /**
     * Save onboarding data to the database
     */
    saveOnboardingData(userId: string, currentStep: string, data: Partial<EnhancedOnboardingData>): Promise<boolean>;
    /**
     * Process a company invitation code
     */
    private processInviteCode;
    /**
     * Mark onboarding as complete
     */
    markOnboardingComplete(userId: string): Promise<boolean>;
    /**
     * Skip onboarding
     */
    skipOnboarding(userId: string): Promise<boolean>;
    /**
     * Accept an invitation
     */
    acceptInvitation(userId: string, inviteCode: string): Promise<boolean>;
}
export declare const enhancedOnboardingService: EnhancedOnboardingService;
export {};
//# sourceMappingURL=enhanced-onboarding.service.d.ts.map