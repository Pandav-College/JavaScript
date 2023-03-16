// Arrays
//Arrays are variables which can hold more than one value.

//Define

// const fName = [`Sneha`,`Sagar`,`Ashwini`,`Kavita`];
// const a1 = [7,`Shrikant`,true,null,undefined];

// let num = [1,5,78,2];

// // Access the array using index
// // console.log(`The value is `+num[0]);
// // console.log(`The value is `+num[2]);
// // console.log(`The Length of Array `+ num.length);

// console.log(`The value from a1 is `+a1[4]);

// //Changing value of array
// fName[3] = `Suraj`;
// console.log(fName); // Arrays are mutable and values can be change

// console.log(`Type of Array is `+ typeof fName);
// console.log(`Type of Array is `+ typeof a1);

//Method in JS

//1. toString() - Convetrs an array to a String of comma seperated value
// let n = [1,6,9,3];
// console.log(n);
// console.log(n.toString());
// console.log(typeof n);

// //2. join() -- Joins all the array elements using a separator
// // [2,45,67,12] --- 2:45:67:12 -- Delimeter
// console.log(`Using Delimeter value is `+ n.join(` $ `));

// //3. pop() - removes last element from the array
// n.pop();
// console.log(n);
// n.pop();
// console.log(n);

// //4. push() - Adds a new element at the end of the array
// n.push(100);
// console.log(n);
// n.push(`Shrikant`);
// console.log(n);

// //5. shift() - Removes first element and returns it
// n.shift();
// console.log(n);

// //6. unshift() - Adds element to beggining and returns new array length
// n.unshift(true);
// console.log(n);

//7. delete - array element can be deleted using the delete operator
// let d = [7,8,9,10];
// console.log(delete d[2]);
// console.log(d);

//8. concat() - used to join arrays to the given array

// let a1 = [23,12,56,78];
// let a2 = [`Sneha`,`Sagar`,`Ashwini`,`Kavita`];
// let a3 = [7,`Shrikant`,true,null,undefined];

// a4 = a1.concat(a2,a3); // returns a new array , and does not change existing array
// console.log(a4);
// console.log(a1);

//9. sort() - sort an array alphabetically

// let city = [445001,440028,440030]; // return asscending order value
// city.sort();
// console.log(city);

//10. splice() - splice can be used to add new items to an array
//  const numbers = [1,2,3,4,5,6];
// numbers.splice(2,2,23,24);
// console.log(numbers);

//11. slice() - slices out a piece from an array . It creates a new array

const number = [1,2,3,4,5,6,7];
// let arr = number.slice(2,4); //
// console.log(number);
// console.log(arr);

// //12. reverse() - Reverse the elements in the Source array
// number.reverse();
// console.log(number);

// let reverse = [];
// for (let i = 0; i < number.length; i++) {
   
//          let inArr = number[i];
//         reverse[i] = inArr.pop(i);
   
    
    
// }
// console.log(reverse);

function reverseArray (arr) {
    var numArr = arr.length;  // 6   
    var newArr = []; // empty array    
    for (i = 0; i < numArr; i++) {      
        let inArr = arr;
        newArr[i] = inArr.pop(i);       
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C", "D", "E",[1,2,3,4], "F"]));

// // OUTPUT: ["F", "E", "D", "C", "B", "A"] 


let original_array = [1, 2, 3, 4]; 
    let reversed_array = []; 
    console.log("Original Array: "); 
    console.log(original_array); // 1,2,3,4 

    for (let i = original_array.length - 1; i >= 0; i--) //4 -1, i =3, 3>=0
    { 
        reversed_array.push(original_array[i]); //4,3,2,1
    } 
    console.log("Reversed Array: "); 
    console.log(reversed_array);

    // original_array.forEach((element) => { 

    //     reversed_array.unshift(element); 

    // }); 

 

    // console.log("Reversed Array: "); 

    // console.log(reversed_array);
 

