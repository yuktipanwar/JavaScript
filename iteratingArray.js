
let studentName = ["Prakasg", "Aadarsh", "Riya", "Ashish", "Jay", "Piyush", "Amit", "Kirti"];

let arrLength = studentName.length;

// for(let i=0; i<arrLength; i++){
//     console.log(studentName[i]);
// }

/***for let of***->used when we don't need index */
//gives elements
//can be used with strings also.

for(let name of studentName){
    console.log(name);
}

/***for let of****-> gives index of elements*/

for(let name in studentName){
    console.log(name);
}