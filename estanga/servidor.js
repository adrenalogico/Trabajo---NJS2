const http = require("http");
const fs = require("fs");

const puerto = 4000;

const servidor = http.createServer((req, res) => {

    fs.readFile("./NJS ejercicio2/pagina.html", (error, data) => {

        if (error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Error al cargar la pagina");
            return;
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);

    });

});

servidor.listen(puerto, () => {
    console.log("Servidor funcionando en http://localhost:4000");
});