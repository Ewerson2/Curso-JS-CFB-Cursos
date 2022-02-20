class Carro {
    static Alerta = true
    constructor(tpCarro, tpComb) {
        this.tipo = tpCarro //1-passeio 2-transporte 3-combate
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb //1-gasolina //2-diesel //3-etanol


        //console.log("Ola, sou um novo carro: " + this.cor)
    }
    //método
    info() {
        console.log("Qtde Combus:....... " + this.qtdeComb)
        console.log("Ligado:....... " + (this.ligado ? "Sim" : "Não"))
        console.log("Tipo Combus:..... " + this.tipoComb)

        if (this.tipo == 1) {
            console.log("tipo Carro: Passeio")
        } else if (this.tipo == 2) {
            console.log("tipo carro: Transporte")
        } else {
            console.log("Tipo de carro: Combate")
        }


    }

    set setLigado(t) {
        this.ligado = t
    }
    get getligado() {
        return this.ligado
    }

    set setComb(v) {
        if (v < 0 || v > 100) {
            alert("valor invalido")
        } else {
            this.qtdecomb = v

        }

    }

    get getComb() {
        return this.qtdComb
    }

}

class CarroCombate extends Carro {

    constructor(potTiro) {
        super(3, 2)
        this.tiros = 1000
        this.potTiro = potTiro
        this.blindagem = 100
    }
    info() {
        super.info()
        console.log("Qtde Tiros..: " + this.tiros)
        console.log("Pot Tiro..: " + this.potTiro)
        console.log("Blindagem..: " + this.blindagem)
        console.log("-------------------------------")

    }
}

class CarroTransporte extends Carro {
    constructor() {
        super(2, 2)
    }
    info(){
        super.info()
    console.log("-------------------------------")
    }
}


    class CarroPasseio extends Carro{
        constructor(){
            super(1,3)
            this.blindagem = 75
        }
        info() {
            super.info()
            console.log("Qtde lugares..: " + 7)
            console.log("Ar condicionado.: " +  true)
            console.log("Blindagem..: " + this.blindagem)
            console.log("-------------------------------")
    
        }
    }

var c1 = new CarroCombate(100)
var c2 = new CarroTransporte()
var c3 = new CarroPasseio()
c1.setLigado = true
c1.info()
c2.info()
c3.info()
