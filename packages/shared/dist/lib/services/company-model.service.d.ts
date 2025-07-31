export interface CompanyModel {
    id: string;
    company_id: string;
    created_at: string;
    updated_at: string;
}
export interface CompanyModelService {
    trainCompanyModel: (companyId: string) => Promise<void>;
    getCompanyModel: (companyId: string) => Promise<CompanyModel | null>;
    generateCompanyInsights: (companyId: string, query: string) => Promise<any>;
}
export declare class OpenAICompanyModelService implements CompanyModelService {
    private companyDataService;
    trainCompanyModel(companyId: string): Promise<void>;
    getCompanyModel(companyId: string): Promise<CompanyModel | null>;
    generateCompanyInsights(companyId: string, query: string): Promise<any>;
    private generateEmbeddings;
    private chunkCompanyData;
    private chunkArray;
    private storeEmbeddings;
    private retrieveRelevantEmbeddings;
}
export declare const companyModelService: OpenAICompanyModelService;
//# sourceMappingURL=company-model.service.d.ts.map