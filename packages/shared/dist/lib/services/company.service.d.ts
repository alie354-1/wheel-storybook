import { Company } from '../types/idea-playground.types';
/**
 * Service for company-related operations
 */
export declare class CompanyService {
    /**
     * Get all companies the user is a member of
     * @param userId The ID of the user
     * @returns A list of companies the user is a member of
     */
    getUserCompanies(userId: string): Promise<Company[]>;
    /**
     * Get a company by ID
     * @param companyId The ID of the company
     * @returns The company with the given ID
     */
    getCompany(companyId: string): Promise<Company | null>;
    /**
     * Check if a user is a member of a company
     * @param userId The ID of the user
     * @param companyId The ID of the company
     * @returns True if the user is a member of the company, false otherwise
     */
    isUserCompanyMember(userId: string, companyId: string): Promise<boolean>;
    /**
     * Update a company by ID
     * @param companyId The ID of the company
     * @param updates The fields to update (including metadata)
     * @returns The updated company object
     */
    updateCompany(companyId: string, updates: Partial<Company> & {
        metadata?: Record<string, any>;
    }): Promise<Company | null>;
    /**
     * Get the role of a user in a company
     * @param userId The ID of the user
     * @param companyId The ID of the company
     * @returns The role string (e.g., "owner", "admin", "member") or null if not a member
     */
    getUserRole(userId: string, companyId: string): Promise<string | null>;
    /**
     * Delete a company by ID (and cascade delete related data)
     * @param companyId The ID of the company to delete
     */
    deleteCompany(companyId: string): Promise<void>;
    /**
     * Get all members of a company (for ownership transfer)
     * @param companyId The ID of the company
     * @returns Array of members with user_id, role, user_email
     */
    getCompanyMembers(companyId: string): Promise<{
        data: any[];
        error: any;
    }>;
    /**
     * Transfer company ownership to another member
     * @param companyId The company ID
     * @param newOwnerUserId The user_id of the new owner
     * @param currentOwnerUserId The user_id of the current owner
     */
    transferOwnership(companyId: string, newOwnerUserId: string, currentOwnerUserId: string): Promise<void>;
}
export declare const companyService: CompanyService;
//# sourceMappingURL=company.service.d.ts.map