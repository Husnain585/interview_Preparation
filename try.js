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



// Your task is to write a JavaScript function called processProducts that takes this array as input and performs the following operations:

// Filter: Create a new array containing only the products in the "electronics" category.

// Map: From the filtered array, create another new array of strings, where each string is formatted as "{product_name} - ${product_price}". Use a template literal for this.

// Reduce: Calculate the total price of all products in the filtered "electronics" array.

// Destructuring & Default Parameters: The processProducts function should accept a single argument, products. However, if no argument is provided, it should default to an empty array. Additionally, inside the function, use destructuring to extract the name and price from each product object as you iterate through them.

// Arrow Function: Use arrow functions for all the array methods (filter, map, reduce).

const inventory = [
  { id: 1, name: 'Laptop', price: 1200, category: 'electronics' },
  { id: 2, name: 'T-shirt', price: 25, category: 'apparel' },
  { id: 3, name: 'Smartphone', price: 800, category: 'electronics' },
  { id: 4, name: 'Coffee Mug', price: 15, category: 'kitchen' },
  { id: 5, name: 'Headphones', price: 150, category: 'electronics' },
];

const processProducts = (products = []) => {
    // Filter electronics
    const electronics = products.filter(({ category }) => category === 'electronics');
    
    // Map to formatted strings
    const formattedProducts = electronics.map(({ name, price }) => `${name} - $${price}`);
    
    // Reduce to total price
    const totalPrice = electronics.reduce((total, { price }) => total + price, 0);
    
    return {
        formattedProducts,
        totalPrice,
    };
}
console.log(processProducts(inventory));