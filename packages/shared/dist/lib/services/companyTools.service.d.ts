/**
 * Company Tools Service
 * - Fetch all tools used by a company (journey steps, custom, direct)
 * - Add/remove tools from company toolset
 * - Upload/associate contracts and documents
 */
export declare const companyToolsService: {
    getCompanyTools(companyId: string): Promise<any[]>;
    addToolToCompany(companyId: string, toolId: string, source: string, addedBy: string): Promise<void>;
    removeToolFromCompany(companyId: string, toolId: string): Promise<void>;
    uploadToolDocument(companyId: string, toolId: string, file: File, docType: string, uploadedBy: string): Promise<void>;
    getToolDocuments(companyId: string, toolId: string): Promise<any>;
};
//# sourceMappingURL=companyTools.service.d.ts.map