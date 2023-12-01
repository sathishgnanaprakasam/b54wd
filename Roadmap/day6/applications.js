// let numbers = new Array(1, 2, 3, 4, 5);

// numbers.push(6);
// numbers.pop();
// numbers.unshift(0);

// console.log(numbers);

// class Array {
//     constructor(...args) {
//         this.items = [...args];        
//     }

//     toArray() {
//         return this.items;
//     }

//     push(...data) {
//         this.items.push(...data);
//     }
// }

// let numbers = new Array(1, 2, 3, 4, 5);

// // numbers.push(6);
// // numbers.push(10);

// console.log(numbers.toArray());

class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
}

let circle = new Circle();

console.log(circle);