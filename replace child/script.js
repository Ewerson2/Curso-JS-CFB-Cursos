function inicia(){
    var novoH1 = document.createElement("h1")
    var lista = document.getElementById("cfbcursos")
    var antigoP = lista.childNodes[9]
    var txtH = document.createTextNode(antigoP.innerHTML)
    novoH1.appendChild(txtH)
    lista.replaceChild(novoH1,antigoP)

}

window.addEventListener("load",inicia)