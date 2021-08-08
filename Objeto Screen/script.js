var painel

function inicia(){
    painel=document.getElementById("painel")
    painel.innerHTML+= "Largura: " + screen.width + "px<hr> "
    painel.innerHTML+= "Altura: " + screen.height + "px<hr> "
    painel.innerHTML+= "Altura disponivel: " + screen.availWidth + "px<hr> "
    painel.innerHTML+= "Largura disponivel: " + screen.availHeight + "px<hr> "
    painel.innerHTML+= "Profundidade de cores (imagens): " + screen.colorDepth + "bits<hr> "
    painel.innerHTML+= "Resolução cor da tela(pixel): " + screen.pixelDepth + "px/bt<hr> "
}

inicia()