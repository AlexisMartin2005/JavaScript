//4 - Pedir por prompt una número y luego crear una función que nos diga si dicho
//número es divisible por 5 o no. Mostrar el resultado en la consola.

const prompt = require("prompt-sync")();

let num = parseFloat(prompt("ingrese un numro: "));

function a(num){
    
    return num % 5 === 0;   
}

e=a(num)

console.log("el numero se puede dividir por 5?: ")
if (e==true){
    console.log("si")
}

if (e==false){
    console.log("no")
}
