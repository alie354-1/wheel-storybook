import { JourneyPhase, JourneyDomain, JourneyStepTemplate, JourneyStep, CompanyJourneyStep, difficulty_level, Tool } from '../types/journey-unified.types';
export interface FrameworkStepImportOptions {
    companyId: string;
    stepIds: string[];
    targetPhaseId?: string;
    customizeOnImport?: boolean;
    preserveOrder?: boolean;
}
export interface TemplateUpdateNotification {
    id: string;
    templateId: string;
    companyId: string;
    updateType: 'new_version' | 'content_change' | 'deprecation';
    title: string;
    description: string;
    actionRequired: boolean;
    isRead: boolean;
    createdAt: string;
}
export declare const journeyFrameworkService: {
    /**
     * Get all canonical phases
     */
    getPhases(): Promise<JourneyPhase[]>;
    /**
     * Get all canonical domains
     */
    getDomains(): Promise<JourneyDomain[]>;
    /**
     * Get canonical framework steps with filtering
     */
    getFrameworkSteps(filters?: {
        phaseId?: string;
        domainId?: string;
        difficulty?: difficulty_level;
        search?: string;
        limit?: number;
    }): Promise<JourneyStep[]>;
    /**
     * Import framework steps into a company's journey
     */
    importStepsToCompany(options: FrameworkStepImportOptions): Promise<CompanyJourneyStep[]>;
    /**
     * Get template update notifications for a company
     */
    getTemplateUpdateNotifications(companyId: string): Promise<TemplateUpdateNotification[]>;
    /**
     * Mark template update notification as read
     */
    markNotificationRead(notificationId: string): Promise<void>;
    /**
     * Get step templates (for browsing and customization)
     */
    getStepTemplates(filters?: {
        category?: string;
        difficulty?: difficulty_level;
        search?: string;
        includeDeprecated?: boolean;
    }): Promise<JourneyStepTemplate[]>;
    /**
     * Create a new step template (community contribution)
     */
    createStepTemplate(template: Omit<JourneyStepTemplate, "id" | "created_at" | "updated_at">): Promise<JourneyStepTemplate>;
    /**
     * Update step template version
     */
    updateStepTemplate(templateId: string, updates: Partial<JourneyStepTemplate>): Promise<JourneyStepTemplate>;
    /**
     * Get tools for a specific step
     */
    getStepTools(stepId: string): Promise<Tool[]>;
    /**
     * Notify companies about template updates
     */
    notifyTemplateUpdate(templateId: string, updateType: "new_version" | "content_change" | "deprecation"): Promise<void>;
    /**
     * Helper methods for notifications
     */
    getNotificationTitle(updateType: string): string;
    getNotificationDescription(updateType: string): string;
};
//# sourceMappingURL=journeyFramework.service.d.ts.map