document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskTitleInput = document.getElementById("task-title");
    const taskDescInput = document.getElementById("task-desc");
    const taskList = document.getElementById("task-list");

    // Add a task to the list
    function addTask(title, description) {
        const taskRow = document.createElement("tr");
        taskRow.className = "task-row";

        // Create columns
        const titleCol = document.createElement("td");
        titleCol.textContent = title;

        const descCol = document.createElement("td");
        descCol.textContent = description;

        const deleteCol = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => taskRow.remove());
        deleteCol.appendChild(deleteButton);

        // Append columns to the row
        taskRow.appendChild(titleCol);
        taskRow.appendChild(descCol);
        taskRow.appendChild(deleteCol);

        // Append row to the task list
        taskList.appendChild(taskRow);
    }

    // Handle form submission
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = taskTitleInput.value.trim();
        const description = taskDescInput.value.trim();

        if (!title || !description) {
            alert("Please fill out all fields!");
            return;
        }

        // Add task to the list
        addTask(title, description);

        // Reset form fields
        taskTitleInput.value = "";
        taskDescInput.value = "";
    });
});
