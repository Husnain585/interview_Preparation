console.log(a); // undefined 
var a= 5;
// console.log(b); // reference error 
let b = 5;

console.log(true && "Hello" && 42); // true 

console.log(x); // undefined 
var x;
console.log(x); // undefined 
x = 5;


let arr = ["apple", 20, true, "Banana", "Nothing"];
arr[3] = false; // muteable so it can change 
console.log(arr);
let newArr = arr.at(3); // false
console.log(newArr);