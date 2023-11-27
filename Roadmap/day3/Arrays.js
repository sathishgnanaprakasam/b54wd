/*
    Arrays 
        - Arrays are used to store multiple values in a single variable.
        - Arrays are builtin data structures in JavaScript.
        - Values in the array are stored contiguously in memory.
        - Arrays are zero indexed. The first element is at index 0, the second element at index 1 and so on.
        - Arrays uses random access mechanism to access elements.
        - Arrays are mutable. The elements of an array can be changed.
*/

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers, typeof(numbers));

// indexing
// to access the first element in the array
// console.log(numbers[4]);

// the same index that we used to access the element
// can also be used to modify the value in that array
// numbers[0] = 10;

// console.log(numbers);


// methods of the array
// to find the length of the array or number of elements in the array
// console.log(numbers.length);

// let numbers = [1, 2, 3, 4, 5];

// // to push an element at the end of the array
// numbers.push(7);
// numbers.push(9, 10);

// let count = numbers.push(11, 12);

// // console.log('count:', count);

// // to remove the elements from the end of the array
// numbers.pop();
// numbers.pop();

// // to insert an element at the beginning of the array
// numbers.unshift(0);

// numbers.unshift(-2, -1);

// // to remove an element from the beginning of the array
// numbers.shift();
// numbers.shift();

// to insert an element at a given position
// numbers.splice(6, 0, 6.5);

// numbers.splice(6, 1, 6.5);

// numbers.splice(6, 2, 6.5);

// // to delete an element from a given position
// numbers.splice(6, 1);

// numbers.splice(6, 0, 6);

// numbers.splice(0, 4);

// // numbers.pop();numbers.pop();

// numbers.splice(3, 2);

// // numbers.push(11, 12);

// numbers.splice(3, 0, 11);
// numbers.splice(4, 0, 12);

// let numbers = [4, 7, 2, 1, 3, 6, 10, 56, 34, 12, 17];

// // // numbers.splice(3, 0, 3);

// // // 1, 2, 3

// // for (let i = 1; i <= 3; i++){
// //     numbers.splice(i, 1);
// // }

// console.log(numbers.indexOf(56));


// let numbers = [4, 7, 2, 1, 3, 6, 10, 56, 34, 12, 17];

// console.log(numbers.slice(4, 7));

// iterations with array
// let numbers = [4, 7, 2, 1, 3, 6];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// for loop
// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }


// let numbers = [4, 7, 2, 1, 3, 6];

// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// let index = 0;
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++;
// }

// // while loop
// let index = 0;
// while (index < numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// // do...while loop
// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

/*
    do...while
        - do the following
        - and then check the condition
        - if the condition is true, continue executing the loop

    while loop & for loop:
        - check the condition
        - if the condition is true, execute the loop
*/

// for...in loop
// for (let index in numbers){
//     console.log(numbers[index]);
// }

// // for...of loop
// for (let value of numbers){
//     console.log(value);
// }

// to print all the values using forEach method
// numbers.forEach((value) => {
//     console.log(value);
// });

// to print the even numbered indexed values
// numbers.forEach((value, index) => {
//     if (index % 2 == 0) {
//         console.log(value);   
//     }
// });

// let numbers = [4, 7, 2, 1, 3, 6];

// // for (let number of numbers) {
// //     console.log(number);
// // }

// numbers.forEach((number) => {
//     console.log(number);
// })

