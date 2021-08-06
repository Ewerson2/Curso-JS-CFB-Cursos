var l
var a
var px
var py

var painel = document.getElementById("painel")


function info(){
    
    l = window.innerWidth// largura externa = outerWidht
    a = window.innerHeight
    px=window.screenX
    py=window.screenY
    painel.innerHTML= "l: "+l+" - A:" +a+" <br>X: "+px+" - Y:"+py

}

function inicia(){
    painel = document.getElementById("painel")
   
}

window.addEventListener("load",inicia)