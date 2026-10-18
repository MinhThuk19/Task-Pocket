import {
    getAllTasks,
    addTask,
    completeTask
} from "./task.service";

function displayTasks(): void {
    console.log("\n=== TASK POCKET ===");

    const allTasks = getAllTasks();

    if (allTasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    for (const task of allTasks) {
        console.log(
            `${task.id}. ${task.title} | ` +
            `${task.status} | ${task.priority}`
        );
    }
}

displayTasks();

console.log("\nAdding a new task...");
addTask("Practice Git and GitHub", "medium");

console.log("\nCompleting task 1...");
const success = completeTask(1);

console.log(
    success
        ? "Task 1 completed successfully."
        : "Task 1 was not found."
);

displayTasks();