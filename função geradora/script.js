// function* cores(){
//     yield 'vermelho'
//     yield 'verde'
//     yield 'azul'
//     yield 'amarelo'
//     yield 'roxo'
//     yield 'preto'
//     yield 'branco'
// }

// const c = cores()

// console.log(c.next())


function* cont(n){
    let c = 0
    while(c<n){
        console.log(c)
        c++
    }
}

const ct = cont(10)

console.log(ct.next())