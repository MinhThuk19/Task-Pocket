"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = require("./task.service");
function displayTasks() {
    console.log("\n=== TASK POCKET ===");
    const allTasks = (0, task_service_1.getAllTasks)();
    if (allTasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    for (const task of allTasks) {
        console.log(`${task.id}. ${task.title} | ` +
            `${task.status} | ${task.priority}`);
    }
}
displayTasks();
console.log("\nAdding a new task...");
(0, task_service_1.addTask)("Practice Git and GitHub", "medium");
console.log("\nCompleting task 1...");
const success = (0, task_service_1.completeTask)(1);
console.log(success
    ? "Task 1 completed successfully."
    : "Task 1 was not found.");
displayTasks();
