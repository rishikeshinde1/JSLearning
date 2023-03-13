console.log(`---------- #1 Count Number of vowels available in String ---------------`);

var vowelsCount = function (str) {

    var count = 0;
    //var char = "";
    for (let index = 0; index < str.length; index++) {
        var char = str[index];

        if (char == "a" || char == "A" || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U') {
            count = count + 1;
        }
    }
    return count;
}
var result = vowelsCount("Javascript is the language of Internet");
var result1 = vowelsCount("I am Angular developer");
var result2 = vowelsCount("Hard work and commitment are key of Success");

console.log(`Count of vowels in the String are: ${result}`);
console.log(`Count of vowels in the String are: ${result1}`);
console.log(`Count of vowels in the String are: ${result2}`);

console.log(`---------- #2 Count of Last word character ---------------`);

var lastWordCharsCount = function(str1){
var newStr = "";
    for (let index = str1.length; index > 0; index--) {
        
        char = str1.charAt(index);
        if(char == " "){
            break;
        }
        newStr = newStr + char;
    }
    //console.log(newStr);
    return newStr.length;

}
var result = lastWordCharsCount("Javascript is the language of Internet");
var result1 = lastWordCharsCount("I am Angular developer");
var result2 = lastWordCharsCount("Hard work and commitment are key of Success");


console.log(`Total characters available in the Last word are: ${result}`);
console.log(`Total characters available in the Last word are: ${result1}`);
console.log(`Total characters available in the Last word are: ${result2}`);
