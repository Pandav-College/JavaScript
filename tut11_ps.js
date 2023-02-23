//Problem Statement

//Problem 1
let marks = {
    Ashwini : 78,
    Priti : 98,
    Pragati : 89,
    Sneha : 91,
    Sagar : 67
}

//console.log(Object.keys(marks)[1]);
// console.log(marks[`Ashwini`]);
// for (let i = 0; i < Object.keys(marks).length ; i++) {
    
//     console.log(`The marks of `+ Object.keys(marks)[i]+ ` are `+ marks[Object.keys(marks)[i]]);
// }

// //Problem 2
// for (const key in marks) {
//         console.log(`The marks of `+ key + ` are `+ marks[key]);
    
// }

//Problem 3

// let correctNum = 56;
// let enterNumber;
// while (enterNumber != correctNum) {
    
//     enterNumber = prompt(`Enter Your Number`);
//     enterNumber = Number.parseInt(enterNumber);
    
//     //1 Bussiness logic using If else
//     if (enterNumber === correctNum) {
//         alert(`Number is Correct`)
//     }else{
//         alert(`Try Again`);
//     }

//     //2 Bussiness logic using Ternary operator
//     alert((enterNumber === correctNum) ? `You have entered Correct Number`:`Try again`);
// }

//Problem 4

const mean = (num1,num2,num3,num4,num5) => { 
    return (num1 + num2 +num3 + num4 + num5)/5; 
}

let finalValue = mean(56,34,19,23,5);
console.log(finalValue);
console.log(mean(56,34,19,23,5));

