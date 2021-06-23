var biblioteca = ["javascript", "tecnologia", "computador"]
var qtde = biblioteca.length-1 //variavel que mostra quantidade de palavras existente no vetor biblioteca
var pos = Math.round(Math.random()*qtde) //variavel pos sorteia entre o numero 0 e quantidade do vetor biblioteca 
var palavra = biblioteca[pos]
var tam = palavra.length
var cxLetras = []
var acertos
var errosMax = 7
var erros = 0
var desenhos = []
var acertou = false
var jogando = false

//função para definir a quantidade de letras da palavra que vai aparecer na tela
function defineLetras(l) {
    var obj
    for(i=0;i<20;i++){
        obj = document.getElementById("letra" + i).value = ""
        obj = document.getElementById("letra" + i).style.display = "none"
    }
    for(var i=0;i<l;i++){
        obj = document.getElementById("letra" + i).style.display = "inline-block"
    }
}

//função para verificar se acertou ou errou e se o botão nova palavra foi clicado
function jogar(){
    jog = document.getElementById("letraJ")
    jog.focus()
    if(jog.value==""){
        alert("Digite uma letra")
    }else{
        if(jogando){
            var jog
            var obj
            var letraTmp
            var letra
            var pesq
            letra = jog.value
            jog.value = ""
            acertou = false
            pesq = palavra.match(letra)
            
            while(pesq!=null){
                letraTmp = palavra.search(letra)
                obj = document.getElementById("letra" + letraTmp).value = letra
                palavra = palavra.replace(letra, '0')
                acertos++
                pesq = palavra.match(letra)
                acertou = true
            }
            if(!acertou){
                document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase() + " "
                erros++
                if(erros<7){
                    desenhos[erros].style.display = "block"
                }else{
                    document.getElementById("cabeca").src ="/imgs/cabeca2.png"
                    document.getElementById("dvmsg").innerHTML = "Perdeu"
                    jogando = false
                }    
            }
            if(acertos == tam){
                document.getElementById("dvmsg").innerHTML = ""
                document.getElementById("dvmsg").innerHTML = "GANHOU!"
                jogando = false
            }
        }
    }
}

//função inicia o jogo e carrega os elementos na tela
function inicia(){
    jogando = true
    jog = document.getElementById("letraJ")
    jog.value = ""
    jog.focus()
    acertos = 0
    erros = 0
    acertou = false
    document.getElementById("dvletrasdigitadas").innerHTML = "LETRAS DIGITADAS"
    pos = Math.round(Math.random()*qtde)
    palavra = biblioteca[pos]
    tam = palavra.length
    defineLetras(tam)
    document.getElementById("dvmsg").innerHTML = ""
    desenhos[1] = document.getElementById("cabeca")
    desenhos[2] = document.getElementById("corpo")
    desenhos[3] = document.getElementById("bracoE")
    desenhos[4] = document.getElementById("bracoD")
    desenhos[5] = document.getElementById("pernaE")
    desenhos[6] = document.getElementById("pernaD")
    document.getElementById("cabeca").src = "/imgs/cabeca1.png"
    for(i = 1;i<7;i++){
        desenhos[i].style.display = "none"
    }
}

function dica(){
    alert(palavra)
    jog.focus();
}

window.addEventListener("load", inicia)

