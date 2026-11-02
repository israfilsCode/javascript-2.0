const userId = 1234567;

let userEmail = "israfil@ai.com";
var userPassword = "1234567";

userLocation = "USA";

// userId = 9876543; // TypeError: Assignment to constant variable.
userEmail = "israfil@learn.com";
userPassword = "7654321";
userLocation = "Canada";

console.log(userId);
console.log(userEmail);
console.log(userPassword);
console.log(userLocation);

// Prefer never to use var, because it is function scoped and can lead to unexpected behavior. 
// Use let and const instead, which are block scoped.