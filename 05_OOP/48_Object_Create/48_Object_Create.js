const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.fname} ${this.lname}!`;
    },

    getsMarried: function (newLname) {
        this.lname = newLname;
    }
}

const mary = Object.create(personPrototypes);
mary.fname = 'Mary';
mary.lname = 'Williams';
mary.age = 30;
console.log(mary);

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    fname: { value: 'Brad' },
    lname: { value: 'Traversy' },
    age: { value: 35 }
});

console.log(brad);
console.log(brad.greeting());
brad.getsMarried('Daves');