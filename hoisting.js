/**
 * Hoisiting is a process through which you can access the value 
 * of a variable or a function even before it is initialized.
 */

console.log(age);
var age = 100;

console.log(getUserName); //getUserName gets treated as a variable that's why we get undefined.
console.log(showName);
showName();

var getUserName = function showName(){
    console.log("Yukti Panwar");
};

function showName(){
    console.log("Yukti Panwar");
}