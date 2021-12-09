function inicia(){
    document.getElementById("btnAdd").addEventListener("click",function(){
        var lista = document.getElementById("listaElementos")
        var texto = document.getElementById("fnovo")
        var li = document.getElementById("li")
        li.textContent=texto.value
        lista.appendChild(li)
        text.value=""
        texto.focus()
    })

    window.addEventListener("load", inicia)
}


