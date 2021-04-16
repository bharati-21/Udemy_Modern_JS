var a = 1;
let b = 2;
const c = 3;

// Global Scope
console.log('Global Scope', a, b, c);

// Function Scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope', a, b, c);
}
test();

// Block level scope
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block If Scope', a, b, c);
}

for (let a = 0; a < 10; a++) {
    console.log(`Loop ${a}`);
}

console.log('Global Scope', a, b, c);
// variable value declared using var changes

