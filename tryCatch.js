
const username = "Yukti";

try{
    someFunction();
    console.log("Hey there");
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("Finally executed!");
}

console.log(username);