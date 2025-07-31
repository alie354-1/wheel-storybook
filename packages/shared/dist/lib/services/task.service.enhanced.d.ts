import { Task } from '../types/task.types.ts';
interface GetTasksOptions {
    category?: string;
    showCompleted?: boolean;
    standupId?: string;
    userId?: string;
}
declare class EnhancedTaskService {
    private readonly DEFAULT_TIMEOUT;
    private readonly MAX_RETRIES;
    /**
     * Get tasks with enhanced error handling and timeout protection
     */
    getTasks(options?: GetTasksOptions): Promise<Task[]>;
    /**
     * Execute the actual task query with retry logic
     */
    private executeTaskQuery;
    /**
     * Create task with enhanced error handling
     */
    createTask(taskData: Partial<Task>): Promise<Task>;
    /**
     * Update task with enhanced error handling
     */
    updateTask(taskId: string, updates: Partial<Task>): Promise<Task>;
    /**
     * Delete task with enhanced error handling
     */
    deleteTask(taskId: string): Promise<void>;
    /**
     * Check connection to tasks service
     */
    checkConnection(): Promise<boolean>;
}
export declare const enhancedTaskService: EnhancedTaskService;
export { EnhancedTaskService };
//# sourceMappingURL=task.service.enhanced.d.ts.map