/**
 * DISABLED Privacy Service
 *
 * This service has been temporarily disabled to prevent 406 errors with consent settings.
 * All operations are now no-ops (they do nothing) but provide sensible defaults.
 */
/**
 * Privacy Service Interface
 */
export interface PrivacyService {
    getUserConsent: (userId: string) => Promise<any>;
    updateUserConsent: (userId: string, settings: any) => Promise<void>;
    logEvent: (eventData: any) => Promise<void>;
}
/**
 * No-op implementation of Privacy Service
 */
declare class DisabledPrivacyService implements PrivacyService {
    constructor();
    /**
     * Get user consent settings (returns default values)
     */
    getUserConsent(userId: string): Promise<any>;
    /**
     * Update user consent settings (no-op)
     */
    updateUserConsent(userId: string, settings: any): Promise<void>;
    /**
     * Log event (no-op)
     */
    logEvent(eventData: any): Promise<void>;
}
export declare const privacyService: DisabledPrivacyService;
export {};
//# sourceMappingURL=privacy.service.d.ts.map