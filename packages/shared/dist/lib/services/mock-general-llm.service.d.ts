import { GeneralLLMService, QueryContext } from './general-llm.service';
export declare class MockGeneralLLMService implements GeneralLLMService {
    constructor();
    query(input: string, context: QueryContext): Promise<any>;
}
export declare const mockGeneralLLMService: MockGeneralLLMService;
//# sourceMappingURL=mock-general-llm.service.d.ts.map