var vcorf, vcort, vnome

if (typeof (Storage) != "undefined") {

    //localStorage.setItem("canal", "CFBCursos") 
    //localStorage.removeItem("canal")

    //var vCanal = localStorage.canal

    //document.write(vCanal)

    if (localStorage.visitas) {
        localStorage.visitas = Number(localStorage.visitas) + 1

    } else {
        localStorage.setItem("visitas", 1)
    }

    document.write("Visitas: " + localStorage.visitas)

} else {
    document.write("Sem suporte a Web Storage")
}

function defineCor(op, cor) {
    if (op == 1) {
        document.body.style.backgroundColor = cor
        vcorf = cor
        
    } else {
        document.body.style.color = cor
        vcort = cor
    }
}

function gravar() {
    vNome = document.getElementById("fnome").value
    localStorage.corf = vcorf
    localStorage.cort = vcort
    localStorage.nome = vNome

}

