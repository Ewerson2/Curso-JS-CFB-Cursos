setInterval(foco,0)

function foco(){
    var painel = document.getElementById("painel")
    var res = document.getElementById("simnao")
    if(document.hasFocus()){
        res.innerHTML=""
        painel.style.display = "none"
    }else{
        res.innerHTML = ">>NÂO<<"
        painel.style.display = "block"
    }
}