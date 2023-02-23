console.log(`*******************************#1 - Greater Number********************************`);

function greaterNumber(num1, num2){
var result = num1 >= num2?`Greater number is ${num1}`:`Greater number is ${num2}`;
console.log(result);
}


greaterNumber(10, -10);
greaterNumber(899, 800);

console.log(`*******************************#2 - Even Odd ********************************`);

function isEvenOrOddNum(number){
var res = number%2 == 0? `Given number - ${number} is Even Number`:`Given number - ${number} is Odd Number`;
return res;
}

var finalRes = isEvenOrOddNum(29);
console.log(finalRes);
finalRes = isEvenOrOddNum(44);
console.log(finalRes);
finalRes = isEvenOrOddNum(0);
console.log(finalRes);
finalRes = isEvenOrOddNum(101);
console.log(finalRes);

console.log(`*******************************#3 - Wordlength ********************************`);
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD"; return result; 
}
var result = wordLength("JavaScript");
console.log(`Word "JavaScript" has ${result} length` ); 
var result1 = wordLength("developer");
console.log(`Word "developer" has ${result1} length` ); 
var result2 = wordLength("Google");
console.log(`Word "Google" has ${result2} length` ); 


// var result = wordLength("Google"); console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

