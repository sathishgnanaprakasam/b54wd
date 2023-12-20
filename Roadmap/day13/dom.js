// console.log('hello world!');

// select the h1 header from the html document by creating a reference / a variable
// let header = document.getElementById('head');
// error handling <- best practice
// if(header) {
//     console.log(header.textContent);
// } else {
//     console.log('header not found');
// }

// console.log(header.textContent);

// to change the header text to "Hello, World!"
// let user = 'Sathish';
// header.textContent = `Hello, ${user}!`;

// let header = document.createElement('h1');
// let username = 'Guest';

// header.textContent = `Hello, ${username}!`;

// // append the header to the body
// document.body.appendChild(header);

// // console.log(header);

// document.title = 'DOM DEMO';

let heading = document.createElement('h1');

heading.textContent = 'DOM DEMO';

let paragraph = document.createElement('p');

paragraph.textContent = 'This page is for DOM manipulation practice';

// identify the div container / get the reference to the header div
let header = document.getElementById('header');

// header.appendChild(heading);
// header.appendChild(paragraph);

header.append(heading, paragraph);
