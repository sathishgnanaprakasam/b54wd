/*
    class => a template or a blueprint or collection of objects
    object => an instance of a class
*/

class Student {
    // are special methods that gets called when we create an object to that class
    constructor(name = 'guest', email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getPhone() {
        return this.phone;
    }
}

let student101 = new Student('krish@gmail.com', '9080706050');

// console.log(student101);
// student101.getName();

console.log(student101.getPhone());

Student.prototype.getEmail = function () {
    return this.email;
}

Student.prototype.location = 'tamilnadu';

console.log(student101.getEmail());

console.log(student101.location);