document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new li element. Set its textContent to taskText.
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign an onclick event to remove the li
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Add event listener to addButton
    addButton.addEventListener("click", addTask);

    // Add event listener for the 'keypress' event
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
