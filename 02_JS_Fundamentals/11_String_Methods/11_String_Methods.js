const firstName = 'John';
const lastName = 'Doe';
const age = 21;
let val;
val = firstName + lastName;
console.log(val);

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Bharati ';
val += 'Subramanian';
console.log(val);

val = 'Hello, my name is ' + val + ' and I am ' + age;
console.log(val);


// Escaping
val = 'That\s awesome. I can\'t wait';
console.log("'That\s awesome. I can\'t wait'\n" + val);

// length
console.log('Bharati'.length);

// concat
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log('firstName[2]', firstName[2]);

// index of a character
console.log('firstName.indexOf("o")', firstName.indexOf("n"));

// last index of
console.log('"Bharati".lastIndexOf("a")', 'Bharati'.lastIndexOf("a"));


// charAt
console.log("firstName.charAt(2)", firstName.charAt(2));

// Get last character
console.log(firstName.charAt(firstName.length - 1));

// substring
console.log(firstName.substring(0, 4));

// slice
console.log(firstName.slice(0, 3));
console.log(firstName.slice(-3, 3));

// split
console.log(firstName.split(''));
console.log("Hello there! My name is Bharati".split(" "));

// replace
console.log("Hello there! My name is Bharati".replace('Bharati', 'John'));

// includes()
console.log("Hello there!".includes("foo"));
console.log("Hello there!".includes("Hello"));