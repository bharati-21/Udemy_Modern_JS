// REPLACE ELEMENTS

// Create Element
const newHeading = document.createElement('h2');

// Add Id
newHeading.id = 'task-title';

// New Text node
newHeading.appendChild(document.createTextNode('Task List'));

// Replace with old Heading
const oldHeading = document.getElementById('task-title');

// Parent of old heading
const parent = oldHeading.parentElement;

// Replace
parent.replaceChild(newHeading, oldHeading);
console.log(newHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;
val = link.className;
console.log(val);

val = link.classList;
console.log(val);

val = link.classList[0];
console.log(val);

link.classList.add('link');
link.classList.remove('link');

console.log(val);

val = link.getAttribute('href');
console.log(val);

val = link.setAttribute('href', 'http://google.com');

val = link.hasAttribute('href');
console.log(val);

val = link.setAttribute('title', 'google');

// Remove attribute
link.removeAttribute('title');