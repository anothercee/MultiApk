let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    taskList.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${i})">❌</button>
      </li>`;
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;
  tasks.push(input.value);
  input.value = "";
  save();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  save();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
    
