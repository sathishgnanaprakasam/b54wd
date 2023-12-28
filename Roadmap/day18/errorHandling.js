/*
    Error Handling:

    Error => something which stops the execution of the program because of a bug or a mistake in the code.

    Type of Errors:

        - Syntax Error
        - Runtime Error
        - Logical Error

    
*/

// function sayHello() {
//     console.log('Hello');
//     sayHello();
// }

// sayHello();

/*
    the above recursion results in a runtime error, because the function is calling itself infinitely.

    this leads to a stack overflow error, because the call stack is full.
*/

// let a = 10;

// a.forEach(item => console.log(item));

// // the following line has not executed because of the error in the above line.
// console.log('do this after the above line');

// the above error has to be handled, so that the program can continue to execute.
// without breaking the execution, we should be able to handle and inform the user about the error.

// do something => if there is an error, handle it, otherwise continue with the execution.
// the error has been handled and the program has continued to execute.
// try {
//     let a = 10;

//     // throw new Error('this is an error');

//     // dead code or unreachable code
//     try {
//         a.forEach(item => console.log(item));
//     } catch (error) {
//         console.log('a is not iterable or an array', error.message);
//    }
// } catch (error) {
//     console.log('error occured', error.message);
// }

// console.log('do this after the above line');

let a = 10;
let b = 2;

try {
    if (b === 0) {
        throw new Error('b cannot be 0');
    } else {
        let c = a / b;
        console.log(c);
    }
} catch(error) {
    console.log('Error occured:', error.message);
}