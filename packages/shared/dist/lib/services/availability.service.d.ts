/**
 * Interface for expert availability
 */
export interface ExpertAvailability {
    id: string;
    expert_id: string;
    day_of_week: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    start_time: string;
    end_time: string;
    is_available: boolean;
    created_at: string;
    updated_at: string;
}
/**
 * Interface for expert availability slot
 */
export interface AvailabilitySlot {
    date: string;
    start_time: string;
    end_time: string;
    is_available: boolean;
}
/**
 * Service for managing expert availability
 */
export declare const availabilityService: {
    /**
     * Set expert availability for a specific day of the week
     * @param expertId The expert's ID
     * @param dayOfWeek Day of the week (0 = Sunday, 6 = Saturday)
     * @param startTime Start time (HH:MM)
     * @param endTime End time (HH:MM)
     * @param isAvailable Whether the expert is available during this time
     * @returns The created or updated availability record
     */
    setExpertAvailability(expertId: string, dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6, startTime: string, endTime: string, isAvailable?: boolean): Promise<ExpertAvailability | null>;
    /**
     * Get expert availability for all days of the week
     * @param expertId The expert's ID
     * @returns Array of availability records
     */
    getExpertAvailability(expertId: string): Promise<ExpertAvailability[]>;
    /**
     * Delete an availability record
     * @param availabilityId The availability record ID
     * @returns Whether the deletion was successful
     */
    deleteAvailability(availabilityId: string): Promise<boolean>;
    /**
     * Get available slots for an expert for a specific date range
     * @param expertId The expert's ID
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    getAvailableSlotsForDateRange(expertId: string, startDate: string, endDate: string): Promise<AvailabilitySlot[]>;
};
//# sourceMappingURL=availability.service.d.ts.map