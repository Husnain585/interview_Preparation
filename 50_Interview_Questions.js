// // 1: Scope of Variables
// // Global Scope
// let globalVar = "I am a global variable"; 
// function globalScopeExample() {
//     console.log(globalVar); // Accessible here
// }
// globalScopeExample();
// // function Scope
// function localScopeExample() {
//     let localVar = "I am a function variable";
//     console.log(localVar); // Accessible here
// }
// localScopeExample();
// // console.log(localVar); // Uncaught ReferenceError: localVar is not defined
// // Block Scope
// {
//     let blockVar = "I am a block-scoped variable";
//     console.log(blockVar); // Accessible here
// }
// // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// // lexical Scope
// let lexicalVar = "I am a lexical variable";
// function outerFunction() {
//     let outerVar = "I am an outer function variable";
//     function innerFunction() {
//         console.log(lexicalVar); // Accessible here
//         console.log(outerVar); // Accessible here
//     }
//     innerFunction();
// }
// outerFunction();
// // Module Scope
// // In ES6 modules, variables declared with `let`, `const`, or `var` are scoped to the module.
// // They are not accessible outside the module unless explicitly exported.
// let moduleVar = "I am a module variable";
// export function moduleScopeExample() {
//     console.log(moduleVar); // Accessible here
// }
// moduleScopeExample();
// // console.log(moduleVar); // Uncaught ReferenceError: moduleVar is not defined outside the module

// // 2: Functions and variables
// let a = 10;
// var b = 20;
// const c = 30;
// function functionExample() {
//     let a = 5; // Local variable
//     var b = 15; // Function-scoped variable
//     console.log("Inside function: a =", a, ", b =", b, ", c =", c);
// }
// functionExample();
// console.log("Outside function: a =", a, ", b =", b, ", c =", c); // Global scope variables 


function memoizedAdd() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    }
    console.log("Calculating...");
    cache[n] = n + 10;
    return cache[n];
  };
}

const add = memoizedAdd();
console.log(add(5)); // Calculating... 15
console.log(add(5)); // From cache 15



