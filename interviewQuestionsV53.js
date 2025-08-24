// weak map and how is it different from map
// weak map is the key value collection where key's are object and value would be any type. it feature is no memory leak where key's are garbage collections. and for the normal map that return a new array by apply a function on each element of array to perform some task.
// what is set
// set is the collection of unique values
// what is the use of New keyword
// that creates a new instance of a variable
// deep copy vs shallow copy
// in shallow copy copy the copy level and the nested level reference where deep copy create a whole sperate insance of the object
// what is generator functions

// count every letter in the string
let str = "my name is husnain";
let newStr = str.split("").join("");

let count = {};

for (let i = 0; i < newStr.length; i++) {
  let value = newStr[i];
  count[value] = (count[value] || 0) + 1;
}
// console.log(count);

// reverse each word in the string
let reversedStr = str.split(" ");
let sentence = "";
for (let i = reversedStr.length - 1; i > 0; i--) {
  sentence += reversedStr[i] + " ";
}
console.log(sentence);

// types of web storage
// session storage and local storage
// session storage store data tempory and it's deleted when tab or broswer is close. local storage store data permanetally untill it's manually cleared.

// map method vs foreach method
// map method returns a new array by apply a function on each element of the array to perform certain task where as forEach method is use to iterate the elements of array to manipulate them without returning anything

// funciton declearation vs function expression
// function declearation is a named funcitons which is hoisted and funciton expression is assigned to variable and not hosited

// event delegation
// it a technique where single event listening is attact to it's parent elements that manage it element for side elements using evenet bubling and it is efficient for dynamic elements that removes the event listener

// what is callback hell
// combination of nested funcitons together that makes code harder to read, debug and maintain and we can avoid by using promise chaining and async await.

// null vs undefined
// null means intensance absence of a value and it must assign manually and undefined means a variable is decleared but not assign a value

const obj = {
  name: "husnian",
  val: { name: "acbd", experience: "6 month" },
};

const obj2 = { ...obj }; // here using spread operator which means that copy first level directly and reference copyed for the nested level so when the reference is copyed, when the value is change it will effect on orignal value of that object.
obj2.val.name = "Raza";
// console.log(obj2.val.name);

// what will be the output
const object = {},
  object2 = { name: "Husnain" },
  object3 = { name: "developer" };
object[object2] = { name: "Raza" };
object2[object3] = { name: "Ansari" };
object[object3] = { name: "Ansari" };
// console.log(object[object2]);
// console.log(object[object3]);

// convert subarray's into a single array
function flatten(arr) {
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (Array.isArray(value)) {
        flat = flat.concat(flatten(value));
      } else {
        flat.push(value);
      }
    }
    return flat;
}
  let array = [[0,1], ["Husnain", "Raza"], [3,4]];
//   console.log(flatten(array));

const abcd = () => {
    console.log("Function called with arguments:", this.name);
}
const abc = function() {
    console.log("Function called with arguments:", this.name);
}
abcd.call({name: "husnain"}); // undefined
// here we are using call method to invovek the function with the object that we want to pass as an argument to the function. !Arrow functions do not have their own this context, so they will not work with call, apply or bind methods.
abc.call({name: "husnain"}); // husnain

// call vs apply vs bind
// call method is used to invoke a function with a given this value and arguments passed individually,
// apply method is used to invoke a function with a given this value and arguments passed as an array, and bind method is used to create a new function with a given this value and arguments passed individually, which can be invoked later.
// call and apply are used to invoke the function immediately, while bind is used to create a new function that can be invoked later with the specified this value and arguments.

// ******************************************************************************

// lifecycle method in functional component
// useEffect is the lifecycle method in functional component that is used to perform side effects in the component. It takes two arguments, a function that contains the side effect code and an array of dependencies that determines when the effect should be run.

// useState hook is async or sync and why

// setState is async or sync

// how to optimize react application

// difference usestate and useReducer

// prope drilling and how to avoid it

// context api vs redux

// for dynamic routing which hook is used

// what is dynamic routing
// normal routing and dynamic routing 

