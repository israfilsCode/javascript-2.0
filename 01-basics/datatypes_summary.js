// Primitive data
// number, string, boolean, null, undefined, symbol, bigint

let balance = 1000;
let userName = "Israfil";
let isLoggedIn = true;
let certificate = null;  // Standalone value, represents absence of value
let age; // undefined

let id = Symbol("123");
let bigNumber = 1234567890123456789012345678901234567890n; // bigint

// Non-primitive data
// object, array, function

let user = {
  name: "Israfil",
  age: 25,
  isLoggedIn: true,
};

let numbers = [1, 2, 3, 4, 5];

function greet() {
  console.log("Hello!");
}

console.log(typeof bigNumber); // bigint
console.log(typeof user); // object
console.log(typeof numbers); // object
console.log(typeof greet); // function