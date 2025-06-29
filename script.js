let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => toggleTask(index));
    li.addEventListener("dblclick", () => deleteTask(index));
    
    ul.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName){
    alert("Please Enter a task");
    return;
  }
  if (taskName) {
    taskList.push({ name: taskName, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

renderTasks();