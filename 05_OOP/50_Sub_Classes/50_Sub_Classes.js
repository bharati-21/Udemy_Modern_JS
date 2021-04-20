class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    greeting() {
        return `Hello there ${this.fname} ${this.lname}!`;
    }
}

class Customer extends Person{
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }

}

const john = new Customer('John', 'Doe', '9999900000', 'Standard');

console.log(john);