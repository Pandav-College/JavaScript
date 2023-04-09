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
// let bgColor = Math.random(23,45,56) + 1;
// document.body.style.background = bgColor;

//Homework change backgroun randomly

// let colorInput = Math.floor(Math.random() *7);


// let color = [`Red`,`Blue`,`Green`,`Cyan`,`Purple`,`Yellow`,`Magenta`][colorInput];
// // console.log(color);
// setInterval(changeColor=()=>{
//     document.body.style.background = color;
// },2);


//document.body.style.background = color;
let r,g,b;
let special;
let char = `abcdefg`;
let num = `1234567890`;
let i = 0;
while(i<10){
    r = char[Math.floor(Math.random()* char.length)];
    g = num[Math.floor(Math.random()* num.length)];
    b = char[Math.floor(Math.random()* char.length)];
    special = `#`;
    
    i++;
}

const greet = () => {document.body.style.background = special+r+g+b;}

setInterval(greet, 3000);

//how to apply setInterval method?

//how to change webpage background color randomly?





