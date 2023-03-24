const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`-------------------------------------------------------`);
console.log(`=====#1. Numbers greater than 50 ====`);
let greaterThan50 = arrayNumber.filter(element => element > 50);
console.log(`Numbers greater than 50 are : ${greaterThan50}`);

console.log(`-------------------------------------------------------`);
console.log(`=====#2. Find all even Numbers ====`);

let evenNumbers = arrayNumber.filter(element =>  element%2 == 0);
console.log(`EVEN numbers from array : ${evenNumbers}`);

console.log(`-------------------------------------------------------`);
console.log(`=====#3. Find all even Numbers ====`);

let oddNumbers = arrayNumber.filter(element =>  element%2 != 0);
console.log(`ODD numbers from array : ${oddNumbers}`);

console.log(`-------------------------------------------------------`);
console.log(`=====#4. Find all numbers multiple of 5 ====`);

let multipleOf5 = arrayNumber.filter(element =>  element%5 == 0);
console.log(`EVEN numbers from array : ${multipleOf5}`);

console.log(`-------------------------------------------------------`);
console.log(`=====#5. Find all numbers between 20 and 50 ====`);

let numbersB20N50 = arrayNumber.filter(element =>  element >= 20 && element >= 50);
console.log(`EVEN numbers from array : ${numbersB20N50}`);