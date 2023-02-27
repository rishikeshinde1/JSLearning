// function without arguments and no return value
function showFullname() {
  console.log("My full name is :Rishikesh Shinde");
}

showFullname(); //function call or invoke

// function with arguments and no return value

function showAge(age) {
  console.log("My age is:", age);
}
showAge(32);

// function without arguments and return value

function fullName() {
  var name = "Rishikesh Shinde";
  return name;
}

var fName = fullName();
console.log(fName);

// function with arguments and return value

function sumOfNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}

var sumResult = sumOfNumbers(10.23, 45, 79);
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1 = "Bill Gates";
var name2 = "Steve Jobs";

function swapVariables(var1, var2, temp) {
  console.log("before swap ", var1, var2);
  temp = var1;
  var1 = var2;
  var2 = temp;
  console.log("After swap: ", var1, var2);
  return "swapping variables successfully completed";
}
var swapResult1 = swapVariables(num1, num2);
console.log(swapResult1);
var swapResult2 = swapVariables(str1, str2);
console.log(swapResult2);
var swapResult3 = swapVariables(name1, name2);
console.log(swapResult3);
