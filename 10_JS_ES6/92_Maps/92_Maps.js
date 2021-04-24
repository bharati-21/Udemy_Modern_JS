// MAPS: Key value pairs. Can use any type as key or value

const map1 = new Map();

// Set Keys
const k1 = 'Some String',
    k2 = {},
    k3 = function () { };

// Set map values by keys
map1.set(k1, 'Value of k1');
map1.set(k2, 'Value of k2');
map1.set(k3, 'Value of k3');

console.log(map1.get(k1), map1.get(k2), map1.get(k3));

//Count values
console.log(map1.size);

// Iterating through maps
// Loop using for..of to get keys and values

for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Just keys
for (let key of map1.keys()) {
    console.log(`${key}`);
}

// Just values
for (let key of map1.values()) {
    console.log(`${key}`);
}

// Loop with forEach()
map1.forEach(function (v, k) {
    console.log(`${k} = ${v}`);
});

// Convert map to arrays
const arr = Array.from(map1);
console.log(arr);

// Convert map values to arrays
const arrV = Array.from(map1.values());
console.log(arrV);

// Convert map keys to arrays
const arrK = Array.from(map1.keys());
console.log(arrK);