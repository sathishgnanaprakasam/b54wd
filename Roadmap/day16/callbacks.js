/*
    What is a callback?

    callback is a function that is passed into another function as an argument.

    Give me a function, I will call it back later.
*/

// setTimeout, setInterval

// let sayHello = function () {
//     console.log("Hello");
// }

// setTimeout(sayHello, 3000);

// let sayHello = function () {
//     console.log("Hello");
// }

// setInterval(sayHello, 3000);


// let numbers = [1, 2, 3, 4, 5];

// let printNumberSquare = (number) => {
//     console.log(number, number**2);
// }

// numbers.forEach(printNumberSquare);


// function incrementBy5(number) {
//     return number + 5;
// }

// function multiplyBy3(number) {
//     return number * 3;
// }

// function arithmetic(number, callback) {
//     return callback(number);
// }

// // let result = arithmetic(5, incrementBy5);
// // result = arithmetic(result, multiplyBy3);

// let result = arithmetic(arithmetic(5, incrementBy5), multiplyBy3);

// console.log(result);

/*
    Exercise:

    Task1: Write a function called squareNumbers that takes a list of values and returns a list of the squares of those numbers.

    Task2: Write a function calculateAverage that takes a list of numbers and a callback function (squareNumbers) as arguments and returns the average of the squares of the numbers.

    Example:

    let numbers = [1, 2, 3, 4, 5];

    calculateAverage(numbers, squareNumbers(numbers))

    
    calculateAverage(number, callback):
        callback(numbers) => [1, 4, 9, 16, 25]
        sum of the numbers => 55
    
    
    Task breakdown:

    squareNumbers:

    step 1. write a function called squareNumbers that takes a list of values (an array) and returns a list of the squares of those numbers.

    calculateAverage:

    step 2. write a function called calculateAverage that takes a list of numbers (an array) and a callback function (squareNumbers) as arguments.

    step 3: inside the calculateAverage function, call the callback function (squareNumbers) and pass the list of numbers (an array) as an argument.

    step 4: traverse the resulting list of numbers (an array) and calculate the sum of the numbers.

    step 5: return the average of the squares of the numbers. (sum of the numbers / length of the numbers).
*/

// function squareNumbers(numbers) {
//     return numbers.map(number => number ** 2);
// }

// function calculateAverage(numbers, callback) {
//     let squares = callback(numbers);
//     return (squares.reduce((p, c) => p + c) / numbers.length);
// }

// let result = calculateAverage([1, 2, 3, 4, 5], squareNumbers);

// console.log(result);

// function squareNumbers(numbers) {
//     // return numbers.map(number => number ** 2);// [1, 4, 9, 16, 25]
//     let squares = [];

//     for (let number of numbers) {
//         squares.push(number ** 2);
//     }

//     return squares;
// }

// function calculateAverage(numbers, callback) {
//     let squares = callback(numbers); // [1, 4, 9, 16, 25]
//     return (squares.reduce((p, c) => p + c) / numbers.length);
// }

// let numbers = [1, 2, 3, 4, 5];
// let result = calculateAverage(numbers, squareNumbers);

// console.log(result);

// callstack

// function incrementBy5(number) {
//     return number + 5;
// }

// function multiplyBy3(number) {
//     return number * 3;
// }

// function arithmetic(number, callback) {
//     return callback(number);
// }

// // let result = arithmetic(5, incrementBy5);
// // result = arithmetic(result, multiplyBy3);

// let result = arithmetic(arithmetic(5, incrementBy5), multiplyBy3);

// console.log(result);

/*
    stack data structure:

    stack of books

    dsa, java, js, python, c++

    the books are arranged like the following stack:

    c++
    python
    js
    java
    dsa

    Stack DS => LIFO (Last In First Out) or FILO (First In Last Out)

    callstack (callbacks):

    - callstack is a data structure that keeps track of function calls in a program.


*/

/*
    Use & its purpose of the callback function:

    1. Callbacks are used to do something after something else has finished executing.
    2. Promises use callbacks to execute code after something else has finished executing.
*/