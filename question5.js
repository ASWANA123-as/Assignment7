//Write a program to check if a given sentence is a pangram (contains every letter from A-Z). Example: Input: "The quick brown fox jumps over the lazy dog" Output: "It is a pangram"
function isPangram(str){
      const regex = /([a-z])(?!.*\1)/g;
    return (str.toLowerCase().match(regex) || []).length === 26;}
    
const string = prompt('Enter a string: ');

console.log(isPangram(string)?'Your string is a pangram' :'your string is not a pangram');