//modificadores
// i = busca sem case-sensitive
//g = diz ao método para encontrar todas as ocorrências da palavra e não parar na primeira encontrada, cada ocorrência é armazenada em uma posição do array
//m = pesquisa normal sem armazenar em forma de array 
var texto = document.getElementById("txt").innerHTML

var res = texto.match(/[^oa]/ig).sort()

document.write( res + ":" + res.length + "<br>")

document.write(res[0])