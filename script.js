const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = task;

    taskList.appendChild(listItem);

    taskInput.value = "";
});