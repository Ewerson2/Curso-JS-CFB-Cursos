//Elementos
var vbtIniciar
var vbola
var vcpu
var vjogador
var vPaineltxtPontosPlayer
var vPaineltxtPontosCpu

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
var posJogIniX = 10
var posCpuIniY = 180
var posCpuIniX = 930
var posBolaIniX = 475
var posBolaIniY = 240

//tamanhos

var campoX = 0
var campoY = 0
var campoW = 960
var campoH = 500
var barraW = 20
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
var pontosPlayer = 0
var pontosCpu = 0
var tecla
var jogo = false

//função para impedir que a barra ultrapasse a área de jogo
function controlaJog() {
    if (jogo) {
        posJogadorY += velJogador * dirJy
        if (
            ((posJogadorY + barraH) >= campoH) ||
            ((posJogadorY) <= 0)
        ) {
            posJogadorY += (velJogador * dirJy) * (-1)
        }
        vjogador.style.top = posJogadorY + "px"
    }
}
    //função para controlar a barra da cpu
    function controlaCpu(){
        if(jogo){
            if((posBolaX > (campoW/2))&&(bolaX > 0)){
                //movimentar a CPU
                if(((posBolaY+(bolaH/2))>((posCpuY+(barraH/2)))+velCpu)){
                    //mover para baixo
                    if((posCpuY+barraH)<= campoH){
                        posCpuY+=velCpu
                    }
                    else if((posBolaY)+(bolaH/2) < (posCpuY+(barraH/2))-velCpu){
                        //mover para cima
                        if(posCpuY >= 0){
                            posCpuY-=velCpu
                        }
                    } 
                }
            }else {
                //posicionar CPU no centro
                if((posCpuY+(barraH/2)) < (campoH/2)){
                    posCpuY+=velCpu
                } else if ((posCpuY+(barraH/2)) > (campoH/2)){
                    posCpuY-=velCpu
            }
        }
        vcpu.style.top=posCpuY+"px"
    }
}

function controlaBola() {
    //movimentação bola
    posBolaX += velBola * bolaX
    posBolaY += velBola * bolaY

    //colisão com o jogador
    if (
        (posBolaX <= posJogadorX + barraW) &&
        ((posBolaY + bolaH >= posJogadorY) &&
            (posBolaY <= posJogadorY + barraH))
    ) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 32)
        bolaX *= -1
    }

    //colisão com o CPU
    if (
        (posBolaX >= posCpuX - barraW) &&
        ((posBolaY + bolaH >= posCpuY) &&
            (posBolaY <= posCpuY + barraH))
    ) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 32)
        bolaX *= -1
    }

    //limites superior e inferior
    if((posBolaY >=480)||(posBolaY <=0)){
        bolaY*=-1
    }

    //fez ponto
    if(posBolaX >= (campoW-bolaW)){
        velBola= 0
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY
        posCpuY=posCpuIniY
        pontosPlayer++
        vPaineltxtPontosPlayer.value=pontosPlayer
        jogo= false
        vjogador.style.top = posJogadorY + "px"
        vcpu.style.top = posCpuY + "px"
    }else if(posBolaX <= 0){
        velBola= 0
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY
        posCpuY=posCpuIniY
        pontosCpu++
        vPaineltxtPontosCpu.value=pontosCpu
        jogo= false
        vjogador.style.top = posJogadorY + "px"
        vcpu.style.top = posCpuY + "px"
    }

  /*   if(pontos >=5){
        alert("Você gabhou")
        pontos = 0
    }else if(pontos<= -5){
        alert("Você Perdeu")
          pontos = 0
    } */

    vbola.style.top = posBolaY + "px"
    vbola.style.left = posBolaX + "px"
}

//função para dar movimento da barra pelo teclado
function teclaDw() {
    tecla = event.keyCode
    //cima
    if (tecla == 38) {
        dirJy = -1
    }
    //baixo
    else if (tecla == 40) {
        dirJy = 1
    }

}
//função para zerar a movimentação da barra para qualquer lado
function teclaUp() {
    tecla = event.keyCode
    //cima
    if (tecla == 38) {
        dirJy = 0
    }
    //baixo
    else if (tecla == 40) {
        dirJy = 0
    }
}
//função para chamar a função para controlaJog e controlaBola 
//(é uma função recursiva então ela sempre vai chamar a função game)
function game() {
    if (jogo) {
        controlaJog()
        controlaBola()
        controlaCpu()
    }
    frames = requestAnimationFrame(game)
}

//Função para iniciar o jogo
function iniciaJogo() {
    if (!jogo) {
        velBola = velCpu = velJogador = 8
        cancelAnimationFrame(frames)
        jogo = true
        dirJy = 0
        bolaY = 0
        if ((Math.random() * 10) < 5) {
            bolaX = -1
        } else {
            bolaX = 1
        }
        posJogadorX = posJogIniX;
        posCpuX = posCpuIniX;
        posBolaX = posBolaIniX
        posBolaY = posBolaIniY
        posJogadorY = posJogIniY
        posCpuY = posCpuIniY
        game()
    }
}

//função para da valor para algumas variaveis e pega alguns elementos do HTML
function inicializar() {
    velBola = velCpu = velJogador = 8
    vbtIniciar = document.getElementById("btIniciar")
    vbtIniciar.addEventListener("click", iniciaJogo)
    vjogador = document.getElementById("dvJogador")
    vcpu = document.getElementById("dvCpu")
    vbola = document.getElementById("dvBola")
    vPaineltxtPontosPlayer = document.getElementById("txtPontosPlayer")
    vbola = document.getElementById("dvBola")
    vPaineltxtPontosCpu = document.getElementById("txtPontosCpu")
    document.addEventListener("keydown", teclaDw)
    document.addEventListener("keyup", teclaUp)
}


window.addEventListener("load", inicializar)
