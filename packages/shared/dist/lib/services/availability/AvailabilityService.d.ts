import { AvailabilitySlot, ExpertAvailability } from '../availability.service';
import { AppointmentRequest } from './base/AvailabilityStrategy';
/**
 * Main availability service that uses the strategy pattern
 * to select the appropriate availability strategy based on the expert's integration type
 */
export declare class AvailabilityService {
    private manualStrategy;
    private googleCalendarStrategy;
    private office365CalendarStrategy;
    private calendlyStrategy;
    constructor();
    /**
     * Get the appropriate strategy for an expert
     * @param expertId The expert's ID
     * @returns The appropriate availability strategy
     */
    private getStrategyForExpert;
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
    updateAppointment(appointmentId: string, expertId: string, updates: Partial<AppointmentRequest>): Promise<boolean>;
    /**
     * Cancel an appointment
     * @param appointmentId The appointment ID
     * @param expertId The expert's ID
     * @returns Whether the appointment was cancelled successfully
     */
    cancelAppointment(appointmentId: string, expertId: string): Promise<boolean>;
    /**
     * Get expert availability for all days of the week
     * @param expertId The expert's ID
     * @returns Array of availability records
     */
    getExpertAvailability(expertId: string): Promise<ExpertAvailability[]>;
}
//# sourceMappingURL=AvailabilityService.d.ts.map