//objects are copied by reference

const person1= {
    name: "Yukti",
    age: 23
}

const person2 = person1;

person2.name = "Aaishi";
person2.age = 25

console.log(person1);
console.log(person2);