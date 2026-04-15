const http = require('http')
const fs = require('fs')
const url = require('url')
const upper = require('upper-case').upperCase

const menu = require('./menu')
const tiempo = require('./tiempo')
const calculo = require('./calculo')

http.createServer(function(req,res){

let q = url.parse(req.url,true)
let ruta = q.pathname

console.log("HOST:", q.host)
console.log("PATH:", q.pathname)


// CSS
if(ruta == "/css/styles.css"){
fs.readFile("css/styles.css",function(err,data){
res.writeHead(200,{'Content-Type':'text/css'})
res.write(data)
res.end()
})
return
}


let archivo = ""

if(ruta == "/"){
archivo = "pages/index.html"
}
else if(ruta == "/tiempo"){
archivo = "pages/tiempo.html"
}
else if(ruta == "/calculo"){
archivo = "pages/calculo.html"
}
else if(ruta == "/url"){
archivo = "pages/url.html"
}
else if(ruta == "/upper"){
archivo = "pages/uppercase.html"
}
else if(ruta == "/contacto"){
archivo = "pages/contacto.html"
}

fs.readFile(archivo,function(err,data){

res.writeHead(200,{'Content-Type':'text/html'})

let html = data.toString()

html = html.replace("{{menu}}", menu())
html = html.replace("{{tiempo}}", tiempo.fecha())
html = html.replace("{{calculo}}", calculo.sumar(5,10))
html = html.replace("{{upper}}", upper("hola desde node"))

res.write(html)
res.end()

})

}).listen(3000)

console.log("Servidor corriendo en http://localhost:3000")