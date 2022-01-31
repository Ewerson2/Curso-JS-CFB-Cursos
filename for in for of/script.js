const aluno={nome: "Ewerson",sobrenome:"de Jesus"}
const nota={n1:80,n2:75,n3:92,n4:85}
const info={...aluno,...nota}

for(var dados in aluno){
    console.log(aluno[dados])
}

let notas =[100,80,70,52,39,65,14,25]
let aprovados = 0
let reprovados = 0

for(var n of notas){
    n>=60?aprovados++:reprovados++
}

console.log("Aprovados: " + aprovados)
console.log("Reprovados: " + reprovados)