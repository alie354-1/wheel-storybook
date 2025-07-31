import { AvailabilitySlot, ExpertAvailability } from '../../availability.service';
import { AvailabilityStrategy, AppointmentRequest } from '../base/AvailabilityStrategy';
/**
 * Manual availability strategy implementation
 * This strategy uses the expert_availability table to determine availability
 */
export declare class ManualStrategy implements AvailabilityStrategy {
    /**
     * Get available slots for an expert for a specific date range
     * @param expertId The expert's ID
     * @param startDate Start date (ISO string)
     * @param endDate End date (ISO string)
     * @returns Array of available slots
     */
    getAvailableSlots(expertId: string, startDate: string, endDate: string): Promise<AvailabilitySlot[]>;
    /**
     * Get expert availability for all days of the week
     * @param expertId The expert's ID
     * @returns Array of availability records
     */
    getExpertAvailability(expertId: string): Promise<ExpertAvailability[]>;
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
}
//# sourceMappingURL=ManualStrategy.d.ts.map