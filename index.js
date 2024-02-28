// Define an array to store tasks
let tasks = [];

// Function to add a new task
function addTask(task) {
  tasks.push({ task: task, completed: false });
}

// Function to mark a task as completed
function completeTask(index) {
  tasks[index].completed = true;
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.task;

    if (task.completed) {
      listItem.style.textDecoration = 'line-through';
    }

    listItem.addEventListener('click', () => {
      completeTask(index);
      displayTasks();
    });

    listItem.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      deleteTask(index);
      displayTasks();
    });

    taskList.appendChild(listItem);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    displayTasks();
    taskInput.value = '';
  }
}

// Event listener for form submission
const form = document.getElementById('task-form');
form.addEventListener('submit', handleSubmit);

// Initial display of tasks
displayTasks();
