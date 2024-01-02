class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let car101 = new Car('audi', 2500);
let car102 = new Car('toyota', 1500);
let car103 = new Car('volkswagen', 2000);
let car104 = new Car('benz', 3000);

let cars = [car101, car102, car103, car104];

// console.log(cars.filter(car => car.price >= 2000));

cars.forEach(car => {
    if (car.price >= 2000) {
        console.log(car);
    }
})