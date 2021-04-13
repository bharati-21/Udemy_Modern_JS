// var, let, const

// 1. var
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// 2. let
let firstName = 'John';
let lastName;
console.log(firstName);
console.log(lastName);

// 3. const
const pi = 3.14;
/* 
    NOT VALID!!!
    - Cannot reassign a constant variable
    - Must assign value to a constant variable during initialization
*/
// pi = 3.1417
// const radius;

const person = {
    name: 'Bharati',
    age: 21
};

person.name = 'Bharati Subramanian' // Allowed. can reassign values for the data inside the object. But cannot reassign the object

const num = [1, 2, 3];
num.push(4); // Can add element to the array. But cannot reassign to the array.