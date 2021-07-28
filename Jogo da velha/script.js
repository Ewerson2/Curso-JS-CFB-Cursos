var jogo = [] // armazena posições jogadas
var tabuleiro = [] // verifica posições vazias 
var quemJoga = 0 // 0 = jogador 1 = CPU
var verifica // verifica quem é o vencedor
var jogando = true //verifica se o jogo está rodando
var nivel = 1
var jogadaCpu = 1
var quemComeca = 1

function cpuJoga(){
    if(jogando){
        var l,c
        if(nivel ==1){
            do{
                l =Math.round(Math.random()*2) 
                c =Math.round(Math.random()*2) 
            }while(jogo[l][c]!="")
            jogo[l][c]="O"
        }else if(nivel==2){
            // nivel 2
            
        }
        verifica=verificaVitoria()
        if(verifica!=""){
            alert(verifica+" Venceu")
            jogando=false
        }
        atualizaTabuleiro()
        quemJoga=0
    }
}

function verificaVitoria(){
    var l,c
    //Linhas
    for(l=0;l<3;l++){
        if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){
            return jogo[l][0]
        }
    }

    //colunas
    for(c=0;c<3;c++){
        if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
            return jogo[0][c]
        }
    }

    //diagonais
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
        return jogo[0][0]
    }else if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){
        return jogo[0][2]
    }
    return ""
}

function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch (p) {
            case 1:
                if (jogo[0][0]=='') {
                    jogo[0][0]='X'
                    quemJoga = 1
                }
                break;
            case 2:
                if (jogo[0][1] == '') {
                    jogo[0][1] = 'X'
                    quemJoga = 1
                }
                break;
            case 3:
                if (jogo[0][2] == '') {
                    jogo[0][2] = 'X'
                    quemJoga = 1
                }
                break;
            case 4:
                if (jogo[1][0] == '') {
                    jogo[1][0] = 'X'
                    quemJoga = 1
                }
                break;
            case 5:
                if (jogo[1][1] == '') {
                    jogo[1][1] = 'X'
                    quemJoga = 1
                }
                break;
            case 6:
                if (jogo[1][2] == '') {
                    jogo[1][2] = 'X'
                    quemJoga = 1
                }
                break;
            case 7:
                if (jogo[2][0] == '') {
                    jogo[2][0] = 'X'
                    quemJoga = 1
                }
                break;
            case 8:
                if (jogo[2][1] == '') {
                    jogo[2][1] = 'X'
                    quemJoga = 1
                }
                break;
            default: // caso 9
                if (jogo[2][2] == '') {
                    jogo[2][2] = 'X'
                    quemJoga = 1
                }
                break;
            }
           if(quemJoga==1){
            atualizaTabuleiro()
            verifica=verificaVitoria()
            if(verifica!=""){
                alert(verifica+" Venceu")
                jogando=false
            }
            cpuJoga()
        }
    }
}

function atualizaTabuleiro(){
    for(l=0;l<3;l++){
        for(c=0;c<3;c++){
            if(jogo[l][c] == "X"){
                tabuleiro[l][c].innerHTML = "X"
                tabuleiro[l][c].style.cursor = "default"
            }else if(jogo[l][c] == "O"){
                tabuleiro[l][c].innerHTML = "O"
                tabuleiro[l][c].style.cursor = "default"
            }else{
                tabuleiro[l][c].innerHTML = ""
                tabuleiro[l][c].style.cursor = "pointer" 
            }
        }
    }
}

function inicia(){
    jogando = true
    jogadaCpu = 1
    jogo = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    tabuleiro = [
        [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
        [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
    ]
    atualizaTabuleiro()
    if(quemComeca==1){
        quemComeca=0
        quemJoga=quemComeca
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa: Jogador"

    }else{
        quemComeca=1
        quemJoga=quemComeca
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa: CPU"
        cpuJoga()
    }
}

window.addEventListener("load", inicia)
