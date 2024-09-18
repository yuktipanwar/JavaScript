
const obj = {
    name: "Yukti",
    city: "Banglore"
}

const isPropertyFound = "name" in obj;
console.log(isPropertyFound);

for (let key in obj){
    console.log(key, obj[key]);
}