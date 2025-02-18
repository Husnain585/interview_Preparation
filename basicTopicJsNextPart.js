console.log(x);
var x;
console.log(x);
x = 5;

// console.log(a);
// let a = 5;

let str = "hello";

let numStr = Number(str);
console.log(numStr);

console.log(null ?? null ?? undefined); 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][2]); 


/* ***************Starting************************************ */

let arr = ["apple", 20, true, "Banana", "Nothing"];
console.log(arr);
console.log(arr[3]);
arr.push("Hello");
console.log(arr);
arr.pop("Hello");
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
console.log(ne);

// Shallow Copy
// copy the most top level elements but at very next level element reference can be copied and which elements are
// directly copy will not be changed and those who's referece is passed can be changed 

const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York"
    }
};

const shallowCopy = { ...original };
shallowCopy.name = "Bob";
shallowCopy.address.city = "Los Angeles";

console.log(original.name); // Alice (unchanged)
console.log(original.address.city); // Los Angeles (changed)

// Deep copy
// Deep copy is copied the whole object/array unless if there is any reference of any kind of element which cannot 
// be copied and this instance is whole seprate 

const originals = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        zip: 10001
    }
};

// Creating a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originals));

// Modifying the deep copy
deepCopy.address.city = "Los Angeles";
deepCopy.age = 30;

console.log("Original:", originals);
console.log("Deep Copy:", deepCopy);


