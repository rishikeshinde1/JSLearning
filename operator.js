console.log(`************Arithmatic opertor***********`);
var num1 = 10;
var num2 = 2;
var addition = num1 + num2;

console.log(`Addition is ${addition}`);
var substraction = num1 - num2;
console.log(`Substraction is ${substraction}`);
var multiplication = num1 * num2;
console.log(`Multiplication is ${multiplication}`);
var devision = num1 / num2;
console.log(`Division is ${devision}`);

var exponetial = num1**num2;

console.log(`Exponetial is: ${exponetial}`);

var exponetial = num1**num2;

console.log(`Exponetial is: ${exponetial}`);


result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(` Division is ${result} `);

 result = num1 % 3; // Modulus
 console.log(` Reminder is ${result} `);

 var num = 10; //compound addition +=

 num+=20; //


 //turnary opertor

 var marks = 70;

 var result = marks >= 60 ? "Allow to enter" : "Do not Allow";

 console.log(result);

 var age = 20;

 var res = age >= 21 ? true : false;

 console.log(res);

 var number = 7;

 var checkEvenOdd = number%2 == 0 ? "Even Number" : "Odd Number";

 console.log(checkEvenOdd);


 function wordLength(word){

 }

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);