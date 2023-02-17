console.log('-----------------------------------------------------------------------------');
console.log('************#1 - Swap Two Variables*************');
var name1 = 'Sweety';
var name2 = 'Cutie';

console.log('Name 1 is:', name1, 'Type of name 1 is:', typeof(name1));
console.log('Name 2 is:', name2, 'Type of name 2 is:', typeof(name2));

var temp = name1;
console.log('temp value is:', temp);

var name1 = name2;
var name2 = temp;

console.log('Name 1 is:', name1);
console.log('Name 2 is:', name2);

console.log('-----------------------------------------------------------------------------');
console.log('************#2 - Swap Three Variables*************');
var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log('Num 1 is:', num1, 'Type of num 1 is:', typeof(num1));
console.log('Num 2 is:', num2, 'Type of num 2 is:', typeof(num2));
console.log('Num 3 is:', num3, 'Type of num 3 is:', typeof(num3));

var temp1
temp1 = num1;
num1 = num2;
num2 = num3;
num3 = temp1;

console.log('Num 1 is:', num1, 'Type of num 1 is:', typeof(num1));
console.log('Num 2 is:', num2, 'Type of num 2 is:', typeof(num2));
console.log('Num 3 is:', num3, 'Type of num 3 is:', typeof(num3));

