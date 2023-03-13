function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if(num% index == 0){
            return false
        }
        
    }
    return true;
}

//let res = 
console.log(`Is 7 a prime number: ${isPrimeNumber(7)} `);
console.log(`Is 6 a prime number: ${isPrimeNumber(6)} `);