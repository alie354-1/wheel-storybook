import { TerminologyEntityType, TerminologyValue, ResolvedTerminologyMap, TerminologyOverrideBehavior } from '../types/terminology.types';
export declare class TerminologyService {
    /**
     * Helper method to get table name based on entity type
     */
    private static getTableNameForEntityType;
    /**
     * Helper method to get ID column name based on entity type
     */
    private static getIdColumnForEntityType;
    /**
     * Delete terminology for a specific category
     * @param entityType Type of entity (partner, organization, company, team, user)
     * @param entityId ID of the entity
     * @param category Category to delete (e.g., 'journeyTerms', 'toolTerms')
     * @returns Promise resolving to true if successful
     */
    static deleteTerminologyForCategory(entityType: TerminologyEntityType, entityId: string, category: string): Promise<boolean>;
    /**
     * Save terminology records for an entity
     * @param entityType Type of entity (partner, organization, company, team, user)
     * @param entityId ID of the entity
     * @param records Array of terminology records to save
     * @returns Promise resolving to true if successful
     */
    static saveTerminology(entityType: TerminologyEntityType, entityId: string, records: Array<{
        key: string;
        value: TerminologyValue;
        override_behavior?: TerminologyOverrideBehavior;
    }>): Promise<boolean>;
    /**
     * Retrieve system default terminology
     */
    static getDefaultTerminology(): Promise<ResolvedTerminologyMap>;
    /**
     * Resolve terminology for a specific entity with inheritance
     * @param entityType Type of entity (partner, company, team, user)
     * @param entityId ID of the entity
     * @param options Optional settings for terminology resolution
     */
    static resolveTerminology(entityType: TerminologyEntityType, entityId: string, options?: {
        keys?: string[];
        ignoreCache?: boolean;
    }): Promise<ResolvedTerminologyMap>;
    /**
     * Get terminology settings for the given entity
     */
    private static getTerminologySettings;
    /**
     * Fetch terminology inheritance chain for the given entity
     */
    private static fetchInheritedTerminology;
    /**
     * Get user's inheritance path
     */
    private static getUserInheritancePath;
    /**
     * Get team's inheritance path
     */
    private static getTeamInheritancePath;
    /**
     * Get company's inheritance path
     */
    private static getCompanyInheritancePath;
    /**
     * Get organization's inheritance path
     */
    private static getOrganizationInheritancePath;
    /**
     * Get terminology for a specific entity type
     */
    private static getEntityTerminology;
    /**
     * Merge terminology with override behaviors
     */
    private static mergeTerminology;
    /**
     * Clear terminology cache
     */
    static clearCache(entityType?: TerminologyEntityType, entityId?: string): void;
    /**
     * Apply predefined terminology template
     */
    static applyPredefinedTerminology(entityType: TerminologyEntityType, entityId: string, templateKey: string): Promise<boolean>;
}
//# sourceMappingURL=terminology.service.d.ts.map