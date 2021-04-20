// Person Constructor
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

// Greeting
Person.prototype.greeting = function () {
    return `Hello There ${this.firstName} ${this.lastName}`;
};

const p1 = new Person('John', 'Doe');
console.log(p1.greeting());

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

const c1 = new Customer('Tom', 'Smith', '9999000010', 'Standard');
console.log(c1);



// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;


// Customer greeting
Customer.prototype.greeting = function () {
    return `Hello There ${this.firstName} ${this.lastName}. Welcome to our Company`;
};
console.log(c1.greeting());
console.log(p1.greeting());