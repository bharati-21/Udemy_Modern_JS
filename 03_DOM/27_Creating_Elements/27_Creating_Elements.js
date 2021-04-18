// Create the element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'new-item');

// Create text node and append
const textNode = document.createTextNode('Hello World');
li.appendChild(textNode);

// Create new link item
const link = document.createElement('a');

// Add classes to link
link.className = 'delete-item secondary-content';

// Add icons
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);

console.log(li);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);