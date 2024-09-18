

//object literal

const personObj = {
    name: "Prakash", //property
    age: 99,
    job: "Mentor",
    course: ["HTML", "CSS", "JavaScript", "ReactJS"];
    "is Admin": "true"           //*square brackets are used for such pairs
};

console.log(personObj.age);
console.log(personObj.name);
console.log(personObj["job"]);  //all keys are string
console.log(personObj["is Admin"]);  //*