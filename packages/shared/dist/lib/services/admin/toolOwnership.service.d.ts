import { Tool } from '../../types/admin.types';
export declare class ToolOwnershipService {
    static claimTool(toolId: string, userId: string): Promise<Tool>;
    static releaseTool(toolId: string, userId: string): Promise<Tool>;
    static verifyTool(toolId: string, userId: string): Promise<Tool>;
}
//# sourceMappingURL=toolOwnership.service.d.ts.map