import { ImportExportJob } from '../../types/admin.types';
export declare class ImportExportService {
    static createJob(data: Partial<ImportExportJob>, userId: string): Promise<ImportExportJob>;
    static updateJobStatus(jobId: string, updates: Partial<ImportExportJob>): Promise<ImportExportJob>;
    static getJob(jobId: string): Promise<ImportExportJob | null>;
    static listJobs(userId?: string): Promise<ImportExportJob[]>;
}
//# sourceMappingURL=importExport.service.d.ts.map