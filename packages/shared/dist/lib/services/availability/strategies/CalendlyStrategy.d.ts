import { AvailabilityStrategy, AppointmentRequest } from '../base/AvailabilityStrategy';
import { AvailabilitySlot, ExpertAvailability } from '../../availability.service';
/**
 * Strategy for managing availability through Calendly
 */
export declare class CalendlyStrategy implements AvailabilityStrategy {
    /**
     * Get available slots for an expert for a specific date range
     * @param expertId The expert's ID
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    getAvailableSlots(expertId: string, startDate: string, endDate: string): Promise<AvailabilitySlot[]>;
    /**
     * Create an appointment in Calendly
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
     * Get expert availability for all days of the week
     * This is a fallback method that returns the same as the ManualStrategy
     * since Calendly doesn't have a concept of weekly availability
     * @param expertId The expert's ID
     * @returns Array of availability records
     */
    getExpertAvailability(expertId: string): Promise<ExpertAvailability[]>;
}
//# sourceMappingURL=CalendlyStrategy.d.ts.map