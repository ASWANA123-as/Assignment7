//3. Write a program that counts the number of words in a given sentence. Example: Input: "Hello world, how are you?" Output: 5 words

let string =prompt('Enter your string');
function findNumberOfWords(){
     string=string.trim();
   let wordArray=string.split(' ');
   return wordArray.length
}

console.log(findNumberOfWords());