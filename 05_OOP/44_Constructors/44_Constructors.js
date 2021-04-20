function Person(name, dob) {
    this.name = name;
    // this.age = age;
    // console.log(this);
    this.birthday = new Date(dob);
        // Date core object that uses a constructor

    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

console.log(this); // This gives window object

// instantiate an object
// const bharati = new Person('Bharati',21);
// const john = new Person('John', 30);
// console.log(bharati, john);

// console.log(bharati.name, bharati.age);
// console.log(john.name, john.age);

const bharati = new Person('Bharati', '07/21/1999');
console.log(bharati);
console.log(bharati.calculateAge());