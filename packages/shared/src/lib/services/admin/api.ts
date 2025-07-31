import { PhaseService } from "./phase.service";
import { DomainService } from "./domain.service";
import { CanonicalStepService } from "./canonicalStep.service";
import { CanonicalTaskService } from "./canonicalTask.service";
import { ToolService } from "./tool.service";
import { ToolRecommendationService } from "./toolRecommendation.service";
import { ToolOwnershipService } from "./toolOwnership.service";
import { AdminUserService } from "./adminUser.service";
import { AuditLogService } from "./auditLog.service";
import { ImportExportService } from "./importExport.service";
import { OwnershipNotificationService } from "./ownershipNotification.service";

export const adminAPI = {
  phases: PhaseService,
  domains: DomainService,
  steps: CanonicalStepService,
  tasks: CanonicalTaskService,
  tools: ToolService,
  recommendations: ToolRecommendationService,
  ownership: ToolOwnershipService,
  users: AdminUserService,
  audit: AuditLogService,
  importExport: ImportExportService,
  ownershipNotifications: OwnershipNotificationService,
};
