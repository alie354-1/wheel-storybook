import { CommunityEvent, EventRegistration, CreateCommunityEventRequest, CommunityEventFilters, PaginationParams, PaginatedResponse, EventStatus, RegistrationStatus } from '../types/community.types';
/**
 * Event Service
 * Handles all event-related operations
 */
export declare const eventService: {
    /**
     * Get all community events with optional filtering and pagination
     */
    getEvents(filters?: CommunityEventFilters, pagination?: PaginationParams): Promise<PaginatedResponse<CommunityEvent>>;
    /**
     * Get a single community event by ID
     */
    getEvent(eventId: string): Promise<CommunityEvent | null>;
    /**
     * Create a new community event
     */
    createEvent(eventData: CreateCommunityEventRequest, organizerId: string): Promise<CommunityEvent>;
    /**
     * Update an existing community event
     */
    updateEvent(eventId: string, updates: {
        title?: string;
        description?: string;
        event_type?: string;
        start_date?: string;
        end_date?: string;
        timezone?: string;
        is_recurring?: boolean;
        recurrence_pattern?: Record<string, any>;
        max_attendees?: number;
        registration_deadline?: string;
        requires_approval?: boolean;
        target_groups?: string[];
        co_organizers?: string[];
        event_format?: string;
        location_details?: Record<string, any>;
        preparation_materials?: Record<string, any>;
        status?: EventStatus;
    }): Promise<CommunityEvent>;
    /**
     * Cancel a community event
     */
    cancelEvent(eventId: string): Promise<void>;
    /**
     * Delete a community event
     */
    deleteEvent(eventId: string): Promise<void>;
    /**
     * Get all registrations for an event
     */
    getEventRegistrations(eventId: string): Promise<EventRegistration[]>;
    /**
     * Register a user for an event
     */
    registerForEvent(eventId: string, userId: string): Promise<EventRegistration>;
    /**
     * Cancel a user's registration for an event
     */
    cancelRegistration(eventId: string, userId: string): Promise<void>;
    /**
     * Update a registration status
     */
    updateRegistrationStatus(registrationId: string, status: RegistrationStatus): Promise<EventRegistration>;
    /**
     * Mark attendance for a registration
     */
    markAttendance(registrationId: string, attended: boolean): Promise<EventRegistration>;
    /**
     * Submit feedback for an event
     */
    submitFeedback(eventId: string, userId: string, rating: number, comment?: string): Promise<EventRegistration>;
    /**
     * Get all events a user is registered for
     */
    getUserEvents(userId: string): Promise<CommunityEvent[]>;
    /**
     * Get upcoming events
     */
    getUpcomingEvents(limit?: number): Promise<CommunityEvent[]>;
};
//# sourceMappingURL=event.service.d.ts.map