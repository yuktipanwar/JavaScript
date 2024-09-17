/**
 * Exercise for conditional statement:
 * A PROGRAM THAT READS 3 STRINGS AND PRINTS THE SMALLEST STRING.
 */

const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

const lengthOfFristSTR = firstString.length;
const lengthOfSecondSTR = secondString.length;
const lengthOfThirdSTR = thirdString.length;

if(lengthOfFristSTR<lengthOfSecondSTR && lengthOfFristSTR<lengthOfThirdSTR){
    console.log(`${firstString} is the smallest string.`);
}else if(lengthOfSecondSTR<lengthOfFristSTR && lengthOfSecondSTR<lengthOfThirdSTR){
    console.log(`${secondString} is the smallest string.`);
}else if(lengthOfThirdSTR< lengthOfFristSTR && lengthOfThirdSTR<lengthOfSecondSTR){
    console.log(`${thirdString} is the smallest string.`);

}else{
    console.log("Found 2 or more strings of the same length.")
}

