import { Phase } from '../../types/admin.types';
export declare class PhaseService {
    static list(): Promise<Phase[]>;
    static get(id: string): Promise<Phase | null>;
    static create(data: Partial<Phase>, userId: string): Promise<Phase>;
    static update(id: string, updates: Partial<Phase>, userId: string): Promise<Phase>;
    static delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=phase.service.d.ts.map