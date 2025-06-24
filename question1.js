// 1. Write a program to count the number of digits in a given number. Example: Input: num = 98765 Output: 5 

let number=Number(prompt("Please enter your number "))
function count(){
    number=Math.abs(number)
    let count=0;
    while(number>=1){
count++
number=(number/10)
    }
    return count 
}

console.log(count());


