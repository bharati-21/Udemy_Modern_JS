const id = 100;
if (id == 100) {
    console.log('It\'s 100!');
}
else {
    console.log('Not 100!');
}

if (id != 101) {
    console.log('Not equal to 101!');
}
else {
    console.log('Equal to 101!');
}

// == ignores the type when performing checks for equality
// === considers the value and type
if (id === '100') {
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

if (id !== '100') {
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

// Test if variable is defined
if (typeof marks !== 'undefined') {
    console.log(`The Id is ${marks}`);
}
else {
    console.log("No id");
}

// >=, <=, >, <
if (id > 100) {
    console.log('Greater than 100');
}
else {
    console.log('Less than or equal to 100');
}

if (id >= 100) {
    console.log('Greater than or equal to 100');
}
else {
    console.log('Less than 100');
}

// IF ELSE
const color = 'red';
if (color === 'red') {
    console.log('Color is red');
}
else if (color === 'blue') {
    console.log('Color is blue');
}
else {
    console.log('Color is not red or blue');
}

// LOGICAL OPERATORS
const name = 'Steve';
const age = 20;

if (age > 0 && age <= 12) {
    console.log(`${name} is a child`);
}
else if (age > 12 && age <= 19) {
    console.log(`${name} is a teenager`);
}
else {
    console.log(`${name} is an adult`);
}


if (age < 16 && age > 65) {
    console.log(`${name} cannot run in the race`);
}
else {
    console.log(`${name} cam run in the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// without braces
if (id === 100)
    console.log('Correct');
else
    console.log('Incorrect');