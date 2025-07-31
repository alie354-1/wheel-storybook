import { Tool } from '@/lib/types/admin.types';
export declare class ToolService {
    static list(): Promise<Tool[]>;
    static create(payload: Partial<Tool>): Promise<void>;
    static update(id: string, payload: Partial<Tool>): Promise<void>;
    static delete(id: string): Promise<void>;
}
//# sourceMappingURL=tool.service.d.ts.map