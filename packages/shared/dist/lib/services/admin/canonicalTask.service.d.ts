import { Task } from '@/lib/types/admin.types';
export declare class CanonicalTaskService {
    static list(): Promise<Task[]>;
    static listByStep(stepId: string): Promise<Task[]>;
    static create(payload: Partial<Task>): Promise<void>;
    static update(id: string, payload: Partial<Task>): Promise<void>;
    static delete(id: string): Promise<void>;
}
//# sourceMappingURL=canonicalTask.service.d.ts.map