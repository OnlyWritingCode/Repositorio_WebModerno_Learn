// // DECLARACION DE UNA VARIABLE
// var edad;

// // asigancion

// edad = 29

// let nombre = "Juan"
// console.log(nombre);

function ejemploVar(){
    var x = 10;
    console.log("Antes del true: " + x)
    if (true){
        var x = "Dentro de true: " + 20;
        console.log(x);
    }
    console.log("Fuera del true: " + x)
}

ejemploVar()

function ejemploVar2(){
    let x = 12;
    console.log("Antes del true: " + x)
    if (true){
        let x = "Dentro de true: " + 20;
        console.log(x);
    }
    console.log("Fuera del true: " + x)
}

ejemploVar2()
