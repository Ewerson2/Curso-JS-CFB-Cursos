var texto1 = document.getElementById("txt").innerHTML
var texto2 = texto1
var res = texto1.localeCompare(texto2)

if(res == 0){
    document.write("Strings iguais")
} else{
    document.write("strings diferentes")
}