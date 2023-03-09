console.log(`--------------Find the vowels in character-------------`);

var countVovels = function (str) {
  var count = 0;
  for (let index = 0; index < str.length; index++) {
    var char = str[index];
    if (
      char == "a" ||
      char == "A" ||
      char == "e" ||
      char == "E" ||
      char == "i" ||
      char == "I" ||
      char == "o" ||
      char == "O" ||
      char == "u" ||
      char == "U"
    ) {
      count = count + 1;
    }
  }
  return count;
};

var result = countVovels("Javascript is the language of internet");
console.log(`number of vowels in the string are ${result}`);

var result = countVovels("I am angular developer");
console.log(`number of vowels in the string are ${result}`);

var result = countVovels("Hardwork and commitment is the key off success");
console.log(`number of vowels in the string are ${result}`);


function lastWordCharscount(str){

var words = str.split(" ");

var lastWord = words[words.length - 1];
console.log(lastWord);
console.log(lastWord.length);
return charCount = lastWord.length;
}

var result = lastWordCharscount("Javascript is the language of internet");
console.log(`total number of character available in last word : ${result}`);

var result = lastWordCharscount("I am angular developer");
console.log(`total number of character available in last word : ${result}`);

var result = lastWordCharscount("Hardwork and commitment is the key off success");
console.log(`total number of character available in last word : ${result}`);


