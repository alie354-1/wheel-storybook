import { AvailabilitySlot } from '../../availability.service';
import { AvailabilityStrategy, AppointmentRequest } from '../base/AvailabilityStrategy';
/**
 * Office 365 Calendar availability strategy implementation
 * This strategy uses the Microsoft Graph API to determine availability
 */
export declare class Office365CalendarStrategy implements AvailabilityStrategy {
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
     * Get the expert's Office 365 Calendar credentials
     * @param expertId The expert's ID
     * @returns The Office 365 Calendar credentials or null if not found
     */
    private getExpertOffice365Credentials;
    /**
     * Fetch busy times from Office 365 Calendar
     * @param credentials The Office 365 Calendar credentials
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of busy time slots
     */
    private fetchOffice365CalendarBusyTimes;
    /**
     * Calculate available slots based on working hours and busy times
     * @param availabilitySettings The expert's availability settings
     * @param busyTimes The expert's busy times from Office 365 Calendar
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    private calculateAvailableSlots;
    /**
     * Create an event in Office 365 Calendar
     * @param credentials The Office 365 Calendar credentials
     * @param appointmentDetails The appointment details
     * @returns The Office 365 Calendar event ID or null if creation failed
     */
    private createOffice365CalendarEvent;
    /**
     * Update an event in Office 365 Calendar
     * @param credentials The Office 365 Calendar credentials
     * @param eventId The Office 365 Calendar event ID
     * @param updates The updates to apply
     * @returns Whether the event was updated successfully
     */
    private updateOffice365CalendarEvent;
    /**
     * Cancel an event in Office 365 Calendar
     * @param credentials The Office 365 Calendar credentials
     * @param eventId The Office 365 Calendar event ID
     * @returns Whether the event was cancelled successfully
     */
    private cancelOffice365CalendarEvent;
    /**
     * Update an appointment with the Office 365 Calendar event ID
     * @param appointmentDetails The appointment details
     * @param eventId The Office 365 Calendar event ID
     * @returns Whether the update was successful
     */
    private updateAppointmentWithEventId;
}
//# sourceMappingURL=Office365CalendarStrategy.d.ts.map