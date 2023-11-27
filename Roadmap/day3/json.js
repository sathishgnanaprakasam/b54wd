// JSON iteration

/*
    JSON: Java Script Object Notation

    JSON is a string representation of a JavaScript object.
*/

// string representation of the following object is called JSON
let book1 = {
    author: "sathish",
    name: "dsa",
    pages: 168,
    price: 2000
}

// to convert a javascript object into a json string
// console.log(JSON.stringify(book1));

let jsonString = '{"author":"sathish","name":"dsa","pages":168,"price":2000}';

// to convert a json string into a javascript object
console.log(JSON.parse(jsonString));