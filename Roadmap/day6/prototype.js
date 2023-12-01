/*
    prototype
        - is an object
        - it allows us to add methods and properties to all objects
        - it also allows us to inherit methods and properties from one object to another
    
    Two ways to create a prototype
        - function prototype
        - object prototype (class syntax => ES6)
    
    this => this keyword points to the current instance of the object
*/

// function prototype
// function Person() {
//     this.name = 'guest';
// }

// let person1 = new Person();

// console.log(person1);

// let person2 = new Person();

// console.log(person2);

// function Person() {
//     this.name = 'guest';
// }

// let person1 = new Person();

// console.log(person1);

// let person2 = new Person();

// person2.name = 'sathish';

// console.log(person2);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // create an object or instance
// let person1 = new Person('krish', 20);

// console.log(person1);

// let person2 = new Person('sathish', 30);

// console.log(person2);

// function Student(name) {
//     this.name = name;

//     // adding a method to the Student function prototype
//     this.greet = function () {
//         console.log(`Hello! Welcome ${this.name}`);
//     }
// }

// let student101 = new Student('krish');
// let student102 = new Student('sathish');

// let students = [];

// students.push(new Student('krish'));
// students.push(new Student('sathish'));

// // console.log(student101);
// // console.log(student102);

// // student101.greet();
// // student102.greet();

// // students = [student101, student102];

// for (let student of students) {
//     console.log(`Student Name: ${student.name}`);
// }

/*
    Task: Create a function prototype for a Student with the following properties and methods.

    Properties:
        - name
        - email
        - phone
    
    Methods:
        - sayHello() : prints "Hello! Welcome <name>"
        - getDetails() : prints "Name: <name>, Email: <email>, Phone: <phone>"
        - getEmail() : prints "Email: <email>"
        - getPhone() : prints "Phone: <phone>"
*/

// function Student(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;

//     // methods
//     this.sayHello = function () {
//         console.log(`Hello! Welcome ${this.name}`);
//     }

//     this.getDetails = function () {
//         console.log(`Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
//     }

//     this.getEmail = function () {
//         console.log(`Email: ${this.email}`);
//     }

//     this.getPhone = function () {
//         console.log(`Phone: ${this.phone}`);
//     }

//     this.getName = function () {
//         console.log(`Name: ${this.name}`);
//     }
// }

// let student101 = new Student('sathish', 'sathish@gmail.com', '9080706050');

// student101.sayHello();
// // student101.getDetails();
// student101.getEmail();
// student101.getPhone();

// let students = [];

// students.push(new Student('krish', 'krish@gmail.com', '9080706050'));
// students.push(new Student('sathish', 'sathish@gmail.com', '9878675643'));
// students.push(new Student('arjun', 'arjun@gmail.com', '8765432123'));
// students.push(new Student('ram', 'ram@gmail.com', '7654321234'));
// students.push(new Student('raj', 'raj@gmail.com', '6543212345'));
// students.push(new Student('ravi', 'ravi@gmail.com', '5432123456'));

// // console.log(students);

// console.log('Get All Students: ');
// console.log('-----------------------------------');
// for (let student of students) {
//     student.getName();
//     student.getEmail();
//     student.getPhone();
//     console.log('-----------------------------------');
// }


function Student(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;

    // methods
    this.sayHello = function () {
        console.log(`Hello! Welcome ${this.name}`);
    }

    this.getDetails = function () {
        console.log(`Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    }

    this.getEmail = function () {
        console.log(`Email: ${this.email}`);
    }

    this.getPhone = function () {
        console.log(`Phone: ${this.phone}`);
    }
}

Student.prototype = {
    getName() {
        console.log(`Name: ${this.name}`);
    }
}

let student101 = new Student('sathish', 'sathish@gmail.com', '9080706050');

student101.getName();
student101.getEmail();
student101.getPhone();