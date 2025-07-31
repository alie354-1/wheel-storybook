export declare enum UserRole {
    FOUNDER = "FOUNDER",
    COMPANY_MEMBER = "COMPANY_MEMBER",
    SERVICE_PROVIDER = "SERVICE_PROVIDER"
}
export declare enum CompanyStage {
    IDEA_STAGE = "IDEA_STAGE",
    SOLID_IDEA = "SOLID_IDEA",
    FORMED_COMPANY = "FORMED_COMPANY"
}
export declare enum IndustryCategory {
    TECHNOLOGY = "TECHNOLOGY",
    HEALTHCARE = "HEALTHCARE",
    FINANCE = "FINANCE",
    EDUCATION = "EDUCATION",
    RETAIL = "RETAIL",
    MANUFACTURING = "MANUFACTURING",
    ENTERTAINMENT = "ENTERTAINMENT",
    OTHER = "OTHER"
}
export declare enum UserSkillLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT"
}
export interface OnboardingData {
    userRole?: UserRole;
    companyStage?: CompanyStage;
    industryCategory?: IndustryCategory;
    skillLevel?: UserSkillLevel;
    goals?: string[];
    preferredTheme?: 'light' | 'dark' | 'system';
    notificationPreferences?: Record<string, boolean>;
}
interface FeatureInfo {
    title: string;
    description: string;
    path: string;
    priority: number;
}
declare class OnboardingService {
    private features;
    getRecommendedFeatures(userId: string): Promise<string[]>;
    getFeatureInfo(featureId: string): FeatureInfo;
    saveOnboardingData(userId: string, stepData: Record<string, any>): Promise<void>;
    updateCurrentStep(userId: string, step: string): Promise<void>;
    skipOnboarding(userId: string): Promise<void>;
    getPersonalizedWelcome(userId: string): Promise<string>;
}
export declare const onboardingService: OnboardingService;
export {};
//# sourceMappingURL=onboarding.service.d.ts.map