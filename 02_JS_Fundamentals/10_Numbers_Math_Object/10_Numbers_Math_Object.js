const num1 = 100;
const num2 = 200;
let val;

// Simple Math with Numbers
val = num1 + num2;
console.log('Addition', val);

val = num1 * num2;
console.log('Multiplication', val);

val = num2 / num1;
console.log('Division', val);

val = num1 - num2;
console.log('Subtraction', val);

val = num2 % 3;
console.log('Modulus', val);

// Math Object
val = Math.PI;
console.log('Math.PI', val);

val = Math.E;
console.log('Math.E', val);

val = Math.round(2.8);
console.log('Math.round(2.8)', val);

val = Math.ceil(2.6);
console.log('Math.ceil(2.6)', val);

val = Math.floor(2.8);
console.log('Math.floor(2.8)', val);

val = Math.sqrt(32);
console.log('Math.sqrt(32)', val);

val = Math.abs(-5);
console.log('Math.abs(-5)', val);

val = Math.pow(2,6);
console.log('Math.pow(2,6)', val);

val = Math.min(12,5,98,032, -664, 679);
console.log('Math.min(12,5,98,032, -664, 679)', val);

val = Math.max(12,5,98,032, -664, 679);
console.log('Math.max(12,5,98,032, -664, 679)', val);

val = Math.random();
console.log('Math.random()', val);

val = Math.random() * 20;
console.log('Math.random() * 20', val);

val = Math.random() * 20 + 1;
console.log('Math.random() * 20 + 1', val);

val = Math.floor(Math.random() * 20 + 1);
console.log('Math.floor(Math.random() * 20 + 1)', val);
