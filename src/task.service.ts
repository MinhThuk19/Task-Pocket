
import { tasks } from "./task.data";
import type {
    Task,
    TaskPriority,
    TaskStatus,
    OpenTaskCallback
} from "./task.types";

// 1. Lấy toàn bộ Task
export function getAllTasks(): Task[] {
    return tasks;
}

// 2. In danh sách Task
export function printTasks(taskList: Task[]): void {
    console.log("\n=== TASK LIST ===");

    if (taskList.length === 0) {
        console.log("No tasks available.");
        return;
    }

    for (const task of taskList) {
        console.log(
            `ID: ${task.id} | ` +
            `Title: ${task.title} | ` +
            `Hours: ${task.estimatedHours} | ` +
            `Priority: ${task.priority} | ` +
            `Status: ${task.status} | ` +
            `Assignee: ${task.assignee ?? "Unassigned"} | ` +
            `Note: ${task.note || "No note"}`
        );
    }
}

// 3. Lọc Task theo trạng thái hoặc lấy tất cả
export function filterTasks(
    taskList: Task[],
    status: TaskStatus | "all"
): Task[] {
    if (status === "all") {
        return taskList;
    }

    return taskList.filter((task) => task.status === status);
}

// 4. Tính tổng số giờ dự kiến
export function calculateTotalHours(taskList: Task[]): number {
    return taskList.reduce(
        (total, task) => total + task.estimatedHours,
        0
    );
}

// 5. Tìm Task theo ID
export function findTaskById(id: string): Task | null {
    const task = tasks.find((item) => item.id === id);
    return task ?? null;
}

// 6. Callback mô phỏng mở Task
export const openTask: OpenTaskCallback = (taskId: string): void => {
    const task = findTaskById(taskId);

    if (task === null) {
        console.log(`Cannot open task: ${taskId} was not found.`);
        return;
    }

    console.log(`Opening task: ${task.title} (${task.id})`);
};

// 7. Custom type guard kiểm tra dữ liệu Task
export function isTask(value: unknown): value is Task {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const item = value as Record<string, unknown>;

    return (
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.estimatedHours === "number" &&
        Number.isFinite(item.estimatedHours) &&
        (
            item.priority === "low" ||
            item.priority === "medium" ||
            item.priority === "high"
        ) &&
        (
            item.status === "todo" ||
            item.status === "doing" ||
            item.status === "done"
        ) &&
        (
            typeof item.assignee === "string" ||
            item.assignee === null
        ) &&
        (
            item.note === undefined ||
            typeof item.note === "string"
        )
    );
}
