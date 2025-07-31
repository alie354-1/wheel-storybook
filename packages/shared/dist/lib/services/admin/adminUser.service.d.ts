import { AdminUser } from '../../types/admin.types';
export declare class AdminUserService {
    static list(): Promise<AdminUser[]>;
    static getByUserId(userId: string): Promise<AdminUser | null>;
    static create(data: Partial<AdminUser>, createdBy: string): Promise<AdminUser>;
    static update(userId: string, updates: Partial<AdminUser>, updatedBy: string): Promise<AdminUser>;
    static deactivate(userId: string, updatedBy: string): Promise<AdminUser>;
}
//# sourceMappingURL=adminUser.service.d.ts.map