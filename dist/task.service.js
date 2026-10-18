"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = getAllTasks;
exports.addTask = addTask;
exports.completeTask = completeTask;
const task_data_1 = require("./task.data");
function getAllTasks() {
    return task_data_1.tasks;
}
function addTask(title, priority) {
    const task = {
        id: task_data_1.tasks.length > 0
            ? Math.max(...task_data_1.tasks.map((item) => item.id)) + 1
            : 1,
        title,
        status: "pending",
        priority
    };
    task_data_1.tasks.push(task);
    return task;
}
function completeTask(id) {
    const task = task_data_1.tasks.find((item) => item.id === id);
    if (task === undefined) {
        return false;
    }
    task.status = "completed";
    return true;
}
