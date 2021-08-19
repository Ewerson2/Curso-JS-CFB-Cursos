var painel
var btnB
var btnF
var btnG

function hB(){
    window.history.back()
}

function hF(){
    window.history.forward()
}

function hG(){
    window.history.go(-2)
}

function inicia(){
    btnB = document.getElementById("btnBack")
    btnF = document.getElementById("btnForward")
    btnG = document.getElementById("btnBack2")

    btnB.addEventListener("click", hB)
    btnF.addEventListener("click", hF)
    btnG.addEventListener("click", hG)
    painel = document.getElementById("info")
    painel.innerHTML =history.length

}

window.addEventListener("load", inicia)