/**
 * Argument object in a non arrow function-
 * arguments object is an array like object present locally inside a function
 * and it contains value of all the arguments passed to a function. 
 */

// function calculateTotal(){
//     console.log(arguments);
//     arguments[0]=9;
//     console.log(arguments[2]);
//     console.log(arguments);
// }

// function Total(){
//     for (let value of arguments){
//         console.log(value);
//     }
// }

// calculateTotal(4,5,6,7,8,9);


// Total(4,5,6,7,8,9);

/**how to use array methods on argument object */
// function calculateTotal(){
//     let sum=0;
//     console.log(arguments.length);
//     for(let value of arguments){
//         sum+= value;
    
//     }
//     // console.log(sum);
//     const arr= [...arguments];
//     console.log(arguments);
//     console.log(arr);
// }

// calculateTotal(4,5,6,7,8,9);

/**when default parameter is given */

function calculateTotal(a=10){
    console.log(a);
    console.log(arguments);
    arguments[0]=9;
    console.log(arguments);
    console.log(a);
}

calculateTotal(4);

//changing the default paramenter won't change arguments passed.