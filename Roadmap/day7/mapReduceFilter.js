// let numbers = [3, 7, 4, 6, 10, 2];

// function squarer(value, index, array) {
//     return value ** 2;
// }

// // a function that is passed to another function - callback function
// let squares = numbers.map(squarer);
// console.log(squares);

// console.log(numbers);

/*
    we have numbers array

    numbers = [3, 7, 4, 6, 10, 2];

    we want to create a new array that contains the squares of the numbers array

    - map method will create a new array
    - it will iterate over the numbers array
    - for every number, it will call the squarer function
    - returned square will be added to the new array
    - when the iteration is done, map method will return the new array
*/

/*
    Exercise: create a new array that contains the cubes of the numbers array
*/

// let numbers = [3, 7, 4, 6, 10, 2];

// console.log(numbers.map(value => value ** 3));

// let prices = [3, 7, 4, 6, 10, 2];

/*
    Lets say we have been provided with the prices array that has price(in dollars) of each item in the cart. There is an offer going on. If the price of the item is less than 5, we will give 10% discount. If the price of the item is greater than 5, we will give 20% discount. Create a new array that contains the discounted prices and print it on the console.
*/

/*
    example:

    10 dollars => 20% => 2 dollars

    discount = 20% => 2 dollars

    discounted price = 10 dollars - 2 dollars (discount)
                     = 8 dollars


*/

// console.log((10 * 1) - (10 * 0.2));
// console.log(10 * 0.8);

// let discountedPrices = prices.map(value => {
//     if (value < 5) return Number((value * 0.9).toFixed(3));
//     else return Number((value * 0.8).toFixed(3));
// });

// console.log(discountedPrices);


// let discountedPrices = prices.map((value, index, array) => {
//     if (array[index] < 5) return Number((array[index] * 0.9).toFixed(3));
//     else return Number((array[index] * 0.8).toFixed(3));
// });

// console.log(discountedPrices);

// filter method

/*
    problem: given an array of numbers [3, 7, 4, 6, 10, 2], create a new array that contains only the even numbers.
*/

// let numbers = [3, 7, 4, 6, 10, 2];

// let evenFilter = (value, index, array) => {
//     if (value % 2 == 0) {
//         return true;
//     }
// }

// let evenNumbers = numbers.filter(evenFilter);

// console.log(evenNumbers);

// filter the values that are less than 5

// let numbers = [3, 7, 4, 6, 10, 2];

// let evenFilter = (value, index, array) => {
//     if (value < 5) return true;
// }

// let evenNumbers = numbers.filter(evenFilter);

// console.log(evenNumbers);

/*
    Exercise: Given the array [3, 7, 4, 6, 10, 2, 11, 5], print only the numbers that are divisible by 3.
*/

// let numbers = [3, 7, 4, 6, 10, 12, 11, 5, 15];

// console.log(numbers.filter(value => value % 3 == 0));

// let numbers = [3, 7, 4, 6, 10, 12, 11, 5, 15];

// let divisibleBy3Filter = (value, index, array) => {
//     if (value % 3 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let divisibleBy3 = numbers.filter(divisibleBy3Filter);

// console.log(divisibleBy3);

// console.log([3, 7, 4, 6, 10, 12, 11, 5, 15].filter(value => value % 3 == 0));

// reduce method

/*
    Problem: given an array [3, 7, 4, 6, 10, 2], find the sum of all the numbers in the array.
*/

// without using reduce method

// let numbers = [3, 7, 4, 6, 10, 2];

// let sum = 0;

// for (let index = 0; index < numbers.length; index++){
//     sum = sum + numbers[index];
// }

// console.log(sum);

// using reduce method

// let numbers = [3, 7, 4, 6, 10, 2];

// let sumReducer = (previousValue, currentValue) => {
//     return previousValue + currentValue;
// }

// let sum = numbers.reduce(sumReducer);

// console.log(sum);

/*
    First Execution:

    previousValue = 3
    currentValue = 7

        previousValue + currentValue 
        => 3 + 7
        => 10 -> next execution's previousValue
    
    Second Execution: 

    previousValue = 10
    currentValue = 4
        previousValue + currentValue 
        => 10 + 4 
        => 14
    
    Third Execution:

    previousValue = 14
    currentValue = 6

        previousValue + currentValue 
        => 14 + 6
        => 20
    
    Fourth Execution:

    previousValue = 20
    currentValue = 10

        previousValue + currentValue 
        => 20 + 10
        => 30
    
    Fifth Execution:

    previousValue = 30
    currentValue = 2

        previousValue + currentValue 
        => 30 + 2
        => 32

    final value returned is 32

*/

/* 
    Lets say we have been provided with the prices array that has price(in dollars) of each item in the cart. There is an offer going on. If the price of the item is less than 5, we will give 10% discount. If the price of the item is greater than 5, we will give 20% discount. Print the total price after the discount.
*/

// let prices = [3, 7, 4, 6, 10, 2];

// // using map and reduce
// console.log(prices.map(value => value < 5 ? value * 0.9 : value * 0.8).reduce((previousValue, currentValue) => previousValue + currentValue));

// let prices = [3, 7, 4, 6, 10, 2];

// let discountedPrices = prices.map(value => {
//     if (value < 5) {
//         return value * 0.9;
//     } else {
//         return value * 0.8;
//     }
// });

// let reducer = (previousValue, currentValue) => {
//     return previousValue + currentValue;
// }

// // using map and reduce
// console.log(discountedPrices.reduce(reducer));


// let prices = [3, 7, 4, 6, 10, 2];

// console.log(prices.map(val => val < 5 ? val * 0.9 : val * 0.8).reduce((p, c) => p + c));

// let prices = [3, 7, 4, 6, 10, 2];

// // without using map method and using only reduce method

// let reducer = (previousValue, currentValue) => {
//     return previousValue + (currentValue < 5 ? currentValue * 0.9 : currentValue * 0.8);
// }

// console.log(prices.reduce(reducer, 0));

// let prices = [3, 7, 4, 6, 10, 2];

// // without using map method and using only reduce method

// console.log(prices.reduce((pre, cur) => pre + (cur < 5 ? cur * 0.9 : cur * 0.8), 0));

// filter in array of objects

let products = [
    {
        name: "apple",
        price: 3
    },
    {
        name: "orange",
        price: 7
    },
    {
        name: "mango",
        price: 4
    },
    {
        name: "banana",
        price: 6
    },
    {
        name: "grapes",
        price: 10
    },
    {
        name: "pineapple",
        price: 2
    }
];

// find the fruits that are priced less than 5 dollars.

// let productsFilter = (fruit) => {
//     if (fruit.price < 5) {
//         return true;
//     }
// }

// let fruitMapper = (fruit) => {
//     return fruit.name;
// }

// console.log(products.filter(productsFilter).map(fruitMapper));

console.log(products.filter(fruit => fruit.price < 5).map(fruit => fruit.name));

// other methods of array
/*
    - push
    - pop
    - unshift
    - shift
    - splice
    - slice
    - length property
    - indexOf
*/