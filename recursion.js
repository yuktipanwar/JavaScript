/**
 * Recursion is a programming term where the function is called from itself.
 */

//1+2+3+....+10
//number =10
//number+ (number-1)+ (number-2)+....(number-9)

function calculateSumRecursive(number){
    if(number ===1){
        return number;
    }
    return number +calculateSumRecursive(number -1);
    
}

const total = calculateSumRecursive(10);
console.log(total);



function factorialRecursive(number){
    if(number ===1){
        return number;
    }
    return number * factorialRecursive(number -1);
}

const result = factorialRecursive(5);
console.log(result);