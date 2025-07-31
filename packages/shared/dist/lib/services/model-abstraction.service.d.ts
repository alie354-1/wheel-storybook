export interface ModelAbstractionService {
    generateAbstraction: (companyIds: string[]) => Promise<any>;
    getAbstractionForCompanies: (companyIds: string[]) => Promise<any>;
}
export declare class OpenAIModelAbstractionService implements ModelAbstractionService {
    generateAbstraction(companyIds: string[]): Promise<any>;
    getAbstractionForCompanies(companyIds: string[]): Promise<any>;
    private extractKeyInsights;
    private countByProperty;
}
export declare const modelAbstractionService: OpenAIModelAbstractionService;
//# sourceMappingURL=model-abstraction.service.d.ts.map