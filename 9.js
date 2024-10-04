//9 - Crear un programa que solicite una edad y dependiendo del valor ingresado retorne por consola lo siguiente:
//- “Es un niño” si la edad es menor a 13.
//- “Es un adolescente” si la edad ingresada está entre 13 y 17.
//- “Es un adulto” si la edad está entre 18 y 110.
//- “No es una edad válida” en el caso de que no se cumpla ninguna de las condiciones anteriores.

const prompt=require("prompt-sync")();

let edad = parseFloat(prompt("ingrese una edad (años): "));

function etapa(edad){
    if (edad < 13 && edad>=0 ){

        console.log("es un niño");
    }
    else if (edad > 13 && edad <=17){
        console.log("es un adolescente");
    }
    else if (edad > 18 && edad <=110){
        console.log("es un adulto");

    }
    else{
        console.log("dato no valido o la edad no entra en el rango");
    }
    
}

var etapaaa=etapa(edad)
console.log(etapaaa)
