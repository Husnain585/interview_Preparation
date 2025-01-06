// const obj = {
//     test: "value1",
//     age: 20,
//     salary : 800000
// }
// const obj2 = obj;
// obj2.test = "value2";
// console.log(obj);
// console.log(obj2);

// const obj3 = {...obj2};
// obj3.test = "value2";
// console.log(obj);
// console.log(obj3);

// Every method in js 
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

// Some method in js 
// const number = [1, 3, 5, 7];
// const hasEven = number.some(num => num % 2 === 0);
// console.log(hasEven);


// what is promise in js
// A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its result. It can be in one of three states: pending, fulfilled, or rejected
// And it is used to handle async function

// what is the alternative of async function
// first one is settimeout funciton and second one is await   

// Return type of Async funciton
// Always a promise if it passes goes into resolved, else rejected

// local storage vs system storage

console.log(0/0);
console.log(1-"a");
console.log(typeof (0-"1"), ("0"-"1"));

let arr = [1,2,3,4,5,3,2,4];
// const newarr = arr.filter(num => num === 2 || num === 3 || num === 4);
let filteredArr = arr.filter(num => num === 2 || num === 3 || num === 4);
// console.log(filteredArr);

let uniqueArr = [...new Set(arr.filter(num => num === 2 || num === 3 || num === 4))];

// console.log(uniqueArr);

let str = "MyNameIsHusnain7t9";
let spacedStr = str.replace(/([A-Z, a-z, 0-9])/g, ' $1').trim();
console.log(spacedStr);

// optional chaning 
// a special operator which is used for call a function or access the properties of a object instead of throwing error it return a message in the form of undefined

// different form events in js 
// onchange, onsubmit, onreset, oninput, onfocus, onblur

// ********React***************

// api connection type 
// fetch method, axios method 

// Broswer list in package.json file
// broswer compatibilty to run the specification 

// how many hooks Hooks in react
// useState, useEffect, useContext

// normal hooks vs custom hooks

// role of index.js file in react 

// which is entry file in react 
// index.js

// Why context api conncept is important
// useContext hook is used for it which i already have the conncept

// What is prop driling
// it is simple passing props from parent to child component

// similarity between useState vs useReduce hooks

// How to optimize the react application 
// there are many way to optimize the React application here are useMamo's and laziLoading and code spiling for them

// What is jsx

// what is bible
// bible is like compilar or interpreter which is used to complie the react code 

// Why we use React Router

// What is react Fragements
// <></> this is a react Fragment

// What is Virtual Dom 
// it's like a copy of real Dom which store tempory changing and refeclt them on display and after completation of the process applies the changing in the real Dom

// ***********HTML*****************

// What is class Attributes in HTML
// Diff between figure Tag and Image Tag
// What is Image map
// what is use of span Tag
// what is Div Tag
// Diff EM Tag vs  Italic Tag
// Diff between bold tag vs strong tag
// // why we prefer strong tag over bold tag
// 