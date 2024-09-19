const user1 = {
    name: "Yukti",
    age: 23
};

const user2 = {
    name: "Riya",
    age: 25
};

const user3 = {
    name: "Reema",
    age: 27
};


function sayHi(degree, year){
    console.log(this.name, degree, year);  //name is the property of an object so this.name
}
//degree and year are not a property of an object they are just parameters of the function. 


//EXPLICIT BINDING---
// sayHi.call(user1, "BTECH-CSE", 2024);
// sayHi.call(user2, "BTECH_ECE", 2021);

// sayHi.apply(user1,["B.Tech-CS", 2024]);
// sayHi.apply(user1, ["B.Tech-ECE", 2022]);

const result = sayHi.bind(user3, "B.Tech - CS");
result(2022);
//EXPLICIT BINDING---