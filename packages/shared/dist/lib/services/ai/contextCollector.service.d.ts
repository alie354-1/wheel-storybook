/**
 * Context Collector Service
 * Collects context about a company's journey for AI recommendations
 */
export declare class ContextCollectorService {
    /**
     * Collect all relevant context about a company journey for AI processing
     */
    collectCompanyContext(companyJourneyId: string): Promise<any>;
    /**
     * Collect information about the company's steps
     */
    private collectStepsData;
    /**
     * Collect information about the company's progress
     */
    private collectProgressData;
    /**
     * Collect information about the company profile
     */
    private collectCompanyProfile;
}
//# sourceMappingURL=contextCollector.service.d.ts.map