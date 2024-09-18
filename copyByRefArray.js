
let arr1 = [1,2,3]; //refers to a memory location let say abc123
let arr2=arr1; //arr to refernce point to the same memory location of arr1


//this is called shallow copy
console.log("Arr1- ", arr1);
console.log("Arr2- ", arr2);

arr1.push(4); //by modifying arr2 refernce arr1 also changes.

console.log("Updated Arr1- ", arr1);
console.log("Updated Arr2- ", arr2);

//solution is spread operator
let arr3 = [...arr1];
console.log("Arr3- ", arr3);
arr3.push(5);

console.log("Updated Arr1- ", arr1);
console.log("Updated Arr3- ", arr3);