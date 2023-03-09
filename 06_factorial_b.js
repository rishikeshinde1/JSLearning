console.log("====Factorial of numbers===");

function factorialofNum(num){
    if(num == null || num == undefined || num == "string" || num == NaN){
        console.log(`Provided value ${num} is not a number`);
    }
    else{
        fact = 1;

    for (let index = num; index > 0; index--) {
        fact = fact * index; 
    }
    return result = fact;
    }
    
}

let factofNum5 = factorialofNum(5);
console.log(`Factorial of number 5 is ${factofNum5}`);
let factofNum3 = factorialofNum(3);
console.log(`Factorial of number 3 is ${factofNum3}`);
let factofNumnull = factorialofNum(null);
console.log(`Factorial of number null is ${factofNumnull}`);
let factofNum8 = factorialofNum(8);
console.log(`Factorial of number 8 is ${factofNum8}`);
let factofNumundefined = factorialofNum(undefined);
console.log(`Factorial of number undefined is ${factofNumundefined}`);
let factofNum9 = factorialofNum(9);
console.log(`Factorial of number 9 is ${factofNum9}`);
let factofNum0 = factorialofNum(0);
console.log(`Factorial of number 0 is ${factofNum0}`);