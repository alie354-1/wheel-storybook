/**
 * Company Access Service
 *
 * This service provides access to company data with enhanced error handling.
 */
declare class CompanyAccessService {
    /**
     * Check if a user has access to a company and return company data
     * @param userId User ID to check
     * @returns Object with company access information
     */
    checkUserCompanyAccess(userId: string): Promise<{
        hasCompany: boolean;
        companyData: any[];
        error: null;
    } | {
        hasCompany: boolean;
        companyData: never[];
        error: any;
    }>;
    /**
     * Get company details
     * @param companyId Company ID
     * @returns Company details
     */
    getCompanyDetails(companyId: string): Promise<any>;
}
export declare const companyAccessService: CompanyAccessService;
export {};
//# sourceMappingURL=company-access.service.d.ts.map