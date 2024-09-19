const obj = {
    name: "Yukti",
    displayMessage: function(){
        console.log("Hello" + this.name); //Implicit Binding
    },
}

obj.displayMessage();



/** */

function calculateSum(){
    console.log(this); 
}

calculateSum();

//console.log(this);

/** */

const user1 = {
    name:"Yukti",
    showName: function(){
        console.log(this.name);
    },

};

const user2 = {
    name:"Ashish",
    showName: function(){
        console.log(this.name);
    },

};

const user3= {
    name:"Sakshi",
    showName: function(){
        console.log(this.name);
    },

};


user1.showName();
user2.showName();
user3.showName(); 
//repeating