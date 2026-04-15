import https from 'https';

function obtenerClima(latitud, longitud) {
  return new Promise((resolve, reject) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;

    https.get(url, (respuesta) => {
      let datos = '';

      respuesta.on('data', (chunk) => {
        datos += chunk;
      });

      respuesta.on('end', () => {
        try {
          const json = JSON.parse(datos);
          resolve(json);
        } catch (error) {
          reject(new Error('Error al parsear la respuesta'));
        }
      });

    }).on('error', (error) => {
      reject(error);
    });
  });
}

function parsearClima(datosAPI) {
  const actual = datosAPI.current_weather;
  return {
    temperatura: actual.temperature,
    viento: actual.windspeed,
    codigoClima: actual.weathercode,
    esDeDia: actual.is_day === 1,
  };
}

export { obtenerClima, parsearClima };