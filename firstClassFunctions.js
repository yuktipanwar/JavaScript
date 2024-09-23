/**
 * FIRST CLASS FUNCTION
 * 
 * A programming language is said to have first-class function if function in that language are treated like other variables.
 * So the fucntion can be assigned to any other variable or passed as an argument or can be returned by another fucntion.
 */

//01

// const greetMessage = function (){
//     console.log("Hello Yukti, welcome to gfg!");
// }

//greetMessage();


//02

// function wrapper (){
//     return "Welcome to GFG!!";
// }

// function greetMessage(inner, name){
//     let message = inner();
//     console.log(name, message);
// }

// greetMessage(wrapper, "Yukti");


//03

function greetMessage(){
    function wrapper(){
        let name = "Yukti";
        console.log(name, "Welcome to GFG!!");
    }
    return wrapper;
}

// const output = greetMessage();
// output();

//calling the fucntion and getting fucntion back
greetMessage()();


