let produtos = new Map([
    ["01",["Mouse","10,75"]],
    ["02",["Teclado","152,36"]],
    ["03",["Monitor","928,96"]],
    ["04",["Gabinete","326,96"]]
])

produtos.set("05",["memoria","652,36"])

//produtos.clear()
//produtos.delete("03")

console.log(produtos.has("02"))
function info(chave,valor){
    console.log("chave: " + chave + " valor: " + valor)
}
//produtos.forEach(info)
let it = produtos.keys()
let itv = produtos.values()


console.log(it.next().value)
console.log(itv.next().value)

console.log("Tamanho: " + produtos.size)

for(p of produtos)
console.log(p[1][1])
