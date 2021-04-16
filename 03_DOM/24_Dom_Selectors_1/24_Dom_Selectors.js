// document.getElementById()
let val = document.getElementById('task-title');
console.log(val);

console.log(val.id);
console.log(val.className);
console.log(val.tagName);

// Change styling
val.style.color = '#ccc';
val.style.background = '#333';
val.style.padding = '20px';
// val.style.display = 'none';

// Change content
val.textContent = 'Task List';
val.innerHTML = 'My Tasks';
val.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
val = document.querySelector('#task-title');