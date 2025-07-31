interface StepTemplate {
    id?: string;
    name: string;
    description?: string;
    [key: string]: any;
}
export declare const journeyContentService: {
    getAllStepTemplates(): Promise<any[]>;
    upsertStepTemplate(template: StepTemplate): Promise<any[]>;
    deleteStepTemplate(id: string): Promise<void>;
    getAllTools(): Promise<{
        data: any[];
    }>;
    getToolsForStep(stepInstanceId: string): Promise<any[][]>;
    assignToolsToSteps(toolIds: string[], stepInstanceIds: string[]): Promise<any[]>;
};
export {};
//# sourceMappingURL=journeyContent.service.d.ts.map