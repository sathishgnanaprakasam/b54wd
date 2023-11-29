// var vs let vs const

/*
    var - has been around since the beginning of JS

    let, const - introduced in ES6 (2015)

    var vs let vs const

        - re-declaration is possible with var whereas not with let and const
*/

// re-declaration is not allowed in let keyword and const keyword
// let number = 25;

// console.log(number);

// let number = "Twenty Five";

// with var keyword, re-declaration is possible

// var number = 25;

// console.log(number);

// var number = "Twenty Five";

// console.log(number);

// re-assignment
// var number = 34;

// console.log(number);

// number = 45;

// console.log(number);

// let number = 34;

// console.log(number);

// number = 45;

// console.log(number);

// const number = 34;

// console.log(number);

// number = 45; // TypeError: Assignment to constant variable.

// console.log(number);

/*
    Based on where the variable is declared, it is scoped to that block

    scope: where the variable is available in your code or where you have access to it
*/

// block scoped => let, const

// index variable is defined within the block
// visibile or accessible only inside the block
// for (let index = 1; index <= 5; index++){
//     console.log(index);
// }
// console.log(index); // not defined: ReferenceError

// var => function scoped
// for (var index = 1; index <= 5; index++){
//     console.log(index);
// }
// console.log(index);

// {
//     let x = 20;
// }

// console.log(x);

// hoisting

// x = 5;
// console.log(x);

// var x; // hoisted to the top of the block

// x = 5;
// console.log(x);

// let x;


// console.log(x);

// const x = 5;