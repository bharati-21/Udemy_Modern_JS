export const person = {
    name: 'John',
    age: 30
}

export function sayHello() {
    return 'Hello ' + person.name;
}

const greeting = 'Hello World';
export default greeting;


/* IMPORTING TO AN EXTERNAL FILE */
// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

// Common JS module syntax
// const human = require('./mymodule1');

// ES 2015 Module
// import { person, sayHello } from './mymodule2';
// console.log(human.name);
// console.log(person.name);
// console.log(sayHello());

// import * as mod from './mymodule2';
// console.log(mod.person.name);
// console.log(mod.sayHello());

// import greeting from './mymodule2';
// console.log(greeting);

