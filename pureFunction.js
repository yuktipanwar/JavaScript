/**
 * Pure Function-
 * 1. It takes an argument.
 * 2. It should return something
 * 3. For same input you should get the same output
 * 4. It should not mutate the original argument
 */


/**PURE FUNCTION**/
function getDoubleValue(number){
    return number*2;
}

const result = getDoubleValue(5);
console.log(result);

/**********************************/
function appendNumber(arr){
    let number = [];
    newArr.push(...arr, 5, 6);
    return newArr;
}

const ANS = appendNumber([1,2,3,4]);
console.log(ANS);



/**IMPURE FUNCTION**/
const x=4;

function getValue(number){
    return number*2*x;  //taking reference from variable outside function scope.
}

const ans = getValue(5);
console.log(ans);

/**********************************/

function appendNum(arr){
    arr.push(5,6);  //parameter of fucntion is getting mutated
    return arr;
}
const res = appendNum([1,2,3,4]);
console.log(res)