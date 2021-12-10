function inicia(){
    var elemento = document.getElementById("cfbcursos").childNodes
    document.getElementById("cfbcursos").removeChild(elemento[1])
}

window.addEventListener("load",inicia)