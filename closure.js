/**
 * A closure is the combination of a function bundled
 * together with reference to its lexical environment.
 * 
 * In other words, a closure is a function that remebers 
 * its outer variablers and can access them.
 */

function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // Returns the innerFunction
myClosure(); // Executes innerFunction, logs 10