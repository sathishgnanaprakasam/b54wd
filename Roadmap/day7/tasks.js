/*
    https://restcountries.com/v3.1/all
*/

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    countries.forEach(country => {
        if (country.currencies && Object.keys(country.currencies).includes('USD')) {
            console.log(country.currencies);
        }
    });
}

xhr.send();