

/*// Requiere el módulo misUtilidades.js
const misUtilidades = require('./misUtilidades');

// Utiliza la variable exportada
console.log(misUtilidades.mensaje);

// Utiliza la primera función exportada
const resultadoSuma = misUtilidades.sumar(5, 3);
console.log(`Resultado de la suma: ${resultadoSuma}`);

// Utiliza la segunda función exportada
const resultadoMultiplicacion = misUtilidades.multiplicar(4, 6);
console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);*/
// app.js

// Requiere el módulo misUtilidades.js
import * as misUtilidades from './misUtilidades.js';

// Utiliza la variable exportada
console.log(misUtilidades.mensaje);

// Utiliza la primera función exportada
const resultadoSuma = misUtilidades.sumar(5, 3);
console.log(`Resultado de la suma: ${resultadoSuma}`);

// Utiliza la segunda función exportada
const resultadoMultiplicacion = misUtilidades.multiplicar(4, 6);
console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);

