// SETS - Stores unique values of any type

const s1 = new Set();
// Add values to set
s1.add(100);
s1.add('Hello');
s1.add({name: 'John Does'});
s1.add(true);
s1.add(100); //Still have only 4 elements

const s2 = new Set([1, true, 'String', false]);

// console.log(s1);
// console.log(s2);

// Get count
// console.log(s1.size);

// Check for values
// console.log(s1.has(100));
// console.log(s1.has(50 + 50));

// console.log(s1.has({ name: 'John Doe' }));


// Delete from set
// s1.delete(100);
// console.log(s1);

// Iterate through sets
// For.. of
// for (let item of s1) {
//     console.log(item);
// }

// for (let item of s1.keys()) {
//     console.log(item);
// }

// for (let item of s1.values()) {
//     console.log(item);
// }

// for (let item of s1.entries()) {
//     console.log(item);
// }

s1.forEach(function (set) {
    console.log(set);
});

// Convert to an Array
console.log(Array.from(s1));