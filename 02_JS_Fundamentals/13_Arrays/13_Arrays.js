// Creating arrays
const nums1 = [42, 30, 13, 78, 55, 23];
const nums2 = new Array(12, 186, 115, 95, 42, 100, 250, 64, 33, 28);
const nums3 = [78, 65, 10, 23, 54, 66, 72, 96, 120, 5];

console.log(nums1);
console.log(nums2);

const fruits = ['Apple', 'Banana', 'Cherry'];
const mixed = [12, 'Hello', true, undefined, null, new Date(), { a: 1, b: 2 }];
console.log(fruits);
console.log(mixed);

let val = nums1;
console.log("nums1.length:", nums1.length);
console.log("Array.isArray(nums1):", Array.isArray(nums1));

console.log("nums1[2]:", nums1[2]);
console.log("nums1[]:", nums1[0]);

// Inserting into Array
nums1[6] = 100;
console.log(nums1);

// indexOf
console.log("nums1.indexOf(5):", nums1.indexOf(5));
console.log("nums1.indexOf(78):", nums1.indexOf(78));

// Mutating Arrays with methods
nums1.push(250);
console.log(nums1);

// Adding on to the front
nums1.unshift(15);
console.log(nums1);

// Take off from front or end
console.log(nums1.pop()); // removes 250
console.log(nums1);

console.log(nums1.shift()); // removes 15
console.log(nums1);

// splice
console.log(nums1.splice(1, 3)); // removes from the array
console.log(nums1); // new array = [42, 55, 23, 100]

console.log(nums1.reverse()); // reverses in place

// Concatenate arrays
val = nums1.concat(nums2);
console.log(val);

console.log("After concat", nums1);

// sort
val = nums2.sort(); // sorts using first number
console.log(val);

val = nums2.sort(function (x, y) {
    return x - y;
})
console.log(val);

// Find
function under50(nums) {
    return nums < 50;
}

console.log(nums3.find(under50)); // returns the first number under 50 in the array nums3

let arr = [1, 2, 3, 4];
console.log(arr);
arr = [56, 14, 20, 35, 10];
console.log(arr);

console.log([43, 44, 36, 5, 250].sort());