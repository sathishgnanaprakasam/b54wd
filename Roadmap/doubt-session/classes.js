// // define a class A
// class A {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     getX() {
//         return this.x;
//     }

//     setX(x) {
//         this.x = x;
//     }
// }

// // create an object to the class A
// let a1 = new A(5, 6);

// // console.log(a1.x);

// a1.setX(15);

// console.log(a1.getX());

// define a class A
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get X() {
        return this.x;
    }

    set X(x) {
        this.x = x;
    }

    get Y() {
        return this.y;
    }

    set Y(y) {
        this.y = y;
    }
}

// create an object to the class A
let a1 = new A(5, 6);

a1.X = 15; // set method

console.log(a1.X);