/*// misUtilidades.js

// Variable exportada
const mensaje = "Hola desde misUtilidades.js";

// Función exportada 1
function sumar(a, b) {
    return a + b;
}

// Función exportada 2
function multiplicar(a, b) {
    return a * b;
}

// Exportando la variable y las funciones
module.exports = {
    mensaje,
    sumar,
    multiplicar
};*/
// misUtilidades.js

// Variable exportada
export const mensaje = "Hola desde misUtilidades.js";

// Función exportada 1
export function sumar(a, b) {
    return a + b;
}

// Función exportada 2
export function multiplicar(a, b) {
    return a * b;
}

