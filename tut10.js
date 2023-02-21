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
const userLogin = (userName,password,mobile) => { 
    if (userName == `Shrikant` && password == 123 && mobile == 9890581851) {
                console.log(`Welcome `+userName);
            }else{
                console.log(`Username and password dont match`);
            }
}
  
userLogin(`Shrikant`,123,9890581851);