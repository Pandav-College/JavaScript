//1. Sequential Control flow statement-- by default
//2. Conditional Control flow statement
// if - statement, if... else, if...else ladder, switch
// console.log(`First Line`);
// console.log(`Second Line`);
// console.log(`Third Line`);

//1.
// if (4 > 5 && 4 == 4) {
//     console.log(`Fourth Line`);
// }
// let dominos = false; // open
// let pizzaHut = false;

//2.
// if(dominos == true){
//     console.log(`I want to eat Pizza at Dominos`);
// }else if(pizzaHut == true){
//     console.log(`I want to eat Pizza at PizzaHut`);
// }else{
//     console.log(`I want to eat Pizza at Smokin Joes`);
// }
// console.log(`Sabjiya Kharidina hai`);

//4.
// let age = prompt(`Hey whats your age???`);
// age = Number.parseFloat(age);
// // age = Boolean.parseInt(age);
// console.log(age);

// let fName = prompt(`Whats your name???`);

//5. Switch Case Statement
let age = prompt(`Enter your age`);
age = Number.parseInt(age);

/*switch (age) {
    case (13||15) : //This is possible
        alert(`Your age is 13 or 15`);
        break;
    // case 15:
    //     alert(`Your age is 15`);
    //     break;
    case 17:
        alert(`Your age is 17`);
        break;
    case 19:
        alert(`Your age is 19`);
        break;
    case 22:
        alert(`Your age is 22`);
        break;
    case 25:
        alert(`Your age is 25`);
        break;
    default:
        alert(`Your age doesnt exists`);
        break;
}
console.log(`Done`);
*/
//6. Ternary Operator
//(condition) ? `true` : `false`;

console.log((age>=18) ? `You can Drive` : `You cant Drive`);