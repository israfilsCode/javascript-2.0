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


// Stack vs Heap Memory:
// - Primitive data types are stored in stack memory, which is faster and has a limited size.
// - Non-primitive data types (objects, arrays, functions) are stored in heap memory, which is larger but slower to access.

let channelName = "Codevolution"; // stored in stack memory
let anotherChannelName = channelName; // anotherChannelName gets a copy of the value

channelName = "Codevolution Updated"; // changing channelName does not affect anotherChannelName

console.log(channelName); // Codevolution Updated
console.log(anotherChannelName); // Codevolution

let user1 = {
  name: "Israfil",
  age: 25,
};

let user2 = user1; // user2 references the same object in heap memory

user1.age = 26; // changing the age property of user1 also affects user2

console.log(user1.age); // 26
console.log(user2.age); // 26