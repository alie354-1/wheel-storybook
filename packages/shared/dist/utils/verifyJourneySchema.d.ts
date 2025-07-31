/**
 * Database Schema Verification Utility
 *
 * Quick check to see what tables exist in the current database
 * and verify the journey system schema.
 */
export declare function verifyJourneySchema(): Promise<{
    existing: string[];
    missing: string[];
    errors: string[];
}>;
export declare function checkJourneyData(): Promise<void>;
export declare function verifyJourneySystem(): Promise<void>;
//# sourceMappingURL=verifyJourneySchema.d.ts.map