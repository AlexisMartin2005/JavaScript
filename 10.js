//10 - Crear un programa que pida un color al usuario y retorne por consola el string correspondiente:
//En caso que el color recibido sea “azul”, → Devuelve “blue”
//En caso que el color recibido sea “rojo”, → Devuelve “red”
//En caso que el color recibido sea “verde”, → Devuelve “green”
//En caso que el color recibido sea “naranja”, → Devuelve “orange”
//En caso que el color recibido sea “amarillo”, → Devuelve “yellow”
//En caso que el color recibido no sea ninguno de los anteriores → Devuelve “Color not found”
//Se debe usar el statement Switch.

const prompt =require("prompt-sync")();


let color = prompt("Ingresa un color :");


function obtenerColor(color) {
    switch (color.toLowerCase()) {
        case "azul":
            console.log("blue");
            break;
        case "rojo":
            console.log("red");
            break;
        case "verde":
            console.log("green");
            break;
        case "naranja":
            console.log("orange");
            break;
        case "amarillo":
            console.log("yellow");
            break;
        default:
            console.log("Color not found");
    }
}

if (color) {
    obtenerColor(color);
} else {
    console.log("No ingresaste ningún color.");
}
