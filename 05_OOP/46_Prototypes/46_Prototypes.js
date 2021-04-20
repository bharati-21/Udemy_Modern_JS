function Person(fname, lname, dob) {
    this.firstName = fname;
    this.lastName = lname;
    this.birthday = new Date(dob);

    // this.calculateAge = 
}

const bharati = new Person('Bharati', 'Subramanian', '07/21/1999');
const john = new Person('John', 'Doe', '08/12/1990');

console.log(bharati);
console.log(john);

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Marries
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

john.getsMarried('Smith');
console.log(john.calculateAge());
console.log(john.getFullName());

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('gerFullName'));