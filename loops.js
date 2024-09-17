/**
 * Star Pattern
 */

const symbol = "* ";

for(let i=1; i<=5; i++){
    console.log(symbol.repeat(i));
}

for(let i=4; i>=1; i--){
    console.log(symbol.repeat(i));
}


/**
 * Counting Characters
 */

const userName = "Yukti Panwar";
let count = 0;

for (let i=0; i< userName.length; i++){
    count ++;
}

console.log(`Number of characters in the string are ${count}.`);

/**
 * given a range of numbers 1-101; find all the even numbers
 */

let remainder;

for (let i=1; i<=101; i++){
    remainder =i%2;
    if(remainder===0){
        console.log(`${i} is an even number`);
    }else{
        console.log(`${i} is an odd number`);
    }
}

/**
 * check if given strings has vowels?
 */

const inputString="Hello, I am Yukti!";
const vowels= "aeiou";

for(let i=0; i<inputString.length; i++){
    if(vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel.`)
    }else{
        console.log(`${inputString[i]} is not a vowel.`);
    }
}