import { AvailabilitySlot } from '../../availability.service';
import { AvailabilityStrategy, AppointmentRequest } from '../base/AvailabilityStrategy';
/**
 * Google Calendar availability strategy implementation
 * This strategy uses the Google Calendar API to determine availability
 */
export declare class GoogleCalendarStrategy implements AvailabilityStrategy {
    private manualStrategy;
    constructor();
    /**
     * Get available slots for an expert for a specific date range
     * @param expertId The expert's ID
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    getAvailableSlots(expertId: string, startDate: string, endDate: string): Promise<AvailabilitySlot[]>;
    /**
     * Create an appointment in the expert's calendar
     * @param appointmentDetails The appointment details
     * @returns Whether the appointment was created successfully
     */
    createAppointment(appointmentDetails: AppointmentRequest): Promise<boolean>;
    /**
     * Update an existing appointment
     * @param appointmentId The appointment ID
     * @param updates The updates to apply
     * @returns Whether the appointment was updated successfully
     */
    updateAppointment(appointmentId: string, updates: Partial<AppointmentRequest>): Promise<boolean>;
    /**
     * Cancel an appointment
     * @param appointmentId The appointment ID
     * @returns Whether the appointment was cancelled successfully
     */
    cancelAppointment(appointmentId: string): Promise<boolean>;
    /**
     * Get the expert's Google Calendar credentials
     * @param expertId The expert's ID
     * @returns The Google Calendar credentials or null if not found
     */
    private getExpertGoogleCredentials;
    /**
     * Fetch busy times from Google Calendar
     * @param credentials The Google Calendar credentials
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of busy time slots
     */
    private fetchGoogleCalendarBusyTimes;
    /**
     * Calculate available slots based on working hours and busy times
     * @param availabilitySettings The expert's availability settings
     * @param busyTimes The expert's busy times from Google Calendar
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    private calculateAvailableSlots;
    /**
     * Create an event in Google Calendar
     * @param credentials The Google Calendar credentials
     * @param appointmentDetails The appointment details
     * @returns The Google Calendar event ID or null if creation failed
     */
    private createGoogleCalendarEvent;
    /**
     * Update an event in Google Calendar
     * @param credentials The Google Calendar credentials
     * @param eventId The Google Calendar event ID
     * @param updates The updates to apply
     * @returns Whether the event was updated successfully
     */
    private updateGoogleCalendarEvent;
    /**
     * Cancel an event in Google Calendar
     * @param credentials The Google Calendar credentials
     * @param eventId The Google Calendar event ID
     * @returns Whether the event was cancelled successfully
     */
    private cancelGoogleCalendarEvent;
    /**
     * Update an appointment with the Google Calendar event ID
     * @param appointmentDetails The appointment details
     * @param eventId The Google Calendar event ID
     * @returns Whether the update was successful
     */
    private updateAppointmentWithEventId;
}
//# sourceMappingURL=GoogleCalendarStrategy.d.ts.map