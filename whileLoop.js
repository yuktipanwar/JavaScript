/**
 * User enters a number, if number is greater than 50 then ask the user to enter a number less than 50
 */

let readlineSync = require("readline-sync");

let number;

while(number >= 50){
    number = readlineSync.question("Enter a number less than 50- ");
}

console.log("Number Accepted!")