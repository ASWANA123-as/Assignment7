let number=Number(prompt("Please enter your number "))
function product(){
    number=Math.abs(number)
    let product=1
    while(number>=1){

balance=(number%10);
product*=balance
number=Math.floor(number/10)
    }
    return product
}

console.log(product());