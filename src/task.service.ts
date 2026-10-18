import { tasks } from "./task.data";
import type { Task, TaskPriority } from "./task.types";

export function getAllTasks(): Task[] {
    return tasks;
}

export function addTask(
    title: string,
    priority: TaskPriority
): Task {
    const task: Task = {
        id: tasks.length > 0
            ? Math.max(...tasks.map((item) => item.id)) + 1
            : 1,
        title,
        status: "pending",
        priority
    };

    tasks.push(task);
    return task;
}

export function completeTask(id: number): boolean {
    const task = tasks.find((item) => item.id === id);

    if (task === undefined) {
        return false;
    }

    task.status = "completed";
    return true;
}