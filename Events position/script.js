   //criou a função mudaCor passando dois parâmetros obj é quem vai receber a alteração e a cor que vai aplicar o elemento
   function mudaCor(obj,cor){
    obj.style.backgroundColor = cor
}

//função para mudar a posição da div
function mudaPos(obj){
    obj.style.position = "absolute" // alterando o position para absolute
    obj.style.left = Math.random()*500 + "px" // chamando o método random para colocar a div em uma posição aleatória
    obj.style.top = Math.random()*500 + "px"
}

//função para pegar a hora atualizada do dia e comprimentar o usuário
function ola(){
    var data = new Date()
    var hora = data.getHours() //criando a variável hora para receber o elemento data o getHours
    var txt = ""
    if(hora < 12){
        txt = "Bom dia!"
    } else if( hora < 18){
        txt = "Boa tarde!"
    }else{
        txt = " boa noite"
    }

    alert("Ola, " + txt)
}
