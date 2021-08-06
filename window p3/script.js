function inicia(){
var qtde=window.length
var painel=document.getElementById("painel").innerHTML=qtde

for(i=0;i<qtde;i++){
    window.frames[i].location="http://cfbcursos.com.br"
}
}

window.addEventListener("load", inicia)