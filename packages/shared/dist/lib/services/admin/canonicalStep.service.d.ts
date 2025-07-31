import { Step } from '@/lib/types/admin.types';
export declare class CanonicalStepService {
    static list(): Promise<Step[]>;
    static create(payload: Partial<Step>): Promise<void>;
    static update(id: string, payload: Partial<Step>): Promise<void>;
    static delete(id: string): Promise<void>;
}
//# sourceMappingURL=canonicalStep.service.d.ts.map