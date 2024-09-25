




function a (wrapper){
    console.log("hello");
    wrapper();
}

function b(){  //b is callback function for a
    console.log("bye");
}

a(b);

//setTimeout

console.log("hello")

setTimeout(function callback(){       //can be an annonymous function also
    console.log("exexuted after a delay")
}, 4000); //in miliseconds



/**************************** */
fetch("http://..........")
    .then(function(){
        //response logic
    }) 
/*************************** */

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("clicked");
});