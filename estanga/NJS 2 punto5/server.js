const http = require('http')
const fs = require('fs')
const url = require('url')
const upper = require('upper-case').upperCase

const menu = require('./menu')
const tiempo = require('./tiempo')
const calculo = require('./calculo')

http.createServer(function (req, res) {

    const q = url.parse(req.url, true)
    const ruta = q.pathname

    console.log("Ruta:", ruta)

    // CSS
    if (ruta === "/css/styles.css") {
        fs.readFile("./css/styles.css", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)
        })
        return
    }

    let archivo = ""

    if (ruta === "/") archivo = "index.html"
    else if (ruta === "/tiempo") archivo = "tiempo.html"
    else if (ruta === "/calculo") archivo = "calculo.html"
    else if (ruta === "/url") archivo = "url.html"
    else if (ruta === "/upper") archivo = "uppercase.html"
    else if (ruta === "/contacto") archivo = "contacto.html"
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end("<h1>404</h1>")
        return
    }

    fs.readFile(archivo, (err, data) => {

        let html = data.toString()

        html = html.replace("{{menu}}", menu())
        html = html.replace("{{tiempo}}", tiempo.fecha())
        html = html.replace("{{calculo}}", calculo.sumar(5, 10))
        html = html.replace("{{upper}}", upper("hola desde node"))

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html)

    })

}).listen(3000)

console.log("http://localhost:3000")