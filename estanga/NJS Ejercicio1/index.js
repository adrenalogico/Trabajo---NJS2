import { obtenerClima, parsearClima } from './Modulos/clima.js';
import { suma, resta, multiplicacion, division } from './Modulos/calculos.js';
import { formatearReporte } from './Modulos/salida.js';

const LATITUD = -38.0;
const LONGITUD = -57.55;
const CIUDAD = 'Mar del Plata';

async function main() {

  try {

    console.log('Consultando clima...\n');

    const datosAPI = await obtenerClima(LATITUD, LONGITUD);
    const datosParsed = parsearClima(datosAPI);

    console.log(formatearReporte(datosParsed, CIUDAD));

    console.log("\nOperaciones matemáticas:");

    console.log("Suma 5 + 3 =", suma(5, 3));
    console.log("Resta 10 - 4 =", resta(10, 4));
    console.log("Multiplicación 6 * 7 =", multiplicacion(6, 7));
    console.log("División 20 / 5 =", division(20, 5));

  } catch (error) {

    console.error('Error:', error.message);

  }

}

main();