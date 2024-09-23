/**
 * Rest Parameter --> ...rest/...args
 */

function calculateTotal(a,b, ...rest){
    console.log(a,b);
    console.log(rest);  //proper array

}

calculateTotal(4,5,6,7,8,9,1,2,3);