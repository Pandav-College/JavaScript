// Loop

// Statement 1 -initialisation of counter
// Statement 2 -condition
// Statement 3 -inc/dec

//1.
/*for(init ; condition ; inc/dec){
    //body will get executed
}*/

//2.
/*for (let counter = 0; counter < 5; counter++) {
    
    console.log(`The index value is `+counter);
    
}*/

//3.
//Program to add first n natural number
/*let sum = 0;
let num = prompt(`Enter Any Number`);// 5
num = Number.parseInt(num);//5
for (let counter = 1; counter <= num; counter++) //c =1, 1<=5, c =2 2<=5, c=3 3<=5
// c= 4 4<=5 , c= 5 5<=5 , c= 6 6<=5
{
    sum = sum + counter ;//0+1=1, 3, 6 , 10 ,15
    console.log(counter);
    
}
alert(`Sum of first `+num+` natural number is `+sum);
//console.log(counter); // this is not possible bcoz we declare counter as let
*/

//5.
//For in loop
// let obj = {
//     id: 123,
//     title: "Pragati Says",
//     category: 34,
//     date: "2023-02-20",
//     image: "http://www.destinyhub.info/app_dashboard/uploads/62413.jfif",
//     description: "",
//     category_name: "Pragati test",
//     isProfessor : true
//   }

//   let family ={
//     fatherName : `Someshwar`,
//     age : 70,
//     motherName : `Lalita`,
//     isTeacher : false
//   }

//   //console.table(family);
//   for (const priti in family) {
//     console.log(`The Keys are `+priti +` and Values are `+family[priti]);
//   }
//   //console.log(`The value is `+family["age"]);
// for (const priti in obj) {
//     console.log(`Family Members are `+obj[priti]);
    
// }

//6.
const data = {
  ashwini : 56,
  manaswi : 67,
  priti : 78,
  pragati : 89,
  boys : {
      sagar : 78,
      sumeet : 79,
      ankush : 80,
      rahul : 81
  }
}

// data['Kavita'] = 90;
// data.boys[`Shrikant`] = 56;
// console.log(data.boys.sagar);
// //console.log(data);

//7.
//For of Loop
// for (const iterator of `Shikant`) // for of loop iterates only array data , not object
// {
//   console.log(iterator);
// }

//8.
// while loop

// let count = 0; // initialisation of counter
// while (count < 10) {
//   console.log(count);
//   count++;
// }

//9.
//do...while loop
let i =10; // initialisation of counter
do {
  console.log(i);
  i++; //11
} while (i < 20);
console.log(i);
