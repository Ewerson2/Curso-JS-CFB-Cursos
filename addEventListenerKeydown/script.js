var px = 0 //variavel iniciada para mover quadrado para esquerda ou direira 
        var py = 0 //variavel iniciada para mover quadrado para cima ou para baixo 

        function move(){
            var obj = document.getElementById("dv1") //colocando  quadrado na função para ser movido
            var tecla = event.keyCode //keyCode serve para obter o código da tecla que foi mencionada
            //37 = esquerda - 38 = cima - 39 = direita - 40 = baixo - 13 = enter

            if(tecla == 37){
                px -=10
                obj.style.left = px + "px"
            } else if(tecla == 38){
                py-=10
                obj.style.top = py + "px"
            } else if(tecla ==39){
                px+=10
                obj.style.left = px + "px"
            } else if(tecla == 40){
                py+=10
                obj.style.top =py + "px"
            } else if( tecla == 13){
                alert("evento keydown removido")
                document.removeEventListener("keydown", move)
            }
        }
        
        document.addEventListener("keydown", move) // keydown intercepta o presionamento de uma tecla
