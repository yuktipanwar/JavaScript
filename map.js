const arr = [1,2,3,4,5];

function getSquares(number){
    return number ** 2;
}

const output = arr.map(getSquares);
console.log(output);



//other way to do this is arrow function
// const squareNumbers = arr.map((number) => {
//     console.log(index);
//     return number **2;
// })

// console.log(squareNumbers);