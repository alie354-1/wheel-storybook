/**
 * Events Service - Handles core event tracking functionality
 *
 * This service is responsible for tracking analytics events and storing them in the database.
 */
/**
 * Track an analytics event in the system
 *
 * @param event_name The name of the event to track
 * @param user_id The user ID associated with the event (null for anonymous events)
 * @param company_id The company ID associated with the event (null for user-only events)
 * @param payload Additional data to store with the event
 */
export declare function trackEvent(event_name: string, user_id: string | null, company_id: string | null, payload: any): Promise<void>;
/**
 * Fetch analytics events for a company or user
 *
 * @param companyId The company ID to fetch events for
 * @param userId Optional user ID to filter events
 * @param limit Optional limit on number of events to return
 * @returns Array of analytics events
 */
export declare function fetchAnalyticsEvents(companyId?: string, userId?: string, limit?: number): Promise<any[]>;
//# sourceMappingURL=events.service.d.ts.map