/*
    destructuring: destructuring is a way to unpack values from arrays, or properties from objects, into a bunch of variables.
*/

// let numbers = [3, 4, 5];

// let x = numbers[0];
// let y = numbers[1];
// let z = numbers[2];

// console.log(x, y, z);

// using destructuring
// let numbers = [3, 4, 5];

// let [x, y, z] = numbers;

// console.log(x, y, z);

// let [x, y, z] = [1, 2, 3, 4];

// console.log(x, y, z);

// let [x, y, z, p] = [1, 2, 3];

// console.log(x, y, z, p);

// let [x, y, ...z] = [1, 2, 3, 4, 5, 6, 7];

// console.log(x, y, z);

// let values = [1000, 5, 10];

// // let principal = values[0];
// // let numberOfYears = values[1];
// // let rateOfInterest = values[2];

// let [principal, numberOfYears, rateOfInterest] = values;

// // let si = (values[0] * values[1] * values[2]) / 100;
// let si = (principal * numberOfYears * rateOfInterest) / 100;

// console.log(si);

// swapping

/*
    a = 5
    b = 6

    swapping is called exchanging

    a = 6
    b = 5

    Logic:

    a = 5, b = 6

    a = b; wrong; a = 6

    temp = a; temp = 5

    a = b; a = 6

    b = temp; b = 5

    for example:

    glass A = milk
    glass B = water

    glass C = A; glass C = milk
    glass A = B; glass A = water
    glass B = C; glass B = milk

    result:

    glass A = water
    glass B = milk
*/

// let a = 5;
// let b = 6;

// console.log('before swapping');
// console.log('a =', a, 'and', 'b =', b);

// let temp = a;
// a = b;
// b = temp;

// console.log('after swapping');
// console.log('a =', a, 'and', 'b =', b);

// let a = 5;
// let b = 6;

// console.log('before swapping');
// console.log('a =', a, 'and', 'b =', b);

// [a, b] = [b, a];

// console.log('after swapping');
// console.log('a =', a, 'and', 'b =', b);

// let book = {
//     title: 'JS',
//     author: 'sathish'
// }

// console.log(book.title, book.author);

// destructuring
// let { title, author } = book;

// console.log(title, author);

// let { author: authorOfBook, title: titleOfBook } = book;

// console.log(titleOfBook, authorOfBook);

let title = 'JS';
let author = 'sathish';

// let book2 = {
//     title: title,
//     author: author
// }

// object property shorthand
let book2 = {
    title,
    author,
}

console.log(book2);