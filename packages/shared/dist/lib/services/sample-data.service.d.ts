/**
 * Sample Data Service
 *
 * Provides methods for adding sample data to the database
 */
declare class SampleDataService {
    /**
     * Add a sample expert profile for the current user
     *
     * @param userId The ID of the user
     * @returns The created expert profile
     */
    addSampleExpertProfile(userId: string): Promise<import('../types/community.types').ExpertProfile>;
}
export declare const sampleDataService: SampleDataService;
export {};
//# sourceMappingURL=sample-data.service.d.ts.map