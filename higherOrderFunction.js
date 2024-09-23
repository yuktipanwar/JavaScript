/**
 * HOF- a function that accepts another function as an argument or returns a function or does both.
 */

// //FCF
// function wrapper(){
//     return "Welcome to gfg";
// }

// //HOF
// function greetMEssage(wrapper){
//     console.log("Yukti", wrapper());
// }

// greetMEssage(wrapper);

// //HOF
// function displayMessage(){
//     return function(){  //FCF
//         console.log("hello from the inner function");
//     }
// }


// const output = displayMessage();
// output();


/**************************************************** */
// const arr = [1,2,3,4,5];

// function squareOfNumber(arr){
//     let squaredNumbers = [];
//     for(let number of arr){
//         squaredNumbers.push(number ** 2);
//     }
//     return squaredNumbers;
// }

// function cubeOfNumber(arr){
//     let cubedNumbers = [];
//     for(let number of arr){
//         cubedNumbers.push(number ** 3);
//     }
//     return cubedNumbers;
// }

// const output = squareOfNumber(arr);
// console.log(output);

// const result = squareOfNumber(arr);
// console.log(result);
//in the above 2 functions only multiplication by 2 and 3 is changing and nothing else so the above functions can be optimised further. 

/**************************************************** */

const arr = [1,2,3,4,5];

function square (number){
    return number ** 2;
}

function cube (number){
    return number ** 3;
}

function calculatePower(wrapper, arr){
    let tempArr = [];
    for (let number of arr){
        tempArr.push(wrapper(number));
    }
}

const squareOfNumber = calculatePower(square, arr);
console.log(squareOfNumber);

const cubeOfNumber = calculatePower(cube, arr);
console.log(cubeOfNumber);
