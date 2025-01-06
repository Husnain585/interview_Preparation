// Dynamically vs statically typed languages
// In dynamically typed languages, the type of a variable is determined at runtime.
// let x = 10; // x is a number
// x = "Hello"; // Now x is a string
// statically typed languages, the type of a variable is determined at compile time. This means you must declare the type of a variable before using it, and the compiler will enforce type safety.
// int age = 25; // Declaring an integer variable
// float height = 5.9; // Declaring a float variable
// char grade = 'A'; // Declaring a character variable

// What is Hoisting 
// before declearation of a variable or function

// console.log(a)  // Output undefined because of hoisting
var a = 10;
console.log(a);   

// console.log(b); // Output referecError because of Hoisting
let b = 10;
console.log(b);

// simple function Hoisting 
greet();  // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}
// Function Expression
// sayHello();  // TypeError: sayHello is not a function
var sayHello = function() {
    console.log("Hello!");
};

// Primitive dataTypes
// In Js there are seven Primitive dataTypes which are
// String, Symbol, Number, Null, Boolean, BigIn, undefined 
// also here is another datatype is NAN => NotANumber 
console.log("Example of NAN", 1-"a");

// How are primitive values compared in JavaScript?
// Comparing with Object.is()
console.log(Object.is(0, -0));   // false, because +0 and -0 are considered different
console.log(Object.is(NaN, NaN)); // true, because NaN is equal to NaN
console.log(Object.is(5, 5));     // true, both value and type are the same

// Operator Precedence
// is k matlb tarje dena ek operator pr kisi dosry operator ko 
// AND (&&) has a higher precedence than OR (||).
// NOT (!) has the highest precedence among the logical operators

let A = true;
let B = false;
let C = true;

console.log(A || B && C);  // `b && c` is evaluated first, then `a || (b && c)`

// Short Circuiting 
// Covered anytime test this topic

// 