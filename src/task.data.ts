
import type { Task } from "./task.types";

export const tasks: Task[] = [
    {
        id: "T001",
        title: "Complete TypeScript lab",
        estimatedHours: 3,
        status: "doing",
        priority: "high",
        assignee: "Minh Thu",
        note: "Finish Task Pocket"
    },
    {
        id: "T002",
        title: "Review TypeScript types",
        estimatedHours: 1.5,
        status: "todo",
        priority: "medium",
        assignee: null
    },
    {
        id: "T003",
        title: "Practice Git and GitHub",
        estimatedHours: 2,
        status: "done",
        priority: "low",
        assignee: "Minh Thu",
        note: "Review Git commands"
    },
    {
        id: "T004",
        title: "Read TypeScript documentation",
        estimatedHours: 1,
        status: "todo",
        priority: "medium",
        assignee: null,
        note: ""
    }
];
