// why we use join method
// join method is used to join elements of an array into a string
// Example:
// why we use spilt method
// split method is used to split a string into an array of substrings
// Example:

// reverse a string -> there are two ways to reverse a string
// 1. Using split, reverse, and join methods
let str = 'I am Husnain';
let reversedStr = str.split(' ').reverse();
// console.log(reversedStr); 
// 2. Using a for loop
let reversedStr2 = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr2 += str[i];
}
// console.log(reversedStr2);
// 3. Using recursion
function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
// console.log(reverseString(str));

// check string is palindrome or not
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('hello')); // false


// check if a string is an anagram of another string
function isAnagram(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world')); // false


let arr1 = [100, 200, 300, 400, 500];
let arr2 = [100, 200, 300, 400, 500];

// check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}   
// console.log(arraysEqual(arr1, arr2)); // true

// json.stringify and json.parse 
// type of an array is object

// convert a json object into a jsonString 
let jsonObj = { name: 'Husnain', age: 24, city: 'Karachi' };
let jsonString = JSON.stringify(jsonObj);
// console.log(jsonString); // {"name":"Husnain","age":24,"city":"Karachi"}
// convert a jsonString into a json object
let parsedJsonObj = JSON.parse(jsonString);
// console.log(parsedJsonObj); // { name: 'Husnain', age: 24, city: 'Karachi' }

// console.log(null == undefined); // true
// define what is null
// define what is undefine

// why a variable is undefined
// how to check if a variable is undefined
let a;
// console.log(a); // undefined

// infinity currying

// how to assign a new array with the size of 100
let newArray = new Array(100).fill(0);
// another way
let arr = [];
arr.length = 100;
// console.log(newArray);  
// console.log(arr);

// how to check a variable data type // typeof Operator 
// what is the type of NaN // Number

// diff between primitive and non-primitive data types
// undefined is a datatype? which datatype? // yes it a datatype, primitive
// what is type of undefined // undefined

// Object.freeze method

// Promise chaining 
// what is the diff between promise chaining and promise 

// marge string from one letter from str1 and second letter comes from str2 then third letter comes from str1 and so on
let str1 = "husnian";
let str2 = "raza";
function mergeStrings(s1, s2) {
    let mergedStr = '';
    let maxLength = Math.max(s1.length, s2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < s1.length) {
            mergedStr += s1[i];
        }
        if (i < s2.length) {
            mergedStr += s2[i];
        }
    }
    return mergedStr;
}
// console.log(mergeStrings(str1, str2)); // hrusaznian

let arr0 = [,,,];
// console.log(arr0.length); // 3
// console.log(arr0); // [ <3 empty items> ]
// console.log(arr0[0]); // undefined
// console.log(arr0[1]); // undefined
// console.log(arr0[2]); // undefined

// Map vs forEach Method

const obj = {
    age : 23
};
b = obj;
b.age = 200; // copying the reference of obj to b
console.log(obj.age);

// if we want to stop copy the reference then what we do?
// we can use Object.assign() method or spread operator to copy the object
const obj2 = {
    age : 23
};
const b2 = {...obj2}; // using spread operator
b2.age = 200; // copying the value of obj2 to b2
// console.log(obj2.age); // 23
// console.log(b2.age); // 200 

// HTML SECTION
// em tag vs i tag
// bold tag vs strong tag
// meter tag vs progress
// empty elements
// semantic elements
// marque tag  
// scroll delay attribute
// type of list

// to give a shadow effect to a text? what we will do // text-shadow
// image reflection in css // box-reflect

//box model in css
// inner most property is text then margin then border and last padding
// universal selector // *{}