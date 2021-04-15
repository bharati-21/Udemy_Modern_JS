const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@somewhere.com',
    hobbies: [
                'movies', 'books', 'sports'
    ],
    address: {
        city: 'Miami',
        state: 'Florida'
    },
    getBirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
};

let val;
val = person;

console.log(val)
console.log(val.firstName);
console.log(val['firstName']);
console.log(val.age);
console.log(val.hobbies);
console.log(-+val.hobbies[1]);
console.log(val.address.state);
console.log(val.address['city']);
console.log(val.getBirthYear());


const people = [
    { name: 'John', age: 23 },
    { name: 'Steve', age: 30 },
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}