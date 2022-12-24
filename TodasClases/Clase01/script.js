let total = 0
function suma(num1, num2){
    total = total + num1 + num2
    return total
}

//console.log(suma(1,2))

const factorialr = (num)=>{
    if(num === 1) return 1
    return num * factorialr(num-1)
}

console.log(factorialr(5))