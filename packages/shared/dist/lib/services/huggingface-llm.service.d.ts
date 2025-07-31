import { GeneralLLMService, QueryContext } from './general-llm.service';
/**
 * Implementation of GeneralLLMService using Hugging Face LLM microservice
 */
export declare class HuggingFaceGeneralLLMService implements GeneralLLMService {
    constructor();
    query(input: string, context: QueryContext): Promise<any>;
}
export declare const huggingFaceGeneralLLMService: HuggingFaceGeneralLLMService;
//# sourceMappingURL=huggingface-llm.service.d.ts.map