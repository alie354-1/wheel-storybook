import { Task } from '../types/task.types.ts';
interface UseTasksOptions {
    category?: string;
    showCompleted?: boolean;
    standupId?: string;
}
export declare function useTasks({ category, showCompleted, standupId }?: UseTasksOptions): {
    tasks: Task[];
    isLoading: boolean;
    error: string | null;
    isRegenerating: string | null;
    createTask: (task: Partial<Task>) => Promise<Task>;
    updateTask: (taskId: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (taskId: string) => Promise<void>;
    regenerateTask: (taskId: string) => Promise<void>;
    refreshTasks: () => Promise<void>;
};
export {};
//# sourceMappingURL=useTasks.d.ts.map