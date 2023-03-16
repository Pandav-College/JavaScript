// Properties and Methods

// length
let fname = `     Shrikant Rao    `;
let lname = `Tambaskar`;
console.log(`Length is  `+ fname.length);

// Methods
console.log(`The Name is `+ fname.toUpperCase());
console.log(`The name is `+ fname.toLowerCase());
console.log(`The Slice value is `+ fname.slice(3,6)); //it does not incldude last index given by developer
console.log(`The new Slice value is ` + fname.slice(4));
console.log(`Full Name ` + fname.concat(lname));
console.log(`Replace  String ` + fname.replace(`Rao`,`Pant`));

// console.log(`Trim String is `+ fname.trim());
let trimName = fname.trim();
console.log(trimName);
anotherName = `Priti    `;
console.log(`Name Replace All `+ fname.replaceAll(fname,anotherName));
// console.log(anotherName[0]);
// console.log(anotherName[1]);
// console.log(anotherName[2]);
// console.log(anotherName[3]);

// for (const iterator of anotherName) {
//     console.log(iterator);
// }
console.log(`Character `+ anotherName.charAt(3));

//What will be the output and how --- msg in
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)
