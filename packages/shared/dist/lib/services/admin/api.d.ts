import { PhaseService } from './phase.service';
import { DomainService } from './domain.service';
import { CanonicalStepService } from './canonicalStep.service';
import { CanonicalTaskService } from './canonicalTask.service';
import { ToolService } from './tool.service';
import { ToolRecommendationService } from './toolRecommendation.service';
import { ToolOwnershipService } from './toolOwnership.service';
import { AdminUserService } from './adminUser.service';
import { AuditLogService } from './auditLog.service';
import { ImportExportService } from './importExport.service';
import { OwnershipNotificationService } from './ownershipNotification.service';
export declare const adminAPI: {
    phases: typeof PhaseService;
    domains: typeof DomainService;
    steps: typeof CanonicalStepService;
    tasks: typeof CanonicalTaskService;
    tools: typeof ToolService;
    recommendations: typeof ToolRecommendationService;
    ownership: typeof ToolOwnershipService;
    users: typeof AdminUserService;
    audit: typeof AuditLogService;
    importExport: typeof ImportExportService;
    ownershipNotifications: typeof OwnershipNotificationService;
};
//# sourceMappingURL=api.d.ts.map