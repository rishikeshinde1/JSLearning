console.log(`=== #1 - Arrow function with no arguments ===`);
let greet = () => {
    console.log(`Good morning today is Monday`);
}
greet();

//2nd way in one line

// let greetM = () =>  console.log(`Good morning today is Monday`);

// greetM();

console.log(`-----------------------------------------------------------`);

console.log(`=== #2 - Arrow function with 3 arguments and no return value for multiplication ===`);

let multiply = (num1, num2, num3 = 1) => {
    console.log(`Multiplication of value ${num1}, ${num2} and ${num3} is ${num1 * num2 * num3}`);
} 

multiply(5,5,2);
multiply(10,4);

console.log(`-----------------------------------------------------------`);

console.log(`=== #3 - Arrow function with 5 arguments and return value for addition  ===`);

let addition = (a, b, c, d, e) => {
  let res = a + b + c + d + e;
  return res;
}

let result = addition(100, 100, 200, 349, 756);
console.log(`Addition of values is : ${result}`);
let result1 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of values is : ${result1}`);
