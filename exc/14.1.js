// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average

function reduceSumEven (numbers){
    return  numbers.reduce((p,c)=>{c%2===0? p+c : p},0)
}

function avg(numbers){
    const sum = numbers.reduce((p,c)=>{p+c},0)
    return sum / numbers.length 
}