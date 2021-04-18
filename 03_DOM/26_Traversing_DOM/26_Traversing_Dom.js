let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get child nodes 
val = list.childNodes;
console.log(val);
console.log(val[0], val[0].nodeName, val[0].nodeType);
console.log(val[1], val[1].nodeName, val[1].nodeType);

// Get Children element nodes
val = list.children;
console.log(val);
console.log(val[0]);

// Can access children of children
console.log(val[3].children[0]);

// Firstchild
console.log(list.firstChild);
console.log(list.firstElementChild);

// Last Child
console.log(list.lastChild);
console.log(list.lastElementChild);

console.log(list.childElementCount);


val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

// Get next Sibling
val = listItem.nextSibling;
console.log(val);

// Get next element sibling
val = listItem.nextElementSibling;
console.log(val);

// Get previous Sibling
val = listItem.previousSibling;
console.log(val);

// Get previous element sibling
val = listItem.previousElementSibling;
console.log(val);

console.log(listItem.nextElementSibling.nextElementSibling.previousElementSibling);