/**
 * Global and local variables
 * Global, Local and Block Scope
 */


/*********************************************** 
var x =3;  //declared globally so it can be accessed anywhere inside the code


//{} to log in the form of an object
function showNumber (){
    var y=5;
    console.log({ y });//locally declared so visiblity is only inside function shoeNumber 
    console.log({ x });
}

function f1(){
//  console.log({ y })  //y not defined
    console.log({ x }); 
}

showNumber();
// console.log(y);    -->will through as error as it is declared locally to the funtion showNumber.
******************************************************************************/



//creating a block
{
    let a =3; //defined inside block
    let b=5; //defined inside block

    // console.log(a);
    // console.log(b);
}

// console.log(a);  ----->throughs error.
// console.log(b);


{
    const x =3; //defined inside block
    const y =5; //defined inside block

    // console.log(x);
    // console.log(y);
}

// console.log(x); --->throws error
// console.log(y);


let c =6 //---> defined in some other scope could be TDZ
if(true) {

    //let a =3; -->throws error
    //let b-5; -->throws error


    var n =3; //defined inside block but has global scope
    var m =5; //defined inside block but has global scope

    // console.log(n);
    // console.log(m);
}//if this block is put inside the function then var becomes local variable to that function.

console.log(n);
console.log(m);

//console.log(c);