var imgs =[]
        var slider
        var imgAtual
        var maxImg
        var tmp
        var tempoTroca
        var vTempo
        var vBarra
        
        
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
         vBarra = document.getElementById("dvbarra")
         carregarImg(imgAtual)
         tempoTroca = 0
         anima()
        
     }
 

 
     function troca(dir){
         tempoTroca = 0
         imgAtual += dir
         if(imgAtual>maxImg){
             imgAtual = 0
         } else if(imgAtual < 0){
             imgAtual = maxImg
         }
         carregarImg(imgAtual)
     }

     function anima(){
        tempoTroca ++
        if(tempoTroca >= 500){
            tempoTroca = 0
            troca(1)
        } 
        vTempo = tempoTroca/5
        vBarra.style.width = vTempo + "%"
        window.requestAnimationFrame(anima)

     }
 
     window.addEventListener("load", inicia)