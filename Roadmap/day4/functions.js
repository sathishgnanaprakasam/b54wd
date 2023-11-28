/*
    Functions and Methods

    - both functions and methods are same contextually
    - but functions are defined outside of the object: global and can be used on any object
        - examples: alert()
    - methods are defined inside of the object: local and can be used only on that object
        - examples: console.log()

    Functions:
        - a block of statement that gets executed when called
*/
// function definition
// function sayHello() {
//     console.log('hello world!');
// }

// function call
// sayHello();
// sayHello();

// for (let i = 10; i <= 19; i++){
//     sayHello();
// }

// function addTwoNumbers(x, y) {
//     console.log(x, y);
// }

// addTwoNumbers(5, 6);

// function addTwoNumbers(x) {
//     console.log(x);
// }

// addTwoNumbers(5, 6);

/*
    Exercise: Write a function named 'product' that takes two numbers 'M' & 'N' and prints the product of those numbers.
*/

// function product(M, N) {
//     // prints the product of those numbers
//     console.log(M * N);
// }

// product(5, 6);

/*
    Write a function to print the square root of a number

    example: 

    input: 4
    output: 2

    input: 5
    output: 2.236
*/

// function squareRoot(x) {
//     console.log(Math.sqrt(x));
// }

// function squareRoot(x) {
//     console.log(x ** 0.5);
// }

// squareRoot(4);

// function squareRoot(x) {
//      return x ** 0.5;
// }

// let sqrt = squareRoot(4);

// console.log(sqrt);

// function squareRoot(x) {
//      return x ** 0.5;
// }

// console.log(squareRoot(100));

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(5, 6));

// types of function

/*
    types of functions
        1. library functions: console.log(), Math.sqrt(), Math.pow(), Math.random(), etc
        2. user-defined functions: sum(), product(), squareRoot(), etc

    types of functions
        1. functions with no parameters
        2. functions with parameters
    
    types of functions (based on syntax)
        1. named functions
        2. 
    
*/

// named functions
// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);

// // nameless functions or anonymous functions
// let addTwoNumbers = function (x, y) {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);

// // arrow functions
// let addTwoNumbers = (x, y) => {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);

// IIFE: Immediately Invoked Function Expression
// ((x, y) => console.log(x + y))(5, 6); // one liner

// (function (x, y) {
//     console.log(x + y);
// })(5, 6);

/*
    Exercises:

    1. Print odd numbers in an array
    
    example: 
    
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: [1, 3, 5, 7, 9]

    2. Convert all the strings to title caps in a string array

    example: 

    input: ['hello', 'world', 'javascript', 'programming']
    output: ['Hello', 'World', 'Javascript', 'Programming']

    3. Sum of all numbers in an array

    example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: 45

    explanation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45

    4. Return all the prime numbers in an array

    example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: [2, 3, 5, 7]

    5. Return all the palindromes in an array

    example:

    input: ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']
    output: ['mom', 'dad', 'racecar', 'madam']

    6. Return median of two sorted arrays of same size

    example:

    input: [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]
    output: 5.5

    explanation:

    [1, 2, 3, 4, 5] +  [6, 7, 8, 9, 10] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    median = (5 + 6) / 2 = 5.5

    7. Remove duplicates from an array

    example:

    input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    output: [1, 2, 3, 4, 5]

    8. Rotate an array by k times

    example:

    input: [1, 2, 3, 4, 5], k = 2
    output: [4, 5, 1, 2, 3] (left rotation) or [3, 4, 5, 1, 2] (right rotation)
*/