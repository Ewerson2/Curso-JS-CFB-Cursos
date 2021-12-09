function inicia(){
document.getElementById("btnDestaque").addEventListener("click",function(){
    var num=document.getElementById("fnum").value
    var p = document.getElementsByTagName("p")
    for(var i=0;i<p.length;i++){
        p[i].removeAttribute("style")
    }
    var at=document.createAttribute("style")
    at.value="color:#f00;"
    p[num].setAttributeNode(at)
    })
   
}

window.addEventListener("load",inicia)