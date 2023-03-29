`use strict`
//Problem Statement 1
// let arr = [1,2,3,4,5,56,78];
// let a = prompt(`Enter Any Number`);
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//Problem Statement 2
// let arr = [1,2,3,4,5,56,78];
// let a;
// do{
//     a = prompt(`Enter Any Number`);
//     a = Number.parseInt(a);
//     arr.push(a);
// }while(a != 0);
// console.log(arr);


//Problem Stetement 3
// let arr = [14,20,3,43,5,57,78,45];
// let n = arr.filter((x) => {
//         //return x%4 == 0;
//         return x > 40;
// });
// console.log(n);
// console.log(arr);

//Problem Stetement 4
// let arr = [14,20,3,43,5,57,78,45];
// let n = arr.map((a,index,array) => {
//     return console.log(`The Index is `+index +` and Value is `+a * a);
// });
// console.log(n);
// console.log(arr);

//Problem Stetement 5
let arr = [1,2,3,4,5]; // accumalator =2,6,24,120
let n = arr.reduce((x1,x2) =>{
    return x1*x2;
});
console.log(n);