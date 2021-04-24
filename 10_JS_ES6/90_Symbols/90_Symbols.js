// Create a Symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym1);
console.log(sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${String(sym1)}`);


// Unique Object Keys
const Key1 = Symbol();
const Key2 = Symbol('sym2');

const myObj = {};
myObj[Key1] = 'Property1';
myObj[Key2] = 'Property2';
myObj.key3 = 'Property3';
myObj.key4 = 'Property4';
// console.log(myObj[Key1]);
// console.log(myObj[Key2]);

// Symbols not enumerable in for.. in
for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`); // only key3 and key4 are used
}

// Symbols are ignored by JSON.Stringify()

console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));