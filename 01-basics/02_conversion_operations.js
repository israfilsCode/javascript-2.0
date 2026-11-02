let score = false;

console.log(typeof score);

let scoreAsNumber = Number(score); // convert string to number
console.log(typeof scoreAsNumber);
console.log(scoreAsNumber);

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
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 0 => false
// 1 => true
// "" => false
// " " => true
// null => false
// undefined => false
// NaN => false


let userState = true;
let userStateAsString = String(userState); // convert boolean to string
console.log(typeof userStateAsString);
console.log(userStateAsString);