

class User {
    constructor (name, role, isAdmin, isLoggedIn){
        (this.name),
        (this.role = role),
        (this.isAdmin = isAdmin),
        (this.isLoggedIn = isLoggedIn); 
    }

    displyInfo(){ //added to prototype
        console.log(`${this.name} is a ${this.tole}`)
    }
}

const user1 = new User("Yukti", "Mentor", false, true);
const user2 = new User("Sakshi", "Mentor", false, true);
const user3 = new User("Ashish", "Mentor", false, true);
console.log(user1);