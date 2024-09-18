const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know about the mentor (name/age/city/state)?- ");
const courses = readlineSync.question("Which course do you want to learn (html/css/js)?- ");

const obj = {
    name: "Yukti Panwar",
    age: 23,
    [course]: "course not available"
};

obj.city = "Banglore";
obj.state = "Karnataka";

console.log(obj);
// console.log(obj[course]); ---> course is a variable so not in ""
//console.log(obj["name"]); ---> name in "" because name is property