export interface ModelManagerStats {
    companyModelsCount: number;
    abstractionsCount: number;
    lastUpdated: string | null;
    isOperational: boolean;
    totalQueries: number;
    avgQueryTime: number;
    queriesToday: number;
}
export declare class ModelManager {
    private companyModelService;
    private abstractionService;
    private generalLLMService;
    constructor();
    trainCompanyModel(companyId: string): Promise<{
        success: boolean;
        message: string;
    }>;
    generateAbstraction(companyIds: string[]): Promise<{
        success: boolean;
        data?: any;
        message?: string;
    }>;
    query(input: string, context: {
        userId: string;
        companyId?: string;
        useExistingModels?: boolean;
    }): Promise<{
        success: boolean;
        data?: any;
        message?: string;
    }>;
    getCompanyModelStatus(companyId: string): Promise<{
        exists: boolean;
        lastUpdated: string | null;
        embeddingsCount: number;
    }>;
    checkSystemStatus(): Promise<ModelManagerStats>;
    getTrainingLogs(limit?: number): Promise<any[]>;
    getQueryLogs(limit?: number): Promise<any[]>;
}
export declare const modelManager: ModelManager;
//# sourceMappingURL=model-manager.service.d.ts.map