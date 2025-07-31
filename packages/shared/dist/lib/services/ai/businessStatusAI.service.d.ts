import { DomainActivity, AIAnalysis, UpcomingShift, BusinessStatusData } from '../../../components/company/new_journey/components/BusinessStatusWidget';
/**
 * Service to provide AI analysis for business status
 * In a production environment, this would connect to a real AI service
 * For now, we provide mock data and analysis
 */
export declare class BusinessStatusAIService {
    /**
     * Get AI analysis for a company's business status
     * @param companyId Company ID
     * @param domainData Domain activity data
     * @returns Business status data with AI insights
     */
    static getBusinessStatusAnalysis(companyId: string): Promise<BusinessStatusData>;
    /**
     * Generate analysis of domain balance
     * @param domains List of domains and their activity levels
     * @returns Balance assessment text
     */
    static analyzeDomainBalance(domains: {
        domain: string;
        activityLevel: string;
    }[]): string;
    /**
     * Identify potential risks based on domain activities
     * @param domains List of domains and their activity levels
     * @returns List of risk alerts
     */
    static identifyRisks(domains: DomainActivity[]): string[];
}
export type { DomainActivity, AIAnalysis, UpcomingShift, BusinessStatusData };
//# sourceMappingURL=businessStatusAI.service.d.ts.map