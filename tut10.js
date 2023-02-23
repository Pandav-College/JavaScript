//Functions in JS

//1. Syntax of basic function
// function myFunction() {
//     console.log(`This is my First Function`);
// }

//calling of function
//myFunction();

//2. Basic function with parameter
// function myFunction(fName) {
//     console.log(`Hello From `+fName);
// }

// myFunction(`Ashwini`);

//3. Multiple Parameter

// function login(userName,password) {
//     if (userName == `Shrikant` && password == 123) {
//         console.log(`Welcome `+userName);
//     }else{
//         console.log(`Username and password dont match`);
//     }
// }
// //console.log(userName);
// login(`Shrikant`,123);

//4. Arrow Function without parameter
// let hello = () =>{
//     console.log(`Hey iam Arrow Funtion`);
// }

// hello();

// shortcut to create arrow function --- nfn
// const userLogin = (userName,password,mobile) => { 
//     if (userName == `Shrikant` && password == 123 && mobile == 9890581851) {
//                 console.log(`Welcome `+userName);
//             }else{
//                 console.log(`Username and password dont match`);
//             }
// }
  
// userLogin(`Shrikant`,123,9890581851);

//Function with no parameter but return type
// const functionWithReturnType = () => {
    
//     let fName = `Ashwini`;
//     let lName = `Upadhye`;
//     let mobile = 9890581851;

//     let details = fName + " " + lName + " " + mobile;
//     return details;
//  }

//  let deatil1 = functionWithReturnType();
//  console.log(deatil1);
// console.log(functionWithReturnType()); //calling

//Function with parameter and return type
const myFunction = (fname,lname,mobile) => { 

    if (fname == `Shrikant` && lname == `Tambaskar` && mobile == 9890581851) {
        let name = fname + " " + lname + " " + mobile;
        return name;
    }else{
        return `Data Not Found`;
    }
}

let myName = myFunction(`Shriant`,`Tambaskar`,9890581851); // arguements
console.log(`My Details are `+ myName);

// let data = {
//     email : `bnpbhagat@gmail.com`
// }












// let obj = {
//     shri : 34, //0
//     priti : 67, //1
//     kavita : 90, //2
//     ashwini : 78 //3
// }

// console.log(obj[Object.keys(obj)[0]]);

// let cn = 45;
// let i; 
// while (i != cn) {
//         i = prompt(`Please enter a number`);
//         if (i == cn) {
//             alert(`You Enter Correct Number`);
//         }
//          else{
//             alert(`Please try again`);
//         }
// }
// console.log(`You enter Corret Number`);