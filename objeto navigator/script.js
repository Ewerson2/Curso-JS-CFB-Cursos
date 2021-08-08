var painel

function localizar(pos){
    var c=pos.coords
    painel.innerHTML+="latitude:" + c.latitude + "- longitude:" + c.longitude + "<hr>"
}

function verificar() {
    painel = document.getElementById("painel")
    painel.innerHTML = "Nome do Browser: " + navigator.appName + "<hr>"
    painel.innerHTML += "Versão do Browser: " + navigator.appVersion + "<hr>"
    painel.innerHTML += "Cookies: " + navigator.cookieEnabled + "<hr>"
    painel.innerHTML += "Localização: " + navigator.geolocation.getCurrentPosition(localizar) + "<hr>"
    painel.innerHTML += "Idioma: " + navigator.language + "<hr>"
    painel.innerHTML += "Online: " + navigator.onLine + "<hr>"
    painel.innerHTML += "Sistema Operacional: " + navigator.platform + "<hr>"
    painel.innerHTML += "Engine: " + navigator.product + "<hr>"
    painel.innerHTML += "Agente: " + navigator.userAgent + "<hr>"
    
}


window.addEventListener("load", verificar)