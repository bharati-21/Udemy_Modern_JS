// const sayHello = function () {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line functions do not need braces
const sayHello = () => console.log('Hello');
sayHello();

// One line returns 
// same as above
// const returnHello = function () {
//     return 'Hello';
// }

const returnHello = () => "Hello";
console.log(returnHello());

// Return Object
const returnObject = () => {{msg: 'Hello'}};
console.log(returnObject);

// Single Param does not need Parenthesis
const helloName = name => console.log(`Hello ${name}`);
helloName('Bharati');

// Multiple params need Parenthesis
const addSum = (x, y) => console.log(x + y);
addSum(1, 2);


const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map(function (user) {
//     return user.length;
// });

// const nameLengths = users.map((user) => {
//     return user.length;
// });

const nameLengths = users.map(user => user.length);
console.log(nameLengths);