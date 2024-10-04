//8 - Crear un programa que determine si un año dado es bisiesto. En caso de que lo sea retornar por consola
//“El año ingresado es bisiesto”, y en caso de no serlo retornar “El año ingresado no es bisiesto”.

const prompt = require("prompt-sync")();

let año = parseInt(prompt("ingrese un año: "));

function esBisiesto(año) {
    // Un año es bisiesto si es divisible por 4
    // Excepto si es divisible por 100, a menos que también sea divisible por 400
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);

}

if (esBisiesto(año)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}