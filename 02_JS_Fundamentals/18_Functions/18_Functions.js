// Function Declaration
function greet() {
    console.log('Hello World!');
}
greet(); // Function call

function return_greet() {
    return 'Hello World';
}
console.log(return_greet());

// Functions with parameters
function greet_person(firstName) {
    return 'Hello ' + firstName;
}
console.log(greet_person('John'));
console.log(greet_person()); // return undefined

// functions can take multiple parameters.
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

// can add default values for parameters to avoid undefined
function greeting(firstName = 'John', lastName = 'Doe') {
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greeting('Bharati', 'Subramanian')); // Function uses parameter value passed to it
console.log(greeting()); // Function uses default value since parameter values are not passed


// Function Expressions
const square = function (x=2) {
    return x * x;
};
console.log(square(9));
console.log(square());

// Immediately invocable function expressions - IFFE
(function (name) {
    console.log('IFFE Ran..\nHello ' + name)
})('Bharati');

// Property methods
const todo = {
    add: function () {
        console.log('Added Todo');
    },
    edit: function (id) {
        console.log('Edited Todo ' + id)
    }
}

todo.delete = function (id) {
    console.log('Deleted Todo ' + id);
};

todo.add();
todo.edit(22);
todo.delete(22);