function sum(a,b){
    return a + b;
}
console.log(sum(4,5));

function findLargest(a,b,c) {
    let biggest = a > b ? a :
    b > c ? b : c ;
    return biggest;
}

console.log(findLargest(1,200,3));

function evenOdd(a){
    let check = a % 2 == 0 ? "even" : "odd";
    return check;
}
console.log(evenOdd(9));

function reverseNumber(num) {
        let numStr = num.toString();
        let reverseNumber = numStr.split(" ").reverse().join(" ");
        let toNumber = parseInt(reverseNumber);
        console.log(toNumber);
}
let number = 54321;
reverseNumber(number); 

function factorial(fact) {
    if (fact === 0 || fact === 1) {
        return 1;
    } else {
        return fact * factorial(fact - 1);
    }
}
console.log(factorial(5)); // Output: 120

// 