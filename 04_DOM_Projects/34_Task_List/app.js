const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');


// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // DOM Load event and get tasks from Storage
    document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);

    // Add task event
    form.addEventListener('submit', addTask);

    // Delete task event
    taskList.addEventListener('click', deleteTask);

    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event
    filterInput.addEventListener('keyup', filterTasks);
}

// DOM load event to load tasks from Local Storage
function getTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks !== null) {
        tasks.forEach((taskName) => {
            createTask(taskName);
        });
    }
}

// Event to add task to the list
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task!');
    }
    else {
        // function to create the task
        createTask(taskInput.value);

        // Function to add task to Local storage
        storeTaskToLoalStorage(taskInput.value);

        taskInput.value = '';
    }
    e.preventDefault();
}

// Function to create task
function createTask(taskName) {
    // Create li
    const li = document.createElement('li');
    li.classList.add('collection-item');

    // Create text node and add it to li
    const txtNode = document.createTextNode(taskName);
    li.appendChild(txtNode);
    
    // Create link element and append
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    
    taskList.appendChild(li);
    console.log(li);
    
}

// Function to add task to local storage
function storeTaskToLoalStorage(task) {
    let items = [];

    if (localStorage.getItem('tasks') !== null) {
        items = JSON.parse(localStorage.getItem('tasks'));
    }
    items.push(task);
    localStorage.setItem('tasks', JSON.stringify(items));
}

// Event to delete task from UI
function deleteTask(e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure you want to delete this item?')) {
            e.target.parentElement.parentElement.remove();

            // Function to remove task from Local Storage
            removeTaskFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }
}

// Function to remove task from Local Storage
function removeTaskFromStorage(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks !== null) {
        tasks = tasks.filter((item) => item !== taskName);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event to clear tasks
function clearTasks(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to clear all your tasks?')) {
        // taskList.innerHTML = '';
        
        // Faster
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // Function to clear local storage
        localStorage.removeItem('tasks');
    }
}

// Function to clear local storage
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach((item) => {
        const task = item.firstChild.textContent;
        if (task.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}