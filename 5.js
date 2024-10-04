//5 - Pedir por prompt una temperatura en grados Farenheit y luego crear una
//función que convierta la dicha temperatura a grados Celsius. Finalmente
//mostrar por consola el resultado de la conversión.

const prompt =require("prompt-sync")();

let tempf= parseFloat(prompt("ingrese los grados Farenheit "));

const celcius=parseFloat(0.0);

function tempcelcius(celcius,tempf){
    celcius=(tempf - 32) * 5/9

    return celcius
}

c=tempcelcius(celcius,tempf);

console.log("la conversión a celcius da como resultado: "+ c);