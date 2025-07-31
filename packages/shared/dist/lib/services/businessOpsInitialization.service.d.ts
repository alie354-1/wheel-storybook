export interface BusinessOpsInitOptions {
    companyId: string;
    userId: string;
    industries: string[];
    businessModel?: string;
}
/**
 * Service to initialize the Business Operations Hub for a newly created company.
 * This should be called after company and company_members records are created.
 */
export declare class BusinessOpsInitializationService {
    /**
     * Initialize the Business Operations Hub for a newly created company.
     * Calls the Supabase RPC function to set up domains, mappings, and workspaces.
     */
    static initializeForCompany(options: BusinessOpsInitOptions): Promise<void>;
    /**
     * Log the initialization event for auditing.
     */
    private static logInitializationEvent;
}
//# sourceMappingURL=businessOpsInitialization.service.d.ts.map