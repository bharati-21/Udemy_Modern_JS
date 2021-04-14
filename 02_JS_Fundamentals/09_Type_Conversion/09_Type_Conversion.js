let val;

// Conversion to String using String() function
// Number to String
val = String(5);
console.log('Number to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);
val = String(4+4);
console.log(val + '\n' + typeof val + '\n' + val.length);

// Bool to String
val = String(true);
console.log('Bool to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);

// Date to String
val = String(new Date());
console.log('Date to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);

// Array to String
val = String([1,2,3,4]);
console.log('Array to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);

// Number to String using toString() method
val = (5).toString();
console.log('Number to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);

// Bool to String using toString() method
val = (true).toString();
console.log('Bool to String conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.length);

// String to Number
val = Number('5')
console.log('String to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// Bool to Number
val = Number(true)
console.log('Bool to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());
val = Number(false)
console.log('Bool to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// Null to Number
val = Number(null)
console.log('Null to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// String that's not a number to Number
val = Number('Hello')
console.log('String to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// Array to Number
val = Number([1,2,3])
console.log('String to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// String to Number
val = parseInt('100.30');
console.log('String to Number conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());

// String to Number (parseFloat)
val = parseFloat('100.30');
console.log('String to Float conversion\n');
console.log(val + '\n' + typeof val + '\n' + val.toFixed());


const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum, typeof sum);



