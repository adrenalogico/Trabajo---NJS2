function mostrarMenu(){
return `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">

<a class="navbar-brand" href="/">Servidor Node</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="menu">
<ul class="navbar-nav ms-auto">

<li class="nav-item">
<a class="nav-link" href="/">Inicio</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/tiempo">Tiempo</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/calculo">Cálculo</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/url">URL</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/upper">UpperCase</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/contacto">Contacto</a>
</li>

</ul>
</div>
</div>
</nav>
`
}

module.exports = mostrarMenu