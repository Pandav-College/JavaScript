//Classical foreach loop

const a = [1,56,23,89,34,2];

// console.log(a);
// a.forEach((element, index,array) => {
//     // console.log(element*element);
//     // console.log(element,index,array);
//     console.log(element*index);
// });

let arr = [45,23,21];
//Array Map method
// let arr1 = arr.map((value,index,array) => {
//     console.log(value + index);
//     return value+index;
// });
// console.log(arr1);
// console.log(arr);

//array filter method
let arr2 = [45,23,21,0,3,5];
let a2 = arr2.filter((a) => {
        return a < 10;
});
console.log(a2,arr2);

//Array reduce method
let arr3 = [1,2,3,4,5,6];
const reduceFun = (h1,h2) =>{
    return h1 + h2;//21
}

let newArr = arr3.reduce(reduceFun);
console.log(newArr);