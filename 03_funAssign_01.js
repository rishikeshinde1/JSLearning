console.log('***---#1 Function without argument and no return values---***');

var num1 = 50;
var num2 = 10;

function multiply(){
    console.log('num1 is :', num1, 'num2 is:',num2);
    var multiplication = num1 * num2;
    console.log('Multiplication of num1 and num2 is:', multiplication);
}
function devide(){
    console.log('num1 is :', num1, 'num2 is:',num2);
    var devision = num1 / num2;
    console.log('Division of num1 and num2 is:', devision);
}

multiply();
devide();

console.log('***---#2 Function with argument and no return values ---***');

function personalDetails(firstName, lastName, collegeName){
    console.log('My First Name is :', firstName);
    console.log('My Last Name is :', lastName);
    console.log('My college name is :', collegeName);
}

personalDetails('Rishikesh', 'Shinde', 'SCOEM-Satara');

console.log('***---#3 Swap Function with argument and no return values ---***');

// var dude1 = 'Virat';
// var dude2 = 'Anushka';

function swapValuesDude(dude1, dude2){
  console.log('before swap values of dude1 is:', dude1);  
  console.log('before swap values of dude2 is:', dude2);  

  var temp = dude1;
  dude1 = dude2;
  dude2 = temp;

  console.log('After swap values of dude1 is:', dude1);  
  console.log('After swap values of dude2 is:', dude2);  
}

swapValuesDude('Virat', 'Anushka');
swapValuesDude(1000, 2000);


console.log('***---#4 Addition of three values with 3 argument and return values ---***');

function addThreevalues(val1, val2, val3){
    var add = val1 + val2 + val3;
    return add;
}

var result = addThreevalues(10.23, 600, 40);
var result1 = addThreevalues('Hello ', 'Good ', 'Morning');

console.log('Addition of three numbers is:', result);
console.log('Addition of three numbers is:', result1);