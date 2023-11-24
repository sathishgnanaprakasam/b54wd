/*
    Copy by value vs Copy by reference

    Copy by value: 
        - copying the value of a variable into another variable
        - the value of the original variable is not affected by the copied variable
    
    Copy by reference:
        - copying the reference of a object into another object
        - the value of the original object is affected by the copied object
*/

// copy by value
let a = 1;

// copying the value of a into b
let b = a;

console.log(a, b);

a = 2;

console.log(a, b);

// copy by reference
// let a = [1, 2, 3];

// // copying the reference of a into b
// let b = a;

// console.log(a, b);

// a.push(4);

// console.log(a, b);

// let a = [];

// let b = a;

// console.log(a, b);

// a.push(1);

// console.log(a, b);


// copy by reference
let person = {
    name: "John",
    age: 25,
};

let person2 = person;

console.log(person, person2);

person.age = 26;

console.log(person, person2);