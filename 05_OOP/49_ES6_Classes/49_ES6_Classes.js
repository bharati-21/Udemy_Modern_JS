class Person {
    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.bday = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.fname} ${this.lname}!`;
    }

    calculateAge() {
        const diff = Date.now() - this.bday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLname) {
        this.lname = newLname;
    }

    static addNums(x,y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11/13/1980');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMarried('Thompson');
console.log(mary);


console.log(Person.addNums(1, 2));