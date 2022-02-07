var num =[1,2,5,36,85]
var it = num[Symbol.iterator]()
var tam = num.length
console.log(tam)
for(var i=0;i<num.length;i++){
    var v=it.next().value
    if(v%2 > 0){
        console.log("impar")
    }else{
        console.log("par")
    }
}

// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)