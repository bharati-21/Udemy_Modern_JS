const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');


// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);

    // Delete task event
    taskList.addEventListener('click', deleteTask);

    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);

    filterInput.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task!');
    }
    else {
        // Create li
        const li = document.createElement('li');
        li.classList.add('collection-item');

        // Create text node and add it to li
        const txtNode = document.createTextNode(taskInput.value);
        li.appendChild(txtNode);
        
        // Create link element and append
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        
        taskList.appendChild(li);
        console.log(li);
        
        taskInput.value = '';
    }
    e.preventDefault();
}

function deleteTask(e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure you want to delete this item?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to clear all your tasks?')) {
        // taskList.innerHTML = '';
        
        // Faster
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

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