
let obj = {
    userName: "Yukti",
    userAddress: {
        state: "KT",
        city: "Banglore",
        locality: "Pritech Park"
    },
    courses: ["HTML", "CSS", "JS", "ReactJS", "Redux"],
}

// let {userAddress, userAddress, courses} = obj;
// console.log(userName);
// console.log(userAddress);
// console.log(courses);


//destructuring properties.
// let {userName: name, userAddress: address} = obj;
// console.log(name);
// console.log(address)\


//destructuring nexted objects
let {userName, userAddress:{state, city, locality}} =obj;
// console.log(userAddress); --> throws error now
console.log(city);