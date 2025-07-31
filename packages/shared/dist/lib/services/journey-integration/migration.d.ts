/**
 * Journey Integration Migration Script
 *
 * This script migrates data from the old journey system to the new journey integration system.
 * It transfers steps, progress, and relationships from the old tables to the new tables.
 */
/**
 * Migrate journey data from old tables to new tables
 */
export declare function migrateJourneyData(): Promise<{
    success: boolean;
    error?: undefined;
} | {
    success: boolean;
    error: unknown;
}>;
/**
 * Run the migration
 */
export declare function runMigration(): Promise<{
    success: boolean;
    error?: undefined;
} | {
    success: boolean;
    error: unknown;
}>;
//# sourceMappingURL=migration.d.ts.map