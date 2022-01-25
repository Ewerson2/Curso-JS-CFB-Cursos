function rolar(){
    var obj = event.target.dataset.nome
    document.getElementById(obj).scrollIntoView()
}

function inicia(){
    document.getElementById("btnc1").addEventListener("click",rolar)
    document.getElementById("btnc2").addEventListener("click",rolar)
    document.getElementById("btnc3").addEventListener("click",rolar)
    document.getElementById("btnc4").addEventListener("click",rolar)
}

window.addEventListener("load", inicia)