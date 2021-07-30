//Elementos
var vbtIniciar
var vbola
var vcpu
var vjogador
var vPaineltxtPontos

//controle de animação
var game
var frames

//posições
var posBolaX
var posBolaY
var posJogadorX
var posJogadorY
var posCpuX
var posCpuY

//Direção de acordo com a tecla
var dirJy

//Posições iniciais
var posJogIniY = 180
var posCpuIniY = 180
var posBolaIniX = 475
var posBolaIniY = 240

//tamanhos

var campoX = 0
var campoY = 0
var campoW = 960
var campoH = 500
var  barraW = 20
var barraH = 140
var bolaW = 20
var bolaH = 20

//direção
var bolaX
var bolaY
var jogY = 0
var cpuY = 0

//velocidade
var velBola
var velCpu
var velJogador

//controle
var pontos = 0
var tecla
var jogo = false

function controlaJog(){
    if(jogo){
        posJogadorY+=velJogador*dirJy
        vjogador.style.top=posJogadorY+"px"
    }
}

function teclaDw(){
    tecla=event.keyCode
    //cima
    if(tecla==38){
        dirJy=-1
    }
    //baixo
    else if(tecla==40){
        dirJy=1
    }

}
function teclaUp(){
    tecla=event.keyCode
    //cima
    if(tecla==38){
        dirJy=0
    }
    //baixo
    else if(tecla==40){
        dirJy=0
    }
}

function game(){
    if(jogo){
        controlaJog()
    }
    frames=requestAnimationFrame(game)
}

function iniciaJogo(){
    if(!jogo){
        cancelAnimationFrame(frames)
        jogo=true
        dirJy=0
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=0
        posCpuY=posCpuIniY
        game()
    }
}
function inicializar(){
    velBola=velCpu=velJogador=8
    vbtIniciar=document.getElementById("btIniciar")
    vbtIniciar.addEventListener("click", iniciaJogo)
    vjogador=document.getElementById("dvJogador")
    vcpu=document.getElementById("dvCpu")
    vbola=document.getElementById("dvBola")
    vPaineltxtPontos=document.getElementById("txtPontos")
    document.addEventListener("keydown", teclaDw)
    document.addEventListener("keyup", teclaUp)
}


window.addEventListener("load", inicializar)
