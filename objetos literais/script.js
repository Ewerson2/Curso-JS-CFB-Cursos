const Carro={
    marca:"VW",
    modelo:"Golf",
    cor:"Cinza",
    cambio:"automatico",
    info:function(){
        console.log("Marca: " +this.marca)
        console.log("Modelo: " +this.modelo)

    }
}


let {marca,modelo} = Carro

marca = "Honda"
modelo = "HRV"
console.log(Carro)
console.log(marca)
console.log(modelo)

