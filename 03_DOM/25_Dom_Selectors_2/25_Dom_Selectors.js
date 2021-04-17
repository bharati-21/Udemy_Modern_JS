// getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color='red';
items[3].textContent = 'Hello'

const litsItems = document.querySelector('ul').getElementsByClassName('collection-items');
console.log(litsItems);

// getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

const liArray = Array.from(lis);
console.log(liArray.reverse());
liArray.forEach(function (li,index) {
    li.textContent = `${index}: 'Hello`;

});


// querySelectorAll
const liitems = document.querySelectorAll('li.collection-item');
console.log(liitems);
liitems.forEach(function (item,index) {
    item.textContent = `${index}: 'Hello`;
});

const liOdd = document.querySelectorAll('li.collection-item:nth-child(odd)');
const liEven = document.querySelectorAll('li.collection-item:nth-child(even)');

liOdd.forEach(function (item,index) {
    item.style.color = '#333';
    item.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.color = '#ccc';
    liEven[i].style.background = '#333';
}