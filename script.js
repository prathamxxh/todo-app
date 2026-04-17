// Add Task
function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value;

    if (value === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!Array.isArray(tasks)) tasks = [];

    tasks.push(value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    showTasks();
}

// Show Tasks
function showTasks() {
    const parent = document.getElementById("listDiv");
    parent.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!Array.isArray(tasks)) tasks = [];

    tasks.forEach((task, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="editTask(${index})">Edit</button>
        `;

        parent.appendChild(div);
    });
}

// Delete Task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!Array.isArray(tasks)) tasks = [];

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}

// Edit Task
function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!Array.isArray(tasks)) tasks = [];

    const updated = prompt("Edit your task:", tasks[index]);

    if (updated === null || updated === "") return;

    tasks[index] = updated;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}

// Load tasks on refresh
showTasks();