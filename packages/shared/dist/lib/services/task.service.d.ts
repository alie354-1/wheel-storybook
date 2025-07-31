import { Task } from '../types/task.types';
export interface TaskService {
    getTasks: (options: {
        category?: string;
        standupId?: string;
    }) => Promise<Task[]>;
    createTask: (task: Partial<Task>) => Promise<Task>;
    updateTask: (taskId: string, updates: Partial<Task>) => Promise<void>;
    deleteTask: (taskId: string) => Promise<void>;
}
declare class SupabaseTaskService implements TaskService {
    getTasks({ category, standupId }: {
        category?: string;
        standupId?: string;
    }): Promise<Task[]>;
    createTask(task: Partial<Task>): Promise<Task>;
    updateTask(taskId: string, updates: Partial<Task>): Promise<void>;
    deleteTask(taskId: string): Promise<void>;
}
export declare const taskService: SupabaseTaskService;
export {};
//# sourceMappingURL=task.service.d.ts.map