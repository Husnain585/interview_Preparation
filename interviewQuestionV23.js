// return all elements which is greater than 3 u
let arr = [1,2,3,4,5];

let newArr = arr.filter((num) => {
    return num > 3;
})

console.log(newArr.length); 
console.log(newArr);

let findArr = arr.find((num) => {
    return num > 3;
})
console.log(findArr);

// 

function sum(a){
    return function(b){
        if(!b){
            return a;
        }
        return sum(a + b);
    }
}
console.log(sum(2)(3)(4)(5)(6)(7)());

//

const obj = {
    sum: 200,
    a: "husnain"
}
console.log(obj.sum);
delete obj.sum;
console.log(obj.sum);
console.log(obj);

//

let a = [1,2,3,4,5,[2,4,5,6]];
let {0: oINDEX, 1: fINDEX} = a;
console.log(oINDEX, fINDEX);

// 
function myFunc(a, ...b){
    console.log("hello");
    console.log(b);
    return a 
    console.log(a + b);    
}
myFunc(1,2,3,4,5,6,7,8,9);

//

// console.log("my marks is", marks);
// let marks = 100;
// console.log("my marks is", marks);

let a1;
console.log(a1);
let A12= null;
console.log(A12);

function one(a=5, b=10){
    console.log(a + b);
}   
one(undefined, 20);
function two(a=1, b=3){
    console.log(a + b);
}
two(null, 20);

//

var sum  = 100 + score;
var score = 200;
console.log(sum);
console.log(100 + undefined);
console.log("2"-"2");
// what is word element in html
// what is empty tag in html
// types of list
// types of descrptive list
//what is dt tag in descriptive list
// what is data list tag and select in descriptive list
// col span and row span
// html vs xml
// html vs xhtml
// em vs i tag
 // fig caption tag in html
// required attribute in html
// attribute selector in css
//pripority selector
// how can we add gradient in css
// key frames in css
// flexbox vs grid


