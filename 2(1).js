//2 - Pedir por prompt un número y guardarlo en una variable, 
//luego pedir un segundo número y guardarlo en otra variable.
//Crear una tercera variable que sume los valores pedidos y retornarlos por consola.

const prompt = require("prompt-sync")();

let num1=parseFloat(prompt("ingrese un numero: "));
let num2=parseFloat(prompt("ingrese un numero: "));
var suma = num1+num2;
console.log("el numero es: ");
console.log(suma);