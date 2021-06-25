var imgs =[]
var slider
var imgAtual
var maxImg
var tmp
var tempoTroca
var imgP
var imgA

function preCarregamento(){
 var s = 1
 for(i = 0; i<5;i++){
 imgs[i] = new Image()
 imgs[i].src = "imgs/s"+s+".jpg"
 s++
 }
}

function carregarImg(img){
 slider.style.backgroundImage = "url('"+imgs[img].src+"')"
}

function inicia(){
 preCarregamento()
 imgAtual = 0
 maxImg = imgs.length-1
 slider = document.getElementById("dvslider")
 carregarImg(imgAtual)
 tempoTroca = 7000
 tmp = setInterval(troca, tempoTroca)
}

imgP = document.getElementById("imgP").addEventListener("click", proxima);
imgA = document.getElementById("imgA").addEventListener("click", anterior);



function troca(){
 imgAtual ++
 if(imgAtual>maxImg){
     imgAtual = 0
 }
 carregarImg(imgAtual)
}

function proxima() {
if (imgAtual == 4) {
 imgAtual = 0;
 carregarImg(imgAtual);
} else {
 imgAtual++;
 carregarImg(imgAtual);
}

}

function anterior() {
if (imgAtual == 0) {
 imgAtual = 4;
 carregarImg(imgAtual);
} else {
 imgAtual--;
 carregarImg(imgAtual);
}
}

window.addEventListener("load", inicia)