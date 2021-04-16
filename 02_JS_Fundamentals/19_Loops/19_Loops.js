// FOR LOOP
for (let i = 0; i <= 10; i++) {
    if (i === 2) {
        console.log('2 is running...');
        continue;
    }
    console.log('Loop iteration', i);
}

for (let i = 1; i <= 10; i++) {
    if (i%5 === 0) {
        console.log(i+ ' Breaking...');
        break;
    }
    console.log('Loop iteration', i);
}

// WHILE LOOP
let i = 0;
while (i < 10) {
    console.log('Number', i);
    i++;
}

// DO WHILE
i = 0;
do {
    console.log('Number', i);
    i++;
}
while (i < 10);

const cars = ['Ford', 'Honda', 'Chevy', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// forEach
cars.forEach(function (car) {
    console.log(car);
});

// Map
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Karen' }
];
const ids = users.map(function (user) {
    return user.id;
});
console.log(ids);

cars.forEach(function (car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(`${array}`)
});

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21
};
for (let x in user) {
    console.log(`${x}: ${user[x]} `);
}