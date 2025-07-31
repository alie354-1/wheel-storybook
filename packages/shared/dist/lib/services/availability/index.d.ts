import { AvailabilityService } from './AvailabilityService';
import { AvailabilityStrategy, AppointmentRequest } from './base/AvailabilityStrategy';
import { ManualStrategy } from './strategies/ManualStrategy';
import { GoogleCalendarStrategy } from './strategies/GoogleCalendarStrategy';
import { Office365CalendarStrategy } from './strategies/Office365CalendarStrategy';
import { CalendlyStrategy } from './strategies/CalendlyStrategy';
export declare const availabilityService: AvailabilityService;
export type { AvailabilityStrategy, AppointmentRequest };
export { ManualStrategy, GoogleCalendarStrategy, Office365CalendarStrategy, CalendlyStrategy };
export type { AvailabilitySlot, ExpertAvailability } from '../availability.service';
//# sourceMappingURL=index.d.ts.map