var dvcx, frames

function loop(){
    dvcx.innerHTML = document.activeElement.tagName
    frames = requestAnimationFrame(loop)
}

function ativo(){
    
    var elemento = document.activeElement.tagName
    console.log(elemento)
}

function inicia(){
    dvcx = document.getElementById("cx")
    loop()
}

window.addEventListener("load",inicia)