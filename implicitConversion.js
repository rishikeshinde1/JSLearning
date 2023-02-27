//numeric string used with + gives srting type

var result;

result = "3" + 2;
console.log(result); //32
console.log(`${typeof result} ${result}`); //number 4

result = "3" + true;
console.log(result); //3result

result = 3 + undefined;
console.log(result); //NaN

result = "3" + null;
console.log(result); //3null

//If boolean is used true is 1, false is 0

var result;

result = "4" - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

//numeric string used with - , / , * results number type

var result;

result = "4" - "2";
console.log(result); //2

result = "4" - 3;
console.log(result); //1

result = "4" * 2;
console.log(result); // 8

result = "4" / 2;
console.log(result); // 2

//Arithmatic operatiion of undefined with number, boolean or null gives NaN

var result;

result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN

//string to number

var result;
result = Number("324");
console.log(typeof result); //NUmber
console.log(result); //324

result = Number("324e-1");
console.log(result); //32.4

//boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// if the string is invalid number, the result will be NaN

var result;

result = Number("hello");
console.log(result); //NaN

result = Number(undefined);
console.log(result); //NaN

result = Number(NaN);
console.log(result); // NaN

console.log(typeof result); // number

//Explicit conversion string to number using + operator

var result;
result = "400";
console.log(typeof result);

result1 = +result;
console.log(typeof result1);

//Explicit conversion number to using toString() method

var myNumber = 100;
console.log(typeof myNumber);

var myString = myNumber.toString();
console.log(typeof myString);
