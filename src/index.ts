
import {
    getAllTasks,
    printTasks,
    filterTasks,
    calculateTotalHours,
    findTaskById,
    openTask,
    isTask
} from "./task.service";

import type { Task } from "./task.types";

// 1. Hiển thị tất cả Task
console.log("\n========== ALL TASKS ==========");
const allTasks = getAllTasks();
printTasks(allTasks);

// 2. Lọc Task theo trạng thái
console.log("\n========== TASKS AFTER FILTER (todo) ==========");
const todoTasks = filterTasks(allTasks, "todo");
printTasks(todoTasks);

// 3. Tính tổng giờ dự kiến
console.log("\n========== TOTAL ESTIMATED HOURS ==========");
console.log(`${calculateTotalHours(allTasks)} hours`);

// 4. Tìm Task theo ID và xử lý null an toàn
console.log("\n========== FIND TASK ==========");
const foundTask = findTaskById("T001");

if (foundTask !== null) {
    console.log(`Found task: ${foundTask.title}`);
} else {
    console.log("Task not found.");
}

// 5. Callback mở Task hợp lệ
console.log("\n========== OPEN VALID TASK ==========");
openTask("T001");

// 6. Callback mở Task không tồn tại
console.log("\n========== OPEN INVALID TASK ==========");
openTask("T999");

// 7. Kiểm tra dữ liệu raw kiểu unknown
console.log("\n========== VALIDATE RAW DATA ==========");

const rawData: unknown = {
    id: "T005",
    title: "Test raw task",
    estimatedHours: 2,
    status: "todo",
    priority: "medium",
    assignee: null,
    note: "Raw data validation test"
};

if (isTask(rawData)) {
    const validatedTask: Task = rawData;
    console.log("Valid Task data:", validatedTask);
} else {
    console.log("Invalid Task data.");
}

// Kiểm tra dữ liệu không hợp lệ
const invalidRawData: unknown = {
    id: 123,
    title: "Invalid task",
    estimatedHours: 2,
    status: "unknown",
    priority: "medium",
    assignee: null
};

console.log(
    "Invalid raw data accepted?",
    isTask(invalidRawData)
);
