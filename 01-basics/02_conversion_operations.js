let score = false;

console.log(typeof score);

let scoreAsNumber = Number(score); // convert string to number
// console.log(typeof scoreAsNumber);
// console.log(scoreAsNumber);

// "33" => 33
// "33abc" => NaN
// "" => 0
// " " => 0
// null => 0
// undefined => NaN
// true => 1
// false => 0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 0 => false
// 1 => true
// "" => false
// " " => true
// null => false
// undefined => false
// NaN => false


let userState = true;
let userStateAsString = String(userState); // convert boolean to string
// console.log(typeof userStateAsString);
// console.log(userStateAsString);


// _______________________ Operations___________________________

// console.log(10 + 20);
// console.log(20 - 10);
// console.log(10 * 20);
// console.log(20 / 10);
// console.log(20 % 3); // remainder
// console.log(2 ** 3); // power

let firstName = "Israfil";
let lastName = "Mallick";
let fullName = firstName + " " + lastName; // concatenation
console.log(fullName);

// type coercion: automatic conversion of data types in JS
console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log(1 + 2 + "3"); // 33
console.log("1" + 2 + 3); // 123


let num1, num2, num3;

num1 = num2 = num3 = 25; // right to left assignment

// console.log(num1, num2, num3);



// prefix and postfix increment/decrement operators

let a = 5;

let b = a++; // postfix increment
console.log(a, b); // 6, 5

let c = ++a; // prefix increment
console.log(a, c); // 7, 7

// b = a++ postfix increment: increment a by 1 after assigning the value of a to b

// c = ++a prefix increment: increment a by 1 before assigning the value of a to c