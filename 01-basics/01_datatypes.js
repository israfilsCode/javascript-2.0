"use strict"; // treat all JS code as newer version

// alert("Hello"); // ReferenceError: alert is not defined, because alert is not available in Node.js environment

let name = "Israfil"; // string
let age = 25; // number
let isLoggedIn = true; // boolean

let empty = null; // null
let state;

// string,
// number -> range = -2^53 to 2^53
// boolean -> true or false
// null -> empty value
// undefined -> value is not assigned
// bigint -> for large integers
// symbol -> unique identifiers

// object -> key-value pairs


console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof empty); // object
console.log(typeof state); // undefined