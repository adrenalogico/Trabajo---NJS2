function describirClima(codigo) {
  const descripciones = {
    0: 'Cielo despejado',
    1: 'Mayormente despejado',
    2: 'Parcialmente nublado',
    3: 'Nublado',
    45: 'Niebla',
    61: 'Lluvia leve',
    63: 'Lluvia moderada',
    80: 'Chaparrones leves',
    95: 'Tormenta eléctrica',
  };
  return descripciones[codigo] || `Código desconocido (${codigo})`;
}

function formatearReporte(datos, ciudad) {
  const momento = datos.esDeDia ? 'Día' : 'Noche';
  return `

  Clima en ${ciudad}
  Estado:      ${describirClima(datos.codigoClima)}
  Temperatura: ${datos.temperatura}°C
  Viento:      ${datos.viento} km/h
  Momento:     ${momento}
  `.trim();
}

export { describirClima, formatearReporte };