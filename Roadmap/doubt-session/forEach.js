let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((value, index, array) => {
//     console.log(value ** 2);
// });

// for (let index in numbers) {
//     console.log(`at index [${index}], value stored is ${numbers[index]}`);
// }

for (let number of numbers) {
    console.log(number);
}