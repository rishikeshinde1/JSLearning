function squareOfWordLength(word){

var lengthOfWords = word.length;

console.log(`**************************#1********************************`);
console.log(``);
console.log(`Length of the word - "${word}" is ${lengthOfWords}`);
console.log(`Square of the word - "${word}" is: ${lengthOfWords*2}`);
console.log(``);



return lengthOfWords;
}

squareOfWordLength('Javascript');
squareOfWordLength('Google Chrome');
squareOfWordLength('Developer Smart');


console.log(`**************************#2********************************`);

function strLengthDevide(){
    var newString = 'I am Angular developer';
    console.log(`given string is - "${newString}"`);

    var newStringLength = newString.length;
    var charSplit = newString.split(" ");
    console.log(`removal of space ${charSplit}`);
    var charCount = charSplit.length;
    var devision = newStringLength / charCount;
    var multiplication = newStringLength * charCount;
    console.log(`Division of ${newStringLength} and ${charCount} is ${devision}`);
    console.log(`Multiplication of ${newStringLength} and ${charCount} is ${multiplication}`);


}
strLengthDevide();
