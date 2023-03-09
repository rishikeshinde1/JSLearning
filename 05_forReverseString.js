console.log();

var reverseString = function (str) {
  var reverse = "";
  for (var index = str.length - 1; index >= 0; index--) {
    var charAt = str.charAt(index);
    reverse = reverse + charAt;
  }
  return reverse;
};
var result = reverseString(" JS the language of Internet ");
console.log(`Reverse of the string ${result}`);

var reverseString = function (str) {
  var reverse = ""; // wo
  for (let index = str.length - 1; index >= 0; index--) {
    // 9
    var charAt = str.charAt(index);
    reverse = reverse + charAt; // "w"+"o" ==> "wo"
  }
  return reverse;
};
var result = reverseString("Do it anyhow");
console.log(`Reverse String is: ${result}`);

//
console.log(`--------To reverse last word of string---------`);

var reserveLastWord = function (str) {
  var reverse = ""; // wohyna
  for (let index = str.length - 1; index >= 0; index--) {
    var char = str.charAt(index); // o
    if (char == " ") {
      break;
    }
    reverse = reverse + char; // "w"+"o" ==> "wo"
  }
  return reverse;
};
var result = reserveLastWord("Do it anyhow");
console.log(`Reverse last word : ${result}`);

//"I am Angular  champ"
var strOperation = function (str) {
  var newString = "";
  for (let index = 0; index <= str.length; index++) {
    console.log(str.length);
    char = str.charAt(index);
    newString = newString + char;
  }
  return newString;
};

var string = strOperation("I am Angular  champ");
console.log("string is: ", string);

// "I am Angular  champ"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index);
  if (char == " ") {
    count = count + 1;
  }
}
console.log("Total number of spaces is: ", count);
