function inicia(){
    var elemento = document.getElementById("p1")
    var att = elemento.getAttribute("class")
    alert(att)
}
window.addEventListener("load", inicia)