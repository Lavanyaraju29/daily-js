//let
function letscoping(){
    let x = 2;
    if(true){
        let x = 6;
        console.log(x)
    }
}
letscoping();

//var
function varscoping(){
    var x = 5;
    if(true){
        var x = 6;
        console.log(x)
    }
}
varscoping();

//let inner and outer
function letscoping(){
    let x = 2;
    if(true){
        let x = 6;
        console.log(x)
    }
    console.log(x)
}
letscoping();

//var inner and outer
function varscoping(){
    var x = 2;
    if(true){
        var x = 6;
        console.log(x)
    }
    console.log(x)
}
varscoping();

//lat and var
function letandvarscoping(){
    var x = 1;
    if(true){
        let x = 2;
        console.log(x)
    }
    console.log(x)
}
letandvarscoping();
