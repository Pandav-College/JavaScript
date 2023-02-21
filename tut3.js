// nn bb ss u - Primitive Datatype
//1. Null 2. Number 3.Boolean 4. BigInt 5. String 6. Symbol 7. undefined

let a = null;
let b = 45;
let c = true;
let d = BigInt("45") + BigInt("5");
let e =`23`;
let f = Symbol(`I am a nice Symbol`);
let g;

// //console.log(a,b,c,d,e,f,g);

// console.log(`Datatype `+ typeof(a));
// console.log(`Datatype `+ typeof(b));
// console.log(`Datatype `+ typeof(c));
// console.log(`Datatype `+ typeof(d));
// console.log(`Datatype `+ typeof(e));
// console.log(`Datatype `+ typeof(f));
// console.log(`Datatype `+ typeof(g));

// Non Primitive Datatype --- Object

let k = 56;

let student = {

    Manaswi : 67,
    Kavita : "Hi",
    priti : true,
    ujwala : null
}
console.log(typeof(student));
console.table(student);
//Another way to call key from Object
// console.log(student.priti);
// console.log(student.Manaswi);
// console.log(student.Kavita);

console.log(student["Kavita"]);
console.log(student["priti"]);
console.log(student["Manaswi"]);



