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

var result = countVovels("I love my India");
console.log(`number of vowels in the string are ${result}`);
