/**
 * Read data from user
 */

const readlineSync = require("readline-sync");

const userName = readlineSync.question("May I know your name?");
const userAge = readlineSync.question("May I know your age?");

// console.log("Welcome "+userName);
console.log(`Welcome ${userName}.`);
console.log(`Thank you ${userName}, for letting us know your age.`);
//console.log(typeof userAge); --> string

const yearOfBirth = 2024-userAge;

//Concatinates
//const yearOfBirth = 2024+userAge;  
//in such cases we will need to cover userAge into a number

//const yearOfBirth = 2024+Number(userAge);

console.log(`You were born in the year ${yearOfBirth}`);



