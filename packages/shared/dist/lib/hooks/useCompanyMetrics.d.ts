/**
 * A hook to fetch key financial and user metrics for a given company.
 * @param companyId The ID of the company to fetch metrics for.
 */
export declare const useCompanyMetrics: (companyId: string | undefined) => {
    metrics: {
        mrr: string;
        activeUsers: string;
        runway: string;
    };
    loading: boolean;
    error: Error | null;
};
//# sourceMappingURL=useCompanyMetrics.d.ts.map