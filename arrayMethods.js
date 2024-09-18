
/**
 * Push 
 */

let fruits = ["apple", "mango", "banana"];
console.log(fruits);

fruits.push("kiwi", "berries","melons");
console.log(fruits);


/**
 * Concat
 */

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [6,7,9];

let arr4= arr1.concat(arr2);
let arr5 = arr1.concat(Arr2,arr3,arr4);

console.log(arr4);
console.log(arr5);

/**
 * Pop 
 */

let courses = ["HTML", "CSS", "JavaScript", "JQuery"];
console.log("Courses- ", courses);

let removedItem = courses.pop();
console.log("Upated Courses- ", courses);

/**
 * Slice- returns a shallow copy
 */

let value = courses.slice(1,4);
console.log(courses);
console.log(value);

/****/

let userName = "yuKTi";

let firstUpperCaseChar = userName[0].toUpperCase();
let captalizeName = firstUpperCaseChar + userName.slice(1).toLowerCase();

console.log(captalizeName);


/**
 * Splice- removes elemebts from an array, if necessary, inserts new elements in their place, returning the deleted elements.
 * 
 */

let Courses = ["HTML", "CSS", "JavaScript", "JQuery", "ReactJS", "AngularJS"];

Courses.splice(4,2);
console.log(Courses)

Courses.splice(3,"Node.JS");
console.log(Courses);


/**
 * includes
 * 
 */

const availableSizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const readLineSync = require("readline-sync");
const userSize = readLineSync.question("Which size of shirt do you want (S/M/L/XL/XXL/XXXL) ?- ");

const isSizeAvailable = availableSizes.includes(userSize);
console.log(isSizeAvailable);

/**
 * Sort(inplace)- it sorts the array and mutates/changes the orginal array.
 * 
 */

const Fruits = ["apple", "cherry", "berries", "orange", "banana"];

Fruits.sort();
console.log(Fruits);

let numbers = [1, 71, 3, 4, 6, 5 ,  31 ,2, 82] /**----> converts the number into string then finds it's utf-16 representation therefore, the array doesn't get sorted completely.*/

// numbers.sort();

function sortAscendingOrder(a,b){  //callback function
    return a-b;
}

function sortDecendingOrder(a,b){  //callback function
    return b-a;
}

numbers.sort(sortAscendingOrder); //if difference is -ve the number is smalller
console.log(numbers);

/**
 * Split- splits string into an array.
 * Join- combines array char. into a string
 * 
 */

const inputStr = "yukti";
const arrofChar = inputStr.split("");
arrofChar.reverse();
const reverseStr = arrofChar.join("");
console.log(reverseStr);

/**
 * Spread ((...arr)- unpacking the array.
 */

const Arr1 = [1,2,3,4,5];
const Arr2 = [8,9];

console.log(...Arr1);

//merging
const Arr3= [...Arr1, 6, 7, ...Arr2, 10, 11];
console.log(Arr3);

/**
 * Destructuring of array
 */

const number = [1 , 2, 3];
const [a, b, c]= [1, 2, 3];

console.log(a);
console.log(b);
console.log(c);

// const Arr = [1,2,3, ["HTML", "CSS", "JavaScript"], 5 ,6];

// const [, , , Subjects, x] = Arr;

//console.log(x)

// console.log(Subjects);

const Arr = [["HTML", "CSS", "JavaScript"], 1,2,3,4,5,6];

const[Subjects, ...rest] = Arr;

console.log(rest)
console.log(Subjects)

//SWAP NUMBERS

let n =5;
let m =10

[a,b]=[b,a];

console.log("A- ", a);
console.log("B- ", b);
