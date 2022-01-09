var diryJ, dirxJ, jog, velJ, pjx, pjy
var tamTelaW, tamTelaH
var jogo
var velT
let frames
var contBombas
var painelContBombas
var bombasTotal
var velBomba
var vidaPlaneta
var tmpCriaBomba

function teclaDw() {

    var tecla = event.keyCode;
    if (tecla == 38) {//cima
        diryJ = -1
    } else if (tecla == 40) {//baixo
        diryJ = 1
    }
    if (tecla == 37) {//esquerda
        dirxJ = -1
    } else if (tecla == 39) {//direira
        dirxJ = 1
    }
    if (tecla == 32) {//espaço /tiro
        //tiro  
        atira(pjx + 17, pjy)
    }

}
function teclaUp() {
    var tecla = event.keyCode;
    if ((tecla == 38) || (tecla == 40)) {
        diryJ = 0
    }
    if ((tecla == 37) || (tecla == 39)) {
        dirxJ = 0
    }
}

    function criaBomba(){
        if(jogo){
            var y = 0
            var x = Math.random()*tamTelaW
            var bomba = document.createElement("div")
            var att1 = document.createAttribute("class")
            var att2 = document.createAttribute("style")
            att1.value = "bomba"
            att2.value = "top:" +y+ "px;left:" +x+ "px;"
            bomba.setAttributeNode(att1)
            bomba.setAttributeNode(att2)
            document.body.appendChild(bomba)
            contBombas--
        }
    }

    function controlaBomba(){
        bombasTotal = document.getElementsByClassName("bomba")
        var tam = bombasTotal.length
        for(var i=0;i<tam;i++){
            if(bombasTotal[i]){
                var pi = bombasTotal[i].offsetTop
                pi += velBomba
                bombasTotal[i].style.top=pi+"px"
                if(pi>tamTelaH){
                    vidaPlaneta-=10
                    bombasTotal[i].remove()
                }
            }
        }
    }

function atira(x, y) {
    var t = document.createElement("div")
    var att1 = document.createAttribute("class")
    var att2 = document.createAttribute("style")
    att1.value = "tiroJog"
    att2.value = "top:" + y + "px;left:" + x + "px"
    t.setAttributeNode(att1)
    t.setAttributeNode(att2)
    document.body.appendChild(t)

}

function controleTiros() {
    var tiros = document.getElementsByClassName("tiroJog")
    var tam = tiros.length
    for (var i = 0; i < tam; i++) {
        if (tiros[i]) {
            var posT = tiros[i].offsetTop
            posT -= velT
            tiros[i].style.top = posT + "px"
            colisaoTiroBomba(tiros[i])
            if(posT<0){
                tiros[i].remove()
            }
        }
    }
}

    function colisaoTiroBomba(tiro){
        var tam = bombasTotal.length
        for(var i=0;i<tam;i++){
            if(bombasTotal[i]){
                if(((tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&&((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)))
                &&
                ((tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&&((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft))))
                {
                    bombasTotal[i].remove()
                    tiro.remove()
                }
            }
        }
    }

    function criaExplosao(tipo,x,y){
        var explosao = document.createElement("div")
        var img = document.createElement("img")
        var som - document.createElemnet("audio")
    }

function controlaJogador() {
    pjy += diryJ * velJ;
    pjx += dirxJ * velJ;
    jog.style.top = pjy + "px"
    jog.style.left = pjx + "px"
}

function gameLoop() {
    if (jogo) {
        //funções de controle
        controlaJogador()
        controleTiros()
        controlaBomba()
    }
    frames = requestAnimationFrame(gameLoop)
}

function inicia() {
    jogo = true

    //Ini tela
    tamTelaH = window.innerHeight
    tamTelaW = window.innerWidth

    //inicia jogador
    dirxJ = diryJ = 0;
    pjx = tamTelaW / 2
    pjy = tamTelaH / 2
    velJ = 5
    velT = 5
    jog = document.getElementById("naveJog")
    jog.style.top = pjy + "px"
    jog.style.left = pjx + "px"

    //controles das bombas
    clearInterval(tmpCriaBomba)
    contBombas = 150
    velBomba = 3
    tmpCriaBomba = setInterval(criaBomba,3000)

    //controles do planeta
    vidaPlaneta = 100

    gameLoop()

}

window.addEventListener("load", inicia)

document.addEventListener("keydown", teclaDw)
document.addEventListener("keyup", teclaUp)