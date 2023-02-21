//1. Logical Operator
// &&- ambersand || - or !-not negation
let x = 5;
let y = 6;

//and operator
console.log(x>=y && x<=y && x==y && x===y); // If both condition are true then only return true
          //true   false
    
//or operator
console.log(`The Value is `+ ((x>y || x<y || x==y) && (x===y)));//
          //false  true

// ! Negation or Not
console.log(!(x<y));