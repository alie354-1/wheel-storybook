import { CompanyAccessResult, CompanyData } from './types';
export declare class CompanyAccessService {
    /**
     * Check if a user has access to any companies
     */
    checkUserCompanyAccess(userId: string): Promise<CompanyAccessResult>;
    /**
     * Get all companies a user is a member of
     */
    getUserCompanies(userId: string): Promise<CompanyData[]>;
}
//# sourceMappingURL=company-access.service.d.ts.map