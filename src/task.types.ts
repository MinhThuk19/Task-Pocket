
export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
    id: string;
    title: string;
    estimatedHours: number;
    status: TaskStatus;
    priority: TaskPriority;
    assignee: string | null;
    note?: string;
}

export type OpenTaskCallback = (taskId: string) => void;
