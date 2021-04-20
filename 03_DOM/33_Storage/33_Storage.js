// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'Bharati');

// Remove local storage item
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// console.log(name);
// const age = localStorage.getItem('age');
// console.log(age);

// // clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Submit');

    const task = document.getElementById('task').value;

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(element => {
    console.log(element);
});