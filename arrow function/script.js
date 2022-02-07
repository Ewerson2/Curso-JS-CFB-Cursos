//arrow function = função seta
const soma = (...num) => {
    let r = 0
    for(n of num)
    r+=n
    return r
}

const par = num =>{
    if(num%2 ==0)
    return false
    else
    return false
}

console.log(soma(2,3,5,3,5,7,8,9,52,20))
console.log(par(3)? "É par" : "Não é par")