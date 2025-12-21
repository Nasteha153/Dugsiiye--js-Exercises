// spread operator
let numbers=[1,2,3]
let newNumbers=[...numbers,4,5,6]
console.log(newNumbers)


// Rest operator
function multiply(...numbers){
    product=numbers.reduce((multiply,num)=>multiply*num,1)
    console.log(product)
}
multiply(10,20)