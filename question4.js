// 4. Write a program that reverses the order of words in a sentence but keeps the words intact. Example: Input: "JavaScript is fun" Output: "fun is JavaScript"

function reverseString(str) {

    let stringArray = str.split(' ');
    let reversedString = stringArray.reverse().join(" ");
    return reversedString
}


const string = prompt('Enter a string: ');

console.log(reverseString(string));