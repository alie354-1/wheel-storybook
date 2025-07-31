export interface Reminder {
    id: string;
    user_id: string;
    company_id: string;
    type: string;
    title: string;
    body?: string;
    schedule: string;
    next_run: string;
    channels: string[];
    is_active: boolean;
    last_sent?: string;
    created_at: string;
    updated_at: string;
}
declare class ReminderService {
    /**
     * Create a new reminder
     */
    createReminder(reminder: Omit<Reminder, "id" | "created_at" | "updated_at" | "last_sent">): Promise<Reminder | null>;
    /**
     * Update a reminder
     */
    updateReminder(id: string, updates: Partial<Reminder>): Promise<Reminder | null>;
    /**
     * Delete a reminder
     */
    deleteReminder(id: string): Promise<boolean>;
    /**
     * List reminders for a user
     */
    listReminders(userId: string, companyId: string): Promise<Reminder[]>;
    /**
     * (To be run by a scheduled job) Process due reminders and send notifications
     */
    processDueReminders(): Promise<void>;
}
export declare const reminderService: ReminderService;
export {};
//# sourceMappingURL=reminder.service.d.ts.map