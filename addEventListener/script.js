  //função para colocar um alerta na tela
  function msg(){
    alert('CFB Cursos')
}

function cor1(){
    var obj = document.getElementById("dv1")
    obj.style.backgroundColor= "#fff";
}

function cor2(){
    var obj = document.getElementById("dv1")
    obj.style.backgroundColor= "#f00";
}

//funçã que add um evento no dv1
function addEventos(){
var obj = document.getElementById("dv1")
obj.addEventListener("click",msg) 
obj.addEventListener("mouseover", cor1)
obj.addEventListener("mouseout", cor2)
}

window.addEventListener("load", addEventos)// chamando o evento para o load e executando o addEventos
