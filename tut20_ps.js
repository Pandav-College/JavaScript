//Problem 1
// let age = prompt(`Enter Your age`);
// age = Number.parseInt(age);

// const canDrive = (age) =>{
//     return ((age>=18) ? true : false);
// }

// if (canDrive(age)) {
//     alert(`Yes You can Drive`);
// }else{
//     alert(`You Cant Drive`);
// }

//Problem 2 and 3
// const canDrive = (age) =>{
//         return ((age>=18) ? true : false);
//     }

// let runAgain = true;
// while (runAgain) {
//     let age = prompt(`Enter Your age`);
//     age = Number.parseInt(age);
//     if(age < 0){
//         console.error(`Invalid Age`);
//         break;
//     }
//     if (canDrive(age)) {
//         alert(`Yes You can Drive`);
//     }else{
//         alert(`You Cant Drive`);
//     }
//     runAgain = confirm(`Do You Want to Continue?`);
// }

// Problem 4

// let num = prompt(`Enter Number`);
// num = Number.parseInt(num);
// if (num > 4) {
//     location.href = `https://google.com`;
// }

//Problem 5

//let color = prompt(`Enter page Background Color`);
let bgColor = Math.random(23,45,56) + 1;
document.body.style.background = bgColor;