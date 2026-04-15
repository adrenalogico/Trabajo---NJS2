const myURL = new URL("http://localhost:4000/productos?categoria=tecnologia&precio=1000");

console.log("Host:", myURL.host);
console.log("Path:", myURL.pathname);
console.log("Protocolo:", myURL.protocol);
console.log("Query:", Object.fromEntries(myURL.searchParams));
console.log("Ruta completa:", myURL.pathname + myURL.search);