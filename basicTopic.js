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
console.log("**********************");

// Primitive dataTypes
// In Js there are seven Primitive dataTypes which are
// String, Symbol, Number, Null, Boolean, BigIn, undefined 
// also here is another datatype is NAN => NotANumber 
console.log("Example of NAN", 1-"a");
console.log("**********************");

// How are primitive values compared in JavaScript?
// Comparing with Object.is()
console.log(Object.is(0, -0));   // false, because +0 and -0 are considered different
console.log(Object.is(NaN, NaN)); // true, because NaN is equal to NaN
console.log(Object.is(5, 5));     // true, both value and type are the same
console.log("**********************");
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

// Template String
// Basic example
let name = 'Husnain';
let age = 22;
let firstName = "Husnain";
let lastName = "Raza";
let variable = "is";
let method = "string";
let usage = "using";
let num1 = 5;
let num2 = 3;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); 
console.log(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`);
let mulStr = `
this ${variable} a multiline
${method} example
${usage} template String
`;
console.log(`substraction, ${num1 - num2}`);
console.log(mulStr);
console.log("**********************");

// Ternory Operator
//   Q1  // Basic Ternary Operation
const umr = (age > 18 ? "you are Adult":"you are Minnor");
console.log(umr);
// Q1 //  Nested Ternary Operation
let score = 102;
let passingScore = 10;
let result = (score === 100) ?  "perfect" :
             (score >= passingScore) ? "pass" : "fail";
console.log(result);
let a1 = 0;
let a2 = 1;
let checkPos = (a1 > 0) ? "a1 is  positive" :
                (a2 > 0) ? "a2 is positive" :
                (a1 > 0 && a2 > 0) ? "both are positive": "Neiter is positive";
console.log(checkPos);

// let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dayOfWeek = "Tuesday";
let checkDay = (dayOfWeek == "Monday") ? "start of Week" : 
                (dayOfWeek == "Friday") ? "end of week" : 
                (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") ? "weekend": "Midweek";
console.log(checkDay);

let arr = [1,2,3,4,5,6];
let checkArr = (arr.length > 5) ? "array is larger": " array is small";
console.log(checkArr);