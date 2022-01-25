function mostrar(obj){
    for(var i = 1;i<5;i++){
        document.getElementById("c"+i).hidden=true
    }

    var obj=event.target.dataset.nome
    document.getElementById(obj).hidden= false
}

function rolar(){
    var obj = event.target.dataset.nome
    document.getElementById(obj).scrollIntoView()
}

function inicia(){
    for(var i = 1;i<5;i++){
        document.getElementById("c"+i).hidden=true
    }

    document.getElementById("btnc1").addEventListener("click",mostrar)
    document.getElementById("btnc2").addEventListener("click",mostrar)
    document.getElementById("btnc3").addEventListener("click",mostrar)
    document.getElementById("btnc4").addEventListener("click",mostrar)
}

window.addEventListener("load", inicia)