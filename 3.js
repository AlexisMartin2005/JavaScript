//3 - Pedir por prompt un string y guardarlo en una variable, 
//a continuación pedir un segundo string y guardarlo en otra variable.
//Luego crear una variable que compare ambos strings y retorne “true” en 
//caso de que sean iguales o “false” en caso de que no lo sean. Agregar una 
//variable más que compare la longitud de ambos strings y retorne “true” en 
//caso de que ambos tengan la misma longitud, o “false” en caso contrario.
const prompt = require("prompt-sync")();

let a=prompt("ingrese un valor a: ");
let b=prompt("ingrese un valor b: ");

function igual_desigual(a,b){
   return a===b;
}
function longitud(a,b){
    return a.length === b.length;
}
var id = igual_desigual(a,b);   
var long = longitud(a,b) ;
console.log("si los strings son desiguales, false, si son iguales, true: "+id);
console.log("si tienen la misma longitud, true, si no tienen la misma longitud, false: "+long);