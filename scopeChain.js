

let a =3;
// let c = 7;
// let b = 5;



function x(){
    let b=5; 
    // let c = 7;
    console.log({ a });
    function y(){

        //inner funtion -inside x
        let c = 7;
        console.log({ b });
        function z(){
            console.log({ c });
        }
        z();
    }
    y();
}