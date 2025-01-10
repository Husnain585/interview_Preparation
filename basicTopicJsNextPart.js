// console.log(x);
// var x;
// console.log(x);
// x = 5;

// // console.log(a);
// let a = 5;

// let str = "hello";

// let numStr = Number(str);
// console.log(numStr);

// console.log(null ?? null ?? undefined); 

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[0][2]); 


/* ***************Starting************************************ */

let arr = ["apple", 20, true, "Banana", "Nothing"];
console.log(arr);
console.log(arr[3]);
arr[3] = false;
console.log(arr);
// another way to create array
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
let arrStr = arr.toString();
console.log(arrStr);
let arrString = arr.at(3);
console.log(arrString);
let newStr  = arr.join("* *");
console.log(newStr);
let ne = arr.unshift("new");
console.log(ne)
