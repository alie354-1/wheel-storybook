export interface CompanyData {
    company: any;
    members: any[];
    documents: any[];
    tasks: any[];
    marketResearch: any[];
    businessModels: any[];
    aiDiscussions: any[];
    standupEntries: any[];
}
export interface CompanyDataService {
    collectCompanyData: (companyId: string) => Promise<CompanyData>;
    storeCompanyData: (companyId: string, data: CompanyData) => Promise<void>;
    getStoredCompanyData: (companyId: string) => Promise<CompanyData | null>;
}
export declare class SupabaseCompanyDataService implements CompanyDataService {
    collectCompanyData(companyId: string): Promise<CompanyData>;
    storeCompanyData(companyId: string, data: CompanyData): Promise<void>;
    getStoredCompanyData(companyId: string): Promise<CompanyData | null>;
}
export declare const companyDataService: SupabaseCompanyDataService;
//# sourceMappingURL=company-data.service.d.ts.map