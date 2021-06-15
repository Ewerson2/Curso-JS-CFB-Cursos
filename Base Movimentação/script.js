var dx
var dy
var px
var py
var vel
var obj
var tmp

function inicia(){
    dx = 0
    dy = 0
    px = 0
    py = 0
    vel = 10
    obj = document.getElementById("dv1")
    document.addEventListener("keydown", teclaDw) // keydown é quando a tecla é pressionada a tecla pressionada e está recebendo a função "teclaDw"
    document.addEventListener("keyup", teclaUp) // keydown é quando a tecla para de ser pressionada e está recebendo a função "teclaUp"  
    tmp = setInterval(enterFrame,20)
}

//37 = esquerda - 38 = cima - 39 = direita - 40 = baixo
function teclaDw(){
    var tecla = event.keyCode;
    if(tecla == 37){
        dx = - 1
    }else if(tecla == 38){
        dy = - 1
    } else if (tecla == 39){
        dx = 1
    }else if(tecla == 40){
        dy = 1
    }
}

//estão recebendo o valor 0 para quando a tecla parar de ser pressionada a movimentação parar
function teclaUp(){
    var tecla = event.keyCode;
    if(tecla == 37){
        dx = 0
    }else if(tecla == 38){
        dy = 0
    } else if (tecla == 39){
        dx = 0
    }else if(tecla == 40){
        dy = 0
    }
}

//função para atualizar as posições
function enterFrame(){
    px += dx*vel // px vai receber 1 * 10 que desloca a velocida para a direira
    py += dy*vel // py vai receber -1 * 10 que desloca a velocida para a esquerda
    //passand px e py para o objeto

    //pegando o valor de px (multiplicado a cima) e concatenando no left do obj
    obj.style.left = px + "px" // está recebendo posicionamento px + a unidade de medida
     //pegando o valor de py (multiplicado a cima) e concatenando no top do obj
    obj.style.top = py + "px" // está recebendo posicionamento py + a unidade de medida
}

window.addEventListener("load", inicia)
