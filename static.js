


class Children{

    static id = 1;//static property

    constructor (name, age){
        this.name = name;
        this.age = age;
        this.id = id ++;
    }

    static sortByAge(a,b){ //to access the static method you have to use the class itself. 
        return a.age - b.age;
    }
}

const child1 = new Children("Yukti", 23);
const child2 = new Children("Ashish", 19);
const child3 = new Children("Ria", 9);