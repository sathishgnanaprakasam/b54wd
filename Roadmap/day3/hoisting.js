/*
    hoisting: hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/

// console.log(x);
// var x; // hoisting

// let sayHello = function() {
//     console.log('hello world!');
// }

// sayHello();

// sayHello();

// let sayHello = function() {
//     console.log('hello world!');
// }

sayHello();

// function hoisted to the top of the file
function sayHello() {
    console.log('hello world!');
}