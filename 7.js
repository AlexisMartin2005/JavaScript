//7 - Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en por consola cuál es el número mayor.

const prompt=require("prompt-sync")();

let num1=parseFloat(prompt("ingrese un numero: "));
let num2=parseFloat(prompt("ingrese un numero: "));

function igualdad(num1,num2){
    if (num1>num2){
        console.log("el primer numero es mayor");
    }

    else if (num1<num2){
        console.log("el segundo numero es mayor");
    }

    else if (num1=num2){
        console.log("los numeros son iguales");
    }
}

a=igualdad(num1,num2);