// Destructuring Assignments
let a, b;
[a, b] = [100, 200];
console.log(a);
console.log(b);

[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, d: 500 });
console.log(a, b);

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, d: 500 });
console.log(a, b, rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [p1, p2, p3] = people;
console.log(p1, p2, p3);

// Parse array returned by function
function getPeople() {
    return  ['John', 'Beth', 'Mike'];
}
let per1, per2, per3;
[per1, per2, per3] = getPeople();

console.log(per1, per2, per3);

// Object Destructuring
const object = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'male',
    sayHello: function () {
        console.log('Hello!');
    }
}

// OLD ES5
    // const name = person.name;
    // const age = person.age;
    // const city = person.city;
    // const gender = person.gender;

// New ES6
const { name, age, city, gender, sayHello } = object;
console.log(name, age, city, gender,);
sayHello();