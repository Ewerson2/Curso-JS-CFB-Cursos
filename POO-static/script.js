class Carro{
    static Alerta = true
    constructor(cor,marca,modelo){
        this.cor=cor
        this.marca=marca
        this.modelo=modelo
        this.logado=false
        this.km=0
        this.comb=10

        //console.log("Ola, sou um novo carro: " + this.cor)
    }
    //método
 info(){
        console.log("Marca:....... " + this.marca)
        console.log("Modelo:....... " + this.modelo)
        console.log("Cor:..... " + this.cor)
        console.log("Ligado:...... " +(this.ligado ?  "Sim" : "Não"))
         console.log("KM:...... " + this.km)
          console.log("Combustivel:...... " + this.comb)
          console.log("Alerta:...... " + (Carro.alerta ? "Sim" : "Não"))
          console.log("-----------------------")
    }

    ligar(){
        this.ligado=true
    }
    desligar(){
        this.logado=false
    }
    setAlerta(t){
        Carro.alerta = t
    }
   set setComb(v){
        this.comb=v
        console.log("combustivel alterado: " + this.comb)
    }
    get getComb(){
        return this.comb
    }
  
}

var c1 = new Carro("Honda","HRV","Vermelho")
var c2 = new Carro("GM","Camaro","Preto")
var c3 = new Carro("Audi","A3","Azul")
var c4 = new Carro("Volvo","C35","Amarelo")
console.log("-----------------------")

c1.setComb = 50
console.log(c1.getComb)
c1.cor="Preto"
c2.cor="Branco"
c3.cor="verde"
c4.cor="Amarelo"

c1.ligar()
//c1.setAlerta(false)
Carro.alerta=false
c1.info()
c2.info()
c3.info()
c4.info()