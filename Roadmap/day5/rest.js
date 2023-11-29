// rest operator
// ...

// function callMe(x) {
//     console.log(x);
// }

// callMe(2);

// function callMe(x, y, ...z) {
//     console.log(x, y);
//     console.log(z);
// }

// callMe(2, 3, 4, 5, 6, 7, 8, 9, 10);

function callMe(...z) {
    console.log(...z);
}

callMe(2, 3, 4, 5, 6, 7, 8, 9, 10);