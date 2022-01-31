function soma(...num){
    let res = 0
    let qtde = num.length
    for(let i=0;i<qtde;i++){
        res+=num[i]
    }
    return res
}

console.log(soma(80,8,52))
