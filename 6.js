//6 - Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

const prompt=require("prompt-sync")();

let a1=parseFloat(prompt("ingrese el primer angulo del triangulo: "));
let a2=parseFloat(prompt("ingrese el segundo angulo del triangulo: "));
let a3=parseFloat(prompt("ingrese el tercer angulo del triangulo: "));

var valinval=0.0
function validez(valinval){
   valinval=a1+a2+a3
    if (valinval==180){
        console.log("el triangulo es valido, sus angulos suman: " + valinval);
    }
    else{
        console.log("el triangulo es invalido, sus angulos suman: "+valinval);
    }
    
}
eee=validez(valinval);