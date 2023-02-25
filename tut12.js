// String in Js
//String are used to store and manipulate text

//length is always (no. of index + 1)
let fname = "Shrikant Tambaskar"; // Creates String
// length
console.log(`The length of String is ` + fname.length);

let cityName = "Nagpur";
console.log(`The length of String is ` + cityName.length);

//Template Literals
// use backtiks - ``
let pinCode = `440028`;
//Ths name "is" Shrikant's

//fname = "Shrikant"s";
//fname = 'Shrikant's';

fname = `The name "is" Shrikant's`;
console.log(fname);
//String interpolation-- along with String we can print variable value

let myName = `This is ${cityName}`; //Reactive Nature
console.log(myName);

//Escape Sequence Character
// John D'Souza

let otherName = `John D\'Souza`; //John D\"Souza
console.log(otherName);
console.log(otherName.length);
// \n, \t , \r

// Try to Find out properties and methods of String - MDN String in Javascript

const paragraph =
  `The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?`;

const searchTerm = `dog`;

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.indexOf(
    searchTerm
  )}`
);
// Expected output: "The index of the first "dog" from the end is 52"

console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="

// Property -- length

