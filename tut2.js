// Variables and DAta

// Standard Coding Convention
// 1. camelCase
// 2. PASCAL CASE
// 3. Snake_Case
// 4.
var _pinCode; // Starting with UnderScore
var pinCode;  // Simple
var pin_Code;  // In between Underscore
var $pinCode;  // Starting with $ 

var cityName = `Pune`; // global Scope
// console.log(`Type of City Name is `, typeof(cityName));

var num = 67.89; // var is used before ES6
{
    let num = 34; // block scope
    console.log(`The Number is `+num);
    var cityName = `Nagpur`;
}

// let num = 56.67; // let is used in ES6 and Later
console.log(`The Number is `+ num);
console.log(`City Name is  `+ cityName);
// console.log(`Again number is `+ num1);

var pinCode = 440030;
pinCode = 440028;// can update value

var pinCode = 440020;// can redeclare also
console.log(pinCode);

let firstName = `Shri`;
firstName = `Priti`; // Can update Value
// let firstName = `Sonali`;  redeclaration  is not possible
console.log(`First Name `+firstName);

const PI = 3.14; 
// PI = 6.78; // cant update
// const PI = 9.89; // cant redeclare
console.log(PI);

const endPoint = `www.google.com`;

var d;
console.log(`Value is `+ d);

let l;

console.log(`The value is `+ l);

const c;
