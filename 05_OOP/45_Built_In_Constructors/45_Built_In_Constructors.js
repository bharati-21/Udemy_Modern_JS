// String
const name1 = 'Bharati';
const name2 = new String('Bharati');

console.log(name1);

name2.foo = 'bar';
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

if (name1 === 'Bharati') {
    console.log('Yes');
}
else {
    console.log('No');
}

if (name1 === name2) {
    console.log('Yes');
}
else {
    console.log('No');
}

// Number
const n1 = 5;
const n2 = new Number(5);
console.log(typeof n1);
console.log(typeof n2);

// Boolean
const b1 = true;
const b2 = new Boolean(true);
console.log(typeof b1);
console.log(typeof b2);

// Function
const sum1 = function (x, y) {
    return x + y;
};

const sum2 = new Function('x', 'y', 'return x+y');

console.log(sum1(1, 1));
console.log(sum2(1, 1));
console.log(typeof sum1, typeof sum2);

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john1);
console.log(john2);

// Arrays
const a1 = [1, 2, 3, 4, 5];
const a2 = new Array(1, 2, 3, 4, 5);
console.log(a1, typeof a1);
console.log(a2, typeof a2);

// Regular Expression
const r1 = /\w+/;
const r2 = new RegExp('\\w+');
console.log(r1, r2);