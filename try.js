// use.mamo
// react callback hook

console.log(+true, !'angle');


function test() {
  console.log(a); // undefined
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(b);
  var a = 1;
  let b = 2;
  const c = 3;
  console.log(c); // 3
}
// test();

function yad(){
    let yad = 0;
    function yadInner() {
        yad();
        function yadDeeper(){
            yadInner();
        }
        yadDeeper();
    }
}
// console.log(yad());

// let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let useReducer = arr.reduce((previousValue, currentValue) => {
//     // count how many time array item occur
// })
let array = [1, 2, 3, 4, 5, 6];
let filteredArray = array.filter((item) => {
    return item % 2 === 0; // filter even numbers
    item.map((item) => {
        item * 2; // double each item
    })
})
console.log(filteredArray);