/**
 * Tool Submission Service
 * - Submit user tools for promotion to global tools db
 * - AI enrichment of tool details
 * - Admin review and promotion
 */
export declare const toolSubmissionService: {
    submitToolSubmission({ submittedBy, companyId, name, url, description, category, subcategory, tags, journeyStepId }: {
        submittedBy: string;
        companyId: string;
        name: string;
        url?: string;
        description?: string;
        category?: string;
        subcategory?: string;
        tags?: string[];
        journeyStepId?: string;
    }): Promise<void>;
    enrichToolSubmission(toolSubmissionId: string): Promise<void>;
    promoteToolSubmission(toolSubmissionId: string, promotedBy: string): Promise<void>;
    rejectToolSubmission(toolSubmissionId: string, rejectedBy: string, reason: string): Promise<void>;
    listPendingToolSubmissions(): Promise<any[]>;
};
//# sourceMappingURL=toolSubmission.service.d.ts.map