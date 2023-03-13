console.log(`------#1 Factorial of number------`);

let factorialOfNum = function (num) {
    if (num == null || num == undefined || num == NaN) {
        console.log(`Given value ${num} is not a number`);
    }
    else{
    
    let fact = 1;
    //let result;
    for (let index = num; index > 0; index--) {
        fact = fact * index;
        
        //num = index;
        
    }
    return fact;
}
    
}
var factNum = factorialOfNum(10);
console.log(`Factorial of number is ${factNum}`);
var factNum = factorialOfNum(3);
console.log(`Factorial of number is ${factNum}`);
var factNum = factorialOfNum(null);
console.log(`Factorial of number is ${factNum}`);